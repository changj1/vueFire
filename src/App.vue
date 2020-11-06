<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <SiteHome />
      <v-spacer></v-spacer>
      <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer
      height="30px"
      fixed
      color="primary"
      dark
      class="font-weight-medium"
    >
      <v-col class="py-2 white--text text-center" cols="12">
        {{ new Date().getFullYear() }} —
        <strong style="font-size: 12px;">Vuetify</strong>
      </v-col>
    </v-footer>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import SiteHome from "@/views/site/title";

export default {
  components: { SiteHome },
  name: "App",

  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      right: null,
      drawer: false,
    };
  },
};
</script>
