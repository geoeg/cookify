<template>
  <div class="home">
    <v-row justify="center" align="center">
      <p class="display-3 text-center ma-0 pt-4 pb-4 pt-sm-12 pb-sm-12">
        This is a home page
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
            <v-avatar max-width="300px" max-height="300px" height="auto" width="auto">
              <v-img
                src="../assets/jokata.jpg"
                alt="profile-pic"
                width="auto"
              />
            </v-avatar>
          </v-row>
        </v-col>
        <v-col cols="10" class="pt-0 pb-0">
          <timeline></timeline>
        </v-col>
        <v-col cols="10" class="pt-0 pb-0">
          <v-card>
            <v-row justify="center" align-items="start">
              <v-card-title>contact me</v-card-title>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Timeline from "../components/Timeline.vue";

export default {
  name: "Home",
  components: {
    Timeline,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
