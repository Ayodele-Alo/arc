import index from './views/index.vue';
import createForm from './views/createForm.vue'


export default [
  {
    path: '/data-entry',
    component: index,
    meta: {
      requiresAuth: false,
    },
    children: [
        {
          path: 'create',
          meta: {
            requiresAuth: false,
          },
          component: createForm,
        },
    ]
  },
];
