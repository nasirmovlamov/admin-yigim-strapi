/**
 * Utility function to seed translations
 * Can be called from bootstrap or manually
 */

import * as fs from 'fs';
import * as path from 'path';

/**
 * Load translation data with multiple fallback strategies
 * This function tries multiple paths to find the translation data
 * to work in both local development and Strapi Cloud deployments
 */
function loadTranslationData(): any[] {
  // Strategy 1: Try to load from JSON file (multiple possible paths)
  const possibleJsonPaths = [
    path.join(process.cwd(), 'data', 'translation-data.json'),
    path.join(process.cwd(), 'admin-yigim-strapi', 'data', 'translation-data.json'),
    path.resolve(process.cwd(), 'data', 'translation-data.json'),
    path.resolve(process.cwd(), 'admin-yigim-strapi', 'data', 'translation-data.json'),
  ];

  for (const jsonPath of possibleJsonPaths) {
    try {
      if (fs.existsSync(jsonPath)) {
        const dataContent = fs.readFileSync(jsonPath, 'utf-8');
        const parsed = JSON.parse(dataContent);
        if (Array.isArray(parsed) && parsed.length > 0) {
          console.log(`✓ Loaded ${parsed.length} translations from: ${jsonPath}`);
          return parsed;
        }
      }
    } catch (error: any) {
      // Continue to next path
    }
  }

  // Strategy 2: Try to load from seed script using require (works in compiled code)
  const possibleScriptPaths = [
    path.join(process.cwd(), 'scripts', 'seed-translations.js'),
    path.join(process.cwd(), 'admin-yigim-strapi', 'scripts', 'seed-translations.js'),
    path.resolve(process.cwd(), 'scripts', 'seed-translations.js'),
    path.resolve(process.cwd(), 'admin-yigim-strapi', 'scripts', 'seed-translations.js'),
  ];

  for (const scriptPath of possibleScriptPaths) {
    try {
      if (fs.existsSync(scriptPath)) {
        // Clear require cache to ensure fresh load
        try {
          const resolvedPath = require.resolve(scriptPath);
          if (require.cache[resolvedPath]) {
            delete require.cache[resolvedPath];
          }
        } catch (resolveError) {
          // If resolve fails, continue anyway with direct require
        }
        const seedModule = require(scriptPath);
        if (seedModule && seedModule.translationData && Array.isArray(seedModule.translationData) && seedModule.translationData.length > 0) {
          console.log(`✓ Loaded ${seedModule.translationData.length} translations from: ${scriptPath}`);
          return seedModule.translationData;
        }
      }
    } catch (error: any) {
      // Continue to next path
    }
  }

  // Strategy 3: Try require with just the module name (if it's in node_modules or root)
  try {
    const seedModule = require('./../../scripts/seed-translations.js');
    if (seedModule && seedModule.translationData && Array.isArray(seedModule.translationData) && seedModule.translationData.length > 0) {
      console.log(`✓ Loaded translations via relative require`);
      return seedModule.translationData;
    }
  } catch (error) {
    // Ignore - this is expected to fail in some environments
  }

  console.error('✗ Could not load translation data from any source');
  return [];
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

    // Load translation data dynamically
    const translationData = loadTranslationData();
    
    if (!translationData || translationData.length === 0) {
      strapi.log.error('No translation data found! Cannot seed translations.');
      return { created: 0, skipped: 0, updated: 0, errors: 1 };
    }

    strapi.log.info(`Loaded ${translationData.length} translation entries to process`);

    // Verify entityService is available
    if (!strapi.entityService) {
      strapi.log.error('EntityService is not available. Database may not be connected yet.');
      return { created: 0, skipped: 0, updated: 0, errors: 1 };
    }

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

