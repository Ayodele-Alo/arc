<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Highlight the key plans for next year for the quarter. Breakdown of
          the specific activities will be in the annual work plan document.
        </p>
      </div>
      <div class="mt-5">
        <div class="border institution">
          <div class="p-4">
            <h4>Major planned activities as a theme for the quarter.</h4>
            <h4>
              Alignment to the 2022-26 strategy, including the principles and
              values: Collaborative, Innovative, Truly African and Impact
              oriented
            </h4>
          </div>
          <div class="border-top p-4 d-flex">
            <input
              type="text"
              placeholder="Type Here"
              id=""
              v-model="MajorPlannedActivities"
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
      MajorPlannedActivities: null,
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    saveForm() {
      console.log(this.MajorPlannedActivities);
      const newItem = {
        component: "resource_related",
        item: {
          name: "majorPlannedActivities",
          form: this.MajorPlannedActivities,
        },
      };
      if (this.MajorPlannedActivities === null) {
        this.toast("Warning", "Fill form completely", "warning");
      } else {
        // this.SAVE_DATA(newItem);
      }
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
table th {
  width: 400px;
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
