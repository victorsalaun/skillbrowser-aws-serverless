import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './components/App.vue'
import router from './router'
import store from './store'

import AdminApiGateway from './components/service/adminApiGateway'
import CognitoAuth from './components/service/cognitoAuth'

import Sidenav from './components/layout/Sidenav.vue'
import Topbar from './components/layout/Topbar.vue'

sync(store, router);

Vue.use(AdminApiGateway);
Vue.use(CognitoAuth);

let adminApiGateway = new AdminApiGateway();
let cognitoAuth = new CognitoAuth();

// register globally used common components
Vue.component('app-sidenav', Sidenav);
Vue.component('app-topbar', Topbar);

const app = new Vue({
  router,
  adminApiGateway,
  cognitoAuth,
  store,
  ...App
});

export {app, router, store}
