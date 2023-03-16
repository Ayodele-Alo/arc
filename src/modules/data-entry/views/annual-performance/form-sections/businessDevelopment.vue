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
            <th class="row-header">Proposal Title</th>
            <th class="header-width" scope="col">
              <p class="row-header">Funder</p>
            </th>
            <th class="header-width" scope="col">
              <p class="row-header">Signature issue addressed</p>
              <p class="row-sub-header">
                (Does the proposal objective address the theme SI?- Yes/no)
              </p>
            </th>

            <th class="header-width" scope="col">
              <p class="row-header">Submission date</p>
              <p class="row-sub-header">
                (date when the proposal as submitted)
              </p>
            </th>
            <th class="header-width" scope="col">
              <p class="row-header">Project Period</p>
            </th>
            <th class="header-width" scope="col">
              <p class="row-header">Project Budget</p>
            </th>
            <th class="header-width" scope="col">
              <p class="row-header">Partners</p>
            </th>
            <th class="header-width" scope="col">
              <p class="row-header">Feedback from funder</p>
              <p class="row-sub-header">
                (approved, unsuccessful, waiting feedback)
              </p>
            </th>
            <th class="header-width" scope="col">
              <p class="row-header">Date of feedback</p>
              <p class="row-sub-header">(when the feedback has been given)</p>
            </th>
          </tr>
          <tr  v-for="(item, index) in business_form" :key="index"> 
            <th class="row-header">
              <div class="row">
                <div class="row">
                  <div class="d-flex align-items-center">
                    <p class="mt-3">{{ index }}.</p>
                    <input placeholder="Type Here" class="px-1" type="text" v-model="item.proposal"/>
                  </div>
                </div>
              </div>
            </th>
            <td>
               <input placeholder="Type Here" class="px-1" type="text" v-model="item.funder" />
            </td>
            <td>
               <input placeholder="Type Here" class="px-1" type="text" v-model="item.signature_issue" />
            </td>
            <td>
               <input placeholder="Type Here" class="px-1" type="text" v-model="item.signature_date"/>
            </td>
            <td>
               <input placeholder="Type Here" class="px-1" type="text" v-model="item.project_period"/>
            </td>
            <td>
               <input placeholder="Type Here" class="px-1" type="text" v-model="item.project_budget" />
            </td>
            <td>
               <input placeholder="Type Here" class="px-1" type="text" v-model="item.partners"/>
            </td>
            <td>
               <input placeholder="Type Here" class="px-1" type="text" v-model="item.feedback_from_funder" />
            </td>
            <td>
               <input placeholder="Type Here" class="px-1" type="text" v-model="item.date_of_feedback" />
            </td>
          </tr>
        </tbody>
      </table>
        <p class="add-more" @click="addToBusinessForm()">+ Add more</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "BusinessDevelopment",
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
         business_form: [
        {
           proposal: "",
        funder: "",
        signature_issue: "",
        signature_date: "",
        project_period: "",
        project_budget: "",
        partners: "",
        feedback_from_funder: "",
        date_of_feedback: ""
        },
      ],
    };
  },

  methods: {
    addFormCount() {
      this.formCount++;
    },
     addToBusinessForm() {
      this.business_form.push({
        proposal: "",
        funder: "",
        signature_issue: "",
        signature_date: "",
        project_period: "",
        project_budget: "",
        partners: "",
        feedback_from_funder: "",
        date_of_feedback: ""
      });
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
  padding: 10px 15px;
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
  padding-top: 25px;
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
}
.pub-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 4px;
}
.add-more {
  cursor: pointer;
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
</style>
