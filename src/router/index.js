import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipes',
    name: 'recipes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RecipesCatalog.vue'),
    children: [
      {
        path: '/recipes/recipe',
        component: () => import(/* webpackChunkName: "singleRecipe" */ '../views/RecipeSingle.vue')
      }
    ]
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: () => import(/* webpackChunkName: "recipe" */ '../views/RecipeSingle.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
