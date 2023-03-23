<template>
  <div v-if="isLoaded" class="chart_wrapper">
    <vue-highcharts type="mapChart" :options="chartOption" />
    <div id="info-menu" />
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import VueHighcharts from "vue3-highcharts";
// import mapData from "@highcharts/map-collection/custom/world.geo.json";
import mapData from "./world-map-data.json";

import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import exporting from "highcharts/modules/exporting";
import noData from "highcharts/modules/no-data-to-display";
import offlineExporting from "highcharts/modules/offline-exporting";
import loadDrilldown from "highcharts/modules/drilldown";
import exportData from "highcharts/modules/export-data";

import chartOptions from "./defaultOptions";

HighchartsMap(Highcharts);
exporting(Highcharts);
offlineExporting(Highcharts);
exportData(Highcharts);
noData(Highcharts);
loadDrilldown(Highcharts);

Highcharts.maps["custom/world"] = mapData;

export default defineComponent({
  name: "MapView",
  components: {
    VueHighcharts,
  },
  props: {
    mapOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isLoaded: false,
      chartOption: {},
    };
  },
  methods: {
    async populateMapOptions() {
      this.chartOption = chartOptions;
      this.chartOption.legend.style = {
        color:
          (Highcharts.defaultOptions &&
            Highcharts.defaultOptions.legend &&
            Highcharts.defaultOptions.legend.title &&
            Highcharts.defaultOptions.legend.title.style &&
            Highcharts.defaultOptions.legend.title.style.color) ||
          "black",
      };
      this.chartOption.series.mapData = Highcharts.maps["custom/world"];
    },
  },
  async mounted() {
    this.isLoaded = false;
    this.chartOption.series[0].data = this.mapOptions.series[0].data;
    this.chartOption.series[0].name = this.mapOptions.series[0].name;
    this.chartOption.series[0].events = this.mapOptions.series[0].events;
    this.chartOption.subtitle = this.mapOptions.subtitle;
    this.chartOption.legend.title.text = this.mapOptions.legend.title.text;
    this.isLoaded = true;
  },
  async created() {
    await this.populateMapOptions();
  },
});
</script>

<style lang="scss">
.vue-highcharts {
  width: 100%;
  height: 32.5rem;
}
div.chart_wrapper {
  position: relative;
}
div.info_menu {
  position: absolute;
  top: 15%;
  right: 1%;
  width: 200px;
  height: 25rem;
  background-color: #f4f4f4;
  z-index: 10;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 0.6rem;
}
</style>
