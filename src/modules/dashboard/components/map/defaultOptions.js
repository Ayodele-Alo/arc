const chartOptions = {
  chart: {
    map: "custom/world",
  },
  title: {
    text: "",
  },
  subtitle: {
    text: "",
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
      events: {},
    },
  ],
};

export default chartOptions;
