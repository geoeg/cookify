<template>
  <v-container fluid class="pa-0 ma-0">

    <v-container id="recipe-topbar" fluid class="pa-0 ma-0">
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
            :title="recipe[0].title"
            :subtitle="recipe[0].subtitle"
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
          <recipe-overview :recipe="recipe" />

          <p
            id="ingredients-section"
            class="subtitle-2 text-center pa-0 mt-4 mb-2"
          >
            - ingredients -
          </p>
          <v-divider />
          <recipe-ingredients :ingredients="recipe[0].ingredients" />
          <v-divider />

          <p id="steps-section" class="subtitle-2 text-center pa-0 mt-4 mb-2">
            - steps -
          </p>
          <v-divider />
          <recipe-steps />
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
            :recipeCards="recipe"
          />
        </v-col>
      </v-row>
    </v-container>

    <get-top-button></get-top-button>

  </v-container>
</template>

<script>
import RecipePageTitles from "../components/RecipePageTitles.vue";
import SubNavBar from "../components/SubNavBar.vue";
import RecipeOverview from "../components/RecipeOverview.vue";
import RecipeIngredients from "../components/RecipeIngredients.vue";
import RecipeSteps from "../components/RecipeSteps.vue";
import RecipeCarousel from "../components/RecipeCarousel.vue";
import GetTopButton from "../components/GetTopButton.vue";

export default {
  components: {
    "recipe-titles": RecipePageTitles,
    "sub-nav-bar": SubNavBar,
    "recipe-overview": RecipeOverview,
    "recipe-ingredients": RecipeIngredients,
    "recipe-steps": RecipeSteps,
    "recipe-carousel": RecipeCarousel,
    "get-top-button": GetTopButton
  },
  data() {
    return {
      subNavBarData: [
        {
          title: "Overview",
          href: "#overview-section"
        },
        {
          title: "Ingredients",
          href: "#ingredients-section"
        },
        {
          title: "Steps",
          href: "#steps-section"
        }
      ],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      carouselTitle: "you may want to try some of those?",
      recipeCards: ["First", "Second", "Third", "Fourth", "Fifth"],
      recipe: [
        {
          title: "recipe title",
          subtitle: "recipe subtitle",
          content: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`,
          images: [
            {
              title: "first image",
              src:
                "https://diethood.com/wp-content/uploads/2019/07/Whole-Roast-Chicken.jpg",
            },
            {
              title: "second image",
              src:
                "https://s23209.pcdn.co/wp-content/uploads/2018/09/Creamy-Beef-and-ShellsIMG_6411.jpg",
            },
            {
              title: "third image",
              src:
                "https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry.jpg",
            },
          ],
          ingredients: [
            {
              amount: "300g",
              label: "tomatoes",
            },
            {
              amount: "200g",
              label: "potatotes",
            },
            {
              amount: "100g",
              label: "cheese",
            },
          ],
          steps: {
            1: "lalala",
            2: "lalala2",
            3: "lallala3",
          },
        },
        {
          title: "recipe title2",
          subtitle: "recipe subtitle",
          content: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`,
          images: [
            {
              title: "first image",
              src:
                "https://diethood.com/wp-content/uploads/2019/07/Whole-Roast-Chicken.jpg",
            },
            {
              title: "second image",
              src:
                "https://s23209.pcdn.co/wp-content/uploads/2018/09/Creamy-Beef-and-ShellsIMG_6411.jpg",
            },
            {
              title: "third image",
              src:
                "https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry.jpg",
            },
          ],
          ingredients: [
            {
              amount: "300g",
              label: "tomatoes",
            },
            {
              amount: "200g",
              label: "potatotes",
            },
            {
              amount: "100g",
              label: "cheese",
            },
          ],
          steps: {
            1: "lalala",
            2: "lalala2",
            3: "lallala3",
          },
        },
        {
          title: "recipe title3",
          subtitle: "recipe subtitle",
          content: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`,
          images: [
            {
              title: "first image",
              src:
                "https://diethood.com/wp-content/uploads/2019/07/Whole-Roast-Chicken.jpg",
            },
            {
              title: "second image",
              src:
                "https://s23209.pcdn.co/wp-content/uploads/2018/09/Creamy-Beef-and-ShellsIMG_6411.jpg",
            },
            {
              title: "third image",
              src:
                "https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry.jpg",
            },
          ],
          ingredients: [
            {
              amount: "300g",
              label: "tomatoes",
            },
            {
              amount: "200g",
              label: "potatotes",
            },
            {
              amount: "100g",
              label: "cheese",
            },
          ],
          steps: {
            1: "lalala",
            2: "lalala2",
            3: "lallala3",
          },
        },
      ],
    };
  },
};
</script>
