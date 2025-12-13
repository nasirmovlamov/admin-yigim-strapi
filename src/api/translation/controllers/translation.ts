/**
 * translation controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::translation.translation', ({ strapi }) => {
  return {
    async findByLocale(ctx) {
      const locale = ctx.params?.locale || ctx.query?.locale || 'az';
      const namespace = ctx.query?.namespace;
      
      try {
        const filters: any = {};
        
        if (namespace) {
          filters.namespace = namespace;
        }

        // Try to get published translations first, but also check unpublished if needed
        let translations = await strapi.entityService.findMany('api::translation.translation', {
          filters: {
            ...filters,
            publishedAt: { $notNull: true },
          },
          populate: '*',
        });

        // If no published translations found, try without publishedAt filter (for debugging)
        if (translations.length === 0) {
          strapi.log.warn(`[Translation API] No published translations found for locale: ${locale}. Checking all translations...`);
          translations = await strapi.entityService.findMany('api::translation.translation', {
            filters,
            populate: '*',
          });
          strapi.log.info(`[Translation API] Found ${translations.length} total translations (including unpublished)`);
        }

        // Log for debugging
        strapi.log.info(`[Translation API] Requested locale: ${locale}, Found ${translations.length} published translations`);

        // Transform to key-value pairs, using the appropriate locale field
        const translationMap: Record<string, string> = {};
        const localeField = `value_${locale}`;
        
        translations.forEach((translation: any) => {
          const fullKey = translation.namespace 
            ? `${translation.namespace}.${translation.key}` 
            : translation.key;
          
          // Get the value for the requested locale ONLY (no fallback to avoid showing wrong language)
          const value = translation[localeField];
          if (value && value.trim() !== '') {
            translationMap[fullKey] = value;
          } else {
            // Log missing translations for debugging
            strapi.log.warn(`[Translation API] Missing ${locale} translation for ${fullKey}`);
          }
        });

        // Log result
        if (Object.keys(translationMap).length === 0) {
          strapi.log.warn(`[Translation API] No translations found for locale: ${locale}. Run seed script: node scripts/seed-translations.js`);
        }

        ctx.body = translationMap;
      } catch (err) {
        strapi.log.error('[Translation API] Error in findByLocale:', err);
        ctx.throw(500, err);
      }
    },

    async getAll(ctx) {
      try {
        const translations = await strapi.entityService.findMany('api::translation.translation', {
          filters: {
            publishedAt: { $notNull: true },
          },
          populate: '*',
        });

        // Group by locale and namespace
        const grouped: Record<string, Record<string, Record<string, string>>> = {};
        const locales = ['az', 'en', 'ru', 'tr', 'de'];
        
        translations.forEach((translation: any) => {
          const { namespace, key } = translation;
          
          locales.forEach((locale) => {
            const localeField = `value_${locale}`;
            const value = translation[localeField];
            
            if (value) {
              if (!grouped[locale]) {
                grouped[locale] = {};
              }
              if (!grouped[locale][namespace || 'common']) {
                grouped[locale][namespace || 'common'] = {};
              }
              grouped[locale][namespace || 'common'][key] = value;
            }
          });
        });

        ctx.body = grouped;
      } catch (err) {
        ctx.throw(500, err);
      }
    },
  };
});

