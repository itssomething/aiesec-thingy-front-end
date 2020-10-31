import Vue from "vue";
import VueRouter from "vue-router";
import OppList from "../components/OppList.vue";
import History from "../components/History.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/opps",
    name: "opps-list",
    component: OppList
  },
  {
    path: "/histories",
    name: "histories",
    component: History
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
