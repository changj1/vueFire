<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <SiteTitle :ptitle="site.title" />
      <v-spacer></v-spacer>
      <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn @click="save">
        <v-icon>mdi-check</v-icon>
      </v-btn>
      <v-btn @click="read">
        Read
      </v-btn>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <SiteFooter :footertitle="site.footer"/>
    <v-navigation-drawer app v-model="drawer">
      <SiteMenu />
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import SiteTitle from "@/views/site/title";
import SiteMenu from "@/views/site/menu";
import SiteFooter from "@/views/site/footer";

export default {
  components: { SiteTitle, SiteMenu, SiteFooter },
  name: "App",

  data() {
    return {
      site: {
        menu: [],
        title: "My Title 2020",
        footer: "My footer 2020",
      },
      drawer: false,
    };
  },
  created() {
    this.subscribe();
  },
  methods: {
    save() {
      this.$firebase
        .database()
        .ref()
        .child("Dashboard")
        .set({
          title: "greeting",
          text: "hello",
        });
    },
    read() {
      this.$firebase
        .database()
        .ref()
        .on("value", function(ss) {
          console.log(ss.val());
        });
    },
    subscribe() {
      this.$firebase
        .database()
        .ref()
        .child("site")
        .on(
          "value",
          (ss) => {
            const v = ss.val();
            if (!v) {
              this.$firebase.database().ref().child("site").set(this.site);
              return
            }
            this.site = v;
          },
          (e) => {
            console.log(e.message);
          }
        );
    },
  },
};
</script>
