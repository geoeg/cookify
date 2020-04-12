<template>
  <div>
    <p class="subtitle-2 font-weight-light text-center ma-4">
      {{ carouselTitle }}
    </p>
    <v-carousel
      cycle
      height="auto"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(recipeSlide, i) in recipes" :key="i">
        <v-card height="100%">
          <v-container fluid class="pa-0 ma-0">
            <v-img aspect-ratio="2" :src="recipeSlide.thumbnail" />
            <v-card-title class="grey">{{ recipeSlide.title }}</v-card-title>
            <v-card-subtitle class="grey">{{ recipeSlide.subtitle }}</v-card-subtitle>
          </v-container>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: ["carouselTitle", "recipes"]
};
</script>