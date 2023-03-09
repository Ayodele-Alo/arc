import { configType } from "@/types";

export const configObject: Array<configType> = [
  {
    name: "Projects",
    visuals: [
      {
        name: "Total number of active and inactive grants",
        // url: "https://public.tableau.com/views/Financedashboard_16472462810160/Dashboard1?:language=en-US&amp;publish=yes&amp;:display_count=n&amp;:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        url: "https://public.tableau.com/views/APHRC3/Dashboard1?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
      },
      {
        name: "Total number of active and inactive themes",
        url: "https://public.tableau.com/views/APHRCDashboard2/Dashboard2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
      },
      {
        name: "Grants of less than one year and more than one year",
        url: "",
        tableau: true,
      },
      {
        name: "Grants of less than 1 million and more than 1 million",
        url: "",
        tableau: true,
      },
      {
        name: "Grant alert by expiration date",
        url: "alert_table",
        tableau: false,
      },
    ],
  },
  {
    name: "Geographic reach",
    visuals: [
      {
        name: "Countries with total projects available",
        url: "",
        tableau: false,
      },
      {
        name: "Multi country project chart overtime",
        url: "",
        tableau: false,
      },
      {
        name: "Kenya vs other country projects overtime",
        url: "",
        tableau: false,
      },
    ],
  },
  {
    name: "Donor dashboard",
    visuals: [
      {
        name: "Donor geographic reach map",
        url: "",
        tableau: false,
      },
      {
        name: "Performance per donor and grant amount ",
        url: "",
        tableau: true,
      },
      {
        name: "donor performance over time",
        url: "",
        tableau: false,
      },
    ],
  },
  {
    name: "Theme Performance",
    visuals: [
      {
        name: "total number of grants per theme",
        url: "",
        tableau: true,
      },
      {
        name: "themes as synergy or signature",
        url: "",
        tableau: true,
      },
      {
        name: "Theme as prime or sub-award with amount ",
        url: "",
        tableau: true,
      },
      {
        name: "Percentage of products as prime or subaward",
        url: "",
        tableau: true,
      },
    ],
  },
  {
    name: "indicator versus set target",
    visuals: [
      {
        name: "indicator versus set target",
        url: "",
        tableau: true,
      },
      {
        name: "indicator scorecard",
        url: "",
        tableau: true,
      },
      {
        name: "indicator comparison",
        url: "",
        tableau: true,
      },
    ],
  },
];

