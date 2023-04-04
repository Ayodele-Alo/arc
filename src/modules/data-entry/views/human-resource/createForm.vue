<template>
  <div class="mt-4 px-4">
    <div class="position-fixed bottom-0 end-0">
      <button @click="submitForm()" class="submit-btn">Submit Form</button>
      <button @click="saveToDraft()" class="save-btn">Save to draft</button>
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
    <div class="my-4 text-start">
      <p class="fw-bold text-secondary mb-1">1. Human Resource Report Tool</p>
      <small class="text-secondary"
        >This report gives an annual summary of the status of the Center in
        terms of human Resource guided by the strategic plan 2022-2026</small
      >
    </div>

    <div>
      <div
        class="section-header text-start"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
      >
        <span>A. Human Resource</span>
        <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
      </div>

      <div class="collapse" id="collapseExample">
        <humanResource />
      </div>
    </div>

    <div>
      <div
        class="section-header text-start"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample2"
      >
        <span>B. By Cadre</span>
        <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
      </div>

      <div class="collapse" id="collapseExample2">
        <byCadre />
      </div>
    </div>

    <div>
      <div
        class="section-header text-start"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample3"
      >
        <span>C. Human Resource Recruitment Process</span>
        <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
      </div>

      <div class="collapse" id="collapseExample3">
        <recruitmentProcess />
      </div>
    </div>

    <div>
      <div
        class="section-header text-start"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample4"
      >
        <span>D. Sensitization meetings</span>
        <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
      </div>

      <div class="collapse" id="collapseExample4">
        <sensitizationMeetings />
      </div>
    </div>

    <div>
      <div
        class="section-header text-start"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample5"
      >
        <span>E. Systems Thinking Approach -HR</span>
        <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
      </div>

      <div class="collapse" id="collapseExample5">
        <systemThinkingApproach />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import humanResource from "./form-sections/humanResource.vue";
import byCadre from "./form-sections/byCadre.vue";
import recruitmentProcess from "./form-sections/recruitmentProcess.vue";
import sensitizationMeetings from "./form-sections/sensitizationMeetings.vue";
import systemThinkingApproach from "./form-sections/systemsThinking.vue";

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
    humanResource,
    byCadre,
    recruitmentProcess,
    sensitizationMeetings,
    systemThinkingApproach,
  },

  data() {
    return {
      year: "2023",
    };
  },
  methods: {
    ...mapActions(["SUBMIT_FORM"]),

    submitForm() {
      const data = {
        component: "human_resource",
        year: this.year,
      };
      this.toast("Success", "Form submitted successfully", "success");
      this.SUBMIT_FORM(data);
      // console.log("hello");
    },

    saveToDraft() {
      this.toast("Success", "Form saved to draft", "success");
    },
  },
});
</script>

<style scoped>
.form-card {
  background-color: white;
  height: 20vh;
  width: 70vw;
  padding: 20px;
  background: var(--60-bg) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070ab;
  opacity: 1;
}

.theme-name-input {
  background: #ededed29 0% 0% no-repeat padding-box;
  border: 1px solid #70707087;
  border-radius: 8px;
  opacity: 1;
}

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

.form-section {
  overflow-y: scroll;
}

.annual-text1 {
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--text);
  text-align: left;
  font: normal normal bold 20px/24px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}

.annual-text2 {
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--text);
  text-align: left;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}

.submit-btn {
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--60-bg);
  text-align: center;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background: transparent
    linear-gradient(
      180deg,
      var(--unnamed-color-000000db) 0%,
      #2c4a13eb 0%,
      var(--30-) 100%
    )
    0% 0% no-repeat padding-box;
  background: transparent
    linear-gradient(180deg, #000000db 0%, #2c4a13eb 0%, #61a229 100%) 0% 0%
    no-repeat padding-box;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  z-index: 10;
}

.save-btn {
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--60-bg);
  text-align: center;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background: var(--unnamed-color-000000) 0% 0% no-repeat padding-box;
  background: #000000 0% 0% no-repeat padding-box;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  z-index: 10;
}

.select-item select {
  width: 400px;
}
</style>
