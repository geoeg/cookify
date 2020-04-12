<template>
  <v-fab-transition>
    <v-btn
      color="primary"
      fixed
      small
      fab
      bottom
      right
      @click="navigateToTop"
    >
      <v-icon>mdi-arrow-up-bold-circle</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: "GetTopButton",
  methods: {
    navigateToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
