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
              v-for="recipe in recipesList"
              :key="recipe.title"
            >
              <router-link
                :to="{
                  name: 'singleRecipe',
                  params: { id: recipe.id },
                }"
              >
                <recipe-card :recipeDetails="recipe" />
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <p id="bulgarian-food-section">bg food</p>
      <p id="international-food-section">int food</p>
      <p id="desserts-section">desserts</p>
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
    "get-top-button": GetTopButton,
  },
  data() {
    return {
      selectedSubNavItem: "",
      subNavBarData: [
        {
          title: "Bulgaria",
          href: "#bulgarian-food-section",
        },
        {
          title: "International",
          href: "#international-food-section",
        },
        {
          title: "Desserts",
          href: "#desserts-section",
        },
      ],
      recipesList: [
        {
          id: 1,
          image:
            "https://www.theasiantelegraph.net/wp-content/uploads/2019/11/download-3.jpg",
          title: "Recipe title 1",
          subtitle: "Recipe subtitle 1",
          shortDescription: "Recipe description 1",
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
          id: 2,
          image:
            "https://res.cloudinary.com/grohealth/image/upload/v1583764330/DCUK/Content/iStock-680111050.jpg",
          title: "Recipe title 2",
          subtitle: "Recipe subtitle 2",
          shortDescription: "Recipe description 2",
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
          id: 3,
          image:
            "https://www.sgs.bg/-/media/global/images/structural-website-images/hero-images/hero-agri-food.jpg?la=en",
          title: "Recipe title 3",
          subtitle: "Recipe subtitle 3",
          shortDescription: "Recipe description 3",
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
          id: 4,
          image:
            "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
          title: "Recipe title 4",
          subtitle: "Recipe subtitle 4",
          shortDescription: "Recipe description 4",
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
