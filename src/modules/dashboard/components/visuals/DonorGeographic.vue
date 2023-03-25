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
  name: "DonorGeographic",
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
                const { name, value, code, donorData } = event.point;
                const donorList = donorData.map((el, i) => `<li class="donor_name">${i+1}: ${el.donor} - (${el.donor_code})<br /><small>Link: <a href="${el.website}" target="_blank" rel="noopener noreferrer">website</a></small></li>`).join("").replace(/,/g, "");

                const content = `
                  <small>Country: <strong>${name}</strong></small><br />
                  <small>Code: <strong>${code.toUpperCase()}</strong></small><br />
                  <small>No of Donor(s): <strong>${value}</strong></small>
                  <br />
                  <hr />
                  <ol id="donor_name" class="display_mode_donor">
                    <strong>Donor(s):</strong>
                    ${donorList}</ol>`;

                document.getElementById("info-menu").innerHTML = content;
                document.getElementById("info-menu").className = "info_menu";
                document.getElementById("close_btn").classList.remove("d-none");
              },
            },
          },
        ],
      },
    };
  },
  methods: {
    async getMapDataFromApi() {
      try {
        // check if the data is cached
        const cachedData = localStorage.getItem("donorGeographic");
        if (cachedData) {
          const { mapData, timestamp } = JSON.parse(cachedData);
          const now = Date.now();
          const diffInSeconds = (now - timestamp) / 1000;
          const oneDayInSeconds = 60 * 60 * 24;
          if (diffInSeconds < oneDayInSeconds) {
            this.mapData.series[0].data = mapData;
            this.mapData.subtitle.text = "List of Donors from a particular country";
            this.mapData.legend.title.text = "Number of Donors in a country";
            return;
          }
          localStorage.removeItem("donorGeographic");
        }
        // ----------------
        const resp = await ProjectService.getDonorAndCountryList();
        // loop through the response and group the data by country_name using reduce
        const data = resp.reduce((r, a) => {
          r[a.country_name] = [...(r[a.country_name] || []), a];
          return r;
        }, {});

        console.log(data)

        // loop through data and create a series data for the map
        const mapData = Object.entries(data).map(
          ([key, values]) => ({
            name: key,
            value: values.length,
            code: values[0].country_code.toLowerCase(),
            donorData: values,
          })
        );

        this.mapData.series[0].data = mapData;
        this.mapData.subtitle.text = "List of Donors from a particular country";
        this.mapData.legend.title.text = "Number of Donors in a country";

        // cache the data
        const cache = {
          mapData,
          timestamp: new Date().getTime(),
        };

        localStorage.setItem("donorGeographic", JSON.stringify(cache));
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
  ol.display_mode_donor {
    list-style-type: none;
    height: 15rem;
    overflow-y: auto;
    background: inherit;
    padding-left: 0.25rem;
    padding-bottom: 0.5rem;
    li.donor_name {
      font-size: 0.8rem;
      font-weight: 500;
      list-style-type: none;
      padding-bottom: 0.5rem;
    }
  }
}
</style>
