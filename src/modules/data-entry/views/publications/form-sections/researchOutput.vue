<template>
  <div class="main-sec">
    <span>Units</span>

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
        />
        <label class="form-check-label" for="inlineRadio1">{{
          item.text
        }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      years_options: [
        { text: "Published paper", value: "Published paper" },
        { text: "Supplement", value: "Supplement" },
        { text: "Book", value: "Book" },
        { text: "Book chapter", value: "Book chapter" },
        { text: "Technical Report", value: "Technical Report" },
        { text: "Framework", value: "Framework" },
        { text: "Policy Brief", value: "Policy Brief" },
        { text: "Fact Sheet", value: "Fact Sheet" },
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
</style>
