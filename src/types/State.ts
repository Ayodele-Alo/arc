type generic = { [key: string]: string };

type visualType = {
  name: string;
  url: string;
  tableau: boolean;
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
  };
}

export { state, generic, visualType, configType };
