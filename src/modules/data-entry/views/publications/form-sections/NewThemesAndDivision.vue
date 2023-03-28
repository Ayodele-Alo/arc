<template>
  <div>
    <div class="form">
      <span class="form-title">Themes</span>

      <br />

      <div>
        <div
          class="form-check form-check-inline"
          v-for="item in themes_options"
          :key="item"
        >
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            :value="item.value"
          />
          <label class="form-check-label" for="inlineRadio1">{{
            item.text
          }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        themes_options: [
{ text: "WARO", value: "WARO" },
{ text: "PEC", value: "PEC" },
{ text: "Human Development (HD)", value: "Human Development (HD)" },
{ text: "Health and Well-Being (HaW)", value: "Health and Well-Being (HaW)" },
{ text: "Population Dynamics and Urbanization in Africa (PDAU)", value: "Population Dynamics and Urbanization in Africa (PDAU)" },
{ text: "Data Science and Evaluation (DSE)", value: "Data Science and Evaluation (DSE)" },
{ text: "Research & Related Capacity Strengthening (RRCS)", value: "Research & Related Capacity Strengthening (RRCS)" },
{ text: "Operations", value: "Operations" }
]
      }
    }
  }
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
