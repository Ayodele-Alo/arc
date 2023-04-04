<template>
  <div>
    <div class="form-radio">
      <span class="form-title">Links available to the document</span>
      <br />
      <div>
        <div
          class="form-check form-check-inline"
          v-for="item in document_options"
          :key="item"
        >
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            :value="item.value"
            v-model="document"
          />
          <label class="form-check-label" for="inlineRadio1">{{
            item.text
          }}</label>
        </div>
      </div>
    </div>

    <br /><br />

    <div class="form-radio">
      <span class="form-title">Links available to the report</span>
      <br />
      <div>
        <div
          class="form-check form-check-inline"
          v-for="item in report_options"
          :key="item"
        >
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            :value="item.value"
            v-model="report"
          />
          <label class="form-check-label" for="inlineRadio1">{{
            item.text
          }}</label>
        </div>
      </div>
    </div>

    <br /><br />

    <div class="form-radio">
      <span class="form-title">Links available to the supplement</span>
      <br />
      <div>
        <div
          class="form-check form-check-inline"
          v-for="item in supplement_options"
          :key="item"
        >
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            :value="item.value"
            v-model="supplement"
          />
          <label class="form-check-label" for="inlineRadio1">{{
            item.text
          }}</label>
        </div>
      </div>
    </div>

    <br /><br />

    <div class="form-input">
      <span class="form-title">ISBN</span>
      <hr class="hr" />
      <input type="text" placeholder="Type here" v-model="isbn" />
    </div>

    <br /><br />

    <div class="form-input">
      <span class="form-title">DOI (Digital Object Identifier)</span>
      <hr class="hr" />
      <input type="text" placeholder="Type here" v-model="doi" />
    </div>

    <br /><br />

    <div class="form-input">
      <span class="form-title">Hyperlink</span>
      <hr class="hr" />
      <input type="text" placeholder="Type here" v-model="hyperlink" />
    </div>

    <br /><br />
    <div class="form-input">
      <span class="form-title">PMID</span>
      <hr class="hr" />
      <input type="text" placeholder="Type here" v-model="pmid" />
    </div>

    <br /><br />
    <div class="form-input">
      <span class="form-title">PMCID</span>
      <hr class="hr" />
      <input type="text" placeholder="Type here" v-model="pmcid" />
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
      document: "",
      report: "",
      supplement: "",
      isbn: "",
      doi: "",
      hyperlink: "",
      pmid: "",
      pmcid: "",
      document_options: [
        { text: "DOI", value: "DOI" },
        { text: "Hyperlink", value: "Hyperlink" },
      ],
      report_options: [
        { text: "ISBN", value: "ISBN" },
        { text: "DOI", value: "DOI" },
        { text: "Hyperlink", value: "Hyperlink" },
        { text: "Soft Copy of the Book", value: "Soft Copy of the Book" },
      ],
      supplement_options: [
        { text: "DOI", value: "DOI" },
        { text: "Hyperlink", value: "Hyperlink" },
        { text: "PMID", value: "PMID" },
        { text: "PMCID", value: "PMCID" },
      ],
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    saveForm() {
      const data = {
        document: this.document,
        report: this.report,
        supplement: this.supplement,
        isbn: this.isbn,
        doi: this.doi,
        hyperlink: this.hyperlink,
        pmid: this.pmid,
        pmcid: this.pmcid,
      };
      const newItem = {
        component: "publications",
        item: { name: "linksForm", form: data },
      };
      this.SAVE_DATA(newItem);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-radio {
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

.form-input {
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
  input {
    height: 25px;
    border: none;
    outline: none;
    background-color: transparent;
    margin-left: 4px;
  }
}
</style>
