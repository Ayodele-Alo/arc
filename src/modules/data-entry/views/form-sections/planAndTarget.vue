<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Kindly provide, as a means of verification, copies of the proposals
          submitted and the feedback email or documents from the funder.
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="row-header p-5">
              <p class="">Project Name</p>
              <p class="row-sub-header">
                (include the overall objective of the project)
              </p>
            </th>
            <th class="row-header p-5">
              <p class="">
                Planned Activities and targets for the project 2023
              </p>
            </th>
            <th class="row-header p-5">
              <p class="">Targets</p>
            </th>
          </tr>
          <tr v-for="(item, index) in plan_form" :key="index">
            <th class="row-header p-5">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="mt-3">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    class="px-1"
                    type="text"
                    v-model="item.project_name"
                  />
                </div>
              </div>
            </th>
            <th class="row-header p-5">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="mt-3">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    class="px-1"
                    type="text"
                    v-model="item.planned_activities"
                  />
                </div>
              </div>
            </th>
            <th class="row-header p-5">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="mt-3">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    class="px-1"
                    type="text"
                    v-model="item.targets"
                  />
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
      <p class="add-more" @click="addToPlanForm">+ Add more</p>

      <div class="d-flex justify-content-end mt-4">
        <div @click="saveForm()" class="save-icon">
          <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
          <h5>save</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "PlanAndTargetComponent",
  components: {},
  data() {
    return {
      formCount: 1,
      plan_form: [
        {
          project_name: "",
          planned_activities: "",
          targets: "",
        },
      ],
    };
  },

  methods: {
    addToPlanForm() {
      this.plan_form.push({
        project_name: "",
        planned_activities: "",
        targets: "",
      });
    },
    saveForm() {
      console.log(this.plan_form);
    },
  },
});
</script>

<style scoped>
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
  padding-top: 25px;
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
}
.add-more:hover {
  color: red;
}
table {
  background-color: white;
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
  width: 33%;
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
</style>
