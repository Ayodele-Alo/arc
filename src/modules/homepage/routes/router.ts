// import Role from "@/utils/Role";
import Index from "../index.vue";
import Home from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Aphrc Homepage",
    component: Index,
    meta: {
      requiresAuth: false,
      guest: true,
      title: "APHRC HOMEPAGE",
      description:
        "The African Population and Health Research Center (APHRC) is a non-profit organization that conducts research on population, health, education, urbanization, and related development issues in sub-Saharan Africa. Established in 1995, the center is headquartered in Nairobi, Kenya and is one of the leading research institutions in the region. APHRC's work aims to improve the quality of life for people in Africa by providing evidence-based research and policy recommendations to governments, civil society organizations, and other stakeholders. The organization's research focuses on a range of topics including maternal and child health, sexual and reproductive health, aging and health, education, and urban health. APHRC also provides training and capacity-building programs for researchers and policymakers in Africa, and actively engages with local communities to ensure that their research findings are translated into practical solutions that benefit society.",
      keywords:
        "Africa, Population,  Health, Research, Education, Urbanization, Maternal health, Child health, Sexual health, Reproductive health, Aging, Urban health, Policy,  Evidence-based, Capacity building, Training, Community engagement, Non-profit, Kenya",
    },
    children: [
      {
        path: "",
        alias: "home",
        name: "PartnerHome",
        component: Home,
        meta: {
          transition: "slide-fade-up",
        },
      },
    ],
  },
];

export default routes;
