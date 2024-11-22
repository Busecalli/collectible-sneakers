<template> 
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>

</template>

<script lang="ts">
import { defineComponent} from "vue";
import Header from "@/presentation/layout/Header.vue";
import Footer from "@/presentation/layout/Footer.vue";

export default defineComponent({
  name: "layout",
  components: { Header, Footer },
  setup() {
  },
});
</script>

<style>
@import "../assets/bootstrap/css/bootstrap.min.css";


body {
  font-family: "Roboto", sans-serif;
}</style>