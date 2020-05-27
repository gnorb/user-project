import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserList from '@/views/Users/List'
import UserShow from '@/views/Users/Show'
import UserCreate from '@/views/Users/Create'
import UserUpdate from '@/views/Users/Update'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'UserList',
          component: UserList,
          meta: {
            title: 'routes.userList'
          }
        },
        {
          path: '/users/:id',
          name: 'UserShow',
          component: UserShow,
          meta: {
            title: 'routes.userShow'
          }
        },
        {
          path: '/user',
          name: 'UserCreate',
          component: UserCreate,
          meta: {
            title: 'routes.userCreate'
          }
        },
        {
          path: '/user/:id',
          name: 'UserUpdate',
          component: UserUpdate,
          meta: {
            title: 'routes.userUpdate'
          }
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
