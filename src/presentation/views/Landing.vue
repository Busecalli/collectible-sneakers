<template>
  <Hero></Hero>
  <Best></Best>
  <Join></Join>
  <Testimonial></Testimonial>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@/presentation/sections/Hero.vue";
import Best from "@/presentation/sections/Best.vue";
import Join from "@/presentation/sections/Join.vue";
import Testimonial from "@/presentation/sections/Testimonial.vue";

export default defineComponent({
  name: "landing-page",
  components: { Hero, Best, Join, Testimonial },
  setup() {
    return {};
  },
});
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}</style>
