<template>
  <v-app-bar app :hide-on-scroll="true" :short="true">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="30"
      />
    </div>
    <v-toolbar-title>Cookify</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-for="item in items" :key="item.title" :to="item.link">
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    items() {
      let menuItems = [
        {
          title: "Recipes",
          icon: "mdi-chef-hat",
          link: "/recipes",
        },
        {
          title: "Contact",
          icon: "mdi-account-box",
          link: "/contact",
        },
      ];
      return menuItems;
    },
  },
};
</script>

<style scoped></style>
