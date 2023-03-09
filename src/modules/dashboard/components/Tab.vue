<template>
  <section id="tab" class="tab shadow_sm">
    <div class="container-lg container-fluid tab_container">
      <div
        :title="el.name"
        :class="[getActiveTab === el.name ? 'active_tab' : '', 'tabs']"
        v-for="(el, i) in getTabValues"
        :key="i"
        @click="switchTab(el.name)"
      >
        <span class="tab-label">{{ el.name }}</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "Tabs-Component",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getTabValues", "getActiveTab"]),
    currentTab() {
      console.log(this.$route.params.tab || this.$route.meta.defaultTab);
      return this.$route.params.tab || this.$route.meta.defaultTab;
    },
  },
  methods: {
    ...mapMutations(["setActiveTab"]),
    switchTab(tabName: string) {
      this.setActiveTab(tabName);
      // this.$router.push({
      //   name: "Dashboard",
      //   params: {
      //     tab: decodeURI(tabName).replace(/\s+/g, "_").toLocaleLowerCase(),
      //   },
      // });
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/modules/dashboard/style/tab.scss";
</style>
