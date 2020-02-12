import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase";
import './registerServiceWorker'
import router from './router'
import store from './store'
import {firebaseConfig} from '../../functions/_config_/firebaseKey'
import '@/components/Login/loginstyle.scss'
import '@/components/Login/mixin.scss'
import '@/components/Login/acceptstyle.scss'
import '@/components/Login/forgetstyle.scss'
import '@/components/Login/regisstyle.scss'
import '@/assets/bglogin.png'
Vue.config.productionTip = false
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

import axios from "axios";
/* eslint-disable */
const client = axios.create({
  // baseURL: "http://localhost:5001/relint-kmitl/us-central1/app",
  baseURL: "https://us-central1-relint-kmitl.cloudfunctions.net/app",
});
Vue.prototype.$http = client

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
