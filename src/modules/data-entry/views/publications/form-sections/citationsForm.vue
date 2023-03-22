<template>
  <div>
    <div class="main-sec">
      <span class="form-title">Cite as APA users</span>
      <hr class="hr" />
      <input type="text" placeholder="Type here" />
    </div>

    <br />

    <div class="main-sec">
      <span>Units</span>

      <div>
        <div
          class="form-check form-check-inline"
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

    <br>

    <div class="main-sec">
      <span>Units</span>

      <div>
        <div
          class="form-check form-check-inline"
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

<style scoped>
.main-sec {
  /* Layout Properties */
  top: 495px;
  left: 434px;
  width: 80vw;
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
