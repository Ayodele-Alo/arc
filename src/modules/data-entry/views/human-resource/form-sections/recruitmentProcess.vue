<template>
  <div class="mt-3">
    <div class="bg-white border border-2">
      <label class="form-label fw-bold text-secondary p-3"
        >Institutionalized procedures to forecast human resources requirements
        at the Center</label
      >
      <div
        v-for="(item, index) in institutionalized_procedures"
        :key="index"
        class=""
      >
        <div class="border-top border-2 w-100 mx-0">
          <div class="px-4 py-1 d-flex align-items-center position-relative">
            <p class="mt-3">{{ index + 1 }}.</p>
            <input
              type="email"
              placeholder="Type Here"
              v-model="item.procedure"
            />
            <div
              @click="removeFromInstitution(item)"
              v-if="institutionalized_procedures.length > 1"
              class="position-absolute bottom-0 end-0 px-2 remove-icon rounded-circle"
            >
              x
            </div>
          </div>
        </div>
      </div>
    </div>
    <p @click="addToInstitution()" class="add-more p-2 fw-bold text-secondary">
      + Add more
    </p>
  </div>
  <div class="mt-3">
    <div class="bg-white border border-2">
      <label class="form-label fw-bold text-secondary p-3"
        >Lead time in mobilizing human resources to meet the demand for new
        skills and staff for new initiatives and opportunities</label
      >
      <div
        v-for="(item, index) in lead_time_in_mobilizing"
        :key="index"
        class=""
      >
        <div class="border-top border-2 w-100 mx-0">
          <div class="px-4 py-1 d-flex align-items-center position-relative">
            <p class="mt-3">{{ index + 1 }}.</p>
            <input
              type="email"
              placeholder="Type Here"
              v-model="item.lead_time"
            />
            <div
              @click="removeFromLeadTime(item)"
              v-if="lead_time_in_mobilizing.length > 1"
              class="position-absolute bottom-0 end-0 px-2 remove-icon rounded-circle"
            >
              x
            </div>
          </div>
        </div>
      </div>
    </div>
    <p @click="addToLeadTime()" class="add-more p-2 fw-bold text-secondary">
      + Add more
    </p>
  </div>
  <div class="mt-3">
    <div class="bg-white border border-2">
      <label class="form-label fw-bold text-secondary p-3"
        >Turn-around time of talent/human resource acquisition</label
      >
      <div
        v-for="(item, index) in turn_around_time_of_acqusition"
        :key="index"
        class=""
      >
        <div class="border-top border-2 w-100 mx-0">
          <div class="px-4 py-1 d-flex align-items-center position-relative">
            <p class="mt-3">{{ index + 1 }}.</p>
            <input
              type="email"
              placeholder="Type Here"
              v-model="item.turn_around_time"
            />
            <div
              @click="removeFromTurnAroundTime(item)"
              v-if="turn_around_time_of_acqusition.length > 1"
              class="position-absolute bottom-0 end-0 px-2 remove-icon rounded-circle"
            >
              x
            </div>
          </div>
        </div>
      </div>
    </div>
    <p
      @click="addToTurnAroundTime()"
      class="add-more p-2 fw-bold text-secondary"
    >
      + Add more
    </p>
  </div>
  <div class="mt-3">
    <div class="bg-white border border-2">
      <label class="form-label fw-bold text-secondary p-3"
        >Updates on operationalizing the Succession planning roadmap</label
      >
      <div v-for="(item, index) in updates_on_operation" :key="index" class="">
        <div class="border-top border-2 w-100 mx-0">
          <div class="px-4 py-1 d-flex align-items-center position-relative">
            <p class="mt-3">{{ index + 1 }}.</p>
            <input
              type="email"
              placeholder="Type Here"
              v-model="item.operation_update"
            />
            <div
              @click="removeFromUpdateOnOperation(item)"
              v-if="updates_on_operation.length > 1"
              class="position-absolute bottom-0 end-0 px-2 remove-icon rounded-circle"
            >
              x
            </div>
          </div>
        </div>
      </div>
    </div>
    <p
      @click="addToUpdateOnOperation()"
      class="add-more p-2 fw-bold text-secondary"
    >
      + Add more
    </p>
  </div>
  <div class="mt-3">
    <div class="bg-white border border-2">
      <label class="form-label fw-bold text-secondary p-3"
        >Updates on Procedures instituted to forecast human resources
        requirements at the Center</label
      >
      <div v-for="(item, index) in updates_on_procedures" :key="index" class="">
        <div class="border-top border-2 w-100 mx-0">
          <div class="px-4 py-1 d-flex align-items-center position-relative">
            <p class="mt-3">{{ index + 1 }}.</p>
            <input
              type="email"
              placeholder="Type Here"
              v-model="item.procedure_update"
            />
            <div
              @click="removeFromUpdateOnProcedures(item)"
              v-if="updates_on_procedures.length > 1"
              class="position-absolute bottom-0 end-0 px-2 remove-icon rounded-circle"
            >
              x
            </div>
          </div>
        </div>
      </div>
    </div>
    <p
      @click="addToUpdateOnOProcedure"
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
      institutionalized_procedures: [
        {
          id: 1,
          procedure: "",
        },
      ],
      lead_time_in_mobilizing: [
        {
          id: 1,
          lead_time: "",
        },
      ],
      turn_around_time_of_acqusition: [
        {
          id: 1,
          turn_around_time: "",
        },
      ],
      updates_on_operation: [
        {
          id: 1,
          operation_update: "",
        },
      ],
      updates_on_procedures: [
        {
          id: 1,
          procedure_update: "",
        },
      ],
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    addToInstitution() {
      this.institutionalized_procedures.push({
        id: new Date().getTime(),
        procedure: "",
      });
    },

    addToLeadTime() {
      this.lead_time_in_mobilizing.push({
        id: new Date().getTime(),
        lead_time: "",
      });
    },

    addToTurnAroundTime() {
      this.turn_around_time_of_acqusition.push({
        id: new Date().getTime(),
        turn_around_time: "",
      });
    },

    addToUpdateOnOperation() {
      this.updates_on_operation.push({
        id: new Date().getTime(),
        operation_update: "",
      });
    },

    addToUpdateOnOProcedure() {
      this.updates_on_procedures.push({
        id: new Date().getTime(),
        procedure_update: "",
      });
    },

    removeFromInstitution(rowItem) {
      if (this.institutionalized_procedures.length > 1) {
        this.institutionalized_procedures =
          this.institutionalized_procedures.filter(
            (item) => item.id !== rowItem.id
          );
      }
    },

    removeFromLeadTime(rowItem) {
      if (this.lead_time_in_mobilizing.length > 1) {
        this.lead_time_in_mobilizing = this.lead_time_in_mobilizing.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    removeFromTurnAroundTime(rowItem) {
      if (this.turn_around_time_of_acqusition.length > 1) {
        this.turn_around_time_of_acqusition =
          this.turn_around_time_of_acqusition.filter(
            (item) => item.id !== rowItem.id
          );
      }
    },

    removeFromUpdateOnOperation(rowItem) {
      if (this.updates_on_operation.length > 1) {
        this.updates_on_operation = this.updates_on_operation.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    removeFromUpdateOnProcedures(rowItem) {
      if (this.updates_on_procedures.length > 1) {
        this.updates_on_procedures = this.updates_on_procedures.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    saveForm() {
      this.institutionalized_procedures.forEach((item) => {
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

      this.lead_time_in_mobilizing.forEach((item) => {
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

      this.turn_around_time_of_acqusition.forEach((item) => {
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

      this.updates_on_operation.forEach((item) => {
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

      this.updates_on_procedures.forEach((item) => {
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
        institutionalized_procedures: this.institutionalized_procedures,
        lead_time_in_mobilizing: this.lead_time_in_mobilizing,
        turn_around_time_of_acqusition: this.turn_around_time_of_acqusition,
        updates_on_operation: this.updates_on_operation,
        updates_on_procedures: this.updates_on_procedures,
      };

      const newItem = {
        component: "human_resource",
        item: { name: "human_resource_recruitment", form: data },
      };

      this.SAVE_DATA(newItem);
    },
  },
});
</script>

<style scoped>
.add-more {
  cursor: pointer;
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

.remove-icon {
  background-color: #f75d59;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 14px;
}

input {
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  margin-left: 10px;
}

input:focus {
  border: none;
  outline: 0;
}
</style>
