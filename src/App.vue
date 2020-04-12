<template>
  <v-app color="blue lighten-3">
    <nav-bar></nav-bar>

    <v-content>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>

    <bottom-bar></bottom-bar>
  </v-app>
</template>

<script>
import NavBar from "./components/header/NavBar.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  name: "App",
  components: {
    "nav-bar": NavBar,
    "bottom-bar": Footer,
  },
  data: () => ({}),
};
</script>

<style>
.slide-leave-active {
  transition: opacity 0.25s ease;
  opacity: 0;
  animation: slide-out 0.25s easy-out forwards;
}
.slide-leave {
  opacity: 1;
  transform: translateX();
}
.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
}

.slide-move {
  transition: transform 0.25s;
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30px);
  }
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>
