<template>
  <v-card elevation="4" height="100%">
    <v-container fluid class="pa-0 ma-0">
      <v-img aspect-ratio="1.25" :src="recipeDetails.image" />
      <v-card-title>{{ recipeDetails.title }}</v-card-title>
      <v-card-subtitle>{{ recipeDetails.subtitle }}</v-card-subtitle>
      <v-card-text class="text-justify">{{ recipeDetails.shortDescription }}</v-card-text>
      <!-- <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          icon
          v-for="button in actionButtons"
          :key="button.icon"
        >
          <v-icon>{{ button.icon }}</v-icon>
        </v-btn>
      </v-card-actions> -->
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["recipeDetails"]
};
</script>
