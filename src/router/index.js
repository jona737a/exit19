import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import minSkole from '../views/minSkole.vue'
import retningslinjer from '../views/retningslinjer.vue'
import sundhedsstyrelsen from '../views/sundhedsstyrelsen.vue'
import infoGrafik from '../views/infoGrafik.vue'
import enHome from '../views/english/Home.vue'
import enAbout from '../views/english/About.vue'
import enMinSkole from '../views/english/minSkole.vue'
import enRetningslinjer from '../views/english/retningslinjer.vue'
import enSundhedsstyrelsen from '../views/english/sundhedsstyrelsen.vue'
import enInfoGrafik from '../views/english/infoGrafik.vue'
import frontPage from '../views/frontPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'frontPage',
    component: frontPage
  },
  {
    path: '/home',
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
  {
    path: '/en/home',
    name: 'EnHome',
    component: enHome
  },
  {
    path: '/en/about',
    name: 'EnAbout',
    component: enAbout
  },
  {
    path: '/en/minSkole',
    name: 'EnMinSkole',
    component: enMinSkole
  },
  {
    path: '/en/retningslinjer',
    name: 'EnRetningslinjer',
    component: enRetningslinjer
  },
  {
    path: '/en/sundhedsstyrelsen',
    name: 'EnSundhedsstyrelsen',
    component: enSundhedsstyrelsen
  },
  {
    path: '/en/infoGrafik',
    name: 'EnInfoGrafik',
    component: enInfoGrafik
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
