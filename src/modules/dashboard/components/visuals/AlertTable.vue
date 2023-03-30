<!-- eslint-disable vue/multi-word-component-years -->
<template>
  <div>
    <div class="coming_soon_map" v-if="isLoading">
      <h4>PREPARING TABLE&nbsp;</h4>
      <div class="loading_dots" />
    </div>
    <section class="alert_table" v-else>
    <div class="d-flex flex-md-row flex-column justify-content-between align-items-center mb-2">
      <div class="mb-3 mt-2 alert_table_select">
        <label for="end_year">End Year</label><br />
        <el-select
          v-model="yearValue"
          filterable
          placeholder="--Select Year--"
          label="End Year"
          placement="top-start"
        >
          <el-option
            v-for="(item, i) in yearList"
            :key="i"
            :label="item.year"
            :value="item.year"
            id="end_year"
          ></el-option>
        </el-select>
      </div>
      <p>
        No. of Projects:&nbsp;<strong><u>{{ tableData.length }}</u></strong>
      </p>
    </div>

      <el-table
        :data="tableData"
        height="400"
        style="width: 100%"
        lazy
        :default-sort="{ prop: 'difference', order: 'ascending' }"
      >
        <el-table-column sortable prop="date" label="Date" min-width="150" />
        <el-table-column sortable prop="name" label="Grant Name" min-width="150" />
        <el-table-column sortable prop="no" label="Grant Code" min-width="150" />
        <el-table-column prop="year" label="Year" min-width="150" />
        <el-table-column sortable prop="difference" label="Months Left" min-width="150">
          <template #default="scope">
            <span v-if="scope.row.difference === 0">CLOSED</span>
            <span v-else>{{ scope.row.difference }}&nbsp;Month(s)</span>
          </template>
        </el-table-column>
        <el-table-column prop="month" label="" min-width="150">
          <template #default="scope">
            <span
              v-if="scope.row.expiring_threshold === true"
              class="text-danger fw-bold"
              >{{ scope.row.month }}</span
            >
            <span v-else class="text-primary fw-bold">{{
              scope.row.month
            }}</span>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import dayjs from "dayjs";
import { GenericI } from "@/types";
import ProjectService from "@/helpers/Project.Service";

export default defineComponent({
  name: "Alert-Table",
  components: {},
  data() {
    return {
      isLoading: false,
      yearList: [] as { year: number }[],
      yearValue: "" as string,
      tableData: [] as GenericI[],
    };
  },
  computed: {
    ...mapGetters(["getActiveModal", "getActiveTab"]),
  },
  watch: {
    yearValue: {
      async handler() {
        // check if the year value is not empty
        if (this.yearValue !== "") {
          await this.getDataFromApi();
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapMutations(["setActiveTab"]),

    async getYearList() {
      try {
        this.isLoading = true;
        const resp = await ProjectService.getEndYearList();
        this.yearList = resp;
        this.yearValue = dayjs().format("YYYY");
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },

    async getDataFromApi() {
      try {
        this.isLoading = true;
        const resp = await ProjectService.getProjectByExpiryYear(
          this.yearValue
        );

        const tableData = resp.map((item: GenericI) => {
          // get the difference in months between the expiry date and the start of the current month
          const monthDiff = dayjs(item.end_date).diff(
            dayjs().startOf("month"),
            "month"
          );
          // get the expiry month name
          const expiringMonth = dayjs(item.end_date).format("MMMM");
          const expiringThreshold = monthDiff <= 2;
          return {
            date: item.end_date,
            name: item.name,
            no: item.no,
            year: dayjs(item.end_date).format("YYYY"),
            difference: monthDiff > 0 ? monthDiff : 0,
            month: expiringMonth,
            expiring_threshold: expiringThreshold,
          };
        });
        // order the table data by the difference in ascending order
        this.tableData = tableData.sort(
          (a: { difference: number }, b: { difference: number }) =>
            a.difference - b.difference
        );
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },

  async mounted() {
    await this.getYearList();
    // await this.getDataFromApi();
  },
});
</script>

<style lang="scss" scoped>
section.dashboard {
  background: #f9f9f9 0% 0% no-repeat padding-box;
}
</style>
