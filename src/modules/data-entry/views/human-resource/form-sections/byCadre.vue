<template>
  <div class="outer-wrapper">
    <div class="table-wrapper">
      <table>
        <thead>
          <th>
            <p class="row-header">Cadre</p>
          </th>
          <th>
            <span class="row-header">Research </span>
          </th>
          <th>
            <span class="row-header">RRCS</span>
          </th>
          <th>
            <span class="row-header">PEC</span>
          </th>
          <th>
            <span class="row-header">Operations</span>
          </th>
          <th class="custom-cell" colspan="2">
            <div class="w-100 gender-cell">
              <h1>Gender Distribution</h1>
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
          <tr v-for="(item, index) in cadre_list" :key="index">
            <td>
              <input placeholder="Type Here" type="text" v-model="item.cadre" />
            </td>
            <td>
              <input
                placeholder="Type Here"
                type="text"
                v-model="item.research"
              />
            </td>
            <td>
              <input placeholder="Type Here" type="text" v-model="item.rrcs" />
            </td>
            <td>
              <input placeholder="Type Here" type="text" v-model="item.pec" />
            </td>
            <td>
              <input
                placeholder="Type Here"
                type="text"
                v-model="item.operationse"
              />
            </td>

            <td>
              <input
                placeholder="Type Here"
                type="text"
                v-model="item.genderDistributions.male"
              />
            </td>
            <td>
              <input
                placeholder="Type Here"
                type="text"
                v-model="item.genderDistributions.female"
              />
            </td>
            <td class="wrapper">
              <div>
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.total"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- <p @click="addTocadre()" class="add-more">+ Add more</p> -->
  <div class="d-flex justify-content-end mt-4">
    <div @click="saveForm()" class="save-icon">
      <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
      <h5>save</h5>
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
      error: true,
      cadre_list: [
        {
          id: 1,
          cadre: "Post Docs",
          research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 2,
          cadre: "Research Scientist",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 3,
          cadre: "Associate Research Scientists",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },

          total: "",
        },
        {
          id: 4,
          cadre: "Research Officers",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 5,
          cadre: "Data Analyst",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 6,
          cadre: "Program Assistants",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 7,
          cadre: "M&E Officers",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 8,
          cadre: "HR officers",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 9,
          cadre: "Finance officers",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 10,
          cadre: "Development officers",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },

        {
          id: 11,
          cadre: "IT officers",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 12,
          cadre: "Procurement officers",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 13,
          cadre: "Government liaison officers",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 14,
          cadre: "Policy engagement and outreach staff",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 15,
          cadre: "Systems thinking experts",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 16,
          cadre: "Strategic proposal writers",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 17,
          cadre: "Interns (through HR)",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
        {
          id: 18,
          cadre: "Total",
          Research: "",
          rrcs: "",
          pec: "",
          operations: "",
          genderDistributions: { male: null, female: null },
          total: "",
        },
      ],
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    addTocadre() {
      this.cadre_list.push({
        id: new Date().getTime(),
        cadre: "",
        research: "",
        rrcs: "",
        pec: "",
        operations: "",
        total: "",
      });
    },

    removeFromCadreList(rowItem) {
      this.cadre_list = this.cadre_list.filter(
        (item) => item.id !== rowItem.id
      );
    },

    saveForm() {
      this.cadre_list.forEach((item) => {
        for (const property in item) {
          // console.log(`${property}: ${object[property]}`);
          if (item[property] === "") {
            this.error = true;
            return;
          } else {
            this.error = false;
            // console.log(this.engagements_form);
          }

          if (
            item.genderDistributions.male === null &&
            item.genderDistributions.female === null
          ) {
            this.error = true;
            return;
          } else {
            this.error = false;
            // console.log(this.engagements_form);
          }
        }
      });

      if (this.error) {
        this.toast("Warning", "Fill form completely", "warning");
        return;
      }
      this.formatData();
    },

    formatData() {
      const data = {
        cadre: this.cadre_list,
      };

      const newItem = {
        component: "human_resource",
        item: { name: "byCadre", form: data },
      };

      console.log(newItem);
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
.remove-icon {
  position: absolute;
  bottom: 1px;
  right: 1px;
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
}
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
input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
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
  margin-top: 25px;
}
.add-more:hover {
  color: #61a229;
}
</style>
