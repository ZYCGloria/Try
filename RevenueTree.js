
am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv3", am4plugins_forceDirected.ForceDirectedTree);
    chart.legend = new am4charts.Legend();

    var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

    networkSeries.data = [{
        name: '2020',
        children: [{
            name: 'Alibaba', value: 74
        }, {
            name: 'JD', value: 41

        }]
    }, {
        name: '2019',
        children: [{
            name: 'Alibaba', value: 38
        }, {
            name: 'JD', value: 29

        }]


    }];

    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";

    networkSeries.nodes.template.tooltipText = "{name}";
    networkSeries.nodes.template.fillOpacity = 1;

    networkSeries.nodes.template.label.text = "{name}"
    networkSeries.fontSize = 8;
    networkSeries.maxLevels = 2;
    networkSeries.maxRadius = am4core.percent(6);
    networkSeries.manyBodyStrength = -16;
    networkSeries.nodes.template.label.hideOversized = true;
    networkSeries.nodes.template.label.truncate = true;

    var title = chart.titles.create();
    title.text = "2019 & 2020 Singles' Day Sales";
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;

}); // end am4core.ready()