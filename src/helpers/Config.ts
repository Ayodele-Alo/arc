import { configType } from "@/types";

export const configObject: configType[] = [
  {
    name: "Projects",
    visuals: [
      {
        name: "Total number of active and inactive grants",
        url: "https://public.tableau.com/shared/FJ396TJWH?:display_count=n&:origin=viz_share_link:showVizHome=no&:embed=true",
        tableau: true,
        fullScreen: true,
      },
      {
        name: "Total number of active and inactive themes",
        url: "https://public.tableau.com/views/Totalnumberofactiveandinactivethemes/ActiveInactivethemes_1?:language=en-US&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
        fullScreen: true,
      },
      {
        name: "Grants of less than one year and more than one year",
        url: "https://public.tableau.com/views/Grantsoflessthanoneyearandmorethanoneyear/Grants1yrmore?:language=en-US&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
        fullScreen: true,
      },
      {
        name: "Grants of less than 1 million and more than 1 million",
        url: "https://public.tableau.com/views/Oneyearmultiyears/1MmultiMillion?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
        fullScreen: true,
      },
      {
        name: "Grant alert by expiration date",
        url: "alert_table",
        tableau: false,
        fullScreen: false,
      },
    ],
  },
  {
    name: "Geographic reach",
    visuals: [
      {
        name: "Countries with total projects available",
        url: "indicator_performance_map",
        tableau: false,
        fullScreen: true,
      },
      {
        name: "Multi country project chart overtime",
        url: "https://public.tableau.com/views/Multicountriesovertime/Dashboard13?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
        fullScreen: true,
      },
      {
        name: "Kenya vs other country projects overtime",
        url: "",
        tableau: false,
        fullScreen: true,
      },
      {
        name: "Country performance over time",
        url: "https://public.tableau.com/views/Projectspercountryandmultipleyears/Projectscountryyear?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link&amp;:embed=true&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
        fullScreen: true,
      },
    ],
  },
  {
    name: "Donor dashboard",
    visuals: [
      {
        name: "Donor geographic reach map",
        url: "donor_geographic",
        tableau: false,
        fullScreen: true,
      },
      {
        name: "Performance per donor and grant amount ",
        url: "https://public.tableau.com/views/PerformanceperdonorandGrantamount/Donordb?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link&amp;:embed=true&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
        fullScreen: true,
      },
      {
        name: "donor performance over time",
        url: "donor_performance_overtime",
        tableau: false,
        fullScreen: false,
      },
    ],
  },
  {
    name: "Theme Performance",
    visuals: [
      {
        name: "total number of grants per theme",
        url: "https://public.tableau.com/views/Totalnumberofgrantspertheme/NoofGrantspertheme?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
        fullScreen: true,
      },
      {
        name: "themes as synergy or signature",
        url: "https://public.tableau.com/views/ThemesasSynergyorSignature/ThemesasSignaturesynergy?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
        fullScreen: true,
      },
      {
        name: "Theme as prime or sub-award with amount ",
        url: "https://public.tableau.com/views/ThemeasPrimeorsub-awardwithamount/Themeasprimesub?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
        fullScreen: true,
      },
      {
        name: "Percentage of products as prime or subaward",
        url: "https://public.tableau.com/views/PercentageofProductsasPrimeorSubaward/Dashboard10?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
        fullScreen: true,
      },
      {
        name: "Theme performance over time",
        url: "https://public.tableau.com/views/Projectsperformanceovertime/Projectovertimedb?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link:showVizHome=no&amp;:embed=true",
        tableau: true,
        fullScreen: true,
      },
    ],
  },
  {
    name: "indicator versus set target",
    visuals: [
      {
        name: "indicator versus set target",
        url: "",
        tableau: false,
        fullScreen: true,
      },
      {
        name: "indicator scorecard",
        url: "",
        tableau: false,
        fullScreen: true,
      },
      {
        name: "indicator comparison",
        url: "",
        tableau: false,
        fullScreen: true,
      },
    ],
  },
];
