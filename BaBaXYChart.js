am4core.ready(function () {

    // Apply chart themes
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("chartdiv4", am4charts.XYChart);

// Add data
chart.data = [{
  
 
  "country": "2014",
  "litres": 57.1,
  "units": 57.7
}, {
  "country": "2015",
  "litres": 91.2,
  "units": 59.7
}, {
  "country": "2016",
  "litres": 120.7,
  "units": 32.3
}, {
  "country": "2017",
  "litres": 168.2,
  "units": 39.4
}, {
  "country": "2018",
  "litres": 213.5,
  "units": 26.9
}, {
  "country": "2019",
  "litres": 268.4,
  "units": 25.7
}, {
  "country": "2020",
  "litres": 498.2,
  "units": 85.6
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
 

// First value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Total GMV";

// Second value axis
var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.title.text = "Growth Rate";
valueAxis2.renderer.opposite = true;
valueAxis2.renderer.labels.template.adapter.add("text", function(text) {
  return text + "%";
});

// First series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "litres";
series.dataFields.categoryX = "country";
series.name = "GMV";
series.tooltipText = "{name}: [bold]{valueY}[/]";

// Second series
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "units";
series2.dataFields.categoryX = "country";
series2.name = "Growth";
series2.tooltipText = "{name}: [bold]{valueY}[/]";
series2.strokeWidth = 3;
series2.yAxis = valueAxis2;

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();
    var title = chart.titles.create();
    title.text = "Alibaba Singles' Day Total GMV (RMB billion)";
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;

}); // end am4core.ready()