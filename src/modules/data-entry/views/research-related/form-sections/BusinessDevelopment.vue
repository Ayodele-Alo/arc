<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Kindly provide, as a means of verification, copies of the proposals
          submitted and the feedback email or documents from the funder.
        </p>
      </div>

      <div class="outer-wrapper">
        <div class="table-wrapper">
          <table>
            <thead>
              <th>
                <p class="row-header">Proposal Title</p>
              </th>
              <th>
                <span class="row-header"> Funder </span>
              </th>
              <th>
                <span class="row-header">
                  Signature issue addressed
                  <p class="row-sub-header">
                    (Does the proposal objective address the theme SI?- Yes/no)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Submission date
                  <p class="row-sub-header">
                    (date when the proposal as submitted)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header"> Project Period</span>
              </th>
              <th>
                <span class="row-header"> Project Budget </span>
              </th>
              <th>
                <span class="row-header"> Partners </span>
              </th>
              <th>
                <span class="row-header">
                  Feedback from funder
                  <p class="row-sub-header">
                    (approved, unsuccessful, waiting feedback)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Date of feedback
                  <p class="row-sub-header">
                    (when the feedback has been given)
                  </p>
                </span>
              </th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in submitted_proposals" :key="index">
                <td>
                  <div class="d-flex align-items-center">
                    <p class="mt-3">{{ index + 1 }}.</p>
                    <input
                      placeholder="Type Here"
                      type="text"
                      v-model="item.proposal_title"
                    />
                  </div>
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.proposal_funder"
                  />
                </td>
                <td>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="item.signature_issue_address"
                  >
                    <option disabled selected>Select One</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </td>
                <td>
                  <input
                    type="date"
                    class="form-control border"
                    v-model="item.submission_date"
                  />
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.project_period"
                  />
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.project_budget"
                  />
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.project_partners"
                  />
                </td>
                <td>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="item.feedback_from_funder"
                  >
                    <option disabled selected>Select One</option>
                    <option value="approved">Approved</option>
                    <option value="unsuccessful">Unsuccessful</option>
                    <option value="waiting feedback">Waiting feedback</option>
                  </select>
                </td>
                <td class="wrapper">
                  <input
                    type="date"
                    class="form-control border"
                    v-model="item.date_of_feedback"
                  />
                  <div
                    v-if="submitted_proposals.length > 1"
                    class="remove-icon"
                    @click="removeRow(item)"
                  >
                    x
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p @click="addToSubmittedProposalsForm()" class="add-more">+ Add more</p>

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
      formCount: 1,
      error: true,

      submitted_proposals: [
        {
          id: 1,
          proposal_title: "",
          proposal_funder: "",
          signature_issue_address: "Yes",
          submission_date: "",
          project_period: "",
          project_budget: "",
          project_partners: "",
          feedback_from_funder: "waiting feedback",
          date_of_feedback: "",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["SAVE_DATA"]),

    addFormCount() {
      this.formCount++;
    },

    addToSubmittedProposalsForm() {
      this.submitted_proposals.push({
        id: new Date().getTime(),
        proposal_title: "",
        proposal_funder: "",
        signature_issue_address: "Yes",
        submission_date: "",
        project_period: "",
        project_budget: "",
        project_partners: "",
        feedback_from_funder: "waiting feedback",
        date_of_feedback: "",
      });
    },

    removeRow(rowItem) {
      if (this.submitted_proposals.length > 1) {
        this.submitted_proposals = this.submitted_proposals.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    // goverment_activities

    saveForm() {
      this.submitted_proposals.forEach((item) => {
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

      this.formatData();
    },

    formatData() {
      const data = {
        submitted_proposals: this.submitted_proposals,
      };

      console.log(data);
      const newItem = {
        component: "resource_related",
        item: { name: "businessDevelopment", form: data },
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
  line-height: 15px;
  text-align: left;
  padding-top: 15px;
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
  margin-top: 15px;
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
.table-wrapper {
  overflow-x: scroll;
  height: fit-content;
  max-height: 66.4vh;
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
}

table th,
table td {
  padding: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 400px;
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
.wrapper-content {
  border: 0.1px solid #d3d3d3;
}
.add-more:hover {
  color: #61a229;
}
.save-icon {
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
}
.save-icon h5 {
  margin-left: 5px;
  font-family: Montserrat;
  margin-top: 5px;
}
.save-icon:hover {
  color: #61a229;
}
</style>
