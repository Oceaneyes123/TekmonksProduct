<template>
  <v-container class="d-flex justify-center align-center">
    <div @click="route('api400')" style="cursor:pointer">
      <v-card class="pa-5 d-flex flex-column align-center justify-center">
        <v-img src="../assets/api400/api400-orange-img.png" width="150" class="mb-5" contain></v-img>
        <div>
          API400
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },

  methods: {
    route(route){
      this.$router.push(route)
    }
  }
};
</script>
