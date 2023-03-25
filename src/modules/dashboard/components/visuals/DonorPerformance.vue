<template>
  <div>
    <div v-if="isLoaded">
      <div className="d-flex justify-content-end w-100 mt-lg-3 mt-2 mb-3">
        <div class="year_select">
          <label for="year" class="mx-2">Start Year:</label><br />
          <el-select
            v-model="yearValue"
            filterable
            placeholder="--Select Year--"
            class="mx-2"
            id="year"
            placement="top-start"
            :loading="selectLoadingYear"
          >
            <el-option
              v-for="(item, i) in yearList"
              :key="i"
              :label="item.year"
              :value="item.year"
            ></el-option>
          </el-select>
        </div>
        <div class="donor_select">
          <label for="donor" class="mx-2">Donor:</label><br />
          <el-select
            v-model="donorValue"
            filterable
            placeholder="--Select Donor--"
            class="mx-2"
            id="donor"
            placement="top-start"
          >
            <el-option
              v-for="(item, i) in donorList"
              :key="i"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </div>
        <div class="theme_select">
          <label for="theme">Theme:</label><br />
          <el-select
            v-model="themeValue"
            filterable
            placeholder="--Select Theme--"
            id="theme"
            placement="top-start"
            :loading="selectLoadingTheme"
          >
            <el-option
              v-for="(item, j) in themeList"
              :key="j"
              :label="item.label"
              :value="item.label"
              id="theme"
            ></el-option>
          </el-select>
        </div>
      </div>
      <vue-highcharts type="chart" :options="chartOptions" />
    </div>
    <div class="coming_soon_map" v-else>
      <h4>PREPARING TREND CHART&nbsp;</h4>
      <div class="loading_dots" />
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import VueHighcharts from "vue3-highcharts";
import ProjectService from "@/helpers/Project.Service";

export default defineComponent({
  name: "DonorPerformanceAcrossTime",
  components: {
    VueHighcharts,
  },
  data() {
    return {
      isLoaded: true,
      selectLoadingTheme: false,
      selectLoadingYear: false,
      donorValue: "",
      themeValue: "",
      yearValue: "",
      donorList: [],
      themeList: [],
      yearList: [],
      chartOptions : {
        title: {
          text: "",
        },

        chart: {
        type: 'line'
        },

        subtitle: {
          text: "Donor Performance Across Time",
        },

        credits: {
          enabled: false,
        },

        yAxis: {
          title: {
            text: "Grant Amount (USD)",
          },
        },

        xAxis: {
          // accessibility: {
          //   rangeDescription: "Range: 2010 to 2026",
          // },
          title: {
            text: "Start Date",
          },
          categories: [],
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false,
            },
            pointStart: 0,
          },
          line: {
            dataLabels: {
                enabled: true
            },
        }
        },

        series: [
          {
            name: "",
            data: [],
          },
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
              },
            },
          ],
        },
      },
    };
  },
  watch: {
    // watch for changes in the donor value and theme value: if both create an array of objects with the donor and theme values and pass it to the api call to get the data

    donorValue() {
      this.getThemeList();
      this.getYearList(this.donorValue, this.themeValue);
      if (this.themeValue === "ALL" || this.themeValue === "") {
        return
      }
      this.getChartData();
    },

    themeValue() {
      if (this.themeValue === "") {
        return
      }
      this.getYearList(this.donorValue, this.themeValue);
      this.getChartData();
    },

    yearValue() {
      this.getChartData();
    },

  },
  methods: {
    // Get Theme List !! Important: as it controls the donor list and the year list
    async getDonor() {
      try {
        this.isLoaded = false;
        const donorList = await ProjectService.getDonorList()

        donorList.forEach((item) => {
          item.label = item.sponsor;
          delete item.sponsor;
        });

        this.donorList = donorList;
        this.donorValue = "APHRC";
        // this.donorValue = this.donorList[0].label;

      } catch (error) {
        console.log(error);
      } finally {
        this.isLoaded = true;
      }
    },
    // Plot Trend Chart
    async getChartData() {
      // check if both donor and theme and  are selected
      this.isLoaded = false;
      try {
        const data = await ProjectService.getPerformanceData(
          this.donorValue,
          this.themeValue,
          this.yearValue
        );

        // check if the data is empty
        if (data.length === 0) {
          this.chartOptions.series[0].data = [];
          this.chartOptions.xAxis.categories = [];
          this.chartOptions.title.text = "No Data";
          this.chartOptions.series[0].name = "No Data";
          return;
        }

        // sort the data by start_date
        data.sort((a, b) => {
          return new Date(a.start_date) - new Date(b.start_date);
        });

        const chartData = data.map((item) => {
          // convert start_date to month and year string
          item.start_date = new Date(item.start_date).toLocaleString("en-us", {
            month: "long",
            year: "numeric",
          });

          // format the budget amount from string to number with ,
          item.total_budget = Number(item.total_budget.replace(/,/g, ""));
          return [item.description, item.total_budget];
        });

        // set the categories to the start_date year and month
        this.chartOptions.xAxis.categories = data.map((item) => item.start_date);
        // get the first start_date year value convert it to number as the start point
        // const startYear = Number(data[0].start_date.split(" ")[1]);
        // set the start point for the xAxis
        // this.chartOptions.xAxis.min = startYear;

        // change the line color
        this.chartOptions.series[0].color = "#D7CE9F";

        if (this.themeValue === "ALL") {
          this.chartOptions.title.text = `${this.donorValue}`;
          this.chartOptions.series[0].name = `${this.donorValue}`;
        } else {
          this.chartOptions.title.text = `${this.donorValue} - ${this.themeValue}`;
          this.chartOptions.series[0].name = `${this.donorValue} - ${this.themeValue}`;
        }

        this.chartOptions.series[0].data = chartData;

      } catch (error) {
        console.log(error);
      } finally {
        this.isLoaded = true;
      }
    },
    // get year list
    async getYearList(arg1='', arg2='') {
      // if the donor and theme values are not empty, pass them to the api call
      try {
        this.selectLoadingYear = true;
        const resp = await ProjectService.getStartYearList(arg1, arg2);
        this.yearList = resp;
        this.yearValue = this.yearList[resp.length - 1].year;
      } catch (error) {
        console.log(error);
      } finally {
        this.selectLoadingYear = false;
      }
    },
    // get theme list
    async getThemeList() {
      try {
        this.selectLoadingTheme = true;
        const resp = await ProjectService.getThemeList(this.donorValue);
        await resp.forEach((item) => {
          item.label = item.theme;
          delete item.theme;
        });
        resp.unshift({ label: "ALL" });
        this.themeList = resp;
        this.themeValue = this.themeValue || this.themeList[0].label;
      } catch (error) {
        console.log(error);
      } finally {
        this.selectLoadingTheme = false;
      }
    },
  },
  async mounted() {
    await this.getDonor();
  },
});
</script>

<style lang="scss" scoped>
.vue-highcharts {
  width: 100%;
  height: 30rem;
}
div.chart_wrapper {
  position: relative;
}
</style>
