<template>
  <div>
    <div class="mt-2 mb-2" v-for="img in images" :key="img.label">
      <p class="subtitle-2 text-justify clearfix pa-0 mt-4 mb-4">
      {{ description }}
      </p>
      <v-img aspect-ratio="2" :src="img.src" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["description", "images"],
};
</script>
