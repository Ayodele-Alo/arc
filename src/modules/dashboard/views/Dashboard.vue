<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="dashboard">
    <Tab />
    <SectionCard />
    <EntryLogin v-if="getActiveModal === 'entry'" />
    <ImportLogin v-if="getActiveModal === 'import'" />
    <ReportLogin v-if="getActiveModal === 'report'" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import Tab from "../components/Tab.vue";
import SectionCard from "../components/SectionCard.vue";
import EntryLogin from "../components/login/Entry.vue";
import ImportLogin from "../components/login/Import.vue";
import ReportLogin from "../components/login/Report.vue";

export default defineComponent({
  name: "Dashboard-Page",
  components: {
    Tab,
    SectionCard,
    EntryLogin,
    ImportLogin,
    ReportLogin,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getActiveModal", "getActiveTab"]),
  },
  methods: {
    ...mapMutations(["setActiveTab"]),
  },
});
</script>

<style lang="scss" scoped>
section.dashboard {
  background: #f9f9f9 0% 0% no-repeat padding-box;
}
</style>
