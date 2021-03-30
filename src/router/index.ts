import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: async (to, from, savedPosition) => {
    const findEl = async (hash: string, x: number) => {
      return document.querySelector(hash) ||
        new Promise<void | Element>((resolve) => {
          if (x > 50) {
            return resolve();
          }
          setTimeout(() => {
            resolve(findEl(hash, ++x || 1));
          }, 100);
        });
    }

    if (to.hash) {
      const el = await findEl(to.hash, 0) as HTMLElement;
      const top = el.offsetTop - 60;
      if ('scrollBehavior' in document.documentElement.style) {
        return window.scrollTo({ top, behavior: 'smooth' });
      } else {
        return window.scrollTo(0, top);
      }
    }

    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
