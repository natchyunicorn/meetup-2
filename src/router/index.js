// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      }
    ],
  },
  {
    path: '/event/new',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Create meetups',
        component: () => import(/* webpackChunkName: "home" */ '@/components/Event/CreateEvent.vue'),
      }
    ],
  },
    {
    path: '/event',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Meetups',
        component: () => import(/* webpackChunkName: "home" */ '@/components/Event/MeetupPage.vue'),
      }
    ],
  },{
    path: '/event/:id',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Meetup',
        component: () => import(/* webpackChunkName: "home" */ '@/components/Event/MeetupId.vue'),
      }
    ],
  },
  {
    path: '/signin',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Sign in',
        component: () => import(/* webpackChunkName: "home" */ '@/components/User/SignIn.vue'),
      }
    ],
  },
  {
    path: '/signup',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Sign up',
        component: () => import(/* webpackChunkName: "home" */ '@/components/User/SignUp.vue'),
      }
    ],
  },
  {
    path: '/profile',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "home" */ '@/components/User/UserProfile.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
