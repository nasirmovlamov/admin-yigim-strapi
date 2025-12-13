/**
 * translation service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::translation.translation', ({ strapi }) => ({
  async validateUnique(key: string, namespace: string, excludeId?: number) {
    const filters: any = {
      key,
      namespace,
    };

    const existing = await strapi.entityService.findMany('api::translation.translation', {
      filters,
    });

    // If excludeId is provided, filter it out (for updates)
    const duplicates = excludeId 
      ? existing.filter((item: any) => item.id !== excludeId)
      : existing;

    if (duplicates.length > 0) {
      throw new Error(`Translation with key "${key}" and namespace "${namespace}" already exists`);
    }

    return true;
  },
}));

