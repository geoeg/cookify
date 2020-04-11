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
        <v-btn text href="#overview-section">overview</v-btn>
        <v-btn text href="#ingredients-section">ingredients</v-btn>
        <v-btn text href="#steps-section">steps</v-btn>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="11" sm="8" md="6">
          <p class="display-4 text-center mt-4 mb-4">
            {{ recipe[0].title }}
          </p>
          <p class="title font-weight-light text-center pa-0 mb-4">
            {{ recipe[0].subtitle }}
          </p>
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
          <v-divider></v-divider>
          <p class="subtitle-2 text-justify clearfix pa-0 mt-4 mb-4">
            {{ recipe[0].content }}
          </p>
          <v-img aspect-ratio="2" :src="recipe[0].images[1].src" />
          <p class="subtitle-2 text-justify clearfix pa-0 mt-4 mb-4">
            {{ recipe[0].content }}
          </p>
          <v-img aspect-ratio="2" :src="recipe[0].images[0].src" />
          <p class="subtitle-2 text-justify clearfix pa-0 mt-4 mb-4">
            {{ recipe[0].content }}
          </p>
          <p
            id="ingredients-section"
            class="subtitle-2 text-center pa-0 mt-4 mb-2"
          >
            - ingredients -
          </p>
          <v-divider></v-divider>
          <v-sheet
            min-width="100%"
            min-height="auto"
            max-width="100%"
            width="auto"
            height="auto"
            elevation="4"
            class="mt-4 mb-4"
          >
            <v-list class="pa-0 ma-0">
              <v-list-item-group v-model="selectedIngredients" multiple>
                <template v-for="(ingr, i) in recipe[0].ingredients">
                  <v-list-item
                    :key="`ingr-${i}`"
                    :value="ingr.label"
                    active-class="deep-grey--text text--accent-4"
                  >
                    <template v-slot:default="{ active, toggle }">
                      <v-list-item-content>
                        <v-list-item-title class="subtitle-2">
                          {{ ingr.amount }} - {{ ingr.label }}
                        </v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-checkbox
                          :input-value="active"
                          :true-value="ingr.label"
                          color="deep-gray accent-4"
                          @click="toggle"
                        ></v-checkbox>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-sheet>
          <p>{{ selectedIngredients }}</p>
          <p id="steps-section" class="subtitle-2 text-center pa-0 mt-4 mb-2">
            - steps -
          </p>
          <v-divider></v-divider>
          <v-container id="recipe-steps" fluid class="pa-0 ma-0">
            <v-timeline :dense="true">
              <v-timeline-item
                v-for="n in 3"
                :key="n"
                :fill-dot="true"
                :left="true"
                :small="true"
                color="black"
              >
                <v-card flat>
                  <v-card-title class="title pa-0">Lorem ipsum</v-card-title>
                  <v-card-text class="text-justify pa-0">
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-container>
          <v-divider></v-divider>
          <p class="display-1 text-center mt-4 mb-4">Enjoy!</p>
        </v-col>
      </v-row>
    </v-container>

    <v-container id="recipe-footer" fluid class="pa-0 ma-0">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-carousel
            cycle
            height="auto"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-card height="100%">
                <v-container fluid class="pa-0 ma-0">
                  <v-img aspect-ratio="2" src="../assets/chef.jpg" />
                  <v-card-title>{{ slide }}</v-card-title>
                  <v-card-subtitle>{{ slide }}</v-card-subtitle>
                </v-container>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>

    <get-top-button></get-top-button>
  </v-container>
</template>

<script>
import GetTopButton from "../components/GetTopButton.vue";

export default {
  components: {
    "get-top-button": GetTopButton,
  },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      // ingredients: ["300g potatoes", "200g carrots", "500g tomatoes"],
      selectedIngredients: [],
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
      ],
    };
  },
};
</script>

<style scoped>
.clearfix {
  clear: auto;
}
</style>
