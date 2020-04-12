<template>
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
        <template v-for="(ingr, i) in ingredients">
          <v-list-item
            :key="`ingr-${i}`"
            :value="ingr.label"
            active-class="deep-grey--text text--accent-4"
          >
            <template v-slot:default="{ active, toggle }">
              <v-list-item-content>
                <v-list-item-title class="subtitle-2">
                  {{ ingr.amount }} {{ ingr.label }}
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
</template>

<script>
export default {
  props: ["ingredients"],
  data() {
    return {
      selectedIngredients: [],
    };
  },
};
</script>
