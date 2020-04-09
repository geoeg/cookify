<template>
  <v-timeline>
    <v-timeline-item v-for="n in 5" :key="n" fill-dot small color="primary">
      <div slot="opposite">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
        nobis vitae veritatis accusamus illum possimus fugit sunt neque?
      </div>

      <v-card height="auto" width="auto" elevation="3">
        <v-container
          fluid
          d-flex
          class="flex-column flex-wrap justify-center align-center"
        >
          <v-img
            src="https://www.theasiantelegraph.net/wp-content/uploads/2019/11/download-3.jpg"
          ></v-img>
          <v-card-title>title</v-card-title>
          <v-card-subtitle>subtitle</v-card-subtitle>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {};
</script>

<style scoped>
.opposite-text {
  width: 250px;
}
</style>
