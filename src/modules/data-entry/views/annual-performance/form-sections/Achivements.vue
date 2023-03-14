<template>
  <div class="row">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Highlight the key plans for next year for the quarter. Breakdown of
          the specific activities will be in the annual work plan document.
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="row-header">
              Alignment to the 2022-26 strategy, including the principles and
              values: Collaborative, Innovative, Truly African and Impact
              oriented
            </th>
          </tr>
          <tr v-for="item in formCount" :key="item">
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
       <p class="add-more" @click="addFormCount()">+ Add more</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "AdditionalAchivements",
  components: {},
  data() {
    return {
      formCount: 1,
      form: {
        1: {
          themes: "",
          engagement_type: ""
        }
      },
    };
  },

  methods: {
    addFormCount() {
      this.formCount++;
    },
    // addPoliciesField() {
    //   this.policyCount++;
    // },
    // addProgramsField() {
    //   this.programCount++;
    // },
    // addAliancesField() {
    //   this.alianceCount++;
    // },
    // addLevelsField() {
    //   this.levelCount++;
    // },
    // addIndividualsField() {
    //   this.individualCount++;
    // },
    // addInstitutionsField() {
    //   this.institutionCount++;
    // },
    // addExistingDataField() {
    //   this.existingDataCount++;
    // },
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
</style>
