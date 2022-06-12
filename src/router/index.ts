import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PeopleView from "../views/PeopleView.vue";
import FilmsView from "../views/FilmsView.vue";
import PlanetsView from "../views/PlanetsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/people",
    name: "people",
    component: PeopleView,
  },
  {
    path: "/films",
    name: "films",
    component: FilmsView,
  },
  {
    path: "/planets",
    name: "planets",
    component: PlanetsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
