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
            <th class="row-header p-5">Challenges</th>
            <th class="row-header p-5" scope="col">Lesson Learnt</th>
          </tr>
          <tr v-for="(item, index) in challenges_form" :key="index">
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="mt-3">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    class="px-1"
                    type="text"
                    v-model="item.challenges"
                  />
                </div>
              </div>
            </th>
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="mt-3">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    class="px-1"
                    type="text"
                    v-model="item.lessons_learnt"
                  />
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
      <p class="add-more" @click="addToChallengesForm()">+ Add more</p>

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
import { mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export default defineComponent({
  name: "ChallengesAndLessons",
  components: {},
  props: {
    period: String,
  },
  data() {
    return {
      formCount: 1,
      challenges_form: [
        {
          challenges: "",
          lessons_learnt: "",
        },
      ],
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    addFormCount() {
      this.formCount++;
    },
    addToChallengesForm() {
      this.challenges_form.push({
        challenges: "",
        lessons_learnt: "",
      });
    },

    saveForm() {
      const newItem = {
        component: this.period,
        type: "report",
        item: { name: "challengesAndLessonLearnt", form: this.challenges_form },
      };
      this.SAVE_DATA(newItem);
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
table {
  background-color: white;
}
</style>
