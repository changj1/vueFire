<template>
  <v-toolbar-title width="100px">
    <a @click="openDialog">{{ptitle}}</a> 
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>
          Edit title
          <v-spacer></v-spacer>
          <v-btn @click="save"><v-icon>mdi-content-save</v-icon></v-btn>
          <v-btn @click="dialog=false"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="text" outlined label="title" @keypress.enter="save"> </v-text-field>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-toolbar-title>
</template>

<script>
export default {
  props:['ptitle'],
  data() {
    return {
      dialog: false,
      text: this.title
    }
  },
  methods: {
    save(){
      console.log("save");
      this.$firebase.database().ref().child('site').update({title: this.text})
      this.dialog = false
    },
    openDialog(){
      this.dialog = true;
    }
  },
};
</script>

<style></style>
