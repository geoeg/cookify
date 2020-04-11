<template>
  <div>
    <p class="display-4 text-center mt-4 mb-4">
      {{ title }}
    </p>
    <p class="title font-weight-light text-center pa-0 mb-4">
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: "RecipePageTitles",
  props: ["title", "subtitle"],
};
</script>
