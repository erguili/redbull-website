import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Leden from '../views/Leden.vue'
import Races from '../views/Races.vue'
import Autos from '../views/Autos.vue'
import Coureurs from '../views/Coureurs.vue'
import Stats from '../views/Stats.vue'
import Login from '../views/Login.vue'

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('user-token')
//     // If logged in, or going to the Login page.
//     if (token || to.name === 'Login') {
//       // Continue to page.
//       next()
//     } else {
//       // Not logged in, redirect to login.
//       next({name: 'Login'})
//     }
//   });

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/leden',
    name: 'Leden',
    component: Leden
  },
  {
    path: '/races',
    name: 'Races',
    component: Races
  },
  {
    path: '/autos',
    name: 'Autos',
    component: Autos
  },
  {
    path: '/coureurs',
    name: 'Coureurs',
    component: Coureurs
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
