<template>
  <div>
    <!-- Reporting period -->
    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-1"
    >
      <span>A. Reporting Period</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-1">
      <reportingPeriod />
    </div>

    <!-- Former Units -->
    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-2"
    >
      <span>B. Former Units</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-2">
      <formerUnits />
    </div>

    <!-- New Themes & Divisions -->
    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-3"
    >
      <span>C. New Themes & Divisions</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-3">
      <newThemesAndDivision />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-4"
    >
      <span>D. Name of Lead Author</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-4">
      <nameOfLeadAuthor />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-5"
    >
      <span>E. Name of the Collaborating Author</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-5">
      <nameOfCollaboratingAuthor />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-6"
    >
      <span>F. Title</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-6">
      <titleForm />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-7"
    >
      <span>G. Research Output</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-7">
      <researchOutput />
    </div>

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-8"
    >
      <span>H. Name of Publisher</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-8">
      <nameOfPublisher />
    </div>

    <!-- year of publication -->

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-9"
    >
      <span>I. Year of Publication</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-9">
      <reportingPeriod />
    </div>

    <!-- publishing journal -->

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-10"
    >
      <span>J. Publishing Journal</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-10">
      <publishingJournal />
    </div>

    <!-- book title -->

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-11"
    >
      <span>K. Book Title</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-11">
      <bookTitle />
    </div>

    <!-- book chapter number/ page number -->

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-12"
    >
      <span>L. Book Chapter Number/ Page Number</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-12">
      <bookChapter />
    </div>

    <!-- link available to the book -->

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-13"
    >
      <span>M. Link available to the book</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-13">
      <linkAvailable />
    </div>

    <!-- Grant/ Project Name -->

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-14"
    >
      <span>N. Grant/ Project Name</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-14">
      <grantProjectName />
    </div>

    <!-- Journals -->

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-15"
    >
      <span>O. Journals</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-15">
      <journalForm />
    </div>

    <!-- Links -->

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-16"
    >
      <span>P. Links</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-16">
      <linksForm />
    </div>

    <!-- Uploads -->

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-17"
    >
      <span>P. Uploads</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-17">
      <uploadsForm />
    </div>

    <!-- Citations -->

    <div
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-18"
    >
      <span>Q. Citations</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-18">
      <citationsForm />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import reportingPeriod from "./form-sections/reportingPeriod.vue";
import formerUnits from "./form-sections/formerUnits.vue";
import newThemesAndDivision from "./form-sections/newThemesAndDivision.vue";
import nameOfLeadAuthor from "./form-sections/nameOfLeadAuthor.vue";
import nameOfCollaboratingAuthor from "./form-sections/nameOfCollaboratingAuthor.vue";
import nameOfPublisher from "./form-sections/nameOfPublisher.vue";
import titleForm from "./form-sections/titleForm.vue";
import researchOutput from "./form-sections/researchOutput.vue";
import publishingJournal from "./form-sections/publishingJournal.vue"
import bookTitle from "./form-sections/bookTitle.vue";
import bookChapter from "./form-sections/bookChapter.vue";
import linkAvailable from "./form-sections/linkAvailable.vue";
import grantProjectName from "./form-sections/grantProjectName.vue";
import journalForm from "./form-sections/journalForm.vue";
import linksForm from "./form-sections/linksForm.vue";
import uploadsForm from "./form-sections/uploadsForm.vue";
import citationsForm from "./form-sections/citationsForm.vue"



export default defineComponent({
  name: "createForm",
  components: {
    reportingPeriod,
    formerUnits,
    nameOfLeadAuthor,
    newThemesAndDivision,
    nameOfCollaboratingAuthor,
    titleForm,
    researchOutput,
    nameOfPublisher,
    publishingJournal,
    bookTitle,
    bookChapter,
    linkAvailable,
    grantProjectName,
    journalForm,
    linksForm,
    uploadsForm,
    citationsForm
  },
  methods: {
    // submitForm(){
    // }
  },
});
</script>

<style scoped>
.section-header {
  background-color: #61a229;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
