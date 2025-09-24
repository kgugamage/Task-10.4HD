import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Highlights from '../views/Highlights.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/gallery', component: Gallery },
  { path: '/highlights', component: Highlights },
  { path: '/contact', component: Contact },
]

export default createRouter({
  history: createWebHistory(),
  routes
})