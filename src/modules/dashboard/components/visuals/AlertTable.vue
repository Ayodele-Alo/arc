<!-- eslint-disable vue/multi-word-component-years -->
<template>
  <section class="alert_table">
    <el-table :data="tableData" height="500" style="width: 100%">
      <el-table-column prop="date" label="Grant" width="250" />
      <el-table-column prop="year" label="Year" width="350" />
      <el-table-column prop="difference" label="Months Left" width="200" />
      <el-table-column prop="month" label="" width="200" />
    </el-table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "Alert-Table",
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
        {
          date: "2016-05-02",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
        {
          date: "2016-05-04",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
        {
          date: "2016-05-01",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
        {
          date: "2016-05-08",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
        {
          date: "2016-05-06",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
        {
          date: "2016-05-07",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
        {
          date: "2016-05-03",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
        {
          date: "2016-05-02",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
        {
          date: "2016-05-04",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
        {
          date: "2016-05-01",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
        {
          date: "2016-05-08",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
        {
          date: "2016-05-06",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
        {
          date: "2016-05-07",
          year: "2022",
          difference: "6 Month",
          month: "July",
        },
      ],
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