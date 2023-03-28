import { state } from "@/types";
import { configObject } from "@/helpers";

// init state
const TabConfig = configObject;
const defaultTabConfig = configObject[0].name;

// state object
const state: state = {
  config: TabConfig,
  activeTab: defaultTabConfig,
  activeModal: "",
  activeForm: "",
  publicationsForm: {
    bookTitle: "",
    bookchapter: "",
    citationsForm: "",
    formerUnits: "",
    grantProjectName: "",
    journalForm: "",
    linkAvailable: "",
    linksForm: "",
    nameOfCollaboratingAuthor: "",
    nameOfLeadAuthor: "",
    nameOfPublisher: "",
    newThemesAndDivision: "",
    publishingJournal: "",
    reportingperiod: "",
    researchOutput: "",
    titleForm: "",
    uploadsForm: "",
    yearOfPublications: "",
  },

  resourceRelatedForm: {
    initial: [],
    linkageBetweenInstitution: [],
    annualPerformance: [],
    additionalAchivements: [],
    businessDevelopment: [],
    challengesAndLesson: [],
    majorPlannedActivities: [],
    newOpportunities: [],
    risksIndentified: [],
  },
  humanResourceForm: {
    byCadre: [],
    humanResource: [],
    recruitmentProcess: [],
    sensitizationMettings: [],
    systemsThinking: [],
  },
};

export default state;
