<template>
  <div class="px-2">
    <div class="text-start">
      <p class="publication-text">
        Research outputs include publications such as published papers,
        supplements, books, book chapters, technical reports, policy briefs,
        blogs and fact sheets that were published by the theme during the year.
        Publications reported are those where the lead author is in the theme .
        Kindly ensure the publication is in the APA format and includes the
        means of verification/DOI as follows: (Kadengye, D.T. and Dalal, S.
        (2018). Social intolerance, risky sexual behaviors and their association
        with HIV knowledge among Ugandan adults: results from a national survey.
        AIDS Care, 31(2), 250-254. DOI: 10.1080/09540121.2018.1488028)
      </p>
    </div>
    <table class="table table-bordered">
      <tbody>
        <tr>
          <th class="row-header">Types of Publication</th>
          <th class="row-header" scope="col">List of Publication</th>
          <th class="header-width row-header" scope="col">
            For each publication/ product indicate if it SI-related or not: Is
            the publication related to the theme SI? (YES/NO)
          </th>
          <th class="header-width row-header" scope="col">
            Does the publication address Diversity, Equity and Inclusion (DEI)
            (YES/NO)
          </th>
          <th class="header-width row-header" scope="col">
            Is the research product based on/has used the systems thinking
            approach (YES/NO)
          </th>
        </tr>
        <tr>
          <th class="publication-content">Published Papers</th>
          <td>
            <div class="pub-item-wrapper">
              <div class="publication-iten">
                <p>1.</p>

                <input type="text" placeholder="Type Here" name="" id="" />
              </div>
              <p class="add-more">+ Add more</p>
            </div>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="publication-content">Supplements</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="publication-content">Books</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="publication-content">Book Chapters</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="publication-content">Techinical Reports</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="publication-content">Policy Brief</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="publication-content">Fact Sheet</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th class="publication-content">Blogs</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PublicationComponent",
};
</script>

<style scoped>
.publication-text {
  color: #707070;
  font: normal normal normal 16px/19px Montserrat;
  letter-spacing: 0px;
  color: #707070;
  line-height: 40px;
}
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
.add-more {
  cursor: pointer;
}
.add-more:hover {
  color: red;
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
