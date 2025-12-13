/**
 * translation router.
 */

import { factories } from '@strapi/strapi';

const defaultRouter = factories.createCoreRouter('api::translation.translation', {
  config: {
    find: {
      middlewares: [],
    },
    findOne: {
      middlewares: [],
    },
    create: {
      middlewares: [],
    },
    update: {
      middlewares: [],
    },
    delete: {
      middlewares: [],
    },
  },
});

export default {
  get routes() {
    const defaultRoutes = typeof defaultRouter.routes === 'function' 
      ? defaultRouter.routes() 
      : defaultRouter.routes;
    
    return [
      ...defaultRoutes,
      {
        method: 'GET',
        path: '/translations/locale/:locale',
        handler: 'api::translation.translation.findByLocale',
        config: {
          auth: false,
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'GET',
        path: '/translations/all',
        handler: 'api::translation.translation.getAll',
        config: {
          auth: false,
          policies: [],
          middlewares: [],
        },
      },
    ];
  },
};

