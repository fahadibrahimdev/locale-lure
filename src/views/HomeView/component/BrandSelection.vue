<script setup>
import { brandSelectionContent } from "@/@core/constants/home-view";
</script>

<template>
  <section id="whyUs" class="container text-start md:text-center pt-20 md:pt-28">
    <h2 class="text-2xl lg:text-3xl xl:text-4.5xl 3xl:text-5.5xl font-bold">
      {{ brandSelectionContent.heading }}
    </h2>
    <hr class="w-1/6 sm:w-[6%] md:mx-auto border-2 border-secondary my-6 lg:my-9 3xl:my-12">

    <template v-for="(content, i) in brandSelectionContent.descriptions" :key="i">
      <p class="text-lg 2xl:text-3xl pt-6">
        {{ content }}
      </p>
    </template>
  </section>
</template>

<style scoped>
h2{
  background: linear-gradient(24deg, #FF681F 15.57%, #FE7123 29.6%, #FC892C 52.25%, #F9AF3C 80.57%, #F9B53E 84.44%, #F9B53E 84.44%);
  background-clip: text;
  color: transparent;
  display: inline;
}
</style>
