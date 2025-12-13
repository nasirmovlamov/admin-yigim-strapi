import type { Core } from '@strapi/strapi';
import { seedTranslations } from './utils/seedTranslations';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Auto-seed translations on startup
    // This will ONLY create missing translations - it will NOT overwrite existing data
    // This preserves any manual changes or new translations added through the admin panel
    
    // Wait a bit to ensure database is fully connected
    // This is especially important for Strapi Cloud deployments
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      strapi.log.info('=== Starting translation seeding on bootstrap ===');
      
      // Verify database connection
      if (!strapi.db) {
        strapi.log.warn('Database connection not available yet, waiting...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
      const result = await seedTranslations(strapi, { updateExisting: false });
      
      if (result.errors > 0) {
        strapi.log.warn(
          `Translation seeding completed with ${result.errors} errors: ${result.created} created, ${result.skipped} preserved, ${result.updated} updated`
        );
      } else if (result.created > 0) {
        strapi.log.info(
          `✓ Translation seeding successful: ${result.created} created, ${result.skipped} preserved (existing entries not modified)`
        );
      } else if (result.skipped > 0) {
        strapi.log.info(`✓ All translations exist. ${result.skipped} entries preserved (not modified).`);
      } else {
        strapi.log.warn('No translations were processed. This might indicate a problem with data loading.');
      }
      
      strapi.log.info('=== Translation seeding completed ===');
    } catch (error: any) {
      // Don't crash the app if seeding fails, but log the full error
      strapi.log.error('✗ Failed to seed translations on bootstrap');
      strapi.log.error('Error details:', error);
      if (error.stack) {
        strapi.log.error('Stack trace:', error.stack);
      }
      // Re-throw in development to help debugging, but catch in production
      if (process.env.NODE_ENV === 'development') {
        throw error;
      }
    }
  },
};
