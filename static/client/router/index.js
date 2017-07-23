import Vue from 'vue'
import Router from 'vue-router'

import CognitoAuth from '../components/service/cognitoAuth'

import ClientGet from '../components/view/client/ClientGet.vue'
import ClientList from '../components/view/client/ClientList.vue'
import ClientNew from '../components/view/client/ClientNew.vue'
import EmployeeGet from '../components/view/employee/EmployeeGet.vue'
import EmployeeList from '../components/view/employee/EmployeeList.vue'
import EmployeeNew from '../components/view/employee/EmployeeNew.vue'
import MissionGet from '../components/view/mission/MissionGet.vue'
import MissionList from '../components/view/mission/MissionList.vue'
import MissionNew from '../components/view/mission/MissionNew.vue'
import SkillGet from '../components/view/skill/SkillGet.vue'
import SkillList from '../components/view/skill/SkillList.vue'
import SkillNew from '../components/view/skill/SkillNew.vue'
import Login from '../components/view/login/Login.vue'
import RenewLogin from '../components/view/login/RenewLogin.vue'
import Home from '../components/view/Home.vue'


Vue.use(Router);
Vue.use(CognitoAuth);

let cognitoAuth = new CognitoAuth();

function requireAuth(to, from, next) {
  cognitoAuth.isAuthenticated((err, loggedIn) => {
    if (err) return next();
    if (!loggedIn) {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  })
}

export default new Router({
  mode: 'hash',
  routes: [
    {path: '/', name: 'Home', component: Home, beforeEnter: requireAuth},
    {path: '/renewLogin', name: 'RenewLogin', component: RenewLogin},
    {path: '/login', name: 'Login', component: Login},
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        cognitoAuth.logout();
        next('/')
      }
    },
    {path: '/client/id/:id', name: 'ClientGet', component: ClientGet, beforeEnter: requireAuth},
    {path: '/client/list', name: 'ClientList', component: ClientList, beforeEnter: requireAuth},
    {path: '/client/new', name: 'ClientNew', component: ClientNew, beforeEnter: requireAuth},
    {path: '/employee/id/:id', name: 'EmployeeGet', component: EmployeeGet, beforeEnter: requireAuth},
    {path: '/employee/list', name: 'EmployeeList', component: EmployeeList, beforeEnter: requireAuth},
    {path: '/employee/new', name: 'EmployeeNew', component: EmployeeNew, beforeEnter: requireAuth},
    {path: '/mission/id/:id', name: 'MissionGet', component: MissionGet, beforeEnter: requireAuth},
    {path: '/mission/list', name: 'MissionList', component: MissionList, beforeEnter: requireAuth},
    {path: '/mission/new', name: 'MissionNew', component: MissionNew, beforeEnter: requireAuth},
    {path: '/skill/id/:id', name: 'SkillGet', component: SkillGet, beforeEnter: requireAuth},
    {path: '/skill/list', name: 'SkillList', component: SkillList, beforeEnter: requireAuth},
    {path: '/skill/new', name: 'SkillNew', component: SkillNew, beforeEnter: requireAuth},
  ],
})
