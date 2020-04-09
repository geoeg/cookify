<template>
  <v-app-bar app dense absolute :hide-on-scroll="true" color="white">
    <v-app-bar-nav-icon>
      <v-avatar size="40">
        <v-img src="../assets/jokata.jpg" alt="" />
      </v-avatar>
    </v-app-bar-nav-icon>

    <v-toolbar-title class="font-weight-bold">Cookify</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn v-for="item in items" :key="item.title" :to="item.link" text rounded>
      <v-icon left>{{ item.icon }}</v-icon>
      {{ item.title }}
    </v-btn>
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
