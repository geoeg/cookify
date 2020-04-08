<template>
  <v-app>
    
    <nav-bar></nav-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: "App",
  components: {
    'nav-bar': NavBar
  },
  data: () => ({
    
  }),
};
</script>

<style scoped></style>