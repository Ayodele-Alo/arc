<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Engagement forum by APHRC to inform and provide evidence to address
          policy gaps
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="row-header">Themes</th>
            <th class="header-width" scope="col">
              <p class="row-header">Type of engagement</p>
              <p class="row-sub-header">
                (Consultative meetings with policy makers, conferences, forums,
                policy cafes, dissemination workshops)
              </p>
            </th>
            <th class="header-width" scope="col">
              <p class="row-header">Brief comment on the engagement</p>
              <p class="row-sub-header">
                (including the focus areas/signature issues the engagement is
                on)
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
                <div class="col text-start d-flex align-items-center">
                  <p class="mt-3">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.themes"
                  />
                </div>
              </div>
            </th>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.engagement_type"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.brief_comment_on_engagement"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.signature_issue_approach"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.countries"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.title_of_prensentation_made"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.role_of_presenter"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.organization_and_institution_present"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.key_people_present"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p @click="addToEngagementsForm()" class="add-more">+ Add more</p>

      <div class="text-start mt-4">
        <p class="engagement-text">
          Specific policy engagements for funding and partnerships conducted by
          policy engagement staff and government liaison officers
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="row-header">Themes</th>
            <th class="header-width" scope="col">
              <p class="row-header">Type of engagement</p>
              <p class="row-sub-header">
                (Consultative meetings with policy makers, conferences, forums,
                policy cafes, dissemination workshops)
              </p>
            </th>
            <th class="header-width" scope="col">
              <p class="row-header">Brief comment on the engagement</p>
              <p class="row-sub-header">
                (including the focus areas/signature issues the engagement is
                on)
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
          <tr
            v-for="(item, index) in specific_engagements_for_funding_form"
            :key="index"
          >
            <th class="row-header">
              <div class="row">
                <div class="col text-start d-flex align-items-center">
                  <p class="mt-3">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.themes"
                  />
                </div>
              </div>
            </th>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.engagement_type"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.brief_comment_on_engagement"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.signature_issue_approach"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.countries"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.title_of_prensentation_made"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.role_of_presenter"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.organization_and_institution_present"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.key_people_present"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p @click="addToSpecificEngagementsForFunding()" class="add-more">
        + Add more
      </p>

      <div class="text-start mt-4">
        <p class="engagement-text">
          Specific engagements promoting Diversity, Equity and Inclusion (DEI)
          held
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="row-header">Themes</th>
            <th class="header-width" scope="col">
              <p class="row-header">Type of engagement</p>
              <p class="row-sub-header">
                (Consultative meetings with policy makers, conferences, forums,
                policy cafes, dissemination workshops)
              </p>
            </th>
            <th class="header-width" scope="col">
              <p class="row-header">Brief comment on the engagement</p>
              <p class="row-sub-header">
                (including the focus areas/signature issues the engagement is
                on)
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
          <tr v-for="(item, index) in specific_engagements_form" :key="index">
            <th class="row-header">
              <div class="row">
                <div class="col text-start d-flex align-items-center">
                  <p class="mt-3">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.themes"
                  />
                </div>
              </div>
            </th>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.engagement_type"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.brief_comment_on_engagement"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.signature_issue_approach"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.countries"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.title_of_prensentation_made"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.role_of_presenter"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.organization_and_institution_present"
                />
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center cell-height">
                <input
                  placeholder="Type Here"
                  type="text"
                  v-model="item.key_people_present"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p @click="addToSpecificEngagements()" class="add-more">+ Add more</p>

      <div class="text-start mt-4">
        <p class="engagement-text">
          Specific engagements promoting Diversity, Equity and Inclusion (DEI)
          held
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="row-header py-5">Themes</th>
          </tr>
          <tr
            v-for="(item, index) in specific_engagements_promoting_form"
            :key="index"
          >
            <th class="row-header">
              <div class="row">
                <div class="col text-start d-flex align-items-center">
                  <p class="mt-3">{{ index + 1 }}.</p>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.themes"
                  />
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
      <p @click="addToSpecificEngagementsPromotingForm()" class="add-more">
        + Add more
      </p>
      <div class="d-flex justify-content-end">
        <button @click="saveForm()" class="btn btn-outline-primary">
          save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HumanResourceComponent",

  data() {
    return {
      formCount: 1,
      error: false,
      form: {
        1: {
          themes: "",
          engagement_type: "",
          brief_comment_on_engagement: "",
          signature_issue_approach: "",
          countries: "",
          title_of_prensentation_made: "",
          role_of_presenter: "",
          organization_and_institution_present: "",
          key_people_present: "",
        },
      },
      engagements_form: [
        {
          themes: "",
          engagement_type: "",
          brief_comment_on_engagement: "",
          signature_issue_approach: "",
          countries: "",
          title_of_prensentation_made: "",
          role_of_presenter: "",
          organization_and_institution_present: "",
          key_people_present: "",
        },
      ],
      specific_engagements_form: [
        {
          themes: "",
          engagement_type: "",
          brief_comment_on_engagement: "",
          signature_issue_approach: "",
          countries: "",
          title_of_prensentation_made: "",
          role_of_presenter: "",
          organization_and_institution_present: "",
          key_people_present: "",
        },
      ],
      specific_engagements_for_funding_form: [
        {
          themes: "",
          engagement_type: "",
          brief_comment_on_engagement: "",
          signature_issue_approach: "",
          countries: "",
          title_of_prensentation_made: "",
          role_of_presenter: "",
          organization_and_institution_present: "",
          key_people_present: "",
        },
      ],
      specific_engagements_promoting_form: [
        {
          themes: "",
        },
      ],
    };
  },
  methods: {
    addFormCount() {
      this.formCount++;
    },

    addToEngagementsForm() {
      this.engagements_form.push({
        themes: "",
        engagement_type: "",
        brief_comment_on_engagement: "",
        signature_issue_approach: "",
        countries: "",
        title_of_prensentation_made: "",
        role_of_presenter: "",
        organization_and_institution_present: "",
        key_people_present: "",
      });
    },

    addToSpecificEngagements() {
      this.specific_engagements_form.push({
        themes: "",
        engagement_type: "",
        brief_comment_on_engagement: "",
        signature_issue_approach: "",
        countries: "",
        title_of_prensentation_made: "",
        role_of_presenter: "",
        organization_and_institution_present: "",
        key_people_present: "",
      });
    },
    addToSpecificEngagementsForFunding() {
      this.specific_engagements_for_funding_form.push({
        themes: "",
        engagement_type: "",
        brief_comment_on_engagement: "",
        signature_issue_approach: "",
        countries: "",
        title_of_prensentation_made: "",
        role_of_presenter: "",
        organization_and_institution_present: "",
        key_people_present: "",
      });
    },

    addToSpecificEngagementsPromotingForm() {
      this.specific_engagements_promoting_form.push({
        themes: "",
      });
    },

    // specific_engagements_promoting_form

    saveForm() {
      this.engagements_form.forEach((item) => {
        for (const property in item) {
          // console.log(`${property}: ${object[property]}`);
          if (item[property] === "") {
            this.error = true;
            alert(`please ${property} cannot be blank `);
            return;
          } else {
            // console.log(this.engagements_form);
          }
        }
      });

      if (this.error) {
        return;
      }

      this.specific_engagements_form.forEach((item) => {
        for (const property in item) {
          // console.log(`${property}: ${object[property]}`);
          if (item[property] === "") {
            this.error = true;
            alert(`please ${property} cannot be blank `);
            return;
          } else {
            // console.log(this.specific_engagements_form);
          }
        }
      });

      if (this.error) {
        return;
      }

      this.specific_engagements_for_funding_form.forEach((item) => {
        for (const property in item) {
          // console.log(`${property}: ${object[property]}`);
          if (item[property] === "") {
            this.error = true;
            alert(`please ${property} cannot be blank `);
            return;
          } else {
            // console.log(this.specific_engagements_for_funding_form);
          }
        }
      });

      if (this.error) {
        return;
      }

      this.specific_engagements_promoting_form.forEach((item) => {
        for (const property in item) {
          // console.log(`${property}: ${object[property]}`);
          if (item[property] === "") {
            this.error = true;
            alert(`please ${property} cannot be blank `);
            return;
          } else {
            // console.log(this.specific_engagements_promoting_form);
          }
        }
      });

      if (this.error) {
        return;
      }
      this.formatData();
    },

    formatData() {
      const data = {
        engagements_form: this.engagements_form,
        specific_engagements_for_funding_form:
          this.specific_engagements_for_funding_form,
        specific_engagements_form: this.specific_engagements_form,
        specific_engagements_promoting_form:
          this.specific_engagements_promoting_form,
      };

      console.log(data);
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
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
}
.pub-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 4px;
}
.add-more {
  cursor: pointer;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: bold;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  width: fit-content;
}
.add-more:hover {
  color: red;
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
.cell-height {
  height: 50px;
  width: 130px;
  overflow: hidden;
}
table td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
