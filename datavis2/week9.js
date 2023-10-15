var vg_1 = "Mapass2.vg";
vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  
  var vg_5 = "ganttchart.vg";
vegaEmbed("#gantt", vg_5).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
  
  var vg_6 = "scatterplot.vg";
vegaEmbed("#sp", vg_6).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
document.addEventListener("DOMContentLoaded", function () {
  const chartSelector = document.getElementById("chartSelector");
  const selectedChart = document.getElementById("selectedChart");
chartSelector.value = "bar1";
chartSelector.dispatchEvent(new Event("change"));

  chartSelector.addEventListener("change", function () {
      const selectedValue = chartSelector.value;
      let vgFilePath;

      switch (selectedValue) {

          case "bar1":
              vgFilePath = "barchart1.vg";
              break;
          case "bar2":
              vgFilePath = "barchart2.vg";
              break;
          case "bar3":
              vgFilePath = "barchart3.vg";
              break;
          default:
              vgFilePath = null;
      }

      if (vgFilePath) {
          vegaEmbed(selectedChart, vgFilePath).then(function (result) {
              // Access the Vega view instance as result.view
          }).catch(console.error);
      } else {
          selectedChart.innerHTML = "Select a chart to display.";
      }
  });
});
var vg_7 = "donutchart.vg";
vegaEmbed("#donut", vg_7).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
var vg_8 = "Africahmap.vg";
vegaEmbed("#africahmap", vg_8).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
var vg_9 = "Asiahmap.vg";
vegaEmbed("#asiahmap", vg_9).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
var vg_10 = "SAhmap.vg";
vegaEmbed("#sahmap", vg_10).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
var vg_11 = "NAhmap.vg";
vegaEmbed("#nahmap", vg_11).then(function(result) {
    // Access the Vega view instance 
    //(https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
var vg_12 = "Europehmap.vg";
vegaEmbed("#eurhmap", vg_12).then(function(result) {
      // Access the Vega view instance 
      //(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
  



