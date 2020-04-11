<template>

  <v-app-bar app dense absolute flat :hide-on-scroll="true" color="grey darken-1">
    <v-app-bar-nav-icon>
      <v-avatar size="40">
        <!-- <v-img src="../assets/jokata.jpg" alt="" /> -->
        <v-icon large class="white--text">mdi-chef-hat</v-icon>
      </v-avatar>
    </v-app-bar-nav-icon>

    <v-toolbar-title class="font-weight-bold white--text"
      >Cookify</v-toolbar-title
    >

    <v-spacer></v-spacer>

    <v-btn
      v-for="item in items"
      :key="item.title"
      :to="item.link"
      text
      rounded
      class="white--text font-weight-black overline"
    >
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
