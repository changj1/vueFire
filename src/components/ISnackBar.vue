<template>
  <v-snackbar v-model="snackbar">
    {{ errormsg }}
    <template>
      <!-- <template v-slot:action="{ attrs }"> -->
      <v-btn color="yellow" text @click="snackbar = false">
        <!-- v-bind="attrs" -->
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: ["errormsg", "snackbar"],
  data() {
    return {
      // snackbar: false,
    };
  },
};
</script>

<style>
.v-snack__content{
  background-color: blue;
}
</style>
