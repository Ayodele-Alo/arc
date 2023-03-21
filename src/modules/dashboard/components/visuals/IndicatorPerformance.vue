<template>
  <div>
    <div v-if="isLoaded">
      <Maps :mapOptions="mapData" />
    </div>
    <div class="coming_soon_map" v-else>
      <h4>PREPARING MAP&nbsp;</h4>
      <div class="loading_dots" />
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import ProjectService from "@/helpers/Project.Service";
import Maps from "@/modules/dashboard/components/map/index.vue";

export default defineComponent({
  name: "IndicatorPerformanceAcrossTime",
  components: {
    Maps,
  },
  data() {
    return {
      isLoaded: false,
      mapData: {
        series: [
          {
            data: [],
            dataLabels: {
              enabled: true,
              color: "#FFFFFF",
              format: "{point.name}",
            },
            tooltip: {
              headerFormat: "",
              pointFormat: "{point.name}: <b>{point.value}</b>",
            },
          },
        ],
      },
    };
  },
  methods: {
    async getMapDataFromApi() {
      try {
        const result = [];
        const data = [];
        const projects = await ProjectService.getAllActiveProject();
        for (const { no } of projects) {
          const respData = await ProjectService.getCountryByAwardNo(no);
          result.push(...respData);
        }

        const grouped = result.reduce((r, a) => {
          r[a.country_name] = [...(r[a.country_name] || []), a];
          return r;
        }, {});

        data.push(
          ...Object.entries(grouped).map(([key, values]) => ({
            name: key,
            value: values.length,
            code: values[0].country_code.toLowerCase(),
          }))
        );

        this.mapData.series[0].data = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoaded = true;
      }
    },
  },
  async mounted() {
    await this.getMapDataFromApi();
  },
});
</script>

<style lang="scss" scoped>
.vue-highcharts {
  width: 100%;
  height: 75vh;
}
div.chart_wrapper {
  position: relative;
}
div.info_menu {
  position: absolute;
  top: 15%;
  right: 1%;
  width: 200px;
  height: 100px;
  background-color: #f4f4f4;
  z-index: 10;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 0.6rem;
}
</style>
