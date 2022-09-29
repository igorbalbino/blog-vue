import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/artigo',
    name: 'artigo',
    component: () => import( '../views/ArtigosView.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/registrar',
    name: 'registrar',
    component: () => import('../views/RegistrarView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
