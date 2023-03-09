<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="dashboard">
    <Tab />
    <SectionCard />
  </section>
</template>

<script lang="ts" setup>
import { mapGetters } from "vuex";
import Tab from "../components/Tab.vue";
import SectionCard from "../components/SectionCard.vue";
import EntryLogin from "../components/login/Entry.vue";
</script>

<style lang="scss" scoped>
section.dashboard {
  background: #f9f9f9 0% 0% no-repeat padding-box;
}
</style>
