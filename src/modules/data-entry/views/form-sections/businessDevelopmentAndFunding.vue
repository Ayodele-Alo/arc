<template>
  <div class="row w-100">
    <div class="col text-start">
      <p class="engagement-text">What are the funding gaps of the theme</p>
      <textarea
        name=""
        placeholder="Type Here"
        id=""
        cols="30"
        rows="5"
        v-model="fundingGaps"
      ></textarea>
      <div class="mt-2">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th class="row-header p-5">
                <p class="">Thematic focus</p>
                <p class="row-sub-header">(signature issue or focus area)</p>
              </th>
              <th class="row-header p-5">
                <p class="">Targeted funding agency</p>
              </th>
              <th class="row-header p-5">
                <p class="">Country(ies) of focus</p>
              </th>
              <th class="row-header p-5">
                <p class="">Amounts to be raised from proposals</p>
              </th>
            </tr>
            <tr v-for="(item, index) in business_funding_form" :key="index">
              <th class="row-header p-5">
                <div class="row">
                  <div class="d-flex align-items-center">
                    {{ index + 1 }}
                    <input
                      placeholder="Type Here"
                      class="px-1 mt-2"
                      type="text"
                      v-model="item.thematic_focus"
                    />
                  </div>
                </div>
              </th>
              <th class="row-header p-5">
                <div class="row">
                  <div class="d-flex align-items-center">
                    {{ index + 1 }}
                    <input
                      placeholder="Type Here"
                      class="px-1 mt-2"
                      type="text"
                      v-model="item.targeted_agency"
                    />
                  </div>
                </div>
              </th>
              <th class="row-header p-5">
                <div class="row">
                  <div class="d-flex align-items-center">
                    {{ index + 1 }}
                    <input
                      placeholder="Type Here"
                      class="px-1 mt-2"
                      type="text"
                      v-model="item.countries_focus"
                    />
                  </div>
                </div>
              </th>
              <th class="row-header p-5">
                <div class="row">
                  <div class="d-flex align-items-center">
                    {{ index + 1 }}
                    <input
                      placeholder="Type Here"
                      class="px-1 mt-2"
                      type="text"
                      v-model="item.amounts_raised"
                    />
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        <p class="add-more" @click="addToBusinessFundingForm()">+ Add more</p>
        <div class="d-flex justify-content-end mt-4">
          <div @click="saveForm()" class="save-icon">
            <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
            <h5>save</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessDevelopmentAndFunding",
  components: {},
  data() {
    return {
      fundingGaps: "",
      business_funding_form: [
        {
          thematic_focus: "",
          targeted_agency: "",
          countries_focus: "",
          amounts_raised: "",
        },
      ],
    };
  },
  methods: {
    addFormCount() {
      this.formCount++;
    },
    addToBusinessFundingForm() {
      this.business_funding_form.push({
        thematic_focus: "",
        targeted_agency: "",
        countries_focus: "",
        amounts_raised: "",
      });
    },
    saveForm() {
      console.log(this.business_funding_form);
    },
  },
};
</script>

<style scoped>
.engagement-text {
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  line-height: 20px;
}

textarea {
  border: 1px solid #707070ab;
  width: 100%;
  margin: 5px 0;
  padding: 20px;
  border-radius: 5px;
}

textarea ::placeholder {
  color: #70707069;
}
table {
  background-color: white;
}
input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
}
.row-header {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: bold;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  padding-top: 25px;
  width: 25%;
}
.row-sub-header {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: 300;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
}

.add-more {
  cursor: pointer;
}
.add-more:hover {
  color: red;
}
</style>
