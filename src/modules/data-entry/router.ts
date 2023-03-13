import index from "./views/index.vue";
import annualHome from "./views/annual-performance/annualHome.vue";
import annualCreateForm from "./views/annual-performance/createForm.vue";

// human resource
import humanHome from "./views/human-resource/humanHome.vue";
import humanCreateForm from "./views/human-resource/createForm.vue";

// Policy engagement
import policyHome from "./views/policy-engagement/policyHome.vue";
import policyCreateForm from "./views/policy-engagement/createForm.vue";

// no format
import EmptyForm from "./views/EmptyForm.vue";

export default [
  {
    path: "/data-entry",
    component: index,
    meta: {
      requiresAuth: false,
      description:
      "The APHRC dashboard is an interactive monitoring and evaluation (M&E) platform that provides real-time insights into the organization's programs and projects. The dashboard features a range of visualizations that allow users to easily track and analyze key performance indicators (KPIs) related to health, education, urbanization, and other development issues in sub-Saharan Africa. The M&E platform is designed to help APHRC staff and partners make data-driven decisions and improve the impact of their interventions",
    keywords:
      "Dashboard, Monitoring and evaluation, Real-time, Performance indicators, Health, Education, Urbanization, Development, Sub-Saharan, Africa, Data-driven, Impact, Programs, Projects, Visualization, Analytics, Decision-making, Partners, Interventions, KPIs",
    },
    children: [
      {
        path: "",
        alias: "home",
        component: EmptyForm,
        meta: {
          requiresAuth: false,
          transition: "slide-fade-up",
        },
      },
      {
        path: "annual-performance",
        meta: {
          requiresAuth: false,
          transition: "slide-fade-down",
        },
        component: annualHome,
        children: [
          {
            path: "create",
            meta: {
              requiresAuth: false,
              transition: "slide-fade-up",
            },
            component: annualCreateForm,
          },
        ],
      },
      {
        path: "human-resource",
        meta: {
          requiresAuth: false,
          transition: "slide-fade-down",
        },
        component: humanHome,
        children: [
          {
            path: "create",
            meta: {
              requiresAuth: false,
              transition: "slide-fade-right",
            },
            component: humanCreateForm,
          },
        ],
      },

      {
        path: "policy-engagement",
        meta: {
          requiresAuth: false,
          transition: "slide-fade-left",
        },
        component: policyHome,
        children: [
          {
            path: "create",
            meta: {
              requiresAuth: false,
              transition: "slide-fade-right",
            },
            component: policyCreateForm,
          },
        ],
      },

      {
        path: "research-related",
        meta: {
          requiresAuth: false,
          transition: "slide-fade-up",
        },
        component: EmptyForm,
      },

      {
        path: "publications",
        meta: {
          requiresAuth: false,
          transition: "slide-fade-right",
        },
        component: EmptyForm,
      },
    ],
  },
];
