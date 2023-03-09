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
          <tr>
            <th class="row-header">
              <div class="row">
                <div class="col text-start">
                  <p>1.</p>
                  <input placeholder="Type Here" type="text" />
                </div>
              </div>
            </th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <p class="add-more">+ Add more</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EngagementComponent",
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
.add-more {
  cursor: pointer;
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
</style>
