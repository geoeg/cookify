<template>
  <v-timeline>
        <v-timeline-item v-for="n in 3" :key="n" :fill-dot="true" :small="true">
          <span slot="opposite"
            ><div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis, nobis vitae veritatis accusamus illum possimus fugit
              sunt neque?
            </div>
          </span>
            <v-card height="auto" width="auto">
              <v-row justify="center" align="center">
                <v-col cols="auto">
                  <v-img
                    max-width="200px"
                    src="../assets/jokata.jpg"
                    class="ma-4"
                  />
                </v-col>
              </v-row>
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
