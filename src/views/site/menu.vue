<template>
  <div>
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

      <v-list-item @click="dialogItem=true" link>
        <v-list-item-icon>
          <v-icon>mdi-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>추가하기</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-dialog v-model="dialogItem" max-width="500">
      <v-card>
        <v-card-title>
          Add Item
          <v-spacer></v-spacer>
          <v-btn @click="addMenu"><v-icon>mdi-content-save</v-icon></v-btn>
          <v-btn @click="dialogItem=false"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="title" outlined label="title" @keypress.enter="addMenu"> </v-text-field>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      dialogItem: false,
      title:''
    };
  },
  methods: {
    addMenu() {
      let menu = {title:'', icon:"mdi-image"}
      menu.title = this.title
      this.items.push(menu)
      this.save()
      // this.dialogItem = false
    },
    async save(){
      try{
        await this.$firebase.database().ref().child('site').update({menu: this.items})
      }
      catch(e){
        console.log(e.message);
        // this.snackbar = true;
        // this.text2 = e.message;
      }
      finally{
        this.dialogItem = false;
      }
    },
    
  },
};
</script>

<style></style>
