<template>
  <!-- Form Header -->
  <div class="row header border-bottom mb-3">
    <div class="col">
      <span>
        <span class="text1">Data Entry Form</span>
        <span class="text2">- {{ unit }}</span>
      </span>
    </div>

    <div class="col">
      <div class="text-start">Select Units</div>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="unit"
      >
        <option selected value="select" disabled>--Select Option--</option>
        <!-- @click="changeUnit('Annual Performance')" -->
        <option value="Annual Performance">
          Annual Performance Report and Planning
        </option>
        <option @click="changeUnit('Human Resource')" value="Human Resource">
          Human Resource Report
        </option>
        <!-- @click="changeUnit('Policy Engagement')" -->
        <option value="Policy Engagement">Policy Engagement Reporting</option>
        <option @click="changeUnit('research')" value="research">
          Research And Research Related Capacity Strengthning Report
        </option>
        <option @click="changeUnit('publications')" value="publications">
          Publications
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreateForm",
  data() {
    return {
      unit: "",
    };
  },
  watch: {
    unit(val) {
      switch (val) {
        case "Annual Performance":
          this.$router.push("/data-entry/annual-performance/create");
          break;
        case "Human Resource":
          this.$router.push("/data-entry/human-resource/create");
          break;
        case "Policy Engagement":
          this.$router.push("/data-entry/policy-engagement");
          break;
        case "research":
          this.$router.push("/data-entry/research-related");
          break;
        case "publications":
          this.$router.push("/data-entry/publications");
          break;
        default:
          this.$router.push("/data-entry");
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  background-color: #f9f9f9;
  padding-bottom: 15px;
  width: 100%;
  align-items: center;

  .text1 {
    color: #61a229;
    letter-spacing: 0px;
    font-weight: bold;
    font-size: 1.35rem;
    font-family: Montserrat;
  }

  .text2 {
    font-weight: normal;
    font-size: 0.9rem;
    font-family: Montserrat;
    letter-spacing: 0px;
    color: #61a229;
    opacity: 1;
  }
}
</style>
