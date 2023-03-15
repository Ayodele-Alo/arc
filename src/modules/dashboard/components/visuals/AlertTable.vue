<!-- eslint-disable vue/multi-word-component-years -->
<template>
  <section class="alert_table">
    <el-table
      :load="load"
      :data="tableData"
      height="500"
      style="width: 100%"
      :default-sort="{ prop: 'difference', order: 'ascending' }"
    >
      <el-table-column sortable prop="date" label="Date" width="250" />
      <el-table-column sortable prop="name" label="Grant Name" width="250" />
      <el-table-column sortable prop="year" label="Year" width="150" />
      <el-table-column
        sortable
        prop="difference"
        label="Months Left"
        width="200"
      >
        <template #default="scope">
          <span>{{ scope.row.difference }}&nbsp;Month(s)</span>
        </template>
      </el-table-column>
      <el-table-column prop="month" label="" width="200">
        <template #default="scope">
          <span
            v-if="scope.row.expiring_threshold === true"
            class="text-danger fw-bold"
            >{{ scope.row.month }}</span
          >
          <span v-else class="text-primary fw-bold">{{ scope.row.month }}</span>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import { AlertTableI } from "@/types";

export default defineComponent({
  name: "Alert-Table",
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2023/10/03",
          name: "GOS",
          year: "2023",
          difference: 10,
          month: "October",
          expiring_threshold: false,
        },
        {
          date: "2016/09/02",
          name: "GOS",
          year: "2023",
          difference: 9,
          month: "September",
          expiring_threshold: false,
        },
        {
          date: "2023/05/04",
          name: "CAPACITY BUILDING",
          year: "2023",
          difference: 2,
          month: "May",
          expiring_threshold: true,
        },
      ] as AlertTableI[],
    };
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
