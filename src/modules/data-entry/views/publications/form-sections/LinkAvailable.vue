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
            v-model="link"
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
        link: "",
        link_options: [
{ text: "ISBN", value: "ISBN" },
{ text: "DOI", value: "DOI" },
{ text : "Hyperlink", value: "Hyperlink" },
{ text: "Soft copy of the book", value: "Soft copy of the book" },
]
      }
    },

          methods: {
    ...mapActions(["SAVE_DATA"]),

    saveForm() {
      const data = {
        link: this.link,
      };
      const newItem = {
        component: "publications",
        item: { name: "linkAvailable", form: data },
      };
      this.SAVE_DATA(newItem);
    },
  },
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
