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
  };
}

export { state, generic, visualType, configType };
