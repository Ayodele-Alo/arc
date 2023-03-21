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
          const { name, value, code, projectData } = event.point;
          const sponsors = {};
          
          for (const grant of projectData) {
            const { sponsor } = grant;
            if (!(sponsor in sponsors)) {
              sponsors[sponsor] = [];
            }
            sponsors[sponsor].push(grant);
          }
          
          const sponsorList = Object.entries(sponsors).map(([sponsor, grants]) => {
            const grantList = grants.map(grant => `<li class="project_name">${grant.grant}</li>`);
            return `<li class="sponsor">${sponsor}<ul class="projects_name">${grantList.join("")}</ul></li>`;
          }).join("");
          
          const content = `
            <small>Country: <strong>${name}</strong></small><br />
            <small>Code: <strong>${code.toUpperCase()}</strong></small><br />
            <small>Active Project: <strong>${value}</strong></small>
            <br />
            <hr />
            <ul id="list_details" class="display_mode">
            ${sponsorList}</ul>`;
          
          document.getElementById("info-menu").innerHTML = content;
          document.getElementById("info-menu").className = "info_menu";
          

          // loop through the project data and group grants by sponsor
          // const sponsors = projectData.reduce((acc, curr) => {
          //   const sponsor = curr.sponsor;
          //   if (!acc[sponsor]) {
          //     acc[sponsor] = [];
          //   }
          //   acc[sponsor].push(curr);
          //   return acc;
          // }, {});

          // //  create a list of sponsors and their grants
          // const sponsorList = Object.keys(sponsors).map((sponsor) => {
          //   const grants = sponsors[sponsor];
          //   const grantList = grants.map((grant) => {
          //     return `<li class="project_name">${grant.grant}</li>`;
          //   });
          //   return `<li class="sponsor">${sponsor}<ul class="projects_name">${grantList.join(" ")}</ul></li>`;
          // });

          // // Add the details to the side info menu
          // const sideMenu = document.getElementById("info-menu");
          // const content = `
          //   <small>Country: <strong>${name}</strong></small><br />
          //   <small>Code: <strong>${code.toUpperCase()}</strong></small><br />
          //   <small>Active Project: <strong>${value}</strong></small>
          //   <br />
          //   <hr />
          //   <ul id="list_details" class="display_mode">
          //   ${sponsorList}</ul>`;

          // sideMenu.innerHTML = content;
          // sideMenu.className = "info_menu";
        },
        mouseOut() {
          // Remove the details from the side info menu
          // const sideMenu = document.getElementById("info-menu");
          // sideMenu.innerHTML = "";
          // sideMenu.className = "";
        },
      },
    },
  ],
};

export default chartOptions;
