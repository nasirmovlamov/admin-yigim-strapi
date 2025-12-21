/**
 * Delete all translation entries
 * Run with: node scripts/delete-all-translations.js
 */

async function deleteAllTranslations() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  console.log('Compiling Strapi...');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';

  console.log('Deleting all translations...\n');

  try {
    // Get all translations
    const allTranslations = await app.entityService.findMany('api::translation.translation', {
      filters: {},
    });

    console.log(`Found ${allTranslations.length} translation entries to delete...`);

    let deleted = 0;
    let errors = 0;

    for (const translation of allTranslations) {
      try {
        await app.entityService.delete('api::translation.translation', translation.id);
        console.log(`✓ Deleted: ${translation.namespace}.${translation.key} (ID: ${translation.id})`);
        deleted++;
      } catch (error) {
        console.error(`✗ Error deleting ${translation.namespace}.${translation.key} (ID: ${translation.id}):`, error.message);
        errors++;
      }
    }

    console.log(`\n=== Summary ===`);
    console.log(`Deleted: ${deleted}`);
    console.log(`Errors: ${errors}`);
    console.log(`Total: ${allTranslations.length}`);
    console.log('\nAll translations deleted!');

  } catch (error) {
    console.error('Error:', error);
  }

  await app.destroy();
  process.exit(0);
}

deleteAllTranslations().catch((error) => {
  console.error('Deletion failed:', error);
  process.exit(1);
});




