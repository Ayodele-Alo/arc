<template>
  <table class="table table-bordered">
    <tbody>
      <tr>
        <th class="header-width row-header p-5" scope="col">Activities</th>
        <th class="header-width row-header p-5" scope="col">Number</th>
        <th class="header-width row-header p-5" scope="col">
          Additional Information
        </th>
      </tr>
      <tr v-for="(item, index) in systemThinkingApproach" :key="index">
        <th class="publication-content">
          <span>{{ index + 1 }}.</span>
          {{ item.activity }}
        </th>
        <td class="cell-height">
          <input type="text" placeholder="Type Here" v-model="item.number" />
        </td>
        <td class="cell-height">
          <input
            type="text"
            placeholder="Type Here"
            v-model="item.additionalInformation"
          />
        </td>
      </tr>
    </tbody>
  </table>

  <div class="d-flex justify-content-end mt-4">
    <div @click="saveForm()" class="save-icon">
      <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
      <h5>save</h5>
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
      error: true,
      systemThinkingApproach: [
        {
          activity:
            " Number of mapping exercises conducted to map the expertise required to implement the systems thinking approach",
          number: "",
          additionalInformation: "",
        },
        {
          activity:
            "Number of capacity strengthening activities for staff held on systems thinking",
          number: "",
          additionalInformation: "",
        },
        {
          activity: "Number os systems thinking consultants recruited",
          number: "",
          additionalInformation: "",
        },
        {
          activity:
            "Number of organizations identified with relevant skills in systems thinking for benchmarking",
          number: "",
          additionalInformation: "",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["SAVE_DATA"]),

    saveForm() {
      this.systemThinkingApproach.forEach((item) => {
        if (item.number !== "" && item.additionalInformation !== "") {
          this.error = false;
          return;
        } else {
          this.error = true;
        }
      });

      if (this.error) {
        this.toast("Warning", "Fill form completely", "warning");
        return;
      }

      const newItem = {
        component: "human_resource",
        item: {
          name: "systems_thinking",
          form: this.systemThinkingApproach,
        },
      };

      console.log(newItem);
      this.SAVE_DATA(newItem);
    },
  },
});
</script>

<style scoped>
.header-width {
  width: 300px;
}
.cell-height {
  height: 100px;
  align-items: center;
  text-align: center;
  /* padding-top: auto; */
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
  padding: 25px 15px;
  text-align: left;
}
.publication-iten {
  display: flex;
}
input {
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
  margin-top: 30px;
}
.pub-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 4px;
}
.publication-content {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: normal;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  padding: 25px 15px;
  text-align: left;
}
table {
  background-color: white;
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
