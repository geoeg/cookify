<template>
  <v-app color="blue lighten-3">
    <!-- <nav-bar></nav-bar> -->

    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- <bottom-bar></bottom-bar> -->
  </v-app>
</template>

<script>
// import NavBar from "./components/NavBar.vue";
// import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    // "nav-bar": NavBar,
    // "bottom-bar": Footer,
  },
  data: () => ({}),
};
</script>

<style scoped>
#main-app {
  background-color: lightblue;
}
</style>
