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
      >
        <option selected value="select">Select</option>
        <option @click="changeUnit('Annual Performance')" value="Annual Performance">
          Annual Performance Report and Planning
        </option>
        <option @click="changeUnit('Human Resource')" value="Human Resource">Human Resource Report</option>
        <option @click="changeUnit('Policy Engagement')" value="Policy Engagement">Policy Engagement Reporting</option>
        <option @click="changeUnit('research')" value="research">
          Research And Research Related Capacity Strengthning Report
        </option>
        <option @click="changeUnit('publications')" value="publications">Publications</option>
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
      unit: ""
    };
  },
  components: {},

  methods: {
    async changeUnit() {
      // this.unit = item,
      this.$router.push({ path: '/' })

      console.log('unit')
      // if (this.unit === "Annual Performance") {
      //   await this.$router.push("/data-entry/annual-performance/create");
      // }
      // if (this.unit === "Human Resource") {
      //  await  this.$router.push("/data-entry/human-resource/create");
      // }
      // if (this.unit === "Policy Engagement") {
      //   await this.$router.push("/data-entry/policy-engagement");
      // }
      // if (this.unit === "research") {
      //   await this.$router.push("/data-entry/research-related");
      // }
      // if (this.unit === "publications") {
      //   await this.$router.push("/data-entry/publications");
      // }
      //    this.$forceUpdate();
    },
  },

  watch: {
    unit(val){
          console.log('dnnjed')
    }
  }
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
