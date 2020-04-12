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
      <!-- <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8" class="pa-0 ma-0">
          <sub-nav-bar :itemData="subNavItems" />
        </v-col>
      </v-row> -->
      <v-row justify="center" align="center">
        <v-col cols="11" sm="8" md="6">
          <recipe-titles
            title="Catalog"
            subtitle="here you can find the best I've tried so far"
          />
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
              v-for="recipe in recipesListFirebase"
              :key="recipe.title"
            >
              <router-link
                :to="{
                  name: 'singleRecipe',
                  params: { id: recipe.id },
                }"
              >
                <recipe-card :recipe="recipe" />
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-container>
      <p id="bulgarian-food-section">bg food</p>
      <p id="international-food-section">int food</p>
      <p id="desserts-section">desserts</p>
    </v-container> -->

    <get-top-button></get-top-button>
  </v-container>
</template>

<script>
import RecipePageTitles from "../components/RecipePageTitles.vue";
// import SubNavBar from "../components/SubNavBar.vue";
import RecipeCatalogCard from "../components/RecipeCatalogCard.vue";
import GetTopButton from "../components/GetTopButton.vue";
import axios from "axios";

export default {
  components: {
    "recipe-titles": RecipePageTitles,
    // "sub-nav-bar": SubNavBar,
    "recipe-card": RecipeCatalogCard,
    "get-top-button": GetTopButton,
  },
  data() {
    return {
      selectedSubNavItem: "",
      // subNavItems: [
      //   {
      //     title: "Bulgaria",
      //     href: "#bulgarian-food-section",
      //   },
      //   {
      //     title: "International",
      //     href: "#international-food-section",
      //   },
      //   {
      //     title: "Desserts",
      //     href: "#desserts-section",
      //   },
      // ],
      recipesListFirebase: "",
    };
  },
  created() {
    axios
      .get("/recipes.json")
      .then((res) => {
        this.recipesListFirebase = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
