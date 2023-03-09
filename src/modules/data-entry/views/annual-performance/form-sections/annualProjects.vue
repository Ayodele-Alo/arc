<template>
  <div class="row">
    <div class="col">
      <div class="col text-start">
        <div class="text-start"></div>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th class="row-header">
                List of new projects (projects whose funding has been approved
                and projects shall commence within the year)
              </th>
            </tr>
            <tr>
              <th class="row-header">
                <div class="row">
                  <div class="d-flex align-items-center">
                    <p class="mt-3">1.</p>
                    <input placeholder="Type Here" type="text" />
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        <p class="add-more">+ Add more</p>
      </div>
      <div class="col text-start mt-2">
        <div class="text-start"></div>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th class="row-header">
                List of ongoing projects (projects continuing from previous
                year)
              </th>
            </tr>
            <tr>
              <th class="row-header">
                <div class="row">
                  <div class="d-flex align-items-center">
                    <p class="mt-3">1.</p>
                    <input placeholder="Type Here" type="text" />
                  </div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        <p class="add-more">+ Add more</p>
      </div>
      <div class="col text-start mt-2">
        <div class="text-start"></div>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th class="row-header">
                List of closing projects (projects that will closed within the
                year)
              </th>
            </tr>
            <tr>
              <th class="row-header">
                <div class="row">
                  <div class="d-flex align-items-center">
                    <p class="mt-3">1.</p>
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
  </div>
</template>

<script>
export default {
  name: "annualProjects",
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
  padding: 25px;
}
input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
}
.add-more {
  cursor: pointer;
}
.add-more {
  cursor: pointer;
  letter-spacing: 0px;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: normal;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
}
.add-more:hover {
  color: red;
}
</style>
