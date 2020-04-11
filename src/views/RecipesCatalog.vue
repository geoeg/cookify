<template>
  <v-container id="recipes-catalog" fluid class="pa-0 ma-0">
    <v-container id="recipes-topbar" fluid class="pa-0 ma-0">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8">
          <v-img
            aspect-ratio="4"
            src="https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg"
          />
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8" class="pa-0 ma-0">
          <sub-nav-bar :itemData="subNavBarData" />
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="11" sm="8" md="6">
          <recipe-titles 
            title="Catalog" 
            subtitle="here you can find the best I've tried so far" />
        </v-col>
      </v-row>
    </v-container>

    <v-container id="recipes-overview" fluid class="pa-0 ma-0">
      <v-row justify="center" align="center">
        <v-col cols="11" sm="8" md="9" lg="10">
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="recipe in recipesList"
              :key="recipe.title"
            >
              <recipe-card :recipeDetails="recipe" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <get-top-button></get-top-button>

  </v-container>
</template>

<script>
import RecipePageTitles from "../components/RecipePageTitles.vue";
import SubNavBar from "../components/SubNavBar.vue";
import RecipeCatalogCard from "../components/RecipeCatalogCard.vue";
import GetTopButton from "../components/GetTopButton.vue";

export default {
  components: {
    "recipe-titles": RecipePageTitles,
    "sub-nav-bar": SubNavBar,
    "recipe-card": RecipeCatalogCard,
    "get-top-button": GetTopButton
  },
  data() {
    return {
      selectedSubNavItem: "",
      subNavBarData: [
        {
          title: "Bulgaria",
          href: "#overview-section"
        },
        {
          title: "International",
          href: "#ingredients-section"
        },
        {
          title: "Desserts",
          href: "#steps-section"
        }
      ],
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
      ]
    };
  },
};
</script>

<style lang="scss" scoped></style>
