import index from './views/index.vue';
import annualHome from './views/annual-performance/annualHome.vue'
import annualCreateForm from './views/annual-performance/createForm.vue'

// human resource
import humanHome from './views/human-resource/humanHome.vue'
import humanCreateForm from './views/human-resource/createForm.vue'


export default [
  {
    path: '/data-entry',
    component: index,
    meta: {
      requiresAuth: false,
    },
    children: [
        {
          path: 'annual-performance',
          meta: {
            requiresAuth: false,
          },
          component: annualHome,
          children: [
            {
              path: 'create',
              meta: {
                requiresAuth: false,
              },
              component: annualCreateForm,
            },
          ]
        },
        {
          path: 'human-resource',
          meta: {
            requiresAuth: false,
          },
          component: humanHome,
          children: [
            {
              path: 'create',
              meta: {
                requiresAuth: false,
              },
              component: humanCreateForm,
            },
          ]
        },
    ]
  },
];
