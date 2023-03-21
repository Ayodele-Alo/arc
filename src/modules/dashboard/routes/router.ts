/* eslint-disable @typescript-eslint/no-explicit-any */
// import Role from "@/helpers/Role";
import { RouteLocationNormalized } from "vue-router";
import { configObject } from "@/helpers";
import Index from "../index.vue";
import Home from "../views/Dashboard.vue";
import Map from "../components/visuals/IndicatorPerformance.vue";

const routes = [
  {
    path: "/dashboard",
    name: "Aphrc Dashboard",
    component: Index,
    meta: {
      requiresAuth: false,
      guest: true,
      //   authorize: [Role.partner],
      title: "APHRC DASHBOARD",
      description:
        "The APHRC dashboard is an interactive monitoring and evaluation (M&E) platform that provides real-time insights into the organization's programs and projects. The dashboard features a range of visualizations that allow users to easily track and analyze key performance indicators (KPIs) related to health, education, urbanization, and other development issues in sub-Saharan Africa. The M&E platform is designed to help APHRC staff and partners make data-driven decisions and improve the impact of their interventions",
      keywords:
        "Dashboard, Monitoring and evaluation, Real-time, Performance indicators, Health, Education, Urbanization, Development, Sub-Saharan, Africa, Data-driven, Impact, Programs, Projects, Visualization, Analytics, Decision-making, Partners, Interventions, KPIs",
    },
    children: [
      {
        path: ":tab?",
        name: "Dashboard",
        component: Home,
        props: (route: RouteLocationNormalized) => ({
          tab: route.params.tab || configObject[0].name,
        }),
        meta: {
          transition: "slide-fade-down",
        },
      },
      {
        path: "Map",
        name: "Map",
        component: Map,
        meta: {
          transition: "slide-fade-up",
        },
      },
    ],
  },
];

export default routes;
