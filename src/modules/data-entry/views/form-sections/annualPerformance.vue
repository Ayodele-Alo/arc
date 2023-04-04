<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start"></div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="header-width" scope="col">
              <p class="row-header">Project Name</p>
              <p class="row-sub-header">
                (include the overall objective of the project)
              </p>
            </th>
            <th class="header-width" scope="col">
              <p class="row-header">
                Planned Activities and targets for the project in the year
              </p>
            </th>

            <th class="header-width" scope="col">
              <p class="row-header">
                Brief comment on the performance as well as quality assurance
                measures undertaken towards achievement of the activity
              </p>
              <p class="row-sub-header">
                (Include alignment with: Principles: Collaborative, Innovative,
                Truly African and Impact-oriented Values: Fairness, Integrity
                and Excellence)..
              </p>
            </th>
          </tr>
          <tr v-for="(item, index) in annual_form" :key="index">
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="mt-4">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    class="px-1"
                    type="text"
                    v-model="item.project_name"
                  />
                </div>
              </div>
            </th>
            <td>
              <input
                placeholder="Type Here"
                class="px-1 mt-3"
                type="text"
                v-model="item.planned_activities"
              />
            </td>
            <td>
              <input
                placeholder="Type Here"
                class="px-1 mt-3"
                type="text"
                v-model="item.brief_comment"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p class="add-more" @click="addToAnnualForm()">+ Add more</p>

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
  name: "AnnualPerformanceComponent",
  components: {},

  props: {
    period: String,
  },

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
      formCount: 1,
      annual_form: [
        {
          project_name: "",
          planned_activities: "",
          brief_comment: "",
        },
      ],
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    addFormCount() {
      this.formCount++;
    },
    addToAnnualForm() {
      this.annual_form.push({
        project_name: "",
        planned_activities: "",
        brief_comment: "",
      });
    },
    saveForm() {
      const newItem = {
        component: this.period,
        type: "report",
        item: { name: "annualPerformanceAgainstPlan", form: this.annual_form },
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
  padding-top: 15px;
}
.publication-iten {
  display: flex;
}
input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
  width: 100%;
}
.pub-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 4px;
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
</style>
