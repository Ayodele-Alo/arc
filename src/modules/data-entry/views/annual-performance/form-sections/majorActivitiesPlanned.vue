<template>
  <div class="row">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Highlight the key plans as a theme for 2023
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="row-header">
              <p>Major planned activities for as a theme</p>
              <p>
                Alignment to the 2022-26 strategy, including the principles and
                values: Collaborative, Innovative, Truly African and Impact
                oriented
              </p>
            </th>
          </tr>
          <tr v-for="item in plannedActivitiesCount" :key="item">
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="mt-3">{{ item }}.</p>
                  <input placeholder="Type Here" type="text" v-model="form.planned_activities[item]" />
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
      <p @click="addPlannedActivitiesField()" class="add-more"> Add more +</p>
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
      plannedActivitiesCount: 1,
      form: {
        planned_activities: {},
      },
    };
  },

  methods: {
    addPlannedActivitiesField() {
      this.plannedActivitiesCount++;
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
.add-more {
  cursor: pointer;
}
.add-more:hover {
  color: red;
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
</style>
