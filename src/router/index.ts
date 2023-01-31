import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Form from "@/modules/dummy/Form.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: 'Home',
      description: 'hello World',
      keyword: 'M&E platform',
    }
  },
  {
    path: "/form",
    name: "form",
    component: Form,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: {
      title: '404',
      description: 'page not found',
      keyword: 'M&E platform',
    },
    component: () => import("@/components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

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
