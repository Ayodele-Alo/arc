<template>
  <div class="main">
    <div>
      <div class="row">
        <div class="col">
          <select
            v-model="theme_name"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="" disabled>--Select Theme--</option>
            <option value="Policy Engagement and Communication (PEC)">
              Policy Engagement and Communication (PEC)
            </option>
            <option value="Population Dynamics and Urbanization (PDU)">
              Population Dynamics and Urbanization (PDU)
            </option>
            <option value="Operations (OPU)">Operations (OPU)</option>
            <option value="Human Development (HD)">
              Human Development (HD)
            </option>
            <option value="Health and Wellbeing (HaW)">
              Health and Wellbeing (HaW)
            </option>
            <option value="Data Science and Evaluation (DSE)">
              Data Science and Evaluation (DSE)
            </option>
          </select>
        </div>
        <div class="col">
          <select
            v-model="month"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="" disabled>--Select Month--</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>

        <div class="col">
          <select
            v-model="year"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="" disabled>--Select Year--</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
    </div>

    <div class="position-fixed bottom-0 end-0">
      <button class="submit-btn" @click.prevent="submitForm()">
        Submit Form
      </button>
      <button @click="saveToDraft()" class="save-btn">Save to draft</button>
    </div>

    <br /><br /><br />

    <div>
      <span>Project name/ Unit name</span>
      <textarea v-model="project_name" name="" id=""></textarea>
    </div>

    <br /><br />

    <div>
      <span>Progress for the month</span>
      <textarea v-model="progress_for_the_month" name="" id=""></textarea>
    </div>

    <br /><br />
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th class="row-header p-5">Challenges</th>
          <th class="row-header p-5" scope="col">Lesson Learnt</th>
        </tr>
        <tr>
          <th class="row-header">
            <div class="row">
              <div class="d-flex align-items-center">
                <input
                  v-model="challenges"
                  placeholder="Type Here"
                  class="px-1"
                  type="text"
                />
              </div>
            </div>
          </th>
          <th class="row-header">
            <div class="row">
              <div class="d-flex align-items-center">
                <input
                  v-model="lessons"
                  placeholder="Type Here"
                  class="px-1"
                  type="text"
                />
              </div>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
    <div>
      <span>Planned activities for next month</span>
      <textarea v-model="progress" name="" id=""></textarea>
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
      theme_name: "Policy Engagement and Communication (PEC)",
      month: "",
      year: "2023",
      project_name: "",
      progress_for_the_month: "",
      progress: "",
      challenges: "",
      lesson: "",
    };
  },

  methods: {
    submitForm() {
      console.log("jjjj");
      this.progress = "";
      this.progress_for_the_month = "";
      this.project_name = "";
      this.challenges = "";
      this.lesson = "";
      this.toast("Success", "Form submitted successfully", "success");
    },

    saveToDraft() {
      this.toast("Success", "Form saved to draft", "success");
    },
  },

  mounted() {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const d = new Date();
    console.log(month[d.getMonth()]);
    this.month = month[d.getMonth()];
  },
});
</script>

<style lang="scss" scoped>
.main {
  // input {
  //   top: 428px;
  //   left: 434px;
  //   width: 100%;
  //   height: 76px;
  //   background: var(--60-bg) 0% 0% no-repeat padding-box;
  //   background: #ffffff 0% 0% no-repeat padding-box;
  //   border: 1px solid #707070ab;
  //   opacity: 1;
  // }
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
  textarea {
    width: 100%;
    height: 80px;
    background: var(--60-bg) 0% 0% no-repeat padding-box;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070ab;
    opacity: 1;
  }
}
</style>
