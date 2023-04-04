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
  publicationsForm: {
    bookTitle: "";
    bookchapter: "";
    citationsForm: "";
    formerUnits: "";
    grantProjectName: "";
    journalForm: "";
    linkAvailable: "";
    linksForm: "";
    nameOfCollaboratingAuthor: "";
    nameOfLeadAuthor: "";
    nameOfPublisher: "";
    newThemesAndDivision: "";
    publishingJournal: "";
    reportingperiod: "";
    researchOutput: "";
    titleForm: "";
    uploadsForm: "";
    yearOfPublications: "";
  };
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
    forms: {
      byCadre: [];
      humanResource: [];
      recruitmentProcess: [];
      sensitizationMettings: [];
      systemsThinking: [];
    };
    year: string;
  };
  annualForm: {
    period: string;
    year: string;
    theme: string;
    forms: {
      annualPerformanceReport: {
        strategicOutcomes: {};
        annualPerformaceAgainstPlan: [];
        additionalAchivement: string;
        challengesAndLessonLearnt: [];
        businessDevelopment: [];
        newOpportunities: [];
        engagementWithPolicyMakers: [];
        riskIdentified: [];
      };
    };
  };
  quarterlyForm: {
    quarter: string;
    year: string;
    theme: string;
    forms: {
      quarterlyPerformanceReport: {
        strategicOutcomes: {};
        annualPerformaceAgainstPlan: [];
        additionalAchivement: string;
        challengesAndLessonLearnt: [];
        businessDevelopment: [];
        newOpportunities: [];
        engagementWithPolicyMakers: [];
        riskIdentified: [];
      };
    };
  };
}

export { state, generic, visualType, configType };
