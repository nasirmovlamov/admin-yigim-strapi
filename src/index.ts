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
    // This will create missing translations and update existing ones
    try {
      strapi.log.info('Checking and seeding translations...');
      const result = await seedTranslations(strapi);
      if (result.created > 0 || result.updated > 0) {
        strapi.log.info(`Translation seeding completed: ${result.created} created, ${result.updated} updated`);
      } else {
        strapi.log.info('All translations are up to date.');
      }
    } catch (error: any) {
      // Don't crash the app if seeding fails
      strapi.log.error('Failed to seed translations on bootstrap:', error);
    }
  },
};
