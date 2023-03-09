<template>
  <div class="row">
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
            <th>
              <div class="d-flex align-items-center p-3">
                <p class="mt-3 sub-heading">Identified Risk:</p>
                <input placeholder="Type Here" class="m" type="text" />
              </div>
            </th>
          </tr>
        </tbody>
      </table>

      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="row-header py-4 header-bg">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="mt-3">Theme Objective 1:</p>
                  <input class="px-2" placeholder="Type Here" type="text" />
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th class="row-header">
              <div class="row">
                <div class="col">
                  <p class="mt-3 sub-heading">Risk Description:</p>
                  <p class="sub-heading-2">
                    (Kindly include risks identified that hindered the
                    achievement of the objective of the theme)
                  </p>
                  <input placeholder="Type Here" type="text" />
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th class="row-header">
              <div class="row">
                <div class="col">
                  <p class="mt-3 sub-heading">Key Risk Factors</p>
                  <p class="sub-heading-2">
                    (These are the risk dimensions within the risk identified)
                  </p>
                  <input placeholder="Type Here" type="text" />
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th class="row-header">
              <div class="row">
                <div class="col">
                  <p class="mt-3 sub-heading">Current Status and rationale</p>
                  <p class="sub-heading-2">
                    (what can we do further to combat the risk)
                  </p>
                  <input placeholder="Type Here" type="text" />
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th class="row-header">
              <div class="row">
                <div class="col">
                  <p class="mt-3 sub-heading">Agreed Actions</p>
                  <p class="sub-heading-2">
                    (what can we do further to combat the risk)
                  </p>
                  <input placeholder="Type Here" type="text" />
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th class="row-header">
              <div class="row">
                <div class="col">
                  <p class="mt-3 sub-heading">Responsible Persons</p>
                  <p class="sub-heading-2">
                    (Who is responsible in overseeing the process of managing
                    the risk)
                  </p>
                  <input placeholder="Type Here" type="text" />
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th class="row-header">
              <div class="row">
                <div class="col">
                  <p class="mt-3 sub-heading">Risk Rating</p>
                  <p class="sub-heading-1">
                    The scale is 1 to 3: 1 being - low, 2 - moderate and 3- high
                  </p>
                  <p class="sub-heading-2">
                    Probability (probability of the risk occurring)
                  </p>
                  <select class="custom-select">
                    <option selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">1</option>
                    <option value="3">3</option>
                  </select>

                  <p class="sub-heading-2 mt-3">Impact (Impact of the risk)</p>
                  <select class="custom-select">
                    <option selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>

                  <p class="sub-heading-2 mt-3">Overall = P x I :</p>
                  <select class="custom-select">
                    <option selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "RiskIdentified",
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
input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
  width: 50%;
}
.sub-heading {
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
  margin-right: 20px;
}
.sub-heading-2 {
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
  margin-right: 20px;
}
.sub-heading-1 {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: normal;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  margin-right: 20px;
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
.header-bg {
  background-color: #dbdbdb;
}
select {
  padding: 10px 8px;
  border: 1px solid #70707091;
  border-radius: 4px;
  width: 130px;
  margin-top: -10px;
}

option {
  font-size: 18px;
  padding-left: 20px;
}
</style>
