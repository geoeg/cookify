<template>
  <v-footer app absolute tile padless>
    <v-card flat tile width="100%" class="primary white--text text-center">
      <v-card-text class="pa-1">
        <v-btn class="white--text" icon>
          <v-icon size="24px">mdi-home</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0 pb-2">
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
