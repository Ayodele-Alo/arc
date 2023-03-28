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
};

export default state;
