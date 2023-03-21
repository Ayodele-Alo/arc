<template>
  <div>
    <!-- form -->
    <form action="" class="form-section">
      <div class="form-card text-start">
        Innovations based on or informed by research conducted by APHRC.
        (Innovations can be new ideas, methodology, processes, best practices or
        products. Include Innovations adopted and the
        institution/individual/community/ using it). (For RRCS may include
        innovations by the RRCS fellows that can be attributed to the
        fellowships) <br /><br />
        <strong>Ideas, Methodology, Processes, Best Practices, Products</strong>
        <br /><br />

        <div v-for="item in ideasCount" :key="item">
          <span
            >{{ item }}

            <input
              type="email"
              class="form-control"
              placeholder="Type here"
              v-model="form.ideas[item]"
            />
          </span>
        </div>
        <br />
        <strong>
          <span class="add-more" @click="addIdeasField()">Add more +</span>
        </strong>
      </div>

      <br /><br />
      <div class="form-card text-start">
        Policy actions/policy decisions informed by research and policy
        engagement efforts on APHRC’s focus areas/ signature issues.
        <br /><br />

        <div v-for="item in policyCount" :key="item">
          <span
            >{{ item }}

            <input
              type="email"
              class="form-control"
              placeholder="Type here"
              v-model="form.policies[item]"
            />
          </span>
        </div>
        <br />
        <strong>
          <span class="add-more" @click="addPoliciesField()">Add more +</span>
        </strong>
      </div>

      <br /><br />
      <div class="form-card text-start">
        Programs informed by research on APHRC’s signature issues/ focus areas
        (also state the decision makers or thought influencers APHRC has engaged
        with to develop policies)
        <br /><br />
        <div v-for="item in programCount" :key="item">
          <span
            >{{ item }}

            <input
              type="email"
              class="form-control"
              placeholder="Type here"
              v-model="form.programs[item]"
            />
          </span>
        </div>
        <br />
        <strong>
          <span class="add-more" @click="addProgramsField()">Add more +</span>
        </strong>
      </div>

      <br /><br />
      <div class="form-card text-start">
        Alliances created with governments, critical national and pan-African
        civil society networks, regional, parliamentary and economic bodies
        across sub-Saharan Africa
        <br /><br />
        <div v-for="item in alianceCount" :key="item">
          <span
            >{{ item }}

            <input
              type="email"
              class="form-control"
              placeholder="Type here"
              v-model="form.aliances[item]"
            />
          </span>
        </div>
        <br />
        <strong>
          <span class="add-more" @click="addAliancesField()">Add more +</span>
        </strong>
      </div>

      <br /><br />
      <div class="form-card text-start">
        Level of participation of APHRC in national, regional and global
        technical working groups around the signature issues/ focus areas/focus
        areas
        <br /><br />
        <div v-for="item in levelCount" :key="item">
          <span
            >{{ item }}

            <input
              type="email"
              class="form-control"
              placeholder="Type here"
              v-model="form.levels[item]"
            />
          </span>
        </div>
        <br />
        <strong>
          <span class="add-more" @click="addLevelsField()">Add more +</span>
        </strong>
      </div>

      <br /><br />
      Specific to DSE

      <div class="form-card text-start">
        Individuals and organizations that used data from the APHRC micro data
        portal (specific to DSE) <br /><br />
        <div>
          <span class="row">
            <strong>Individuals: </strong>
            <div v-for="item in individualCount" :key="item">
              <span
                >{{ item }}

                <input
                  type="email"
                  class="form-control"
                  placeholder="Type here"
                  v-model="form.individuals[item]"
                />
              </span>
            </div>
            <br />
            <strong>
              <span class="add-more" @click="addIndividualsField()">Add more +</span>
            </strong>
          </span>
        </div>
        <br />
        <div>
          <span>
            <strong>institutions: </strong>
            <div v-for="item in institutionCount" :key="item">
              <span
                >{{ item }}

                <input
                  type="email"
                  class="form-control"
                  placeholder="Type here"
                  v-model="form.institutions[item]"
                />
              </span>
            </div>
            <br />
            <strong>
              <span class="add-more" @click="addInstitutionsField()">Add more +</span>
            </strong>
          </span>
        </div>
      </div>
      <br />
      <div class="form-card text-start">
        Existing data repositories utilized to inform the R&D ecosystems in
        Africa <br /><br />
        <div v-for="item in existingDataCount" :key="item">
          <span
            >{{ item }}

            <input
              type="email"
              class="form-control"
              placeholder="Type here"
              v-model="form.existing_data[item]"
            />
          </span>
        </div>
        <br />
        <strong>
          <span class="add-more" @click="addExistingDataField()">Add more +</span>
        </strong>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "Strategic-Outcomes",
  components: {},
  data() {
    return {
      ideasCount: 1,
      policyCount: 1,
      programCount: 1,
      alianceCount: 1,
      levelCount: 1,
      individualCount: 1,
      institutionCount: 1,
      existingDataCount: 1,
      form: {
        ideas: {},
        policies: {},
        programs: {},
        aliances: {},
        levels: {},
        individuals: {},
        institutions: {},
        existing_data: {},
      },
    };
  },

  methods: {
    addIdeasField() {
      this.ideasCount++;
    },
    addPoliciesField() {
      this.policyCount++;
    },
    addProgramsField() {
      this.programCount++;
    },
    addAliancesField() {
      this.alianceCount++;
    },
    addLevelsField() {
      this.levelCount++;
    },
    addIndividualsField() {
      this.individualCount++;
    },
    addInstitutionsField() {
      this.institutionCount++;
    },
    addExistingDataField() {
      this.existingDataCount++;
    },
    save(){
      console.log('form', this.form)
    }
  },
});
</script>

<style scoped>
.form-card {
  background-color: white;
  min-height: 15vh;
  width: 82vw;
  padding: 20px;
  background: var(--60-bg) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070ab;
  opacity: 1;
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
}

.add-more {
  cursor: pointer;
}
.add-more:hover {
  color: red;
}

.section-header {
  background-color: #61a229;
  color: white;
}

.form-section {
  overflow-y: scroll;
}

input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
}
</style>
