<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Kindly attach or share link to where the attendance sheets and
          training report are stored, as a means of verification.
        </p>

        <p class="engagement-text">
          Capacity-building activities for APHRC staff on sustained engagement
          with decision makers on the APHRC’s signature issues/ focus areas:
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="header-width" scope="col">
              <p class="row-header">
                Themes and their signature issues/focus areas
              </p>
            </th>
            <th class="header-width" scope="col">
              <div class="partispant-wrapper h-100">
                <span class="row-header"> Number Of Participant </span>
                <div class="d-flex partispant">
                  <div class="w-50 left-item">Male</div>
                  <div class="right-item">Female</div>
                </div>
              </div>
            </th>

            <th class="header-width" scope="col">
              <span class="row-header">
                Purpose of the event/objectives
                <p class="row-sub-header">(or additional details)</p>
              </span>
            </th>
            <th class="header-width" scope="col">
              <span class="row-header">
                Project link to
                <p class="row-sub-header">(e.g. WASH)</p>
              </span>
            </th>
            <th class="header-width" scope="col">
              <span class="row-header"> Venue/country </span>
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
            <td>
              <div class="gender">
                <div class="male">
                  <input placeholder="Type Here" type="text" />
                </div>
                <div class="female">
                  <input placeholder="Type Here" type="text" />
                </div>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <p class="add-more">+ Add more</p>

      <div class="text-start mt-5">
        <p class="engagement-text">
          Capacity strengthened activities of policy partners on policy
          engagement for a strengthened R&D ecosystem in Africa
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="header-width" scope="col">
              <p class="row-header">
                Themes and their signature issues/focus areas
              </p>
            </th>
            <th class="header-width" scope="col">
              <div class="partispant-wrapper h-100">
                <span class="row-header"> Number Of Participant </span>
                <div class="d-flex partispant">
                  <div class="w-50 left-item">Male</div>
                  <div class="right-item">Female</div>
                </div>
              </div>
            </th>

            <th class="header-width" scope="col">
              <span class="row-header">
                Purpose of the event/objectives
                <p class="row-sub-header">(or additional details)</p>
              </span>
            </th>
            <th class="header-width" scope="col">
              <span class="row-header">
                Project link to
                <p class="row-sub-header">(e.g. WASH)</p>
              </span>
            </th>
            <th class="header-width" scope="col">
              <span class="row-header"> Venue/country </span>
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
            <td>
              <div class="gender">
                <div class="male">
                  <input placeholder="Type Here" type="text" />
                </div>
                <div class="female">
                  <input placeholder="Type Here" type="text" />
                </div>
              </div>
            </td>
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
  name: "PolicyStrategies",
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
  padding: 0 15px;
  padding-top: 15px;
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
textarea,
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
.partispant {
  height: 70px;
}

.partispant-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.left-item {
  border-right: 1px solid #7070706e;
  display: flex;
  justify-content: center;
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
.right-item {
  display: flex;
  justify-content: center;
  width: 50%;
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
.gender {
  height: 100px;
  display: flex;
  margin-top: -8px;
  height: 100%;
}
.male {
  width: 50%;
  border-right: 1px solid #7070706e;
  height: 50px;
  padding: 10px;
}
.female {
  width: 50%;
  height: 50px;
  padding: 10px;
}
</style>
