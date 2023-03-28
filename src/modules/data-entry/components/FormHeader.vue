<template>
  <!-- Form Header -->
  <div class="row header border-bottom mb-3">
    <div class="col">
      <span>
        <span class="text1">Data Entry Form</span>
        <span class="text2">- {{ getActiveForm }}</span>
      </span>
    </div>

    <div class="col">
      <div class="text-start">Select Reports</div>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="unit"
      >
        <option value="" disabled>--Select Option--</option>
        <option value="Monthly">Monthly</option>
        <option value="Quarterly">Quarterly</option>
        <option value="Annually">Annually</option>
        <option value="Publications">Publications</option>
        <option value="Research">
          Resource And Research Related Capacity Strengthening Report
        </option>
        <option value="Human Resource">Human Resource (HR)</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "CreateForm",
  data() {
    return {
      unit: "",
    };
  },
  computed: {
    ...mapGetters(["getActiveForm"]),
  },
  methods: {
    ...mapMutations(["setActiveForm"]),
  },
  watch: {
    unit(val) {
      this.setActiveForm(val);
      switch (val) {
        case "Annually":
          this.$router.push("/data-entry/annual-performance/create");
          break;
        case "Quarterly":
          this.$router.push("/data-entry/quarterly/create");
          break;
           case "Monthly":
          this.$router.push("/data-entry/monthly/create");
          break;
        case "Policy Engagement":
          this.$router.push("/data-entry/policy-engagement/create");
          break;
        case "Human Resource":
          this.$router.push("/data-entry/human-resource/create");
          break;
        case "Research":
          this.$router.push("/data-entry/research-related/create");
          break;
        case "Publications":
          this.$router.push("/data-entry/publications/create");
          break;
        default:
          this.$router.push("/data-entry");
      }
    },
  },
  created() {
    if (this.getActiveForm) {
      this.unit = this.getActiveForm;
    }
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
