import Vue from 'vue'
import VueRouter from 'vue-router'
import EventCreate from 'C:/Users/user/real-world-vue/src/views/EventCreate.vue'
import EventList from 'C:/Users/user/real-world-vue/src/views/EventList.vue'
import EventShow from 'C:/Users/user/real-world-vue/src/views/EventShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event',
    name: 'event-show',
    component: EventShow
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
