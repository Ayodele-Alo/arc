<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Kindly attach or share link to where the dissemination workshop
          reports/attendance list are stored, as a means of verification.
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="header-width" scope="col">
              <span class="row-header">
                Themes
                <p class="row-sub-header">
                  (Themes the research was conducted)
                </p>
              </span>
            </th>

            <th class="header-width" scope="col">
              <span class="row-header">
                Type of research outputs disseminated
                <p class="row-sub-header">
                  (policy briefs/ fact sheet/ other material)
                </p>
              </span>
            </th>
            <th class="header-width" scope="col">
              <span class="row-header">
                Title of policy briefs/fact sheet/other material disseminated
              </span>
            </th>
            <th class="header-width" scope="col">
              <span class="row-header">
                Brief comment on the dissemination meeting (dates, who was in
                the meeting etc.)
              </span>
            </th>
          </tr>
          <tr>
            <th class="row-header py-3">
              <div class="row">
                <div class="col text-start">
                  <input placeholder="Type Here" type="text" />
                </div>
              </div>
            </th>
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

<script lang="ts">
export default {
  name: "PolicyBtiefsAndFacts",
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
  height: 200px;
  text-align: left;
  padding: 4px 8px;
  padding: 15px;
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
</style>
