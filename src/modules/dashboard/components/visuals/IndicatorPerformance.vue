<template>
  <div>
    <div v-if="isLoaded">
      <Maps :mapOptions="mapData" />
    </div>
    <div class="coming_soon_map" v-else>
      <h4>PREPARING MAP&nbsp;</h4>
      <div class="loading_dots" />
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import ProjectService from "@/helpers/Project.Service";
import Maps from "@/modules/dashboard/components/map/index.vue";

export default defineComponent({
  name: "IndicatorPerformanceAcrossTime",
  components: {
    Maps,
  },
  data() {
    return {
      isLoaded: false,
      mapData: {
        subtitle: {},
        legend: {
          title: {
            text: ""
          }
        },
        series: [
          {
            data: [],
            tooltip: {
              headerFormat: "",
              pointFormat: "{point.name}: <b>{point.value}</b>",
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
      },
    };
  },
  methods: {
    // async getMapDataFromApi() {
    //   try {
    //     // check if the data is cached
    //     const cacheData = localStorage.getItem("mapData-indicator-performance");
    //       if (cacheData) {
    //         const { data, timestamp } = JSON.parse(cacheData);
    //         const now = Date.now();
    //         const diff = now - timestamp;
    //         // if the data is cached and it is less than 15 minutes old, use it
    //         if (diff < 900000) {
    //           this.mapData.series[0].data = data;
    //           this.mapData.subtitle.text =
    //             "Indicator Performance Across Time (Active Projects)";
    //           this.mapData.legend.title.text =
    //             "Number of Active Projects in a country";
    //           return;
    //         } else {
    //           // if the data is cached but it is more than 15 minutes old, delete it
    //           localStorage.removeItem("mapData-indicator-performance");
    //         }
    //       }

    //     // -------Else fetch the data from the API
    //     const result = [];
    //     const data = [];

    //     const projectsPromise = ProjectService.getAllActiveProject();
    //     const projects = await projectsPromise;

    //     const countriesPromise = Promise.allSettled(
    //       projects.map(({ no }) => ProjectService.getCountryByAwardNo(no))
    //     );
    //     const countriesPromiseResults = await countriesPromise;
    //     const countries = countriesPromiseResults
    //       .filter((result) => result.status === "fulfilled")
    //       .map((result) => result.value);

    //     for (let i = 0; i < projects.length; i++) {
    //       const project = projects[i];
    //       const respData = countries[i];
    //       respData.forEach((r) => {
    //         r.grant = project.name;
    //         r.sponsor = project.sponsoring_funder_name;
    //       });
    //       result.push(...respData);
    //     }

    //     const grouped = result.reduce((r, a) => {
    //       r[a.country_name] = [...(r[a.country_name] || []), a];
    //       return r;
    //     }, {});

    //     data.push(
    //       ...Object.entries(grouped).map(([key, values]) => ({
    //         name: key,
    //         value: values.length,
    //         code: values[0].country_code.toLowerCase(),
    //         projectData: values,
    //       }))
    //     );

    //     this.mapData.series[0].data = data;
        // this.mapData.subtitle.text =
        //   "Indicator Performance Across Time (Active Projects)";
        // this.mapData.legend.title.text = "Number of Active Projects in a country";

        // // cache the data for the next time
        // const cache = {
        //   data,
        //   timestamp: new Date().getTime(),
        // };
        // localStorage.setItem("mapData-indicator-performance", JSON.stringify(cache));

    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     this.isLoaded = true;
    //   }
    // },

    async getMapDataFromApi() {
      try {
        //  check if the data is cached
        const cacheData = localStorage.getItem("mapData-indicator-performance");
          if (cacheData) {
            const { data, timestamp } = JSON.parse(cacheData);
            const now = Date.now();
            const diff = now - timestamp;
            // if the data is cached and it is less than 15 minutes old, use it
            if (diff < 900000) {
              this.mapData.series[0].data = data;
              this.mapData.subtitle.text =
                "Indicator Performance Across Time (Active Projects)";
              this.mapData.legend.title.text =
                "Number of Active Projects in a country";
              return;
            } else {
              // if the data is cached but it is more than 15 minutes old, delete it
              localStorage.removeItem("mapData-indicator-performance");
            }
          }

        // -------Else fetch the data from the API
        const result = [];
        const data = [];
        const projects = await ProjectService.getAllActiveProject();
        for (const { no } of projects) {
          const respData = await ProjectService.getCountryByAwardNo(no);
          const project = projects.find((p) => p.no === no);
          respData.forEach((r) => {
            r.grant = project.name;
            r.sponsor = project.sponsoring_funder_name;
          });
          result.push(...respData);
        }

        const grouped = result.reduce((r, a) => {
          r[a.country_name] = [...(r[a.country_name] || []), a];
          return r;
        }, {});

        data.push(
          ...Object.entries(grouped).map(([key, values]) => ({
            name: key,
            value: values.length,
            code: values[0].country_code.toLowerCase(),
            projectData: values
          }))
        );
        this.mapData.series[0].data = data;
        this.mapData.subtitle.text =
          "Indicator Performance Across Time (Active Projects)";
        this.mapData.legend.title.text = "Number of Active Projects in a country";
             // cache the data for the next time
             const cache = {
          data,
          timestamp: new Date().getTime(),
        };
        localStorage.setItem("mapData-indicator-performance", JSON.stringify(cache));
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoaded = true;
      }
    },

  },
  async mounted() {
    await this.getMapDataFromApi();
  },
});
</script>

<style lang="scss">
div.info_menu {
  ul.display_mode {
    list-style: none;
    height: 15rem;
    overflow-y: auto;
    background: inherit;
    padding-left: 0.35rem;
    padding-bottom: 0.5rem;
    li.sponsor {
      font-size: 0.9rem;
      font-weight: 600;
      border-bottom: 2px solid;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      ul.projects_name {
        list-style: upper-roman;
        li.project_name {
          font-size: 0.7rem;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
