<template>
  <div class="row px-2">
    <div class="col text-start">
      <div class="text-start">
        <p class="engagement-text">
          Kindly provide, as a means of verification, copies of the proposals
          submitted and the feedback email or documents from the funder.
        </p>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th class="row-header p-5">Challenges</th>
            <th class="row-header p-5" scope="col">Lesson Learnt</th>
          </tr>
          <tr>
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="mt-3">1.</p>
                  <input placeholder="Type Here" class="px-1" type="text" />
                </div>
              </div>
            </th>
            <th class="row-header">
              <div class="row">
                <div class="d-flex align-items-center">
                  <p class="mt-3">1.</p>
                  <input placeholder="Type Here" class="px-1" type="text" />
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

<script>
export default {
  name: "ChallengesAndLesson",
};
</script>

<style scoped>
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
}
input {
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 4px;
}
table {
  background-color: white;
}
</style>
