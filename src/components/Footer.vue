<template>
  <v-footer app absolute tile padless>
    <v-card flat tile width="100%" class="grey lighten-3 text-center">
      <v-card-text class="pa-0">
        <v-btn icon>
          <v-icon size="20px">mdi-youtube</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon size="20px">mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon size="20px">mdi-gmail</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="pt-0 pb-2">
        {{ new Date().getFullYear() }} — <strong>geoeg</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped></style>
