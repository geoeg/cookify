<template>
  <v-container fluid class="pa-0 ma-0">
    <v-container id="recipe-topbar" fluid class="pa-0 ma-0">
      <v-row justify="center" align="center">
        <v-col cols="10" md="8">
          <v-img
            aspect-ratio="4"
            src="https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg"
          />
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-btn text>overview</v-btn>
        <v-btn text>ingredients</v-btn>
        <v-btn text>steps</v-btn>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="10" md="6">
          <p class="display-4 font-weight-black text-center mt-4 mb-4">
            {{ recipe[0].title }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container id="recipe-content" fluid class="pa-0 ma-0">
      <v-row justify="center" align="center">
        <v-col cols="10" md="6">
          <p class="title font-weight-light text-center">
            {{ recipe[0].subtitle }}
          </p>
          <p class="text-justify">{{ recipe[0].content }}</p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="6" md="3">
          <p class="text-justify">{{ recipe[0].content }}</p>
        </v-col>
        <v-col cols="6" md="3">
          <v-sheet
            min-width="200"
            min-height="auto"
            width="auto"
            height="324"
            elevation="4"
            color="gray darken-2"
          >
            
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <!-- <v-container id="recipe-footer" fluid class="pa-0 ma-0"></v-container> -->

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
      recipe: [
        {
          title: "recipe title",
          subtitle: "recipe subtitle",
          content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quaerat
            possimus. Earum magni praesentium rem amet impedit. Nulla, pariatur,
            qui mollitia beatae corrupti repellat officiis dicta fugit
            recusandae velit laboriosam?`,
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
          ingredients: ["tomato", "white cheese", "cucumber"],
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

<style lang="scss" scoped></style>
