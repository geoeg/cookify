<template>
  <v-container>
    <v-container id="contact-topbar" fluid class="pa-0 ma-0">
      <v-row justify="center" align="center">
        <v-col cols="11" sm="8" md="6">
          <page-titles 
            title="About"
            subtitle="Long story short"
          />
        </v-col>
        <v-col cols="10">
          <v-row justify="center">
              <v-img
                id="main-avatar"
                width="100%"
                max-width="400px"
                class="elevation-3"
                src="../assets/chef.jpg"
                alt=""
              ></v-img>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <get-top-button></get-top-button>
  </v-container>
</template>

<script>
import GetTopButton from "../components/footer/GetTopButton.vue";
import RecipePageTitles from "../components/recipes/RecipePageTitles.vue";

export default {
  name: "Contact",
  components: {
    'page-titles': RecipePageTitles,
    GetTopButton,
  },
  data() {
    return {};
  },
};
</script>
