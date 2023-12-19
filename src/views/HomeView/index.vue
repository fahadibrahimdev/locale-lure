<script setup>
import { ref } from "vue";
import NavBar from "@/views/HomeView/component/NavBar.vue";
import HeroSection from "@/views/HomeView/component/HeroSection.vue";
import BrandFeatures from "@/views/HomeView/component/BrandFeatures.vue";
import BrandSelection from "@/views/HomeView/component/BrandSelection.vue";
import ExtraBenefits from "@/views/HomeView/component/BrandBenefits.vue";
import BrandFAQs from "@/views/HomeView/component/BrandFAQs.vue";
import BrandCTO from "@/views/HomeView/component/BrandCTO.vue";
import Footer from "@/views/HomeView/component/Footer.vue";
import MenuSideBar from "@/views/HomeView/component/MenuSideBar.vue";

const isSideBarOpen = ref(false)
</script>

<template>
  <MenuSideBar
      :is-expanded="isSideBarOpen"
      @toggle-menu-sidebar="(val) => isSideBarOpen = val"
  />
  <main>
    <div class="header-bg-image">
      <NavBar
          @toggle-menu-sidebar="(val) => isSideBarOpen = val"
      />
      <HeroSection/>
    </div>
    <BrandFeatures/>
    <BrandSelection/>
    <ExtraBenefits/>
    <BrandFAQs/>
    <BrandCTO/>
    <Footer/>
  </main>
</template>

<style>
.header-bg-image{
  position: relative;
  background: radial-gradient(82.42% 42.09% at 49.59% 49.77%, #273B78 2%, #271848 100%);
  z-index: 1;
}
.header-bg-image:before{
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  background-image: url("/images/hero-image.webp");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}
@media (max-width: 1092px) {
  .header-bg-image:before{
    height: 50%;
  }
}
</style>