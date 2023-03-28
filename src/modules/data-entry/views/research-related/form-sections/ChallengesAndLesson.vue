<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Describe any major challenges and lessons learnt during the year.
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
            <th class="row-header position-relative">
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
              <div
                v-if="challenges_form.length > 1"
                @click="removeFromAChallengesForm(item)"
                class="remove-icon position-absolute bottom-0 end-0"
              >
                x
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
      challenges_form: [
        {
          id: 1,
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
        id: new Date().getTime(),
        challenges: "",
        lessons_learnt: "",
      });
    },
    removeFromAChallengesForm(rowItem) {
      this.challenges_form = this.challenges_form.filter(
        (item) => item.id !== rowItem.id
      );
    },

    saveForm() {
      this.challenges_form.forEach((item) => {
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
      console.log(this.challenges_form);

      const newItem = {
        component: "resource_related",
        item: { name: "challengesAndLesson", form: this.challenges_form },
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
