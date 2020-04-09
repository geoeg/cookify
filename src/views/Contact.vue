<template>
  <div class="contact">
    <v-row justify="center" align="center">
      <p class="display-3 text-center ma-0 pt-4 pb-4 pt-sm-12 pb-sm-12">
        This is the contact page
      </p>
    </v-row>

    <v-container fluid class="pt-0 pb-0">
      <v-row justify="center" align="center">
        <v-col cols="10">
          <p class="ma-0 headline text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            repudiandae, maxime velit, illo nam consectetur suscipit maiores
            amet excepturi perspiciatis voluptatum voluptas eum fuga sunt
            quisquam. A provident mollitia voluptates?
          </p>
        </v-col>

        <v-col cols="10" class="pb-0">
          <v-row justify="center">
            <v-avatar size="100%">
              <v-img
                aspect-ratio="1"
                id="main-avatar"
                width="100%"
                max-width="400px"
                class="elevation-3"
                src="../assets/jokata.jpg"
                alt=""
              ></v-img>
            </v-avatar>
          </v-row>
        </v-col>

        <v-col cols="10" class="pt-0 pb-0">
          <timeline></timeline>
        </v-col>

        <v-col cols="10" class="pt-0">
          <v-card width="100%" elevation="3">
            <v-row justify="center">
              <v-card-subtitle>to be continued..</v-card-subtitle>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <get-top-button></get-top-button>
    </v-container>
  </div>
</template>

<script>
import Timeline from "../components/Timeline.vue";
import GetTopButton from "../components/GetTopButton.vue";

export default {
  name: "Contact",
  components: {
    Timeline,
    GetTopButton
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
