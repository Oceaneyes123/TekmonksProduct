<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Tekmonks Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="100"
          @click="$router.push('/')"
          style="cursor:pointer"
        />
      </div> 
    </v-app-bar>

    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>


<style>
  .v-application{
    font-family: 'Chakra Petch', sans-serif !important;
  }

  
</style>
