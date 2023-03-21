<template>
  <section class="section_card">
    <div
      v-for="(el, i) in getActiveTabConfig.visuals"
      :key="i"
      :id="`${el.name}-${i}`"
      class="card card_component my-lg-5 my-3"
    >
      <div class="card-header">
        <div class="row">
          <div class="col-md-10 col-12">
            <h5>{{ el.name }}</h5>
            <div class="underline" />
          </div>
          <div
            class="col-md-2 d-flex justify-content-end"
            @click="toggleFullScreen(`${el.name}-${i}`)"
          >
            <el-icon :size="25" :color="'white'" style="cursor: pointer"
              ><Close v-if="isFullScreen === true" /> <FullScreen v-else
            /></el-icon>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div v-if="el.tableau === false && el.url !== ''">
          <AlertTable v-if="el.url === 'alert_table'" class="height_view" />
        </div>
        <div v-if="el.tableau === false && el.url !== ''" class="height_view">
          <IndicatorPerformanceVue
            v-if="el.url === 'indicator_performance_map'"
            class="height_view"
          />
        </div>
        <iframe
          v-else-if="el.tableau === true && el.url !== ''"
          :src="el.url"
          width="100%"
          height="500"
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
import AlertTable from "./visuals/AlertTable.vue";
import IndicatorPerformanceVue from "./visuals/IndicatorPerformance.vue";

export default defineComponent({
  name: "Section-Card",
  components: {
    AlertTable,
    IndicatorPerformanceVue,
  },
  data() {
    return {
      isFullScreen: false,
    };
  },
  computed: {
    ...mapGetters(["getActiveTabConfig", "getActiveTab"]),
  },
  methods: {
    ...mapMutations(["setActiveTab"]),

    toggleFullScreen(arg: string) {
      const elem = document.getElementById(arg) as HTMLDivElement;
      if (elem) {
        if (elem.requestFullscreen) {
          if (document.fullscreenElement) {
            document.exitFullscreen();
            // decrease the height of the iframe
            const iframe = elem.getElementsByTagName("iframe")[0];
            if (iframe) {
              iframe.style.height = "500px";
              iframe.style.width = "100%";
              // remove animation
              iframe.style.transition = "none";
            }

            const highcharts = elem.getElementsByClassName(
              "vue-highcharts"
            )[0] as HTMLDivElement;
            if (highcharts) {
              highcharts.style.height = "35rem";
              highcharts.style.width = "100%";
              highcharts.style.transition = "none";
            }
          } else {
            elem.requestFullscreen();
            // increase the height of the iframe
            const iframe = elem.getElementsByTagName("iframe")[0];
            if (iframe) {
              iframe.style.height = "100%";
              iframe.style.width = "100%";
              // add animation
              iframe.style.transition = "all 0.5s ease-in-out";
            }

            const highcharts = elem.getElementsByClassName(
              "vue-highcharts"
            )[0] as HTMLDivElement;
            if (highcharts) {
              highcharts.style.height = "80vh";
              highcharts.style.width = "100%";
              highcharts.style.transition = "all 0.5s ease-in-out";
            }
          }
        } else {
          console.error("Fullscreen API is not supported");
        }
      } else {
        console.error("Element not found");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/modules/dashboard/style/section_card.scss";
</style>
