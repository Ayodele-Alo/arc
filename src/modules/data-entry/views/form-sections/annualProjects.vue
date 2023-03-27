<template>
  <div class="row">
    <div class="col">
      <div class="col text-start">
        <div class="text-start"></div>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th class="row-header">
                List of new projects (projects whose funding has been approved
                and projects shall commence within the year)
              </th>
            </tr>
            <tr v-for="item in newProjectsCount" :key="item">
              <th class="row-header">
                <div class="row">
                  <div class="d-flex align-items-center">
                    <p class="mt-3">{{ item }}.</p>
                    <input placeholder="Type Here" type="text" />
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
         <span @click="addNewProjectsField()" class="add-more">Add more +</span>
      </div>
      <div class="col text-start mt-2">
        <div class="text-start"></div>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th class="row-header">
                List of ongoing projects (projects continuing from previous
                year)
              </th>
            </tr>
            <tr v-for="item in ongoingProjectsCount" :key="item">
              <th class="row-header">
                <div class="row">
                  <div class="d-flex align-items-center">
                    <p class="mt-3">{{ item }}.</p>
                    <input placeholder="Type Here" type="text" />
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        <span @click="addOngoingProjectsField()" class="add-more">Add more +</span>
      </div>
      <div class="col text-start mt-2">
        <div class="text-start"></div>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th class="row-header">
                List of closing projects (projects that will closed within the
                year)
              </th>
            </tr>
            <tr v-for="item in closingProjectsCount" :key="item">
              <th class="row-header">
                <div class="row">
                  <div class="d-flex align-items-center">
                    <p class="mt-3">{{ item }}.</p>
                    <input placeholder="Type Here" type="text" />
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
       <span @click="addClosingProjectsField()" class="add-more">Add more +</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "annualProjects",
  components: {},
  data() {
    return {
      newProjectsCount: 1,
      ongoingProjectsCount: 1,
      closingProjectsCount: 1,
      form: {
        new_projects: {},
        ongoing_projects: {},
        closing_projects: {},
      },
    };
  },

  methods: {
    addNewProjectsField() {
      this.newProjectsCount++;
    },
    addOngoingProjectsField() {
      this.ongoingProjectsCount++;
    },
    addClosingProjectsField() {
      this.closingProjectsCount++;
    }
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
.add-more {
  cursor: pointer;
  letter-spacing: 0px;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: normal;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
}
.add-more:hover {
  color: red;
}
</style>
