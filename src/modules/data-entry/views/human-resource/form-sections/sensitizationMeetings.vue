<template>
  <div class="mt-3 w-100">
    <label class="form-label px-3 fs-6 text-secondary"
      >Sensitization meetings held for staff on the succession plan</label
    >

    <div class="border bg-white">
      <div class="d-flex">
        <div class="d-flex align-items-center w-50 py-2 px-3 cell-border">
          <p class="mt-3 form-label fw-bold text-secondary">
            Sensitization meetings held
          </p>
        </div>
        <div class="w-50 py-2 px-3 d-flex align-items-center">
          <p class="mt-3 form-label fw-bold text-secondary">
            Number of staff in the sensitization meetings
          </p>
        </div>
      </div>
      <div
        v-for="(item, index) in sensitization_meetings"
        :key="index"
        class=""
      >
        <div class="d-flex border-top">
          <div class="d-flex align-items-center w-50 p-2 cell-border">
            <p class="mt-3">{{ index + 1 }}.</p>
            <input type="text" placeholder="Type Here" v-model="item.meeting" />
          </div>
          <div class="w-50 p-2 d-flex align-items-center position-relative">
            <p class="mt-3">{{ index + 1 }}.</p>
            <input
              type="text"
              placeholder="Type Here"
              v-model="item.staff_count"
            />
            <div
              v-if="sensitization_meetings.length > 1"
              @click="removeFromSensitizationMeetings(item)"
              class="remove-icon"
            >
              x
            </div>
          </div>
        </div>
      </div>
    </div>
    <p
      @click="addToSensitizationMeetings()"
      class="add-more p-2 fw-bold text-secondary"
    >
      + Add more
    </p>

    <label class="form-label px-3 fs-6 text-secondary mt-4"
      >Staff sensitization forums on the revised organizational structure/
      organogram</label
    >

    <div class="border bg-white">
      <div class="d-flex">
        <div class="d-flex align-items-center w-50 py-2 px-3 cell-border">
          <p class="mt-3 form-label fw-bold text-secondary">
            Sensitization meetings held
          </p>
        </div>
        <div class="w-50 py-2 px-3 d-flex align-items-center">
          <p class="mt-3 form-label fw-bold text-secondary">
            Number of staff in the sensitization meetings
          </p>
        </div>
      </div>
      <div v-for="(item, index) in sensitization_forums" :key="index" class="">
        <div class="d-flex border-top">
          <div class="d-flex align-items-center w-50 p-2 cell-border">
            <p class="mt-3">{{ index + 1 }}.</p>
            <input type="text" placeholder="Type Here" v-model="item.meeting" />
          </div>
          <div class="w-50 p-2 d-flex align-items-center position-relative">
            <p class="mt-3">{{ index + 1 }}.</p>
            <input
              type="text"
              placeholder="Type Here"
              v-model="item.staff_count"
            />
            <div
              v-if="sensitization_forums.length > 1"
              @click="removeFromSensitizationForums(item)"
              class="remove-icon"
            >
              x
            </div>
          </div>
        </div>
      </div>
    </div>
    <p
      @click="addToSensitizationForums()"
      class="add-more p-2 fw-bold text-secondary"
    >
      + Add more
    </p>

    <div class="d-flex justify-content-end mt-4">
      <div @click="saveForm()" class="save-icon">
        <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
        <h5>save</h5>
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
      error: true,
      sensitization_meetings: [
        {
          id: 1,
          meeting: "",
          staff_count: "",
        },
      ],
      sensitization_forums: [
        {
          id: 1,
          meeting: "",
          staff_count: "",
        },
      ],
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    addToSensitizationMeetings() {
      this.sensitization_meetings.push({
        id: new Date().getTime(),
        procedure: "",
      });
    },

    addToSensitizationForums() {
      this.sensitization_forums.push({
        id: new Date().getTime(),
        procedure: "",
      });
    },

    removeFromSensitizationMeetings(rowItem) {
      if (this.sensitization_meetings.length > 1) {
        this.sensitization_meetings = this.sensitization_meetings.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },
    removeFromSensitizationForums(rowItem) {
      if (this.sensitization_forums.length > 1) {
        this.sensitization_forums = this.sensitization_forums.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    saveForm() {
      this.sensitization_meetings.forEach((item) => {
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

      this.sensitization_forums.forEach((item) => {
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
        sensitization_meetings: this.sensitization_meetings,
        sensitization_forums: this.sensitization_forums,
      };
      const newItem = {
        component: "human_resource",
        item: { name: "sensitization_meetings", form: data },
      };

      console.log(newItem);
      this.SAVE_DATA(newItem);
    },
  },
});
</script>

<style scoped>
.add-more {
  cursor: pointer;
}
.cell-border {
  border-right: 1px solid #d3d3d3;
}

input {
  border: none;
  outline: none;
  width: 100%;
  background-color: inherit;
}
.remove-icon {
  position: absolute;
  bottom: -5px;
  right: -5px;
  background-color: #f75d59;
  /* padding: 2px; */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  line-height: 10px;
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
