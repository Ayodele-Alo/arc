<template>
  <div class="select-wrapper px-4">
    <div class="select-item">
      <label for="">Select Quater <span>*</span></label>
      <select class="form-select" aria-label="Default select example">
        <option disabled selected>Select Quater</option>
        <option value="Quater 1">Quater 1</option>
        <option value="Quater 2">Quater 2</option>
        <option value="Quater 3">Quater 3</option>
        <option value="Quater 4">Quater 4</option>
      </select>
    </div>
    <div class="select-item">
      <label for="">Select Year <span>*</span></label>
      <select class="form-select" aria-label="Default select example">
        <option disabled selected>Select Year</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  </div>

  <div class="mt-5 px-4">
    <h4 class="sub-header">
      Institutionalization of doctoral strengthening programs and courses
    </h4>
    <div class="mt-3">
      <div class="border institution">
        <div class="p-4">
          <h4>
            Number of partner institutions facilitated to institutionalize
            existing APHRC related capacity strengthening interventions
          </h4>
        </div>
        <div class="border-top p-4 d-flex">
          <div class="mr-4">
            <h5>Universities:</h5>
          </div>
          <input type="text" placeholder="Type Here" id="" />
        </div>
        <div class="border-top p-4 d-flex">
          <div class="mr-4">
            <h5>Research Institution:</h5>
          </div>
          <input type="text" placeholder="Type Here" id="" />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="border institution">
        <div class="p-4">
          <h4>
            Collaborations established from the research and training hubs
          </h4>
        </div>
        <div class="border-top p-4 d-flex">
          <input type="text" placeholder="Type Here" id="" />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="border institution">
        <div class="p-4">
          <h4>Career progression of the RCS fellowships alumni</h4>
        </div>
        <div class="border-top p-4 d-flex">
          <input type="text" placeholder="Type Here" id="" />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="border institution">
        <div class="p-4">
          <h4>
            Other awards received - (Recorgnization of fellowship beneficiaries
            for their execelence in their fields)
          </h4>
        </div>
        <div class="border-top p-4 d-flex">
          <input type="text" placeholder="Type Here" id="" />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="border institution">
        <div class="p-4">
          <h4>
            Collaborations established from the research and training hubs
          </h4>
        </div>
        <div class="border-top p-4 d-flex">
          <input type="text" placeholder="Type Here" id="" />
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end mt-4">
      <div class="save-icon">
        <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
        <h5>save</h5>
      </div>
    </div>
  </div>

  <div class="px-4">
    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-1"
    >
      <span>A. Linkage between institution and policy actors</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-1">
      <LinkageBetweenInstitutionAndActor />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-2"
    >
      <span>B. Annual Performance against the work plans</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>
    <div class="collapse" id="collapse-2">
      <AnnualPerformance />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LinkageBetweenInstitutionAndActor from "./form-sections/LinkageBetweenInstitution.vue";
import AnnualPerformance from "./form-sections/AnnualPerformance.vue";
import { mapMutations, mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "createForm",
  components: { LinkageBetweenInstitutionAndActor, AnnualPerformance },

  methods: {
    // submitForm(){
    // }
  },
});
</script>

<style scoped>
.section-header {
  background-color: #61a229;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.select-wrapper {
  display: flex;
}
.select-item select {
  width: 100%;
}
.select-item {
  display: flex;
  flex-direction: column;
  width: 33%;
  margin-right: 10px;
}

.select-item span {
  color: red;
}
option {
  font-size: 18px;
  background-color: #ffffff;
  border: 1px solid red !important;
}
.sub-header {
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  line-height: 40px;
}
.institution input {
  margin-left: 20px;
  width: 75%;
  border: none;
  outline: none;
  background-color: transparent;
}
.institution h5 {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: 400;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
}

.institution h4 {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: bold;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
}
</style>
