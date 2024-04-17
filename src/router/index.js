import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/container'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/pages/home'),
          meta: {
            active: 'home',
            needLogin: false,
          }
        },
        {
          path: '/aboutUs',
          name: 'aboutUs',
          component: () => import('@/pages/aboutUs'),
          meta: {
            active: 'aboutUs',
            needLogin: false,
          }
        },
        {
          path: '/portfolio',
          name: 'portfolio',
          component: () => import('@/pages/portfolio'),
          meta: {
            active: 'portfolio',
            needLogin: false,
          }
        },
      ]
    }
  ]
});

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router