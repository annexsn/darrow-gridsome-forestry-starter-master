import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
import AuthPlugin from './plugins/auth'

import "@/assets/code-highlight.css"

export default function (Vue, { router, head, isClient }) {
  Vue.use(VueFuse)
  Vue.use(AuthPlugin)

  router.beforeEach((to, from, next) => {
    if(to.path != '/profile') {
      next()
    }
    else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
      console.log("User authenticated!!!!")
      if (from.name !== null) {
        if (from.query._storyblok) {
          return next(false)
        }
      }
      next()
    }
    else { // trigger auth0's login
      console.log("User Login")
      router.app.$auth.login()
    }
  })

  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
