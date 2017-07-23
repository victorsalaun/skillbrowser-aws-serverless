<template>
  <div v-if="$route.path !=='/login' && $route.path !=='/renewLogin'">
    <div class="container body">
      <app-sidenav></app-sidenav>
      <router-view></router-view>
    </div>
  </div>
  <div v-else>
    <div class="container body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>
