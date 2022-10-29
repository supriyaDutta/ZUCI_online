import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/rulebook",
      name: "rulebook",

      component: () => import("../views/RuleBookView.vue"),
      children: [
        {
          path: "",
          name: "overview",

          component: () => import("../views/OverviewView.vue"),
        },
        {
          path: "/preparation",
          name: "preparation",

          component: () => import("../views/PreparetionView.vue"),
        },
        {
          path: "/Teamsetup",
          name: "Teamsetup",

          component: () => import("../views/TeamSetupView.vue"),
        },
        {
          path: "/Resourcesetup",
          name: "Resourcesetup",

          component: () => import("../views/ResourceSetupView.vue"),
        },
        {
          path: "/play",
          name: "play",

          component: () => import("../views/PlayView.vue"),
        },
        {
          path: "/usingZuci",
          name: "usingZuci",

          component: () => import("../views/ZuciSetupView.vue"),
        },
        {
          path: "/connection",
          name: "connection",

          component: () => import("../views/ConnectionView.vue"),
        },
        {
          path: "/powers",
          name: "powers",

          component: () => import("../views/UsingPowerView.vue"),
        },
        {
          path: "/strategies",
          name: "strategies",

          component: () => import("../views/StrategiesView.vue"),
        },
        {
          path: "/win",
          name: "win",

          component: () => import("../views/WinView.vue"),
        },
      ],
    },
  ],
});

export default router;
