<template>
  <div>
    <v-footer app
      height="50px"
      fixed
      color="primary"
      dark
      class="font-weight-medium"
    >
      <v-col class="py-2 white--text text-left" absolute cols="12">
        {{ new Date().getFullYear() }} —
        <strong style="font-size: 15px;" @click="openDialog">{{ footertitle }}</strong>
        <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-title>
            Edit footer
            <v-spacer></v-spacer>
            <v-btn @click="save"><v-icon>mdi-content-save</v-icon></v-btn>
            <v-btn @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="text"
              outlined
              label="title"
              @keypress.enter="save"
            >
            </v-text-field>
          </v-card-text>
        </v-card>
      </v-dialog>
      </v-col>
      
    </v-footer>
  </div>
</template>

<script>
export default {
  props: ["footertitle"],
  data() {
    return {
      dialog: false,
      text: this.footertitle,
    };
  },
  methods: {
    save() {
      console.log("save");
      this.$firebase
        .database()
        .ref()
        .child("site")
        .update({ footer: this.text });
      this.dialog = false;
    },
    openDialog() {
      this.dialog = true;
    },
  },
};
</script>

<style></style>
