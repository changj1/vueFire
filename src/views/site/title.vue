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
    <v-snackbar
      v-model="snackbar"
    >
      {{ text2 }}

      <template >
      <!-- <template v-slot:action="{ attrs }"> -->
        <v-btn
          color="yellow"
          text
          @click="snackbar = false"
        >
          <!-- v-bind="attrs" -->
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-toolbar-title>
</template>

<script>
export default {
  props:['ptitle'],
  data() {
    return {
      dialog: false,
      text: this.title,
      snackbar: false,
      text2: ''
    }
  },
  methods: {
    async save(){
      try{
        await this.$firebase.database().ref().child('site').update({title: this.text})
      }
      catch(e){
        this.snackbar = true;
        this.text2 = e.message;
      }
      finally{
        this.dialog = false;
      }
    },
    openDialog(){
      this.dialog = true;

    }
  },
};
</script>

<style>
.v-snack__content{
  background-color: blue;
}
</style>
