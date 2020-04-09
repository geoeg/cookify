<template>
  <div class="recipes">
    <v-container fluid class="pa-0 ma-0">
      <v-row justify="center" align="center">
        <p class="display-3 text-center ma-0 pt-4 pb-4 pt-sm-12 pb-sm-12">
          Recipes
        </p>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="10">
          <p class="ma-0 headline text-center">
            Summary
          </p>
        </v-col>
      </v-row>

      <v-container fluid class="pa-0 ma-0">
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                v-for="recipe in recipesList"
                :key="recipe.title"
              >
                <v-card elevation="3" height="100%">
                  <v-container fluid class="pa-0 ma-0">
                    <v-img aspect-ratio="1.5" :src="recipe.image" />
                    <v-card-title>{{ recipe.title }}</v-card-title>
                    <v-card-subtitle>{{ recipe.subtitle }}</v-card-subtitle>
                    <v-card-text class="text-justify">{{
                      recipe.description
                    }}</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        icon
                        v-for="button in actionButtons"
                        :key="button.icon"
                      >
                        <v-icon>{{ button.icon }}</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <get-top-button></get-top-button>
    </v-container>
  </div>
</template>

<script>
import GetTopButton from '../components/GetTopButton.vue';

export default {
  data() {
    return {
      recipesList: [
        {
          image:
            "https://www.theasiantelegraph.net/wp-content/uploads/2019/11/download-3.jpg",
          title: "Recipe title 1",
          subtitle: "Recipe subtitle 1",
          description: "Recipe description 1",
        },
        {
          image:
            "https://res.cloudinary.com/grohealth/image/upload/v1583764330/DCUK/Content/iStock-680111050.jpg",
          title: "Recipe title 2",
          subtitle: "Recipe subtitle 2",
          description: "Recipe description 2",
        },
        {
          image:
            "https://www.sgs.bg/-/media/global/images/structural-website-images/hero-images/hero-agri-food.jpg?la=en",
          title: "Recipe title 3",
          subtitle: "Recipe subtitle 3",
          description: "Recipe description 3",
        },
        {
          image:
            "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
          title: "Recipe title 4",
          subtitle: "Recipe subtitle 4",
          description: "Recipe description 4",
        },
      ],
      actionButtons: [
        {
          icon: "mdi-heart",
        },
        {
          icon: "mdi-bookmark",
        },
        {
          icon: "mdi-share-variant",
        },
      ],
    };
  },
  components: {
    'get-top-button': GetTopButton
  }
};
</script>

<style lang="scss" scoped></style>
