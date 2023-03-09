<template>
  <section class="section_card">
    <div
      v-for="(el, i) in getActiveTabConfig.visuals"
      :key="i"
      class="card card_component my-lg-5 my-3"
    >
      <div class="card-header">
        <h5>{{ el.name }}</h5>
        <div class="underline" />
      </div>
      <div class="card-body">
        <iframe
          v-if="el.url !== ''"
          data-v-728e96cc=""
          :src="el.url"
          width="100%"
          height="400"
          class="embed-responsive-item"
        ></iframe>
        <div class="coming_soon" v-else>
          <h4>COMING SOON&nbsp;</h4>
          <div class="loading_dots" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "Section-Card",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getActiveTabConfig", "getActiveTab"]),
  },
  methods: {
    ...mapMutations(["setActiveTab"]),
  },
});
</script>

<style lang="scss" scoped>
@import "@/modules/dashboard/style/section_card.scss";
</style>
