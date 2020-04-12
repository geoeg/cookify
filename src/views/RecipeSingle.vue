<template>
  <v-container fluid class="pa-0 ma-0">
    <v-container id="recipe-topbar" fluid class="pa-0 ma-0">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8">
          <v-img
            aspect-ratio="4"
            src="https://images.ctfassets.net/3s5io6mnxfqz/3pLESMFjNopcam5J5qGcoT/0427544b060a8fd29e3c0b68281d56cf/AdobeStock_191057762.jpeg"
          />
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8" class="pa-0 ma-0">
          <sub-nav-bar :itemData="subNavItems" />
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="11" sm="8" md="6">
          <recipe-titles
            :title="recipeFirebase.title"
            :subtitle="recipeFirebase.subtitle"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-container id="recipe-content" fluid class="pa-0 ma-0">
      <v-row justify="center" align="center">
        <v-col cols="11" sm="8" md="6">
          <p
            id="overview-section"
            class="subtitle-2 text-center pa-0 mt-4 mb-2"
          >
            - overview -
          </p>
          <v-divider />
          <recipe-overview
            :description="recipeFirebase.description"
            :images="recipeFirebase.images"
          />

          <p
            id="ingredients-section"
            class="subtitle-2 text-center pa-0 mt-4 mb-2"
          >
            - ingredients -
          </p>
          <v-divider />
          <recipe-ingredients :ingredients="recipeFirebase.ingredients" />

          <p id="steps-section" class="subtitle-2 text-center pa-0 mt-4 mb-2">
            - steps -
          </p>
          <v-divider />
          <recipe-steps :steps="recipeFirebase.steps" />
          <v-divider />
          <p class="display-1 text-center mt-4 mb-4">Enjoy!</p>
        </v-col>
      </v-row>
    </v-container>

    <v-container id="recipe-footer" fluid class="pa-0 mt-8">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <recipe-carousel
            :carouselTitle="carouselTitle"
            :recipes="recipesList"
          />
        </v-col>
      </v-row>
    </v-container>

    <get-top-button></get-top-button>
  </v-container>
</template>

<script>
import axios from "axios";

import RecipePageTitles from "../components/recipes/RecipePageTitles.vue";
import SubNavBar from "../components/header/SubNavBar.vue";
import RecipeOverview from "../components/recipes/RecipeOverview.vue";
import RecipeIngredients from "../components/recipes/RecipeIngredients.vue";
import RecipeSteps from "../components/recipes/RecipeSteps.vue";
import RecipeCarousel from "../components/recipes/RecipeCarousel.vue";
import GetTopButton from "../components/footer/GetTopButton.vue";

export default {
  components: {
    "recipe-titles": RecipePageTitles,
    "sub-nav-bar": SubNavBar,
    "recipe-overview": RecipeOverview,
    "recipe-ingredients": RecipeIngredients,
    "recipe-steps": RecipeSteps,
    "recipe-carousel": RecipeCarousel,
    "get-top-button": GetTopButton,
  },
  data() {
    return {
      subNavItems: [
        {
          title: "Overview",
          href: "#overview-section",
        },
        {
          title: "Ingredients",
          href: "#ingredients-section",
        },
        {
          title: "Steps",
          href: "#steps-section",
        },
      ],
      carouselTitle: "you may want to try some of those?",
      recipeFirebase: "",
      recipesList: ""
    };
  },
  created() {
    axios
      .get("/recipes.json")
      .then((res) => {
        this.recipeFirebase = res.data[this.$route.params.id - 1];
        this.recipesList = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
