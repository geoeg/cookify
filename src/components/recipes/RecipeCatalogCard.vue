<template>
  <v-hover v-slot:default="{ hover }">
    <v-card height="100%" :elevation="hover ? 24 : 4">
      <v-container fluid class="pa-0 ma-0">
        <v-img aspect-ratio="1.25" :src="recipe.thumbnail" />
        <v-card-title>{{ recipe.title }}</v-card-title>
        <v-card-subtitle>{{ recipe.subtitle }}</v-card-subtitle>
        <v-card-text class="text-justify">{{
          recipe.shortDescription
        }}</v-card-text>
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
  </v-hover>
</template>

<script>
export default {
  props: ["recipe"],
};
</script>
