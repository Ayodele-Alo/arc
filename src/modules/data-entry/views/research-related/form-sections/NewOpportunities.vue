<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Describe new opportunities for the theme or the Center identified
          during this year. Please ensure to include all planned opportunities
          and prospects e.g. proposals prospects identified but yet to be
          developed.
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="row-header p-5">
              Type of opportunity
              <span
                >(Upcoming engagement, partnership development/collaborations,
                plans for proposals etc.)</span
              >
            </th>
            <th class="row-header p-5" scope="col">Comments and Next Steps</th>
          </tr>
          <tr v-for="(item, index) in opportunities_form" :key="index">
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="mt-3">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    class="px-1"
                    type="text"
                    v-model="item.type_of_opportunity"
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
                    v-model="item.comment_and_next_steps"
                  />
                </div>
              </div>
              <div
                @click="removeFromOpportunitiesForm(item)"
                class="remove-icon position-absolute bottom-0 end-0"
              >
                x
              </div>
            </th>
          </tr>
        </tbody>
      </table>
      <p class="add-more" @click="addToOpportunitiesForm()">+ Add more</p>
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
      opportunities_form: [
        {
          id: 1,
          type_of_opportunity: "",
          comment_and_next_steps: "",
        },
      ],
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    addFormCount() {
      this.formCount++;
    },
    addToOpportunitiesForm() {
      this.opportunities_form.push({
        id: new Date().getTime(),
        type_of_opportunity: "",
        comment_and_next_steps: "",
      });
    },
    removeFromOpportunitiesForm(rowItem) {
      this.opportunities_form = this.opportunities_form.filter(
        (item) => item.id !== rowItem.id
      );
    },
    saveForm() {
      this.opportunities_form.forEach((item) => {
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
      const newItem = {
        component: "resource_related",
        item: { name: "newOpportunities", form: this.opportunities_form },
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
table th {
  width: 400px;
}
.engagement-text {
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  line-height: 40px;
}
</style>
