<template>
  <div>
    <v-menu offset-y v-if="!$store.state.fireUser">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          sign_in
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" link>
          <v-list-item-title @click="signIn(item.key)">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y v-else>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          sign_out
        </v-btn>
      </template>
      <v-list>
        <v-list-item link>
          <v-list-item-title @click="signOut">
            LogOut{{ fireuser }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ISnackBar :errormsg="errormsg" :snackbar="snackbar" />
  </div>
</template>

<script>
import ISnackBar from "@/components/ISnackBar.vue";
// import store from "../../store"
export default {
  components: {
    ISnackBar,
  },
  data() {
    return {
      items: [
      { title: "Login with Google", key: 1 },
      { title: "Login with Facebook", key: 2 },
    ],
    snackbar: false,
    errormsg: "",
    }
  },
  computed :{
    fireuser(){
      return this.$store.state.fireUser
    }
  },
  methods: {
    async signIn(key) {
      
      try{
        if(key == 2) throw new Error();
        if(key != 1) return;
        const provider = new this.$firebase.auth.GoogleAuthProvider();
        this.$firebase.auth().languageCode = "ko";
        const result = await this.$firebase.auth().signInWithPopup(provider)
        // const user = await this.$firebase.auth().signInWithPopup(provider)
        // this.$store.commit('setFireUser', user)

        console.log('login',result.user);
        // throw new Error()
      }catch(e){
        this.snackbar = true;
        this.errormsg = e.message;
      } 
    },
    signOut(){
      this.$firebase.auth().signOut()
      console.log('logout', this.$store.state.fireUser);

    }
  },
};
</script>

<style></style>
