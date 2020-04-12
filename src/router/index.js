import Vue from "vue";
import VueRouter from "vue-router";
import RecipesCatalog from "../views/RecipesCatalog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: RecipesCatalog
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
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;
