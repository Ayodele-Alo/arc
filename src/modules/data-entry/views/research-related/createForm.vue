<template>
  <div class="select-wrapper px-4">
    <div class="select-item">
      <label for="">Select Quater <span>*</span></label>
      <select
        v-model="quater"
        class="form-select"
        aria-label="Default select example"
      >
        <option disabled selected>Select Quater</option>
        <option value="Quater 1">Quater 1</option>
        <option value="Quater 2">Quater 2</option>
        <option value="Quater 3">Quater 3</option>
        <option value="Quater 4">Quater 4</option>
      </select>
    </div>
    <div class="select-item">
      <label for="">Select Year <span>*</span></label>
      <select
        v-model="year"
        class="form-select"
        aria-label="Default select example"
      >
        <option disabled selected>Select Year</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  </div>

  <div class="mt-5 px-4">
    <h4 class="sub-header">
      Institutionalization of doctoral strengthening programs and courses
    </h4>
    <div class="mt-3">
      <div class="border institution">
        <div class="p-4">
          <h4>
            Number of partner institutions facilitated to institutionalize
            existing APHRC related capacity strengthening interventions
          </h4>
        </div>
        <div class="border-top p-4 d-flex">
          <div class="mr-4">
            <h5>Universities:</h5>
          </div>
          <input
            v-model="partner_institution_facilated.universities"
            type="text"
            placeholder="Type Here"
            id=""
          />
        </div>
        <div class="border-top p-4 d-flex">
          <div class="mr-4">
            <h5>Research Institution:</h5>
          </div>
          <input
            v-model="partner_institution_facilated.research_institution"
            type="text"
            placeholder="Type Here"
            id=""
          />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="border institution">
        <div class="p-4">
          <h4>
            Collaborations established from the research and training hubs
          </h4>
        </div>
        <div class="border-top p-4 d-flex">
          <input
            v-model="colaboration_established"
            type="text"
            placeholder="Type Here"
            id=""
          />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="border institution">
        <div class="p-4">
          <h4>Career progression of the RCS fellowships alumni</h4>
        </div>
        <div class="border-top p-4 d-flex">
          <input
            v-model="career_progression"
            type="text"
            placeholder="Type Here"
            id=""
          />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="border institution">
        <div class="p-4">
          <h4>
            Other awards received - (Recorgnization of fellowship beneficiaries
            for their execelence in their fields)
          </h4>
        </div>
        <div class="border-top p-4 d-flex">
          <input
            v-model="other_awards_received"
            type="text"
            placeholder="Type Here"
            id=""
          />
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-end mt-4">
      <div @click="saveForm()" class="save-icon">
        <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
        <h5>save</h5>
      </div>
    </div>
  </div>

  <div class="px-4">
    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-1"
    >
      <span>A. Linkage between institution and policy actors</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-1">
      <LinkageBetweenInstitutionAndActor />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-2"
    >
      <span>B. Annual Performance against the work plans</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-2">
      <AnnualPerformance />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-3"
    >
      <span>C. Additional achievements or updates:</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>
    <div class="collapse" id="collapse-3">
      <AdditionalAchivements />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-4"
    >
      <span>D. Challenges and Lessons Learnt</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>
    <div class="collapse" id="collapse-4">
      <challengeAndLesson />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-5"
    >
      <span>E. Business Development</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>
    <div class="collapse" id="collapse-5">
      <BusinessDevelopment />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-6"
    >
      <span>F. New opportunities identified during the year</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>
    <div class="collapse" id="collapse-6">
      <NewOpportunities />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-7"
    >
      <span>G. Major planned activities for the quarter</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>
    <div class="collapse" id="collapse-7">
      <MajorPlannedActivities />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-8"
    >
      <span>H. Risk Identified</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>
    <div class="collapse" id="collapse-8">
      <RiskIndentified />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import LinkageBetweenInstitutionAndActor from "./form-sections/LinkageBetweenInstitution.vue";
import AnnualPerformance from "./form-sections/AnnualPerformance.vue";
import AdditionalAchivements from "./form-sections/AdditionalAchivements.vue";
import challengeAndLesson from "./form-sections/ChallengesAndLesson.vue";
import BusinessDevelopment from "./form-sections/BusinessDevelopment.vue";
import NewOpportunities from "./form-sections/NewOpportunities.vue";
import MajorPlannedActivities from "./form-sections/MajorPLannedActivities.vue";
import RiskIndentified from "./form-sections/RiskIndentified.vue";

export default defineComponent({
  name: "createForm",

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
  components: {
    LinkageBetweenInstitutionAndActor,
    AnnualPerformance,
    AdditionalAchivements,
    challengeAndLesson,
    BusinessDevelopment,
    NewOpportunities,
    MajorPlannedActivities,
    RiskIndentified,
  },
  data() {
    return {
      error: true,
      quater: "Quater 1",
      year: "2023",
      partner_institution_facilated: {
        universities: null,
        research_institution: null,
      },
      colaboration_established: null,
      career_progression: null,
      other_awards_received: null,
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    saveForm() {
      const data = {
        quater: this.quater,
        year: this.year,
        partner_institution_facilated: this.partner_institution_facilated,
        colaboration_established: this.colaboration_established,
        career_progression: this.career_progression,
        other_awards_received: this.other_awards_received,
      };

      for (const property in data) {
        // console.log(`${property}: ${object[property]}`);
        if (data[property] === null) {
          this.error = true;
          this.toast("Warning", "Fill form completely", "warning");
          return;
        } else {
          this.error = false;
          // console.log(this.engagements_form);
        }
      }

      if (this.error) {
        this.toast("Warning", "Fill form completely", "warning");
        return;
      }

      if (
        data.partner_institution_facilated.research_institution !== null &&
        data.partner_institution_facilated.universities !== null
      ) {
        console.log(data);
        const newItem = {
          component: "resource_related",
          item: {
            name: "initial",
            form: data,
          },
        };
        this.SAVE_DATA(newItem);
      } else {
        this.toast("Warning", "Fill form completely", "warning");
      }
    },
  },
});
</script>

<style scoped>
.section-header {
  background-color: #61a229;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.select-wrapper {
  display: flex;
}
.select-item select {
  width: 100%;
}
.select-item {
  display: flex;
  flex-direction: column;
  width: 33%;
  margin-right: 10px;
}

.select-item span {
  color: red;
}
option {
  font-size: 18px;
  background-color: #ffffff;
  border: 1px solid red !important;
}
.sub-header {
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  line-height: 40px;
}
.institution input {
  margin-left: 20px;
  width: 75%;
  border: none;
  outline: none;
  background-color: transparent;
}
.institution h5 {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: 400;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
}

.institution h4 {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: bold;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
}
</style>
