export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': [
            "'self'",
            'http://localhost:3000',
            'http://localhost:3001',
            'https://yigim-dashboard-fe.vercel.app',
            'https://portal.yigim.az',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000', 
        'http://localhost:3001',
        'https://yigim-dashboard-fe.vercel.app', // Production frontend on Vercel
        'https://portal.yigim.az', // Portal frontend
      ],
      headers: [
        'Content-Type',
        'Authorization',
        'Origin',
        'Accept',
        'X-Sid',
        'X-Requested-With',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
