/**
 * Utility function to seed translations
 * Can be called from bootstrap or manually
 */

import * as fs from 'fs';
import * as path from 'path';

// Load translation data from JSON file
let translationData: any[] = [];
try {
  const dataPath = path.join(__dirname, '../../data/translation-data.json');
  const dataContent = fs.readFileSync(dataPath, 'utf-8');
  translationData = JSON.parse(dataContent);
} catch (error: any) {
  console.warn('Could not load translation data from JSON file:', error.message);
  // Fallback: try to load from seed script
  try {
    const seedModule = require('../../scripts/seed-translations.js');
    translationData = seedModule.translationData || [];
  } catch (fallbackError) {
    console.error('Could not load translation data from any source');
  }
}

/**
 * Seed translations - only creates missing entries, never deletes or overwrites existing data
 * @param strapi - Strapi instance
 * @param options - Options for seeding behavior
 * @param options.updateExisting - If true, updates existing translations (default: false to preserve manual changes)
 */
export async function seedTranslations(strapi: any, options: { updateExisting?: boolean } = {}) {
  try {
    const { updateExisting = false } = options;
    strapi.log.info(`Starting translation seeding... (updateExisting: ${updateExisting})`);

    let created = 0;
    let skipped = 0;
    let updated = 0;
    let errors = 0;

    for (const { key, namespace, translations: trans } of translationData) {
      try {
        // Check if entry already exists
        const existing = await strapi.entityService.findMany('api::translation.translation', {
          filters: {
            key,
            namespace,
          },
        });

        // Prepare data with all language values
        const translationEntry = {
          key,
          namespace,
          value_az: trans.az || '',
          value_en: trans.en || '',
          value_ru: trans.ru || '',
          value_tr: trans.tr || '',
          value_de: trans.de || '',
          publishedAt: new Date(),
        };

        if (existing.length === 0) {
          // Create new entry - only if it doesn't exist
          const createdEntry = await strapi.entityService.create('api::translation.translation', {
            data: translationEntry,
          });
          // Publish the entry
          try {
            await strapi.documents('api::translation.translation').publish({ id: createdEntry.id });
          } catch (publishError) {
            // If document service doesn't work, try setting publishedAt directly
            await strapi.entityService.update('api::translation.translation', createdEntry.id, {
              data: { publishedAt: new Date() },
            });
          }
          created++;
        } else {
          // Entry exists - only update if explicitly requested
          if (updateExisting) {
            await strapi.entityService.update('api::translation.translation', existing[0].id, {
              data: translationEntry,
            });
            // Ensure it's published
            try {
              await strapi.documents('api::translation.translation').publish({ id: existing[0].id });
            } catch (publishError) {
              await strapi.entityService.update('api::translation.translation', existing[0].id, {
                data: { publishedAt: new Date() },
              });
            }
            updated++;
          } else {
            // Skip existing entries to preserve manual changes
            skipped++;
          }
        }
      } catch (error: any) {
        strapi.log.error(`Error processing ${namespace}.${key}:`, error.message);
        errors++;
      }
    }

    strapi.log.info(
      `Translation seeding completed: ${created} created, ${skipped} skipped (preserved), ${updated} updated, ${errors} errors`
    );
    return { created, skipped, updated, errors };
  } catch (error: any) {
    strapi.log.error('Translation seeding failed:', error);
    throw error;
  }
}

