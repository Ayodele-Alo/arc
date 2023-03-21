export type MethodType = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface AlertTableI {
  date: string;
  name: string;
  year: string;
  difference: number;
  month: string;
  expiring_threshold: boolean;
}

export interface GenericI {
  [key: string]: string | number;
}

export interface seriesDataI {
  name: string;
  value: number;
  code: string;
}
export interface ChartOptions {
  chart: {
    map: string;
  };
  title: {
    text: string;
  };
  subtitle: {
    text: string;
  };
  credits: {
    enabled: boolean;
  };
  legend: {
    title: {
      text: string;
      style: object;
    };
  };
  mapNavigation: {
    enabled: boolean;
    buttonOptions: {
      verticalAlign: string;
    };
  };
  tooltip: {
    backgroundColor: string;
    padding: string;
    borderWidth: number;
    shadow: boolean;
    useHTML: boolean;
    // pointFormat: string;
    // positioner(): object;
  };
  plotOptions: {
    series: {
      states: {
        hover: {
          cursor: string;
          color: string;
        };
      };
    };
  };
  colorAxis: {
    min: number;
    minColor: string;
    maxColor: string;
  };
  series: {
    name: string;
    keys: string[];
    joinBy: string;
    animation: boolean;
    data: seriesDataI[];
    color: string;
    cursor: string;
    states?: {
      hover: {
        color: string;
        cursor: string;
      };
    };
    dataLabels: {
      enabled: boolean;
      format: string;
    };
    events: {
      click: (e: any) => void;
      mouseOut: () => void;
    };
  }[];
}
