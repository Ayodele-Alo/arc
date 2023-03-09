<template>
  <section class="login_modal_entry">
    <div class="main_form">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum dicta quo quae, aliquam aliquid accusantium praesentium dolore esse repellat corrupti, voluptatem rem doloremque recusandae inventore similique non, dolores odio?
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "Entry-Login-Modal",
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
@import "@/modules/dashboard/style/login_modal.scss";
</style>
