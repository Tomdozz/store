import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      guest: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/loginregister',
    name: 'Login',
    component: () => import(/* webpackChunkName: "admin" */ '../components/LoginRegister.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../components/Admin/Admin.vue'),
    meta: {
      requiresAuth: true,
      is_admin : true
    },
    children: [
      {
        path: '/order',
        component: () => import(/* webpackChunkName: "admin" */ '../components/Admin/AdminPages/OrderPage.vue'),
        meta: {
          requiresAuth: true,
          is_admin : true
        },
      },
      {
        path: '/product',
        component: () => import(/* webpackChunkName: "admin" */ '../components/Admin/AdminPages/ProductPage.vue'),
        meta: {
          requiresAuth: true,
          is_admin : true
        },
      },
      {
        path: '/users',
        component: () => import(/* webpackChunkName: "admin" */ '../components/Admin/AdminPages/UserPage/UsersPage.vue'),
        meta: {
          requiresAuth: true,
          is_admin : true
        },
      },
      {
        path: 'user/:userId',
        component: () => import(/* webpackChunkName: "admin" */ '../components/Admin/AdminPages/UserPage/UserPage.vue'),
        name: 'user',
        props: true,
        meta: {
          requiresAuth: true,
          is_admin : true
        },
      }
    ]
  },
  {
    path: '/404',
    name: '*',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
    meta: {
      guest: true
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('in before asll' + ' meta is ')
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
        console.log('JWT is null')
        console.log(to)
        next({
          name: 'Login',
          params: { nextUrl: to.fullPath }
      })
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          console.log(user)
          if(to.matched.some(record => record.meta.is_admin)) {
              if(user.credLevel == 1 || user.credLevel == 2){
                  next()
              }
              else{
                  next({ name: 'About'})
              }
          }else {
              next()
          }
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('jwt') == null){
        console.log('here?')
          next()
      }
      else{
          next({ name: 'About'})
      }
  }else {
    console.log('last next')
      next()
  }
})

export default router
