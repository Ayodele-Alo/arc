<template>
  <div class="row">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Kindly describe at least two risks that have been identified and/or
          materialized in this reporting year.
        </p>
      </div>

      <div v-for="(item, index) in risks_inderntified" :key="index" class="">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th class="row-header py-4 header-bg">
                <div class="row">
                  <div class="d-flex align-items-center">
                    <p class="mt-3">Theme Objective {{ index + 1 }}:</p>
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th class="row-header">
                <div class="row">
                  <div class="col">
                    <p class="mt-3 sub-heading">Risk Description:</p>
                    <p class="sub-heading-2">
                      (Kindly include risks identified that hindered the
                      achievement of the objective of the theme)
                    </p>
                    <input
                      placeholder="Type Here"
                      type="text"
                      v-model="item.risk_description"
                    />
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th class="row-header">
                <div class="row">
                  <div class="col">
                    <p class="mt-3 sub-heading">Key Risk Factors</p>
                    <p class="sub-heading-2">
                      (These are the risk dimensions within the risk identified)
                    </p>
                    <input
                      placeholder="Type Here"
                      type="text"
                      v-model="item.key_risk_factors"
                    />
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th class="row-header">
                <div class="row">
                  <div class="col">
                    <p class="mt-3 sub-heading">Current Status and rationale</p>
                    <p class="sub-heading-2">
                      (what can we do further to combat the risk)
                    </p>
                    <input
                      placeholder="Type Here"
                      type="text"
                      v-model="item.current_status_rationale"
                    />
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th class="row-header">
                <div class="row">
                  <div class="col">
                    <p class="mt-3 sub-heading">Agreed Actions</p>
                    <p class="sub-heading-2">
                      (what can we do further to combat the risk)
                    </p>
                    <input
                      placeholder="Type Here"
                      type="text"
                      v-model="item.agreed_actions"
                    />
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th class="row-header">
                <div class="row">
                  <div class="col">
                    <p class="mt-3 sub-heading">Responsible Persons</p>
                    <p class="sub-heading-2">
                      (Who is responsible in overseeing the process of managing
                      the risk)
                    </p>
                    <input
                      placeholder="Type Here"
                      type="text"
                      v-model="item.responsible_persons"
                    />
                  </div>
                </div>
              </th>
            </tr>
            <tr class="position-relative">
              <th class="row-header">
                <div class="row">
                  <div class="col">
                    <p class="mt-3 sub-heading">Risk Rating</p>
                    <p class="sub-heading-1">
                      The scale is 1 to 3: 1 being - low, 2 - moderate and 3-
                      high
                    </p>
                    <p class="sub-heading-2">
                      Probability (probability of the risk occurring)
                    </p>
                    <select
                      class="custom-select"
                      v-model="item.risk_rating_probability"
                    >
                      <option disabled selected>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>

                    <p class="sub-heading-2 mt-3">
                      Impact (Impact of the risk)
                    </p>
                    <select
                      class="custom-select"
                      v-model="item.risk_rating_impact"
                    >
                      <option disabled selected>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>

                    <p class="sub-heading-2 mt-3">Overall = P x I :</p>
                    <select
                      class="custom-select"
                      v-model="item.risk_rating_overall"
                    >
                      <option disabled selected>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
              </th>
              <div
                v-if="risks_inderntified.length > 2"
                @click="removeFromRiskIndentified(item)"
                class="remove-icon position-absolute bottom-0 end-0"
              >
                x
              </div>
            </tr>
          </tbody>
        </table>
      </div>
      <p @click="addToRiskIndentified()" class="add-more">+ Add more</p>

      <div class="d-flex justify-content-end mt-4">
        <div @click="saveForm()" class="save-icon">
          <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
          <h5>save</h5>
        </div>
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
      error: true,
      risks_inderntified: [
        {
          id: 1,
          risk_description: "",
          key_risk_factors: "",
          current_status_rationale: "",
          agreed_actions: "",
          responsible_persons: "",
          risk_rating_probability: "1",
          risk_rating_impact: "1",
          risk_rating_overall: "1",
        },
        {
          id: 2,
          risk_description: "",
          key_risk_factors: "",
          current_status_rationale: "",
          agreed_actions: "",
          responsible_persons: "",
          risk_rating_probability: "1",
          risk_rating_impact: "1",
          risk_rating_overall: "1",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["SAVE_DATA"]),

    addToRiskIndentified() {
      this.risks_inderntified.push({
        id: new Date().getTime(),
        risk_description: "",
        key_risk_factors: "",
        current_status_rationale: "",
        agreed_actions: "",
        responsible_persons: "",
        risk_rating_probability: "1",
        risk_rating_impact: "1",
        risk_rating_overall: "1",
      });
    },
    removeFromRiskIndentified(rowItem) {
      if (this.risks_inderntified.length > 1) {
        this.risks_inderntified = this.risks_inderntified.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },
    saveForm() {
      this.risks_inderntified.forEach((item) => {
        for (const property in item) {
          // console.log(`${property}: ${object[property]}`);
          if (item[property] === "") {
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
      const newItem = {
        component: "resource_related",
        item: { name: "risksIndentified", form: this.risks_inderntified },
      };
      this.SAVE_DATA(newItem);
    },
  },
});
</script>

<style scoped>
.engagement-text {
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  line-height: 40px;
}
input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
  width: 50%;
}
.sub-heading {
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
  margin-right: 20px;
}
.sub-heading-2 {
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
  margin-right: 20px;
}
.sub-heading-1 {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: normal;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  margin-right: 20px;
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
  padding: 25px;
}
.header-bg {
  background-color: #dbdbdb;
}
select {
  padding: 10px 8px;
  border: 1px solid #70707091;
  border-radius: 4px;
  width: 130px;
  margin-top: -10px;
}

option {
  font-size: 18px;
  padding-left: 20px;
}

.remove-icon {
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
