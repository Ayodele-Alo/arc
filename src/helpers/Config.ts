import { configType } from "@/types";

export const configObject: Array<configType> = [
  {
    name: "Projects",
    visuals: [
      {
        name: "Total number of active and inactive grants",
        url: "",
        tableau: true,
      },
      {
        name: "Total number of active and inactive themes",
        url: "https://public.tableau.com/views/ActiveInactivethemes/ActiveInactivethemes_1?:language=en-US&:origin=viz_share_link&amp;:embed=true&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
      },
      {
        name: "Grants of less than one year and more than one year",
        url: "https://public.tableau.com/views/1year1year/1year1year?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link&amp;:embed=true&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
      },
      {
        name: "Grants of less than 1 million and more than 1 million",
        url: "https://public.tableau.com/views/Oneyearmultiyears/oneyearmultiyear?:language=en-US&:origin=viz_share_link&amp;:embed=true&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
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
        url: "https://public.tableau.com/views/Grantspertheme/NoofGrantspertheme?:language=en-US&:origin=viz_share_link&amp;:embed=true&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
      },
      {
        name: "themes as synergy or signature",
        url: "https://public.tableau.com/views/Themesassignaturesynergy/ThemesasSignaturesynergy?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
      },
      {
        name: "Theme as prime or sub-award with amount ",
        url: "https://public.tableau.com/views/Themesasprimesubaward/Themeasprimesub?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
      },
      {
        name: "Percentage of products as prime or subaward",
        url: "https://public.tableau.com/views/Themesasprimesubaward_16783800455270/Dashboard10?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
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

