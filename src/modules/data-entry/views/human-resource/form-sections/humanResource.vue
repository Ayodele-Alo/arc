<template>
<table class="table table-bordered">
      <tbody>
        <tr>
          <th class="row-header">Indicators</th>
          <th class="row-header" scope="col">Total</th>
          <th class="header-width row-header text-center" scope="col"> Research
            <tr class="d-flex justify-content-around mt-3" >
            <th> Male</th>
            <th> Female</th>
            </tr>
        </th>
        <th class="header-width row-header text-center" scope="col"> Research
            <div class="d-flex justify-content-around mt-3" >
            <th> Male</th>
            <th> Female</th>
            </div>
        </th>
        <th class="header-width row-header text-center" scope="col"> Research
            <div class="d-flex justify-content-around mt-3" >
            <th> Male</th>
            <th> Female</th>
            </div>
        </th>
        <th class="header-width row-header text-center" scope="col"> Research
            <div class="d-flex justify-content-around mt-3" >
            <th> Male</th>
            <th> Female</th>
            </div>
        </th>
          <th class="header-width row-header" scope="col">National (Distribution)
          </th>
        </tr>
        <tr>
          <th class="publication-content">Number of regular employees at the start of the year</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="publication-content">Number of regular employees at mid-year</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="publication-content">Number of employees hired under short term flexi contracts by mid-year</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="publication-content">Number of employees who have left APHRC e.g thrpough resignation, termination, laying off, Contracting ending etc.</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <!-- <tr>
          <th class="publication-content">Number of employees hired under short term flexi contracts by mid-year</th>
          <td class="d-flex flex-column justify-content-between">
            <tr>
                Voluntary turnover Rate
            </tr>
            <tr>
                Involuntary turnover Rate
            </tr>
          </td>
        </tr> -->
      </tbody>
    </table>
<!--     
    <table>

    </table> -->
</template>

<style scoped>
.header-width {
  width: 300px;
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
  padding: 25px 15px;
  text-align: left;
}
.publication-iten {
  display: flex;
}
.publication-iten input {
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
.publication-content {
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  /* font: normal normal bold 16px/19px Montserrat; */
  font-weight: normal;
  font-style: normal;
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  padding: 25px 15px;
  text-align: left;
}
table {
  background-color: white;
}
</style>