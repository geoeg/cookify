<template>
  <v-container class="pa-0 ma-0">
    <v-row justify="center" align="center">
      <span v-for="(pageRef, i) in itemData" :key="i">
        <v-btn text :href="pageRef.href">{{ pageRef.title }}</v-btn>
      </span>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["itemData"],
};
</script>
