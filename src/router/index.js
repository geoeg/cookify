import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/recipes",
    name: "recipes",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RecipesCatalog.vue"),
  },
  {
    path: "/recipe",
    name: "recipe",
    component: () =>
      import(/* webpackChunkName: "recipe" */ "../views/RecipeSingle.vue"),
  },
  {
    path: "/recipe/:id",
    name: "singleRecipe",
    component: () =>
      import(/* webpackChunkName: "recipe" */ "../views/RecipeSingle.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
