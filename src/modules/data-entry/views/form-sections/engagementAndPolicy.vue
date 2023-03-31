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
            <th class="row-header w-50 p-2">
              <p class="row-header">Type of opportunity</p>
            </th>
            <th class="row-header p-1">
              <p class="row-header">Comments and Next Steps</p>
            </th>
          </tr>
          <tr>
            <th class="row-header">
              <div class="d-flex align-items-center mt-3">
                <p class="row-sub-header">1. Policy engagement plans</p>
              </div>
            </th>
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <input
                    placeholder="Type Here"
                    class="mt-2"
                    type="text"
                    v-model="engagements_policy_form.policy_engagement_plan"
                  />
                </div>
              </div>
            </th>
          </tr>

          <tr>
            <th class="row-header">
              <div class="d-flex align-items-center mt-3">
                <p class="row-sub-header">
                  2. Engagement with national, regional and international actors
                </p>
              </div>
            </th>
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <input
                    placeholder="Type Here"
                    class="mt-2"
                    type="text"
                    v-model="engagements_policy_form.engagement_with_actors"
                  />
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th class="row-header">
              <div class="d-flex align-items-center mt-3">
                <p class="row-sub-header">
                  3. Target policies and programs to be informed by Program’s
                  work
                </p>
              </div>
            </th>
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <input
                    placeholder="Type Here"
                    class="mt-2"
                    type="text"
                    v-model="engagements_policy_form.target_policies"
                  />
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th class="row-header">
              <div class="d-flex align-items-center mt-3">
                <p class="row-sub-header">4. Policy briefs</p>
              </div>
            </th>
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <input
                    placeholder="Type Here"
                    class="mt-2"
                    type="text"
                    v-model="engagements_policy_form.policy_briefs"
                  />
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th class="row-header">
              <div class="d-flex align-items-center mt-3">
                <p class="row-sub-header">5. Media appearances</p>
              </div>
            </th>
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <input
                    placeholder="Type Here"
                    class="mt-2"
                    type="text"
                    v-model="engagements_policy_form.media_appearence"
                  />
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
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
  name: "EngagementAndPolicy",
  components: {},
  data() {
    return {
      formCount: 1,
      form: {
        ideas: {},
        policies: {},
        programs: {},
        aliances: {},
        levels: {},
        individuals: {},
        institutions: {},
        existing_data: {},
      },
      engagements_policy_form: {
        policy_engagement_plan: "",
        engagement_with_actors: "",
        target_policies: "",
        policy_briefs: "",
        media_appearence: "",
      },
    };
  },

  methods: {
    saveForm() {
      console.log(this.engagements_policy_form);
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
  padding-top: 5px;
}
input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
}
table {
  background-color: white;
}
.add-more {
  cursor: pointer;
}
.add-more:hover {
  color: red;
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
  padding-left: 15px;
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
