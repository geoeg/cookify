import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/recipes",
    name: "recipes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RecipesCatalog.vue"),
  },
  // {
  //   path: "/recipe",
  //   name: "recipe",
  //   component: () =>
  //     import(/* webpackChunkName: "recipe" */ "../views/RecipeSingle.vue"),
  // },
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
        selector: to.hash
      }
    }
    return {
      x: 0,
      y: 0
    }
  }
});

export default router;
