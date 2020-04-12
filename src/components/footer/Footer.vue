<template>
  <v-footer app absolute tile padless>
    <v-card flat tile width="100%" class="primary text-center">
      <v-card-text class="pa-0">
        <v-btn dark icon>
          <v-icon size="20px">mdi-youtube</v-icon>
        </v-btn>
        <v-btn dark icon>
          <v-icon size="20px">mdi-instagram</v-icon>
        </v-btn>
        <v-btn dark icon>
          <v-icon size="20px">mdi-gmail</v-icon>
        </v-btn>
      </v-card-text>
      <router-link :to="{ name: 'contact' }" tag="button">
        <v-card-text class="pt-0 pb-2 white--text">
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
