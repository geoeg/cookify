<template>
  <div>
    <p class="subtitle-2 text-justify clearfix pa-0 mt-4 mb-4">
      {{ recipe[0].content }}
    </p>
    <v-img aspect-ratio="2" :src="recipe[0].images[1].src" />
    <p class="subtitle-2 text-justify clearfix pa-0 mt-4 mb-4">
      {{ recipe[0].content }}
    </p>
    <v-img aspect-ratio="2" :src="recipe[0].images[0].src" />
    <p class="subtitle-2 text-justify clearfix pa-0 mt-4 mb-4">
      {{ recipe[0].content }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["recipe"],
};
</script>
