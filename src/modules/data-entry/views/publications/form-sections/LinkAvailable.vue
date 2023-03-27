<template>
  <div>
    <div class="form">
      <span class="form-title">Outputs</span>

      <br />

      <div>
        <div
          class="form-check form-check-inline"
          v-for="item in link_options"
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
        link_options: [
{ text: "ISBN", value: "ISBN" },
{ text: "DOI", value: "DOI" },
{ text : "Hyperlink", value: "Hyperlink" },
{ text: "Soft copy of the book", value: "Soft copy of the book" },

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
