<template>
  <div>
    <div class="main-sec">
      <span class="form-title">Book Chapter Number/ Page Number</span>
      <hr class="hr" />
      <input type="text" placeholder="Type here" />
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
      book_chapter: "",
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    saveForm() {
      const data = {
        book_chapter: this.book_chapter,
      };
      const newItem = {
        component: "publications",
        item: { name: "bookChapter", form: data },
      };
      this.SAVE_DATA(newItem);
    },
  },
};
</script>

<style scoped>
.main-sec {
  /* Layout Properties */
  top: 495px;
  left: 434px;
  width: 100%;
  height: 20vh;
  /* UI Properties */
  background: var(--60-bg) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070ab;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
}

.form-title {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-16) / var(--unnamed-line-spacing-19)
    var(--unnamed-font-family-montserrat);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--text);
  text-align: left;
  font: normal normal bold 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
</style>
