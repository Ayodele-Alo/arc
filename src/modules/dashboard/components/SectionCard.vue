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
            v-if="el.fullScreen"
            class="col-md-2 d-flex justify-content-end"
            @click="toggleFullScreen(`${el.name}-${i}`)"
          >
            <el-icon :size="25" :color="'white'" style="cursor: pointer"
              ><Close v-if="isFullScreen === true" />
              <el-tooltip
                v-else
                class="box-item"
                effect="dark"
                content="click to view this section on fullscreen"
                placement="top-start"
              >
                <FullScreen />
              </el-tooltip>
            </el-icon>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div v-if="el.tableau === false && el.url !== ''">
          <AlertTable v-if="el.url === 'alert_table'" />
        </div>
        <div v-if="el.tableau === false && el.url !== ''">
          <IndicatorPerformanceVue
            v-if="el.url === 'indicator_performance_map'"
          />
        </div>
        <div v-if="el.tableau === false && el.url !== ''">
          <DonorGeographic v-if="el.url === 'donor_geographic'" />
        </div>
        <div v-if="el.tableau === false && el.url !== ''">
          <DonorPerformance v-if="el.url === 'donor_performance_overtime'" />
        </div>
        <!-- 
          style="height: inherit; width: 100%" -->
        <iframe
          v-else-if="el.tableau === true && el.url !== ''"
          :src="el.url"
          width="100%"
          height="500"
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
import DonorPerformance from "./visuals/DonorPerformance.vue";
import DonorGeographic from "./visuals/DonorGeographic.vue";

export default defineComponent({
  name: "Section-Card",
  components: {
    AlertTable,
    IndicatorPerformanceVue,
    DonorPerformance,
    DonorGeographic,
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
      const alertTableSelect = elem.getElementsByClassName(
        "alert_table_select"
      )[0] as HTMLDivElement;
      const donorSelect = elem.getElementsByClassName(
        "donor_select"
      )[0] as HTMLDivElement;
      const themeSelect = elem.getElementsByClassName(
        "theme_select"
      )[0] as HTMLDivElement;

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
              highcharts.style.height = "32.5rem";
              highcharts.style.transition = "none";
            }

            if (alertTableSelect) {
              alertTableSelect.style.display = "block";
            }
            if (donorSelect) {
              donorSelect.style.display = "block";
            }
            if (themeSelect) {
              themeSelect.style.display = "block";
            }
          } else {
            elem.requestFullscreen();
            // increase the height of the iframe
            const iframe = elem.getElementsByTagName("iframe")[0];
            if (iframe) {
              iframe.style.height = "100%";
              iframe.style.width = "100%";
              // add animation
              iframe.style.transition = "all 1s ease-in-out";
            }

            const highcharts = elem.getElementsByClassName(
              "vue-highcharts"
            )[0] as HTMLDivElement;
            if (highcharts) {
              highcharts.style.height = "80vh";
            }

            // fix dropdown menu not showing on fullscreen

            if (alertTableSelect) {
              alertTableSelect.style.display = "none";
            }
            if (donorSelect) {
              donorSelect.style.display = "none";
            }
            if (themeSelect) {
              themeSelect.style.display = "none";
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
