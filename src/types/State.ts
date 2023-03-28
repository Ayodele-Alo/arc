type generic = { [key: string]: string };

type visualType = {
  name: string;
  url: string;
  tableau: boolean;
  fullScreen: boolean;
};

type configType = {
  name: string;
  visuals: Array<visualType>;
};

interface state {
  config: Array<configType>;
  activeTab: string;
  activeModal: string;
  activeForm: string;
  resourceRelatedForm: {
    initial: [];
    linkageBetweenInstitution: [];
    annualPerformance: [];
    additionalAchivements: [];
    businessDevelopment: [];
    challengesAndLesson: [];
    majorPlannedActivities: [];
    newOpportunities: [];
    risksIndentified: [];
  };
  humanResourceForm: {
    byCadre: [];
    humanResource: [];
    recruitmentProcess: [];
    sensitizationMettings: [];
    systemsThinking: [];
  };
}

export { state, generic, visualType, configType };
