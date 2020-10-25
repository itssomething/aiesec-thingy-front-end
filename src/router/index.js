import Vue from "vue";
import VueRouter from "vue-router";
import OppList from "../components/OppList.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/opps",
    name: "opps-list",
    component: OppList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
