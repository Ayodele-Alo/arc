<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Kindly attach or share link to where the attendance sheets and
          training report are stored, as a means of verification.
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="header" scope="col">
              <span class="row-header">
                List of periodic reviews conducted on how the Center’s models
                and tools perform in achieving EIDM
              </span>
            </th>
          </tr>
          <tr>
            <th class="row-header py-3">
              <div class="row w-100">
                <div class="w-100 col text-start">
                  <input placeholder="Type Here" type="text" />
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
      <p class="add-more">+ Add more</p>

      <table class="table table-bordered mt-4">
        <tbody>
          <tr>
            <th class="header" scope="col">
              <span class="row-header">
                List of periodic reviews conducted on how the Center’s models
                and tools perform in achieving EIDM
              </span>
            </th>
          </tr>
          <tr>
            <th class="row-header py-3">
              <div class="row w-100">
                <div class="w-100 col text-start">
                  <input placeholder="Type Here" type="text" />
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
      <p class="add-more">+ Add more</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EvidenceDecisionMaking",
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
.header {
  width: 100%;
  height: 80px;
  text-align: left;
  padding: 4px 8px;
  padding: 0 15px;
  display: flex;
  align-items: center;
}
.row-header {
  display: flex;
  align-items: center;
  width: 100%;
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
