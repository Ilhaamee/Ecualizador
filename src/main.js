import './assets/main.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { createApp } from 'vue'
import App from './App.vue'


createApp(App)
    .mount('#app')
    .component('font-awesome-icon', FontAwesomeIcon)
