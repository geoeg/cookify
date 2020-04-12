<template>
  <v-footer app absolute tile padless>
    <v-card flat tile width="100%" class="grey lighten-3 text-center">
      <v-card-text class="pa-0">
        <v-btn icon disabled>
          <v-icon size="20px">mdi-youtube</v-icon>
        </v-btn>
        <v-btn icon disabled>
          <v-icon size="20px">mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon disabled>
          <v-icon size="20px">mdi-gmail</v-icon>
        </v-btn>
      </v-card-text>
      <router-link :to="{ name: 'contact' }" tag="button">
        <v-card-text class="pt-0 pb-2">
          {{ new Date().getFullYear() }} — <strong>geoeg</strong>
        </v-card-text>
      </router-link>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped></style>
