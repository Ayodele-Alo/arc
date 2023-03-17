<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Engagement forum by APHRC to inform and provide evidence to address
          policy gaps
        </p>
      </div>
      <div class="outer-wrapper">
        <div class="table-wrapper">
          <table>
            <thead>
              <th>
                <p class="row-header">
                  Themes and their signature issues/focus areas
                </p>
              </th>
              <th>
                <span class="row-header">
                  Analysis of the policy architecture conducted to identify
                  entry points for engagement for each signature issues/ focus
                  areas
                  <p class="row-sub-header">(YES/NO)</p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Policy objectives developed for the signature issues/ focus
                  areas identified
                  <p class="row-sub-header">(YES/NO)</p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Policy objectives implementation plan developed for the each
                  of the signature issues/ focus areas
                  <p class="row-sub-header">(YES/NO)</p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Research priorities areas mapped out for governments and civil
                  societies
                  <p class="row-sub-header">(YES/NO)</p>
                </span>
              </th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in engagements_form" :key="index">
                <td>
                  <div class="d-flex align-items-center">
                    <p class="mt-3">{{ index + 1 }}.</p>
                    <input
                      placeholder="Type Here"
                      type="text"
                      v-model="item.themes_and_signature"
                    />
                  </div>
                </td>
                <td>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="item.analysis_of_policy_conducted"
                  >
                    <option selected>Select One</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </td>
                <td>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="item.policy_objectives_developed"
                  >
                    <option selected>Select One</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </td>
                <td>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="item.policy_objectives_implementation"
                  >
                    <option selected>Select One</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </td>
                <td class="wrapper">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="item.research_priorities"
                  >
                    <option selected>Select One</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <div
                    v-if="engagements_form.length > 1"
                    @click="removeRow(item)"
                    class="remove-icon"
                  >
                    x
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p @click="addToEngagementsForm()" class="add-more mt-4 mx-3">
        + Add more
      </p>
      <div class="d-flex justify-content-end">
        <button @click="saveForm()" class="btn btn-outline-primary">
          save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PolicyEngagementStrategies",

  data() {
    return {
      error: true,
      engagements_form: [
        {
          id: 1,
          themes_and_signature: "",
          analysis_of_policy_conducted: false,
          policy_objectives_developed: false,
          policy_objectives_implementation: false,
          research_priorities: false,
        },
      ],
    };
  },

  methods: {
    addToEngagementsForm() {
      this.engagements_form.push({
        id: new Date().getTime(),
        themes_and_signature: "",
        analysis_of_policy_conducted: false,
        policy_objectives_developed: false,
        policy_objectives_implementation: false,
        research_priorities: false,
      });
    },

    removeRow(rowItem) {
      if (this.engagements_form.length > 1) {
        this.engagements_form = this.engagements_form.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    saveForm() {
      this.engagements_form.forEach((item) => {
        for (const property in item) {
          // console.log(`${property}: ${object[property]}`);
          if (item[property] === "") {
            this.error = true;
            alert(`please ${property} cannot be blank `);
            return;
          } else {
            this.error = false;
            // console.log(this.engagements_form);
          }
        }
      });
      if (this.error) {
        return;
      }
      this.formatData();
    },

    formatData() {
      const data = {
        engagements_form: this.engagements_form,
      };

      console.log(data);
    },
  },
  // mounted() {
  //   console.log(new Date().getTime());
  // },
};
</script>

<style scoped>
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
  line-height: 19px;
  text-align: left;
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
/* table {
  background-color: white;
} */

.table-wrapper {
  overflow-x: scroll;
  height: fit-content;
  max-height: 66.4vh;
  margin-top: 22px;
  margin: 15px;
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
}

table th,
table td {
  padding: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
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
}
</style>
