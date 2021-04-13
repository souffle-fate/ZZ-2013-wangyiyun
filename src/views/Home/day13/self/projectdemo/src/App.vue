<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-if="$route.meta.showtab"></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  name: "App",
  components: {
    Footer,
  },
  watch: {
    // "$route.path":function(newVal){
    //   if(newVal=='/cart'){
    //   }
    // }
  },
};
</script>

<style>
</style>
