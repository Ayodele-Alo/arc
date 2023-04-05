<template>
  <div>
    <div class="form-input">
      <span class="form-title">Cite as APA users</span>
      <hr class="hr" />
      <input type="text" placeholder="Type here" />
    </div>

    <br />

       <div class="form-check">
      <span class="form-title">Units</span>

      <br />

      <div>
        <div
          class="form-check form-check-inline"
          v-for="item in related_options"
          :key="item"
        >
          <input
            class="form-check-input"
            type="radio"
            name="CitationsFormOptions"
            id="inlineRadio1"
            :value="item.value"
          />
          <label class="form-check-label" for="inlineRadio1">{{
            item.text
          }}</label>
        </div>
      </div>
    </div>

    <br />

    <div class="form-check">
      <span>Units</span>

      <div>
        <div
          class="form-check-inline"
          v-for="item in related_options"
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

    <br />

     <div class="d-flex justify-content-end mt-4">
      <div @click="saveForm()" class="save-icon">
        <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
        <h5>save</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      related_options: [
        { text: "Yes", value: "Yes" },
        { text: "No", value: "No" },
        { text: "Not Reported by Author", value: "Not Reported by Author" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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

  .form-title {
    text-align: left;
    font: normal normal 16px/19px Montserrat;
    font-weight: 500;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
}

.form-check{

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

  input[type="radio"] {
     height: 20px;
     width: 20px;
     margin-left: 0px;
    margin-right: 20px;
    margin-bottom: 25px;
    border: 1px solid black;
  }
}
}


</style>
