<template>
  <div>
    <div class="form">
      <span class="form-title">Years</span>

      <br />

      <div>
        <div
          class="form-check form-check-inline"
          v-for="item in years_options"
          :key="item"
        >
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            :value="item.value"
            @click="changeValue($event, item)"
            v-model="year"
            :checked="item.checked"
          />
          <label class="form-check-label">{{ item.text }}</label>
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
      year: "2023",
      years_options: [
        { text: "2005", value: "2005", checked: false },
        { text: "2006", value: "2006", checked: false },
        { text: "2007", value: "2007", checked: false },
        { text: "2008", value: "2008", checked: false },
        { text: "2009", value: "2009", checked: false },
        { text: "2012", value: "2012", checked: false },
        { text: "2013", value: "2013", checked: false },
        { text: "2014", value: "2014", checked: false },
        { text: "2015", value: "2015", checked: false },
        { text: "2016", value: "2016", checked: false },
        { text: "2017", value: "2017", checked: false },
        { text: "2018", value: "2018", checked: false },
        { text: "Q1-2019", value: "Q1-2019", checked: false },
        { text: "Q2-2019", value: "Q2-2019", checked: false },
        { text: "Q3-2019", value: "Q3-2019", checked: false },
        { text: "2020", value: "2020", checked: false },
        { text: "2021", value: "2021", checked: false },
        { text: "2022", value: "2022", checked: false },
        { text: "2023", value: "2023", checked: false },
      ],
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    changeValue(event, item) {
      item.checked = true;
      console.log(event);
      console.log(item);
    },

    saveForm() {
      const data = {
        year: this.year,
      };
      const newItem = {
        component: "publications",
        item: { name: "reportingPeriod", form: data },
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
  width: 80vw;
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
