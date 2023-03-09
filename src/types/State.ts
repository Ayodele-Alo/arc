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
}

export { state, generic, visualType, configType };
