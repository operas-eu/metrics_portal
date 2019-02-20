export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        component: './Home/Home',
      },
      {
        path: '/:source/:type/:version',
        component: './Measures/Measure',
      },
      {
        path: '/measures',
        icon: 'area-chart',
        name: 'measures',
        component: './Measures/List',
      },
      {
        path: '/principles',
        name: 'principles',
        icon: 'heart',
        component: './Principles/Principles',
      },
      {
        path: '/docs',
        name: 'documentation',
        icon: 'read',
        hideChildrenInMenu: true,
        routes: [
          { path: '/docs', redirect: '/docs/getting-started' },
          { path: '/docs/:doc?', component: './Docs/Docs' }
        ]
      },
      {
        path: '/exception',
        hideChildrenInMenu: true,
        hideInMenu: true,
        routes: [
          // exception
          {
            path: '/exception/403',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            component: './Exception/500',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
