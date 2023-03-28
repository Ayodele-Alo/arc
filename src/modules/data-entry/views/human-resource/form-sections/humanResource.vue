<template>
  <div class="">
    <div class="outer-wrapper">
      <div class="table-wrapper">
        <table>
          <thead>
            <th>
              <p class="row-header">Indicators</p>
            </th>
            <th>
              <span class="row-header"> Total </span>
            </th>
            <th class="custom-cell" colspan="2">
              <div class="w-100 gender-cell">
                <h1>Research</h1>
                <div
                  class="w-100 d-flex justify-content-between align-items-end px-5"
                >
                  <h2 class="row-header">Male</h2>
                  <h2 class="row-header">Female</h2>
                </div>
              </div>
            </th>

            <th class="custom-cell" colspan="2">
              <div class="w-100 gender-cell">
                <h1>RRCS</h1>
                <div
                  class="w-100 d-flex justify-content-between align-items-end px-5"
                >
                  <h2 class="row-header">Male</h2>
                  <h2 class="row-header">Female</h2>
                </div>
              </div>
            </th>
            <th class="custom-cell" colspan="2">
              <div class="w-100 gender-cell">
                <h1>PEC</h1>
                <div
                  class="w-100 d-flex justify-content-between align-items-end px-5"
                >
                  <h2 class="row-header">Male</h2>
                  <h2 class="row-header">Female</h2>
                </div>
              </div>
            </th>

            <th class="custom-cell" colspan="2">
              <div class="w-100 gender-cell">
                <h1>Operations</h1>
                <div
                  class="w-100 d-flex justify-content-between align-items-end px-5"
                >
                  <h2 class="row-header">Male</h2>
                  <h2 class="row-header">Female</h2>
                </div>
              </div>
            </th>
            <th>
              <span class="row-header">
                National
                <p class="row-sub-header">(Distribution)</p>
              </span>
            </th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in indicators" :key="index">
              <td>
                <div class="d-flex align-items-center publication-content">
                  {{ item.indicator }}
                </div>
              </td>
              <td>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.total"
                />
              </td>
              <td>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.rrcs.male"
                />
              </td>
              <td>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.rrcs.female"
                />
              </td>
              <td>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.pec.male"
                />
              </td>

              <td>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.pec.female"
                />
              </td>
              <td>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.operations.male"
                />
              </td>
              <td>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.operations.female"
                />
              </td>
              <td>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.research.male"
                />
              </td>
              <td>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.research.female"
                />
              </td>
              <td>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.national"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="border my-4 d-flex">
      <div class="w-content">
        <h1 class="publication-content">Turn Over Rate</h1>
      </div>
      <div class="border-right border-left w-100">
        <div class="a px-3 d-flex align-items-center border-bottom">
          <div class="py-3 px-5 item">Voluntary turnover rate</div>
          <div class="px-3 input-wrapper">
            <input
              placeholder="Type Here"
              type="text"
              v-model="employees_hired_short_term.voluntary_turn_over_rate"
            />
          </div>
        </div>
        <div class="a px-3 d-flex align-items-center">
          <div class="py-3 px-5 item">Involuntary turn over rate</div>
          <div class="px-3 input-wrapper">
            <input
              placeholder="Type Here"
              type="text"
              v-model="employees_hired_short_term.involuntary_trun_over_rate"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end mt-4">
      <div @click="saveForm()" class="save-icon">
        <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
        <h5>save</h5>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export default defineComponent({
  setup() {
    const toast = (title, desc, type) => {
      createToast(
        {
          title: title,
          description: desc,
        },
        {
          type: type,
          transition: "zoom",
          hideProgressBar: true,
          showIcon: true,
          timeout: 3000,
          position: "top-right",
        }
      );
    };
    return {
      toast,
    };
  },

  data() {
    return {
      indicators: [
        {
          total: "",
          indicator: "Number of regular employees at the start of the year",
          rrcs: { male: null, female: null },
          pec: { male: null, female: null },
          operations: { male: null, female: null },
          research: { male: null, female: null },
          national: "",
        },
        {
          total: "",
          indicator: "Number of regular employees at the start of the year",
          rrcs: { male: null, female: null },
          pec: { male: null, female: null },
          operations: { male: null, female: null },
          research: { male: null, female: null },
          national: "",
        },
        {
          total: "",
          indicator:
            "Number of employees hired under short term flexi contracts by mid- year",
          rrcs: { male: null, female: null },
          pec: { male: null, female: null },
          operations: { male: null, female: null },
          research: { male: null, female: null },
          national: "",
        },
        {
          total: "",
          indicator:
            "Number of employees who have left APHRC e.g. through resignation, termination, laying off, Contracting ending etc.",
          rrcs: { male: null, female: null },
          pec: { male: null, female: null },
          operations: { male: null, female: null },
          research: { male: null, female: null },
          national: "",
        },
      ],
      employees_hired_short_term: {
        voluntary_turn_over_rate: null,
        involuntary_trun_over_rate: null,
      },
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    saveForm() {
      this.indicators.forEach((item) => {
        for (const property in item) {
          // console.log(`${property}: ${object[property]}`);
          if (item[property] === "") {
            this.error = true;
            return;
          } else {
            this.error = false;
          }

          if (item.rrcs.male === null && item.rrcs.female === null) {
            this.error = true;
            return;
          } else {
            this.error = false;
          }
          if (item.pec.male === null && item.pec.female === null) {
            this.error = true;
            return;
          } else {
            this.error = false;
          }
          if (
            item.operations.male === null &&
            item.operations.female === null
          ) {
            this.error = true;
            return;
          } else {
            this.error = false;
          }
        }
      });

      if (
        this.employees_hired_short_term.involuntary_trun_over_rate === null &&
        this.employees_hired_short_term.involuntary_trun_over_rate === null
      ) {
        this.error = true;
        this.toast("Warning", "Fill form completely", "warning");
        return;
      }

      if (this.error) {
        this.toast("Warning", "Fill form completely", "warning");
        return;
      }

      const data = {
        indicators: this.indicators,
        employees_hired_short_term: this.employees_hired_short_term,
      };

      const newItem = {
        component: "human_resource",
        item: { name: "human_resource", form: data },
      };

      this.SAVE_DATA(newItem);
    },
  },
});
</script>

<style scoped>
.header-width {
  width: 300px;
}
.row-header {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: bold;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  padding: 25px 15px;
  text-align: left;
}
.publication-iten {
  display: flex;
}
.publication-iten input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
}
.pub-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 4px;
}
.publication-content {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: normal;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  padding: 25px 15px;
  text-align: left;
}
table {
  background-color: white;
}

/* mmm */
.engagement-text {
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  line-height: 40px;
}
.header-width {
  width: 170px;
  height: 100px;
  text-align: left;
  padding: 4px 8px;
  padding: 0 15px;
}
.row-header {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: bold;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 15px;
  text-align: left;
  /* padding-top: 15px; */
}
.publication-iten {
  display: flex;
}
input {
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
}
.pub-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 4px;
}
.add-more {
  cursor: pointer;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: bold;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  width: fit-content;
  margin-top: 15px;
}
.add-more:hover {
  color: red;
}
.row-sub-header {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: 300;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
}
table {
  background-color: white;
}
.table-wrapper {
  overflow-x: scroll;
  height: fit-content;
  min-height: 66.4vh;
  margin-top: 22px;
  /* margin: 15px; */
  padding-bottom: 20px;
}

table {
  min-width: max-content;

  border-collapse: separate;
  border-spacing: 0px;
}

table th {
  align-items: flex-start;
  font-weight: normal;
  font-size: 18px;
  border: 0.1px solid #d3d3d3;
  /* height: 40px; */
  /* width: 400px; */
  padding: 10px 15px;
}

table td {
  padding: 10px 15px;
  width: 300px;
}

table td {
  text-align: left;
  font-size: 15px;
  border: 0.1px solid #d3d3d3;
  padding-left: 20px;
}

.table-wrapper::-webkit-scrollbar {
  width: 20px;
  height: 10px;
}

.table-wrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

.table-wrapper::-webkit-scrollbar-thumb {
  background: #70707069;
  border-radius: 10px;
}
.wrapper {
  position: relative;
}
/* .remove-icon {
  position: absolute;
  bottom: -5px;
  right: -5px;
  background-color: #f75d59;
  padding: 2px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
} */
.wrapper-content {
  border: 0.1px solid #d3d3d3;
}
.gender-cell {
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
}
.gender-cell h1 {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: bold;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 15px;
}
.custom-cell {
  width: 300px !important;
  padding: 10px 0;
}
.w-content {
  width: 400px;
  border-right: 1px solid #d3d3d3;
}
.item {
  border-right: 1px solid #d3d3d3;
  width: 300px;
}
.input-wrapper {
  width: 600px;
}
.add-more:hover {
  color: #61a229;
}
</style>
