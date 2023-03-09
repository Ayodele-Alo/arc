<template>
  <!-- Form Header -->
  <div class="row header">
    <div class="col">
      <span>
        <span class="text1"> Data Entry Form</span>
        <span class="text2">- {{ unit }}</span>
      </span>
    </div>
    <div class="col">
      <div class="text-start">Select Units</div>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="unit"
        @change="changeUnit()"
      >
        <option value="select">Select</option>
        <option value="Annual Performance">
          Annual Performance Report and Planning
        </option>
        <option value="Human Resource">Human Resource Report</option>
        <option value="Policy Engagement">Policy Engagement Reporting</option>
        <option value="research">
          Research And Research Related Capacity Strengthning Report
        </option>
        <option value="publications">Publications</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "createForm",
  data() {
    return {
      unit: "select",
    };
  },
  components: {},

  methods: {
    changeUnit() {
      if (this.unit === "Annual Performance") {
        this.$router.push("/data-entry/annual-performance/create");
      }
      if (this.unit === "Human Resource") {
        this.$router.push("/data-entry/human-resource/create");
      }
      if (this.unit === "Policy Engagement") {
        this.$router.push("/data-entry/policy-engagement");
      }
      if (this.unit === "research") {
        this.$router.push("/data-entry/research-related");
      }
      if (this.unit === "publications") {
        this.$router.push("/data-entry/publications");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 100px;
  background-color: #f9f9f9;
  padding-bottom: 15px;
  width: 83vw;
  padding-top: 10px;

  .text1 {
    color: #61a229;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--30-);
    text-align: left;
    font: normal normal normal 40px/49px Montserrat;
    letter-spacing: 0px;
    color: #61a229;
    opacity: 1;
  }

  .text2 {
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--30-);
    text-align: left;
    font: normal normal normal 20px/24px Montserrat;
    letter-spacing: 0px;
    color: #61a229;
    opacity: 1;
  }
}
</style>
