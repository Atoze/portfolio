/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../declare/particles.vue3.d.ts" />

import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBirthdayCake, faBook, faCode, faDesktop, faEnvelope, faGhost, faGlobe, faPen, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Particles from "particles.vue3";

createApp(App)
library.add(faBirthdayCake, faBook, faCode, faDesktop, faEnvelope, faGhost, faGlobe, faPen, faSearch, faStar, faGithub)

import App from './App.vue'
import router from './router'

createApp(App).use(router).use(Particles).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
