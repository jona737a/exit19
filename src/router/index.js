import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import minSkole from '../views/minSkole.vue'
import retningslinjer from '../views/retningslinjer.vue'
import sundhedsstyrelsen from '../views/sundhedsstyrelsen.vue'
import infoGrafik from '../views/infoGrafik.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/minSkole',
    name: 'MinSkole',
    component: minSkole
  },
  {
    path: '/retningslinjer',
    name: 'Retningslinjer',
    component: retningslinjer
  },
  {
    path: '/sundhedsstyrelsen',
    name: 'Sundhedsstyrelsen',
    component: sundhedsstyrelsen
  },
  {
    path: '/infoGrafik',
    name: 'InfoGrafik',
    component: infoGrafik
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
