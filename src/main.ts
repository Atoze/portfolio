import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBirthdayCake, faBook, faCode, faDesktop, faEnvelope, faGhost, faGlobe, faPen, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBirthdayCake, faBook, faCode, faDesktop, faEnvelope, faGhost, faGlobe, faPen, faSearch, faStar, faGithub)

import App from './App.vue'
import router from './router'

createApp(App).use(router).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");
