import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { router as LANDING_PAGE_ROUTE } from "@/modules/homepage";
import { router as DASHBOARD_ROUTE } from "@/modules/dashboard";

const routes: Array<RouteRecordRaw> = [
  ...LANDING_PAGE_ROUTE,
  ...DASHBOARD_ROUTE,
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: {
      title: "404",
      description:
        "The APHRC dashboard is an interactive monitoring and evaluation (M&E) platform that provides real-time insights into the organization's programs and projects. The dashboard features a range of visualizations that allow users to easily track and analyze key performance indicators (KPIs) related to health, education, urbanization, and other development issues in sub-Saharan Africa. The M&E platform is designed to help APHRC staff and partners make data-driven decisions and improve the impact of their interventions",
      keywords:
        "Dashboard, Monitoring and evaluation, Real-time, Performance indicators, Health, Education, Urbanization, Development, Sub-Saharan, Africa, Data-driven, Impact, Programs, Projects, Visualization, Analytics, Decision-making, Partners, Interventions, KPIs",
    },
    component: () => import("@/components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0, behavior: "smooth" });
      }, 500);
    });
    // return { top: 0, behavior: "smooth" };
  },
});

// router.afterEach((to, from) => {
//   const toDepth = to.path.split('/').length
//   const fromDepth = from.path.split('/').length
//   to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
// })

router.beforeEach(async (to) => {
  // router.beforeEach(async (to, from, next) => {
  // ?? dynamically update page title by route or assign BHMIS as default
  document.title = to?.meta?.title ? `APHRC | ${to?.meta?.title}` : "APHRC";
  // ?? dynamically update page description by route
  if (to?.meta?.description) {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", to?.meta?.description as string);
  }
  // ?? dynamically update page keyword by route
  if (to?.meta?.keyword) {
    document
      .querySelector('meta[name="keyword"]')
      ?.setAttribute("content", to?.meta?.keyword as string);
  }
  //   // =========================================================================
  //   const isAuthenticated = store.getters["AUTH_STORE/isAuthenticated"];
  //   const requireAuth = to.matched.some((record) => record.meta.requiresAuth);
  //   const { authorize } = to.meta;
  //   const authorized = authorize as string[];
  //   const accountType = store.getters["AUTH_STORE/getAccountType"];
  //   const guest = to.matched.some((record) => record.meta.guest);

  //   if (isAuthenticated && accountType && to.path === "/auth/login") {
  //     switchDashboardByAccountType(accountType);
  //   }

  //   if (authorized?.length && !authorized.includes(accountType) && !guest) {
  //     Toast.error("You are not authorized to access this page");
  //     // return router.go(-1);
  //     return router.push("/auth/login");
  //   }

  //   if (!isAuthenticated && requireAuth) {
  //     if (guest) {
  //       next();
  //     } else {
  //       Toast.warning("Access Denied!, Please Login");
  //       next({
  //         path: "/auth/login",
  //       });
  //     }
  //   } else {
  //     // Happens only when you are logged in and route is authenticated
  //     next(); // make sure to always call next()!
  //   }
});

export default router;
