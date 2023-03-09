<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="homepage row">
    <div class="col-lg-6 order-lg-first order-md-last d-none d-md-flex">
      <div class="img_container">
        <img
          :src="require(`@/assets/hero_bg.png`)"
          alt="Hero_img"
          class="img-fluid"
        />
      </div>
    </div>
    <div class="col-lg-6 description order-lg-last order-md-first">
      <div class="welcome_note p-lg-5 mx-3 p-3">
        <h3>{{ textState.welcomeNote }}</h3>
        <div class="underline"></div>
      </div>
      <div class="description_note p-lg-4 p-3">
        <h3>{{ textState.heading }}</h3>
        <div class="underline_2" />
        <p>{{ textState.description }}</p>
      </div>
      <div class="text-center link_out">
        <router-link to="/dashboard"
          ><button class="btn btn_aphrc" @click="goToDasboard">
            Proceed to Dashboard
          </button></router-link
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { homepage } from "../data";

const textState = reactive({
  welcomeNote: homepage.welcomeNote,
  heading: homepage.heading,
  description: homepage.description,
});

</script>

<style lang="scss" scoped>
@import "../style/homepage.scss";
</style>
