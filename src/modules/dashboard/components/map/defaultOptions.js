import { ChartOptions, seriesDataI } from "@/types";

const chartOptions = {
  chart: {
    map: "custom/world",
    //  events: {
    //     drilldown,
    //     drillup
    // }
  },
  title: {
    text: "APHRC",
  },
  subtitle: {
    text: "Indicator Performance Across Time",
  },
  credits: {
    enabled: false,
  },
  legend: {
    title: {
      text: "Indicator Performance Across Time",
      style: {},
    },
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: "bottom",
    },
  },
  tooltip: {
    backgroundColor: "#bbb",
    padding: "10px",
    borderWidth: 10,
    shadow: true,
    useHTML: true,
    enabled: false,
    // pointFormat:
    //   '<span class="shadow-lg bg-danger w-100 h-100 p-3"><span class="flag {point.properties.hc-key}">' +
    //   "</span></span> {point.name}<br>" +
    //   '<span style="font-size:20px">{point.value}/aphrc</span>',
    // positioner() {
    //   return { x: 0, y: 50 };
    // },
  },
  plotOptions: {
    series: {
      states: {
        hover: {
          color: "#2C4A13EB",
        },
      },
    },
  },
  colorAxis: {
    min: 1,
    // max: 100,
    // type: "logarithmic",
    minColor: "#b4e48b",
    maxColor: "#3f770e",
  },
  series: [
    {
      name: "Countries",
      keys: ["name", "hc-key"],
      joinBy: "name", // join by hc-key property
      animation: true,
      data: [],
      color: "#2C4A13EB",
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "{point.name}",
      },
      events: {
        click(event) {
          const point = event.point;
          const name = point.name;
          const value = point.value;
          const code = point.code;

          // Add the details to the side info menu
          const sideMenu = document.getElementById("info-menu");
          const content = `<div class="info_menu">
            <small>Country: <strong>${name}</strong></small><br />
            <small>Code: <strong>${code.toUpperCase()}</strong></small><br />
            <small>Active Project: <strong>${value}</strong></small>
          </div>`;
          sideMenu.innerHTML = content;
          sideMenu.className = "info_menu";
        },
        mouseOut() {
          // Remove the details from the side info menu
          const sideMenu = document.getElementById("info-menu");
          sideMenu.innerHTML = "";
          sideMenu.className = "";
        },
      },
    },
  ],
};

export default chartOptions;
