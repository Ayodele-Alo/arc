<template>
  <label class="form-label fs-6 text-secondary"
    >Sensitization meetings held for staff on the succession plan</label
  >
  <div class="card p-4 form-card">
    <h5>
      Innovations based on or informed by research conducted by APHRC.
      (Innovations can be new ideas, methodology, processes, best practices or
      products. Include Innovations adopted and the
      institution/individual/community/ using it). (For RRCS may include
      innovations by the RRCS fellows that can be attributed to the fellowships)
    </h5>

    <h4>Ideas, Methodology, Processes, Best Practices, Products</h4>
    <div v-for="(item, index) in ideas" :key="index" class="">
      <div class="item-wrapper d-flex align-items-center py-2">
        <h4 class="mt-3">{{ index + 1 }}.</h4>
        <input
          type="text"
          v-model="item.idea"
          placeholder="Type Here"
          name=""
          id=""
        />
      </div>
    </div>
    <div
      @click="addIdeasField()"
      class="add-more d-flex justify-content-end mt-2"
    >
      <i class="fa fa-plus fs-6 mr-2" aria-hidden="true"></i>
      <h5 class="px-2">Add more</h5>
    </div>
  </div>
  <div class="card p-4 my-3 form-card">
    <h5>
      Policy actions/policy decisions informed by research and policy engagement
      efforts on APHRC’s focus areas/ signature issues.
    </h5>

    <div v-for="(item, index) in policies" :key="index" class="">
      <div class="item-wrapper d-flex align-items-center py-2">
        <h4 class="mt-3">{{ index + 1 }}.</h4>
        <input
          type="text"
          v-model="item.policy"
          placeholder="Type Here"
          name=""
          id=""
        />
      </div>
    </div>

    <div
      @click="addPoliciesField()"
      class="add-more d-flex justify-content-end mt-2"
    >
      <i class="fa fa-plus fs-6 mr-2" aria-hidden="true"></i>
      <h5 class="px-2">Add more</h5>
    </div>
  </div>
  <div class="card p-4 my-3 form-card">
    <h5>
      Programs informed by research on APHRC’s signature issues/ focus areas
      (also state the decision makers or thought influencers APHRC has engaged
      with to develop policies)
    </h5>

    <div v-for="(item, index) in programs" :key="index" class="">
      <div class="item-wrapper d-flex align-items-center py-2">
        <h4 class="mt-3">{{ index + 1 }}.</h4>
        <input
          type="text"
          v-model="item.program"
          placeholder="Type Here"
          name=""
          id=""
        />
      </div>
    </div>
    <div
      @click="addProgramsField()"
      class="add-more d-flex justify-content-end mt-2"
    >
      <i class="fa fa-plus fs-6 mr-2" aria-hidden="true"></i>
      <h5 class="px-2">Add more</h5>
    </div>
  </div>
  <div class="card p-4 my-3 form-card">
    <h5>
      Alliances created with governments, critical national and pan-African
      civil society networks, regional, parliamentary and economic bodies across
      sub-Saharan Africa
    </h5>

    <div v-for="(item, index) in aliances" :key="index" class="">
      <div class="item-wrapper d-flex align-items-center py-2">
        <h4 class="mt-3">{{ index + 1 }}.</h4>
        <input
          type="text"
          v-model="item.aliance"
          placeholder="Type Here"
          name=""
          id=""
        />
      </div>
    </div>
    <div
      @click="addAliancesField()"
      class="add-more d-flex justify-content-end mt-2"
    >
      <i class="fa fa-plus fs-6 mr-2" aria-hidden="true"></i>
      <h5 class="px-2">Add more</h5>
    </div>
  </div>
  <div class="card p-4 my-3 form-card">
    <h5>
      Level of participation of APHRC in national, regional and global technical
      working groups around the signature issues/ focus areas/focus areas
    </h5>

    <div v-for="(item, index) in levels" :key="index" class="">
      <div class="item-wrapper d-flex align-items-center py-2">
        <h4 class="mt-3">{{ index + 1 }}.</h4>
        <input
          type="text"
          v-model="item.level"
          placeholder="Type Here"
          name=""
          id=""
        />
      </div>
    </div>
    <div
      @click="addLevelsField()"
      class="add-more d-flex justify-content-end mt-2"
    >
      <i class="fa fa-plus fs-6 mr-2" aria-hidden="true"></i>
      <h5 class="px-2">Add more</h5>
    </div>
  </div>
  <label class="form-label fs-6 text-secondary mt-4 mb-2">
    Specific to DSE</label
  >
  <div class="card p-4 my-3 form-card">
    <h5>
      Individuals and organizations that used data from the APHRC micro data
      portal (specific to DSE)
    </h5>

    <div v-for="(item, index) in individuals" :key="index" class="">
      <div class="item-wrapper d-flex align-items-center py-2">
        <h4 class="mt-3">{{ index + 1 }}.</h4>
        <input
          type="text"
          v-model="item.individual"
          placeholder="Type Here"
          name=""
          id=""
        />
      </div>
    </div>
    <div
      @click="addIndividualsField()"
      class="add-more d-flex justify-content-end mt-2"
    >
      <i class="fa fa-plus fs-6 mr-2" aria-hidden="true"></i>
      <h5 class="px-2">Add more</h5>
    </div>
  </div>
  <div class="card p-4 my-3 form-card">
    <h5>
      Existing data repositories utilized to inform the R&D ecosystems in Africa
    </h5>

    <div v-for="(item, index) in existing_data" :key="index" class="">
      <div class="item-wrapper d-flex align-items-center py-2">
        <h4 class="mt-3">{{ index + 1 }}.</h4>
        <input
          type="text"
          v-model="item.existing"
          placeholder="Type Here"
          name=""
          id=""
        />
      </div>
    </div>
    <div
      @click="addExistingDataField()"
      class="add-more d-flex justify-content-end mt-2"
    >
      <i class="fa fa-plus fs-6 mr-2" aria-hidden="true"></i>
      <h5 class="px-2">Add more</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export default defineComponent({
  name: "Strategic-Outcomes",
  components: {},
  data() {
    return {
      ideas: [{ id: 1, idea: null }],
      policies: [{ id: 1, policy: null }],
      programs: [{ id: 1, program: null }],
      aliances: [{ id: 1, aliance: null }],
      levels: [{ id: 1, level: null }],
      individuals: [{ id: 1, individual: null }],
      institutions: [{ id: 1, institution: null }],
      existing_data: [{ id: 1, existing: null }],
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    addIdeasField() {
      this.ideas.push({
        id: new Date().getTime(),
        idea: null,
      });
    },
    addPoliciesField() {
      this.policies.push({
        id: new Date().getTime(),
        policy: null,
      });
    },
    addProgramsField() {
      this.programs.push({
        id: new Date().getTime(),
        program: null,
      });
    },
    addAliancesField() {
      this.aliances.push({
        id: new Date().getTime(),
        aliance: null,
      });
    },
    addLevelsField() {
      this.levels.push({
        id: new Date().getTime(),
        level: null,
      });
    },
    addIndividualsField() {
      this.individuals.push({
        id: new Date().getTime(),
        individual: null,
      });
    },
    addInstitutionsField() {
      this.institutions.push({
        id: new Date().getTime(),
        institution: null,
      });
    },
    addExistingDataField() {
      this.existing_data.push({
        id: new Date().getTime(),
        existing: null,
      });
    },
    save() {
      const data = {
        ideas: this.ideas,
        policies: this.policies,
        programs: this.programs,
        aliances: this.aliances,
        levels: this.levels,
        individuals: this.individuals,
        institutions: this.institutions,
        existing_data: this.existing_data,
      };
      // console.log("form", this.form);
      const newItem = {
        component: "annually",
        type: "report",
        item: { name: "strategicOutcomes", form: data },
      };
      this.SAVE_DATA(newItem);
    },
  },
});
</script>

<style scoped>
.form-card {
  background-color: white;
}
.form-card h5 {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: 600;
  font-style: normal;
  font-family: Montserrat;
  font-size: 14px;
  line-height: 19px;
}

.form-card h4 {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: 900;
  font-style: normal;
  font-family: Montserrat;
  font-size: 15px;
  line-height: 19px;
}
.item-wrapper h4 {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: 900;
  font-style: normal;
  font-family: Montserrat;
  font-size: 17px;
  line-height: 19px;
}

.section-header {
  background-color: #61a229;
  color: white;
}

.form-section {
  overflow-y: scroll;
}

input {
  height: 35px;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  margin: 0 8px;
}
</style>
