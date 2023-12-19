<script setup>
import { heroSectionContent, buttonsLabel } from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
</script>

<template>
  <section id="home" class="pt-40 pb-96 sm:pb-56 xl:py-56 3xl:py-64 z-20">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-20 lg:gap-10 3xl:gap-10">
        <div class="text-white">
          <h1 class="text-4.5xl lg:text-5xl 3xl:text-7xl font-bold pb-5">
            {{ heroSectionContent.heading }}
          </h1>
          <p class="text-base lg:text-xl 2xl:text-3xl">
            {{ heroSectionContent.text }}
          </p>

          <div class="flex gap-5 pt-12 lg:pt-20 xl:pt-24 3xl:pt-38">
            <SiteButton>
              {{ buttonsLabel.CTOBtn }}
            </SiteButton>
            <SiteButton outlined>
              {{ buttonsLabel.accent }}
            </SiteButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
