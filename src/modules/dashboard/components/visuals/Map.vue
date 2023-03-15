<template>
  <div v-if="isLoaded">
    <vue-highcharts type="mapChart" :options="chartOptions"></vue-highcharts>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import VueHighcharts from 'vue3-highcharts';
import mapData from "@highcharts/map-collection/custom/world.geo.json";
// import mapData from "./world-map-data.json";

import Highcharts from 'highcharts';
import HighchartsMap from 'highcharts/modules/map';
import exporting from 'highcharts/modules/exporting';
import noData from 'highcharts/modules/no-data-to-display';
import offlineExporting from 'highcharts/modules/offline-exporting';
import loadDrilldown from 'highcharts/modules/drilldown';
import exportData from 'highcharts/modules/export-data';

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
   data() {
    return {
      isLoaded: false,
      chartOptions: {
        chart: {
          map: "custom/world",
            //  events: {
            //     drilldown,
            //     drillup
            // }
        },
        title: {
          text: "APHRC",
        },
         credits: {
          enabled: false,
        },
        legend: {
              title: {
                  text: 'Indicator Performance Across Time',
                  style: {
                      color: (
                          Highcharts.defaultOptions &&
                          Highcharts.defaultOptions.legend &&
                          Highcharts.defaultOptions.legend.title &&
                          Highcharts.defaultOptions.legend.title.style &&
                          Highcharts.defaultOptions.legend.title.style.color
                      ) || 'black'
                  }
              }
          },
          mapNavigation: {
              enabled: true,
              buttonOptions: {
                  verticalAlign: 'bottom'
              }
          },
          tooltip: {
              backgroundColor: '#eeeeee',
              padding: '10px',
              borderWidth: 1,
              shadow: true,
              useHTML: true,
              pointFormat: '<span class="f32"><span class="flag {point.properties.hc-key}">' +
                  '</span></span> {point.name}<br>' +
                  '<span style="font-size:20px">{point.value}/aphrc</span>',
              positioner: function () {
                  return { x: 0, y: 50 };
              }
            },

          colorAxis: {
              min: 1,
              max: 1000,
              type: 'logarithmic'
          },
          series: [{
              name: 'DATA TEST',
              joinBy: ['hc-key', 'code'], // join by hc-key property
              animation: true,
              data: [{
                name: 'Kenya',
                value: 100,
                code: 'ke' // ISO-3166-1-A2 code for Canada
              }, {
                name: 'United States',
                value: 75,
                code: 'us' // ISO-3166-1-A2 code for United States
              }, {
                name: 'Nigeria',
                value: 50,
                code: 'ng' // ISO-3166-1-A2 code for Mexico
              }],
              mapData: mapData,
              states: {
                hover: {
                  color: '#61A229'
                }
              },
              dataLabels: {
                enabled: true,
                format: '{point.name}'
              }
            }],
      },
    };
  },
  mounted() {
    this.isLoaded = true;
  },
});
</script>

<style lang="scss" scoped>
.vue-highcharts {
  width: 100%;
  height: 75vh;
}
</style>
