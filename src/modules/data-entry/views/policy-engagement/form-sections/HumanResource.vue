<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Engagement forum by APHRC to inform and provide evidence to address
          policy gaps
        </p>
      </div>
      <!-- <table class="table table-bordered">
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
      </table> -->
      <div class="outer-wrapper">
        <div class="table-wrapper">
          <table>
            <thead>
              <th>
                <p class="row-header">Themes</p>
              </th>
              <th>
                <span class="row-header">
                  Type of engagement
                  <p class="row-sub-header">
                    (Consultative meetings with policy makers, conferences,
                    forums, policy cafes, dissemination workshops)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Brief comment on the engagement
                  <p class="row-sub-header">
                    (including the focus areas/signature issues the engagement
                    is on)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Signature issue approach utilized during the engagement
                  <p class="row-sub-header">
                    (Did the engagement utilize the signature issue approach?
                    YES/NO)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header"> Countries </span>
              </th>
              <th>
                <span class="row-header">
                  Title of presentation made
                  <p class="row-sub-header">(where applicable)</p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Role of presenter
                  <p class="row-sub-header">
                    (Key note speaker, presenter, discussant, chair, etc.)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Organizations/ institutions present
                </span>
              </th>
              <th>
                <span class="row-header">
                  Key people present with whom contact was made
                </span>
              </th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in engagements_form" :key="index">
                <td>
                  <div class="d-flex align-items-center">
                    <p class="mt-3">{{ index + 1 }}.</p>
                    <input
                      placeholder="Type Here"
                      type="text"
                      v-model="item.themes"
                    />
                  </div>
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.engagement_type"
                  />
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
                    <option selected>Select One</option>
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
                    v-model="item.title_of_prensentation_made"
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
                <td class="wrapper">
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.key_people_present"
                  />
                  <div
                    v-if="engagements_form.length > 1"
                    @click="removeRow(item)"
                    class="remove-icon"
                  >
                    x
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p @click="addToEngagementsForm()" class="add-more">+ Add more</p>

      <div class="text-start">
        <p class="engagement-text">
          Specific policy engagements for funding and partnerships conducted by
          policy engagement staff and government liaison officers
        </p>
      </div>

      <div class="outer-wrapper mt-4">
        <div class="table-wrapper">
          <table>
            <thead>
              <th>
                <p class="row-header">Themes</p>
              </th>
              <th>
                <span class="row-header">
                  Type of engagement
                  <p class="row-sub-header">
                    (Consultative meetings with policy makers, conferences,
                    forums, policy cafes, dissemination workshops)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Brief comment on the engagement
                  <p class="row-sub-header">
                    (including the focus areas/signature issues the engagement
                    is on)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Signature issue approach utilized during the engagement
                  <p class="row-sub-header">
                    (Did the engagement utilize the signature issue approach?
                    YES/NO)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header"> Countries </span>
              </th>
              <th>
                <span class="row-header">
                  Title of presentation made
                  <p class="row-sub-header">(where applicable)</p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Role of presenter
                  <p class="row-sub-header">
                    (Key note speaker, presenter, discussant, chair, etc.)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Organizations/ institutions present
                </span>
              </th>
              <th>
                <span class="row-header">
                  Key people present with whom contact was made
                </span>
              </th>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in specific_engagements_form"
                :key="index"
              >
                <td>
                  <div class="d-flex align-items-center">
                    <p class="mt-3">{{ index + 1 }}.</p>
                    <input
                      placeholder="Type Here"
                      type="text"
                      v-model="item.themes"
                    />
                  </div>
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.engagement_type"
                  />
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
                    <option selected>Select One</option>
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
                    v-model="item.title_of_prensentation_made"
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
                <td class="wrapper">
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.key_people_present"
                  />
                  <div
                    v-if="specific_engagements_form.length > 1"
                    @click="removeFromSpecificEngagements(item)"
                    class="remove-icon"
                  >
                    x
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p @click="addToSpecificEngagements()" class="add-more">+ Add more</p>

      <div class="text-start">
        <p class="engagement-text">
          Specific engagements promoting Diversity, Equity and Inclusion (DEI)
          held
        </p>
      </div>

      <div class="outer-wrapper mt-4">
        <div class="table-wrapper">
          <table>
            <thead>
              <th>
                <p class="row-header">Themes</p>
              </th>
              <th>
                <span class="row-header">
                  Type of engagement
                  <p class="row-sub-header">
                    (Consultative meetings with policy makers, conferences,
                    forums, policy cafes, dissemination workshops)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Brief comment on the engagement
                  <p class="row-sub-header">
                    (including the focus areas/signature issues the engagement
                    is on)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Signature issue approach utilized during the engagement
                  <p class="row-sub-header">
                    (Did the engagement utilize the signature issue approach?
                    YES/NO)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header"> Countries </span>
              </th>
              <th>
                <span class="row-header">
                  Title of presentation made
                  <p class="row-sub-header">(where applicable)</p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Role of presenter
                  <p class="row-sub-header">
                    (Key note speaker, presenter, discussant, chair, etc.)
                  </p>
                </span>
              </th>
              <th>
                <span class="row-header">
                  Organizations/ institutions present
                </span>
              </th>
              <th>
                <span class="row-header">
                  Key people present with whom contact was made
                </span>
              </th>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in specific_engagements_for_funding_form"
                :key="index"
              >
                <td>
                  <div class="d-flex align-items-center">
                    <p class="mt-3">{{ index + 1 }}.</p>
                    <input
                      placeholder="Type Here"
                      type="text"
                      v-model="item.themes"
                    />
                  </div>
                </td>
                <td>
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.engagement_type"
                  />
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
                    <option selected>Select One</option>
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
                    v-model="item.title_of_prensentation_made"
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
                <td class="wrapper">
                  <input
                    placeholder="Type Here"
                    type="text"
                    v-model="item.key_people_present"
                  />
                  <div
                    v-if="specific_engagements_for_funding_form.length > 1"
                    @click="removeFromSpecificEngagementsForFunding(item)"
                    class="remove-icon"
                  >
                    x
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p @click="addToSpecificEngagementsForFunding()" class="add-more">
        + Add more
      </p>

      <div class="text-start">
        <p class="engagement-text">APHRC Sponsored Government events</p>
      </div>

      <div class="wrapper-content">
        <div class="p-4 border-bottom">
          <span class="row-header"
            >Government functions/activities sponsored around APHRC signature
            issues/ focus areas for visibility</span
          >
        </div>
        <div
          v-for="(item, index) in specific_engagements_promoting_form"
          :key="index"
          class=""
        >
          <div
            class="py-2 px-4 d-flex border-bottom align-items-center wrapper"
          >
            <p class="mt-3 mr-5">{{ index + 1 }}.</p>
            <input placeholder="Type Here" type="text" v-model="item.thems" />
            <div
              v-if="specific_engagements_promoting_form.length > 1"
              @click="removeFromSpecificEngagementsPromotingForm(item)"
              class="remove-icon"
            >
              x
            </div>
          </div>
        </div>
      </div>
      <p
        @click="addToSpecificEngagementsPromotingForm()"
        class="add-more mt-4 mx-3"
      >
        + Add more
      </p>
      <div class="d-flex justify-content-end">
        <button @click="saveForm()" class="btn btn-outline-primary">
          save
        </button>
      </div>

      <!-- <div class="text-start mt-4">
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
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HumanResourceComponent",

  data() {
    return {
      formCount: 1,
      error: true,
      form: {
        1: {
          themes: "",
          engagement_type: "",
          brief_comment_on_engagement: "",
          signature_issue_approach: false,
          countries: "",
          title_of_prensentation_made: "",
          role_of_presenter: "",
          organization_and_institution_present: "",
          key_people_present: "",
        },
      },
      engagements_form: [
        {
          id: 1,
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
          id: 1,
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
          id: 1,
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
          id: 1,
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
        id: new Date().getTime(),
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

    removeRow(rowItem) {
      if (this.engagements_form.length > 1) {
        this.engagements_form = this.engagements_form.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },

    addToSpecificEngagements() {
      this.specific_engagements_form.push({
        id: new Date().getTime(),
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

    removeFromSpecificEngagements(rowItem) {
      if (this.specific_engagements_form.length > 1) {
        this.specific_engagements_form = this.specific_engagements_form.filter(
          (item) => item.id !== rowItem.id
        );
      }
    },
    addToSpecificEngagementsForFunding() {
      this.specific_engagements_for_funding_form.push({
        id: new Date().getTime(),
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

    removeFromSpecificEngagementsForFunding(rowItem) {
      if (this.specific_engagements_for_funding_form.length > 1) {
        this.specific_engagements_for_funding_form =
          this.specific_engagements_for_funding_form.filter(
            (item) => item.id !== rowItem.id
          );
      }
    },

    addToSpecificEngagementsPromotingForm() {
      this.specific_engagements_promoting_form.push({
        id: new Date().getTime(),
        themes: "",
      });
    },

    removeFromSpecificEngagementsPromotingForm(rowItem) {
      if (this.specific_engagements_promoting_form.length > 1) {
        this.specific_engagements_promoting_form =
          this.specific_engagements_promoting_form.filter(
            (item) => item.id !== rowItem.id
          );
      }
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
            this.error = false;
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
            this.error = false;
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
            this.error = false;
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
            this.error = false;
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
  line-height: 15px;
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
  margin-top: 15px;
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
.table-wrapper {
  overflow-x: scroll;
  height: fit-content;
  max-height: 66.4vh;
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
}

table th,
table td {
  padding: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 400px;
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
.remove-icon {
  position: absolute;
  bottom: -5px;
  right: -5px;
  background-color: #f75d59;
  padding: 2px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}
.wrapper-content {
  border: 0.1px solid #d3d3d3;
}
</style>
