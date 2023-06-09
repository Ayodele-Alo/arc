import { MutationTree } from "vuex";
import { state } from "@/types";

const mutations: MutationTree<state> = {
  setActiveTab: (state, data): void => {
    state.activeTab = data;
  },
  setLoginModal: (state, data): void => {
    state.activeModal = data;
  },
  setActiveForm: (state, data): void => {
    state.activeForm = data;
  },

  savePublicationsData: (state, data) => {
    if (data.name === "bookTitle") {
      state.publicationsForm.bookTitle = data.form;
    }
    // else if (data.theme === "linkageBetweenInstitution") {
    //   state.resourceRelatedForm.linkageBetweenInstitution = data.form;
    // } else {
    //   state.resourceRelatedForm.annualPerformance = data.form;
    // }
  },

  saveResourceRelatedData: (state, data) => {
    console.log("called again");
    if (data.name === "initial") {
      state.resourceRelatedForm.initial = data.form;
    } else if (data.name === "linkageBetweenInstitution") {
      state.resourceRelatedForm.linkageBetweenInstitution = data.form;
    } else if (data.name === "additionalAchivements") {
      state.resourceRelatedForm.additionalAchivements = data.form;
    } else if (data.name === "businessDevelopment") {
      state.resourceRelatedForm.businessDevelopment = data.form;
    } else if (data.name === "challengesAndLesson") {
      state.resourceRelatedForm.challengesAndLesson = data.form;
    } else if (data.name === "majorPlannedActivities") {
      state.resourceRelatedForm.majorPlannedActivities = data.form;
    } else if (data.name === "newOpportunities") {
      state.resourceRelatedForm.newOpportunities = data.form;
    } else if (data.name === "risksIndentified") {
      state.resourceRelatedForm.risksIndentified = data.form;
    } else {
      state.resourceRelatedForm.annualPerformance = data.form;
    }
  },
  saveHumanResourceData: (state, data) => {
    console.log("called again");
    if (data.name === "byCadre") {
      state.humanResourceForm.forms.byCadre = data.form;
    } else if (data.name === "sensitization_meetings") {
      state.humanResourceForm.forms.sensitizationMettings = data.form;
    } else if (data.name === "human_resource_recruitment") {
      state.humanResourceForm.forms.recruitmentProcess = data.form;
    } else if (data.name === "human_resource") {
      state.humanResourceForm.forms.humanResource = data.form;
    } else {
      state.humanResourceForm.forms.systemsThinking = data.form;
    }
  },
  saveAnnualPerformanceData: (state, data) => {
    if (data.name === "annualPerformanceAgainstPlan") {
      state.annualForm.forms.annualPerformanceReport.annualPerformaceAgainstPlan =
        data.form;
    } else if (data.name === "additionalAchievement") {
      state.annualForm.forms.annualPerformanceReport.additionalAchivement =
        data.form;
    } else if (data.name === "challengesAndLessonLearnt") {
      state.annualForm.forms.annualPerformanceReport.challengesAndLessonLearnt =
        data.form;
    } else if (data.name === "businessDevelopment") {
      state.annualForm.forms.annualPerformanceReport.businessDevelopment =
        data.form;
    } else if (data.name === "newOpportunities") {
      state.annualForm.forms.annualPerformanceReport.newOpportunities =
        data.form;
    } else if (data.name === "engagementWithPolicyMakers") {
      state.annualForm.forms.annualPerformanceReport.engagementWithPolicyMakers =
        data.form;
    } else if (data.name === "risksIdentified") {
      state.annualForm.forms.annualPerformanceReport.riskIdentified = data.form;
    } else {
      state.annualForm.forms.annualPerformanceReport.strategicOutcomes =
        data.form;
    }
  },

  saveQuarterlyPerformanceData: (state, data) => {
    if (data.name === "annualPerformanceAgainstPlan") {
      state.quarterlyForm.forms.quarterlyPerformanceReport.annualPerformaceAgainstPlan =
        data.form;
    } else if (data.name === "additionalAchievement") {
      state.quarterlyForm.forms.quarterlyPerformanceReport.additionalAchivement =
        data.form;
    } else if (data.name === "challengesAndLessonLearnt") {
      state.quarterlyForm.forms.quarterlyPerformanceReport.challengesAndLessonLearnt =
        data.form;
    } else if (data.name === "businessDevelopment") {
      state.quarterlyForm.forms.quarterlyPerformanceReport.businessDevelopment =
        data.form;
    } else if (data.name === "newOpportunities") {
      state.quarterlyForm.forms.quarterlyPerformanceReport.newOpportunities =
        data.form;
    } else if (data.name === "engagementWithPolicyMakers") {
      state.quarterlyForm.forms.quarterlyPerformanceReport.engagementWithPolicyMakers =
        data.form;
    } else if (data.name === "risksIdentified") {
      state.quarterlyForm.forms.quarterlyPerformanceReport.riskIdentified =
        data.form;
    } else {
      state.quarterlyForm.forms.quarterlyPerformanceReport.strategicOutcomes =
        data.form;
    }
  },

  submitResourceRelatedData: (state) => {
    console.log(state.resourceRelatedForm);
  },
  submitAnnualPerformanceData: (state, payload) => {
    state.annualForm.theme = payload.theme;
    state.annualForm.year = payload.year;
    console.log(state.annualForm);
  },

  submitQuarterlyPerformanceData: (state, payload) => {
    state.quarterlyForm.theme = payload.theme;
    state.quarterlyForm.year = payload.year;
    state.quarterlyForm.quarter = payload.quarter;
    console.log(state.quarterlyForm);
  },
  submitHumanResourceData: (state, payload) => {
    state.humanResourceForm.year = payload.year;
    console.log(state.humanResourceForm);
  },
  submitPublicationsData: (state) => {
    console.log(state.publicationsForm);
  },
  submitMonthlyData: (state, payload) => {
    state.monthlyForm.month = payload.month;
    state.monthlyForm.year = payload.year;
    state.monthlyForm.theme = payload.theme;
    state.monthlyForm.project_name = payload.forms.project_name;
    state.monthlyForm.progress_for_the_month =
      payload.forms.progress_for_the_month;
    state.monthlyForm.challenges_and_lesson.challenges =
      payload.forms.challenges;
    state.monthlyForm.challenges_and_lesson.lesson = payload.forms.lesson;
    state.monthlyForm.planned_activities = payload.forms.planned_activities;

    console.log(state.monthlyForm);
  },

  saveActiveResearchOutput: (state, payload) => {
    state.activeResearchOutput = payload;
  },
  
};

export default mutations;
