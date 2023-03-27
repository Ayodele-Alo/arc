<template>
  <div class="mt-4">
    <div class="">
      <div class="">
        <table class="table table-bordered">
          <tbody>
            <tr class="">
              <th class="header-width row-header p-5" scope="col">
                <h4>
                  Project Name
                  <span>(include the overall objective of the project)</span>
                </h4>
              </th>
              <th class="header-width row-header p-5" scope="col">
                <h4>
                  Planned Activities and targets for the project in the year
                </h4>
              </th>
              <th class="header-width row-header p-5" scope="col">
                <h4>
                  Brief comment on the performance as well as quality assurance
                  measures undertaken towards achievement of the activity.
                  <span
                    >(Include alignment with: Principles: Collaborative,
                    Innovative, Truly African and Impact-oriented Values:
                    Fairness, Integrity and Excellence)</span
                  >
                </h4>
              </th>
            </tr>
            <tr v-for="(item, index) in annualPerformance" :key="index">
              <td class="cell-height">
                <div class="d-flex">
                  <input
                    type="text"
                    placeholder="Type Here"
                    v-model="item.projectName"
                  />
                </div>
              </td>

              <td class="cell-height">
                <input
                  type="text"
                  placeholder="Type Here"
                  v-model="item.plannedActivity"
                />
              </td>
              <td class="cell-height">
                <input
                  type="text"
                  placeholder="Type Here"
                  v-model="item.comment"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p @click="addToAnnualPerformance()" class="add-more mt-3">+ Add more</p>
    </div>

    <div class="d-flex justify-content-end mt-4">
      <div class="save-icon">
        <i class="fa fa-save fs-5 mr-2" aria-hidden="true"></i>
        <h5>save</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      annualPerformance: [
        {
          id: 1,
          projectName: "",
          plannedActivity: "",
          comment: "",
        },
      ],
    };
  },
  methods: {
    addToAnnualPerformance() {
      this.annualPerformance.push({
        id: new Date().getTime(),
        projectName: "",
        plannedActivity: "",
        comment: "",
      });
    },
    removeFromAnnualPerformance(rowItem) {
      this.annualPerformance = this.annualPerformance.filter(
        (item) => item.id !== rowItem.id
      );
    },
  },
};
</script>

<style scoped>
.wrapper .wrapper h5 {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: 400;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
}

.wrapper h4 {
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
.header-width {
  width: 33%;
}

table {
  background-color: white;
}
.row-header h4 {
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
.row-header span {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: 300;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
}
.cell-height {
  height: 100px;
}

.cell-height input {
  margin-left: 20px;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  height: 50px;
  margin-top: auto;
}
</style>
