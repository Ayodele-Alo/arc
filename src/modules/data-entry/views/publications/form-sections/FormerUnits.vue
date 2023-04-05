<template>
  <div>
    <div class="form">
      <span class="form-title">Units</span>

      <br />

      <div>
        <div
          class="form-check form-check-inline"
          v-for="item in units_options"
          :key="item"
        >
          <input
            class="form-check-input"
            type="radio"
            name="FormerUnitsOptions"
            id="inlineRadio1"
            :value="item.value"
            v-model="unit"
          />
          <label class="form-check-label" for="inlineRadio1">{{
            item.text
          }}</label>
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
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      units_options: [
        { text: "MCW", value: "MCW" },
        { text: "PDRH", value: "PDRH" },
        { text: "EYE", value: "EYE" },
        { text: "HSH", value: "HSH" },
        { text: "DME", value: "DME" },
        { text: "AAD", value: "AAD" },
        { text: "UWB", value: "UWB" },
        { text: "WARO", value: "WARO" },
        { text: "RoCS / RCS", value: "RoCS / RCS" },
        { text: "Visibility Unit", value: "Visibility Unit" },
        { text: "Advocacy Unit", value: "Advocacy Unit" },
        { text: "Synergy Unit", value: "Synergy Unit" },
        { text: "PEC", value: "PEC" },
        { text: "Operations", value: "Operations" },
      ],
      unit: "",
    };
  },
  methods: {
    ...mapActions(["SAVE_DATA"]),

    saveForm() {
      const data = {
        unit: this.unit,
      };
      const newItem = {
        component: "publications",
        item: { name: "formerUnits", form: data },
      };
      this.SAVE_DATA(newItem);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  /* Layout Properties */
  top: 495px;
  left: 434px;
  width: 100%;
  height: 25vh;
  /* UI Properties */
  background: #ffffff;
  border: 1px solid #707070ab;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  .form-title {
    text-align: left;
    font: normal normal 16px/19px Montserrat;
    font-weight: 500;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  input[type="radio"] {
    margin-right: 20px;
    margin-bottom: 25px;
  }
}
</style>
