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
            <v-btn fab icon height="auto" width="auto" disabled elevation="4">
              <v-avatar size="300">
                <v-img src="../assets/jokata.jpg" alt="" />
              </v-avatar>
            </v-btn>
          </v-row>
        </v-col>
        <v-col cols="10" class="pt-0 pb-0">
          <timeline></timeline>
        </v-col>
        <v-col cols="10" class="pt-0">
          <v-card>
            <v-row justify="center">
              <v-btn class="ma-2" large color="teal" icon>
                <v-icon>mdi-vuetify</v-icon>
              </v-btn>
              <v-btn class="ma-2" large color="teal" icon>
                <v-icon>mdi-vuetify</v-icon>
              </v-btn>
              <v-btn class="ma-2" large color="teal" icon>
                <v-icon>mdi-vuetify</v-icon>
              </v-btn>
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
