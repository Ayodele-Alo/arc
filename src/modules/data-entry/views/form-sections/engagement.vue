<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          The type of engagement include consultative meetings with policy
          makers, policy cafes, conferences and any other fora. Kindly provide
          the list of engagements and indicate the roles played by the theme
          (e.g., keynote speaker, presenter, discussant, chair etc.) Kindly
          attach, as a means of verification, the notes from the
          engagement/meeting including action points and next steps for APHRC.
        </p>
      </div>
      <div class="outer-wrapper">
        <div class="table-wrapper">
          <table>
            <tbody>
              <tr>
                <th class="row-header">Themes</th>
                <th class="header-width" scope="col">
                  <p class="row-header">Type of engagement</p>
                  <p class="row-sub-header">
                    (Consultative meetings with policy makers, conferences,
                    forums, policy cafes, dissemination workshops)
                  </p>
                </th>
                <th class="header-width" scope="col">
                  <p class="row-header">Brief comment on the engagement</p>
                  <p class="row-sub-header">
                    (including the focus areas/signature issues the engagement
                    is on)
                  </p>
                </th>

                <th class="header-width" scope="col">
                  <p class="row-header">
                    Signature issue approach utilized during the engagement
                  </p>
                  <p class="row-sub-header">
                    (Did the engagement utilize the signature issue approach?
                    YES/NO)
                  </p>
                </th>
                <th class="header-width" scope="col">
                  <p class="row-header">Countries</p>
                </th>
                <th class="header-width" scope="col">
                  <p class="row-header">Title of presentation made</p>
                  <p class="row-sub-header">(where applicable)</p>
                </th>
                <th class="header-width" scope="col">
                  <p class="row-header">Role of presenter</p>
                  <p class="row-sub-header">
                    (Key note speaker, presenter, discussant, chair, etc.)
                  </p>
                </th>
                <th class="header-width" scope="col">
                  <p class="row-header">Organizations/ institutions present</p>
                </th>
                <th class="header-width" scope="col">
                  <p class="row-header">
                    Key people present with whom contact was made
                  </p>
                </th>
              </tr>
              <tr v-for="(item, index) in engagements_form" :key="index">
                <th class="row-header">
                  <div class="row">
                    <div class="d-flex align-items-center">
                      <p class="mt-4">{{ index + 1 }}.</p>
                      <input
                        placeholder="Type Here"
                        type="text"
                        v-model="item.themes"
                      />
                    </div>
                  </div>
                </th>
                <td>
                  <!-- <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.engagement_type"
                  /> -->
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="item.engagement_type"
                  >
                    <option disabled>Select One</option>
                    <option value="Consultative meetings with policy makers">
                      Consultative meetings with policy makers
                    </option>
                    <option value="conferences">Conferences</option>
                    <option value="forums">Forums</option>
                    <option value="policy cafes">Policy cafes</option>
                    <option value="dissemination workshops">
                      Dissemination Workshops
                    </option>
                  </select>
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.brief_comment_on_engagement"
                  />
                </td>
                <td>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="item.signature_issue_approach"
                  >
                    <option disabled selected>Select One</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.countries"
                  />
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.title_of_presentation_made"
                  />
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.role_of_presenter"
                  />
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.organization_and_institution_present"
                  />
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.key_people_present"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        @click="addToEngagementsForm()"
        class="add-more d-flex justify-content-end mt-3"
      >
        <i class="fa fa-plus fs-6 mr-2 mt-1" aria-hidden="true"></i>
        <h5 class="px-2">Add more</h5>
      </div>
      <div class="d-flex justify-content-end mt-4">
        <div @click="saveForm()" class="save-icon">
          <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
          <h5>save</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export default defineComponent({
  name: "EngagementAndPolicy",
  components: {},
  data() {
    return {
      engagements_form: [
        {
          themes: "",
          engagement_type: "Consultative meetings with policy makers",
          brief_comment_on_engagement: "",
          signature_issue_approach: "Yes",
          countries: "",
          title_of_presentation_made: "",
          role_of_presenter: "",
          organization_and_institution_present: "",
          key_people_present: "",
        },
      ],
    };
  },

  methods: {
    ...mapActions(["SAVE_DATA"]),

    addToEngagementsForm() {
      this.engagements_form.push({
        themes: "",
        engagement_type: "Consultative meetings with policy makers",
        brief_comment_on_engagement: "",
        signature_issue_approach: "Yes",
        countries: "",
        title_of_presentation_made: "",
        role_of_presenter: "",
        organization_and_institution_present: "",
        key_people_present: "",
      });
    },
    saveForm() {
      const newItem = {
        component: "annually",
        type: "report",
        item: {
          name: "engagementWithPolicyMakers",
          form: this.engagements_form,
        },
      };
      this.SAVE_DATA(newItem);
    },
  },
});
</script>

<style scoped>
.engagement-text {
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  line-height: 40px;
}
.header-width {
  width: 170px;
  height: 100px;
  text-align: left;
  padding: 4px 8px;
  padding: 0 15px;
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
  padding-top: 15px;
}
.publication-iten {
  display: flex;
}
input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
}
.pub-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 4px;
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
table {
  background-color: white;
}

.table-wrapper {
  overflow-x: scroll;
  height: fit-content;
  margin-top: 22px;
  /* margin: 15px; */
  padding-bottom: 20px;
}
table {
  min-width: max-content;

  border-collapse: separate;
  border-spacing: 0px;
}

table th {
  align-items: flex-start;
  font-weight: normal;
  font-size: 18px;
  border: 0.1px solid #d3d3d3;
  /* height: 40px; */
  /* width: 400px; */
  padding: 10px 15px;
}

table td {
  padding: 10px 15px;
  width: 300px;
}

table td {
  text-align: left;
  font-size: 15px;
  border: 0.1px solid #d3d3d3;
  padding-left: 20px;
}

.table-wrapper::-webkit-scrollbar {
  width: 20px;
  height: 10px;
}

.table-wrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

.table-wrapper::-webkit-scrollbar-thumb {
  background: #70707069;
  border-radius: 10px;
}
.wrapper {
  position: relative;
}
</style>
