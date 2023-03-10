<template>
  <div v-if="isLoaded">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Highcharts from 'highcharts/highmaps';
// import HighchartsVue from 'highcharts-vue';
// import HighchartsMapModule from 'highcharts/modules/map'
import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import mapData from "@highcharts/map-collection/custom/world.geo.json";
import exportData from "highcharts/modules/export-data";
import exporting from "highcharts/modules/exporting";
import noData from "highcharts/modules/no-data-to-display";
import loadDrilldown from "highcharts/modules/drilldown";
import offlineExporting from "highcharts/modules/offline-exporting";
// import worldMap from "./world-map-data.json";
// import { genComponent } from 'vue-highcharts';

// Highcharts.maps["myMapName"] = mapData;

// load map
HighchartsMap(Highcharts);
exporting(Highcharts);
offlineExporting(Highcharts);
exportData(Highcharts);
noData(Highcharts);
loadDrilldown(Highcharts);

export default defineComponent({
  name: "MapView",
  components: {
    // HighchartsVue,
    Highcharts,
  },
  //   data() {
  //     return {
  //       isLoaded: false,
  //       chartOptions: {
  //         chart: {
  //           map: worldMap,
  //         },
  //         title: {
  //           text: "World Map",
  //         },
  //         series: [
  //           {
  //             name: "Countries",
  //             data: [
  //               // Add your data here
  //             ],
  //           },
  //         ],
  //       },
  //     };
  //   },
  data() {
    return {
      isLoaded: false,
      chartOptions: {
        chart: {
          map: "custom/world",
        },
        title: {
          text: "World Map",
        },
        mapNavigation: {
          enabled: true,
        },
        series: [
          {
            type: "map",
            data: [],
            mapData,
          },
        ],
      },
    };
  },
  mounted() {
    HighchartsMap(Highcharts);
    this.isLoaded = true;
  },
});
</script>
