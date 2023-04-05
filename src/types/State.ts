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
  activeResearchOutput: string;
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
  monthlyForm: {
    month: string;
    year: string;
    theme: string;
    project_name: "";
    progress_for_the_month: "";
    challenges_and_lesson: {
      challenges: "";
      lesson: "";
    };
    planned_activities: "";
  };
}

export { state, generic, visualType, configType };
