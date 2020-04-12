<template>
  <v-container id="recipe-steps" fluid class="pa-0 ma-0">
    <v-timeline :dense="true">
      <v-timeline-item
        v-for="(step, i) in steps"
        :key="i"
        :fill-dot="true"
        :left="true"
        :small="true"
        color="black"
      >
        <v-card flat>
          <v-card-title class="title pa-0">{{ step.label }}</v-card-title>
          <v-card-text class="text-justify pa-0">{{ step.description }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  props: ['steps']
};
</script>
