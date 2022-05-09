import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/pets",
      name: "pets",
      component: () => import("./components/PetList")
    },   
    {
      path: "/add",
      name: "add",
      component: () => import("./components/Add")
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("./components/Edit")
    },
  ]
});