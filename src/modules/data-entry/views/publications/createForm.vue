<template>
  <div>
    <div class="position-fixed bottom-0 end-0">
      <button class="submit-btn" @click.prevent="submitForm()">
        Submit Form
      </button>
      <button @click="saveToDraft()" class="save-btn">Save to draft</button>
    </div>

    <br /><br />
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
      <ReportingPeriod />
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
      <FormerUnits />
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
      <NewThemesAndDivision />
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
      <NameOfLeadAuthor />
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
      <NameOfCollaboratingAuthor />
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
      <TitleForm />
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
      <ResearchOutput />
    </div>

    <div
     v-if="
        [
          'Published Paper',
          'Supplement',
          'Book',
          'Book Chapter',
          'Technical Report',
          'Framework',
          'Policy Brief',
          'Fact Sheet',
        ].includes(getActiveResearchOutput)
      "
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-8"
    >
      <span>H. Name of Publisher</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-8">
      <NameOfPublisher />
    </div>

    <!-- year of publication -->

    <div
      v-if="
        [
          'Published Paper',
          'Supplement',
          'Book',
          'Book Chapter',
          'Technical Report',
          'Framework',
          'Policy Brief',
          'Fact Sheet',
        ].includes(getActiveResearchOutput)
      "
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-9"
    >
      <span>I. Year of Publication</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-9">
      <YearOfPublication />
    </div>

    <!-- publishing journal -->

    <div
      v-if="['Published Paper', 'Supplement'].includes(getActiveResearchOutput)"
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-10"
    >
      <span>J. Publishing Journal</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-10">
      <PublishingJournal />
    </div>

    <!-- book title -->

    <div
      v-if="['Book Chapter'].includes(getActiveResearchOutput)"
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-11"
    >
      <span>K. Book Title</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-11">
      <BookTitle />
    </div>

    <!-- book chapter number/ page number -->

    <div
      v-if="['Book Chapter'].includes(getActiveResearchOutput)"
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-12"
    >
      <span>L. Book Chapter Number/ Page Number</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-12">
      <BookChapter />
    </div>

    <!-- link available to the book -->

    <div
      v-if="['Book Chapter', 'Book'].includes(getActiveResearchOutput)"
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-13"
    >
      <span>M. Link available to the book</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-13">
      <LinkAvailable />
    </div>

    <!-- Grant/ Project Name -->

    <div
      v-if="['Technical Report'].includes(getActiveResearchOutput)"
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-14"
    >
      <span>N. Grant/ Project Name</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-14">
      <GrantProjectName />
    </div>

    <!-- Journals -->

    <div
      v-if="['Published Paper', 'Supplement'].includes(getActiveResearchOutput)"
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-15"
    >
      <span>O. Journals</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-15">
      <JournalForm />
    </div>

    <!-- Links -->

    <div
      v-if="
        [
          'Published Paper',
          'Supplement',
          'Book',
          'Book Chapter',
          'Technical Report',
          'Framework',
        ].includes(getActiveResearchOutput)
      "
      class="section-header text-start"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-16"
    >
      <span>P. Links</span>
      <i class="fa fa-angle-down fs-6" aria-hidden="true"></i>
    </div>

    <div class="collapse" id="collapse-16">
      <LinksForm />
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
      <UploadsForm />
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
      <CitationsForm />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import ReportingPeriod from "./form-sections/ReportingPeriod.vue";
import FormerUnits from "./form-sections/FormerUnits.vue";
import NewThemesAndDivision from "./form-sections/NewThemesAndDivision.vue";
import NameOfLeadAuthor from "./form-sections/NameOfLeadAuthor.vue";
import NameOfCollaboratingAuthor from "./form-sections/NameOfCollaboratingAuthor.vue";
import NameOfPublisher from "./form-sections/NameOfPublisher.vue";
import YearOfPublication from "./form-sections/YearOfPublication.vue";
import TitleForm from "./form-sections/TitleForm.vue";
import ResearchOutput from "./form-sections/ResearchOutput.vue";
import PublishingJournal from "./form-sections/PublishingJournal.vue";
import BookTitle from "./form-sections/BookTitle.vue";
import BookChapter from "./form-sections/BookChapter.vue";
import LinkAvailable from "./form-sections/LinkAvailable.vue";
import GrantProjectName from "./form-sections/GrantProjectName.vue";
import JournalForm from "./form-sections/JournalForm.vue";
import LinksForm from "./form-sections/LinksForm.vue";
import UploadsForm from "./form-sections/UploadsForm.vue";
import CitationsForm from "./form-sections/CitationsForm.vue";

export default defineComponent({
  name: "createForm",

  setup() {
    const toast = (title, desc, type) => {
      createToast(
        {
          title: title,
          description: desc,
        },
        {
          type: type,
          transition: "zoom",
          hideProgressBar: true,
          showIcon: true,
          timeout: 3000,
          position: "top-right",
        }
      );
    };
    return {
      toast,
    };
  },

  components: {
    ReportingPeriod,
    FormerUnits,
    NameOfLeadAuthor,
    NewThemesAndDivision,
    NameOfCollaboratingAuthor,
    TitleForm,
    ResearchOutput,
    NameOfPublisher,
    PublishingJournal,
    BookTitle,
    BookChapter,
    LinkAvailable,
    GrantProjectName,
    JournalForm,
    LinksForm,
    UploadsForm,
    CitationsForm,
    YearOfPublication,
  },
  methods: {
    ...mapActions(["SUBMIT_FORM"]),

    submitForm() {
      const data = {
        component: "publications",
      };
      this.toast("Success", "Form submitted successfully", "success");
      this.SUBMIT_FORM(data);
      // console.log("hello");
    },

    saveToDraft() {
      this.toast("Success", "Form saved to draft", "success");
    },
  },

  computed: {
    ...mapGetters(["getActiveResearchOutput"]),
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
