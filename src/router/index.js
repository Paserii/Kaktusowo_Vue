import { createRouter, createWebHistory } from 'vue-router'
import Serwer from '../views/Serwer.vue'
import Youtube from "../views/Youtube";
import Grafiki from "../views/Grafiki";
import Kontakt from "../views/Kontakt";

const routes = [
  {
    path: '/',
    name: 'Serwer',
    component: Serwer
  },
  {
    path: '/youtube',
    name: 'Youtube',
    component: Youtube
  },
  {
    path: '/grafiki',
    name: 'Grafiki',
    component: Grafiki
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
