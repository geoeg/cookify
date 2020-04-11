<template>
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
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola
            imperdiet nec ut, sed euismod convenire principes at. Est et nobis
            iisque percipit, an vim zril disputando voluptatibus, vix an
            salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {};
</script>
