import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React, { useEffect } from 'react';


am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);


export default function UnitedStatesMap(props) {
    const {
              elementId,
              title
          } = props;

    useEffect(() => {
        // Create map instance
        let chart = am4core.create(elementId, am4maps.MapChart);
        chart.maxZoomLevel = 64;

        // Set map definition
        chart.geodata = am4geodata_usaLow;

        // Set projection
        chart.projection = new am4maps.projections.AlbersUsa();

        // Add button
        let zoomOut = chart.tooltipContainer.createChild(am4core.ZoomOutButton);
        zoomOut.align = "right";
        zoomOut.valign = "top";
        zoomOut.margin(20, 20, 20, 20);
        zoomOut.events.on("hit", function() {
            if (currentSeries) {
                currentSeries.hide();
            }
            chart.goHome();
            zoomOut.hide();
            currentSeries = regionalSeries.US.series;
            currentSeries.show();
        });
        zoomOut.hide();


        // Create map polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;
        polygonSeries.calculateVisualCenter = true;

        // Configure series
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = chart.colors.getIndex(0);

        // Load data when map polygons are ready
        chart.events.on("ready", loadStores);

        // Loads store data
        function loadStores() {
            let loader = new am4core.DataSource();
            loader.url = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/TargetStores.json";
            loader.events.on("parseended", function(ev) {
                setupStores(ev.target.data);
            });
            loader.load();
        }

        // Creates a series
        function createSeries(heatfield) {
            let series = chart.series.push(new am4maps.MapImageSeries());
            series.dataFields.value = heatfield;

            let template = series.mapImages.template;
            template.verticalCenter = "middle";
            template.horizontalCenter = "middle";
            template.propertyFields.latitude = "lat";
            template.propertyFields.longitude = "long";
            template.tooltipText = "{name}:\n[bold]{stores} stores[/]";

            let circle = template.createChild(am4core.Circle);
            circle.radius = 10;
            circle.fillOpacity = 0.7;
            circle.verticalCenter = "middle";
            circle.horizontalCenter = "middle";
            circle.nonScaling = true;

            let label = template.createChild(am4core.Label);
            label.text = "{stores}";
            label.fill = am4core.color("#fff");
            label.verticalCenter = "middle";
            label.horizontalCenter = "middle";
            label.nonScaling = true;

            let heat = series.heatRules.push({
                target: circle,
                property: "radius",
                min: 10,
                max: 30
            });

            // Set up drill-down
            series.mapImages.template.events.on("hit", function(ev) {

                // Determine what we've clicked on
                let data = ev.target.dataItem.dataContext;

                // No id? Individual store - nothing to drill down to further
                if (!data.target) {
                    return;
                }

                // Create actual series if it hasn't been yet created
                if (!regionalSeries[data.target].series) {
                    regionalSeries[data.target].series = createSeries("count");
                    regionalSeries[data.target].series.data = data.markerData;
                }

                // Hide current series
                if (currentSeries) {
                    currentSeries.hide();
                }

                // Control zoom
                if (data.type == "state") {
                    let statePolygon = polygonSeries.getPolygonById("US-" + data.state);
                    chart.zoomToMapObject(statePolygon);
                }
                else if (data.type == "city") {
                    chart.zoomToGeoPoint({
                        latitude: data.lat,
                        longitude: data.long
                    }, 64, true);
                }
                zoomOut.show();

                // Show new targert series
                currentSeries = regionalSeries[data.target].series;
                currentSeries.show();
            });

            return series;
        }

        let regionalSeries = {};
        let currentSeries;

        function setupStores(data) {

            // Init country-level series
            regionalSeries.US = {
                markerData: [],
                series: createSeries("stores")
            };

            // Set current series
            currentSeries = regionalSeries.US.series;

            // Process data
            am4core.array.each(data.query_results, function(store) {

                // Get store data
                let s = {
                    state: store.MAIL_ST_PROV_C,
                    long: am4core.type.toNumber(store.LNGTD_I),
                    lat: am4core.type.toNumber(store.LATTD_I),
                    location: store.co_loc_n,
                    city: store.mail_city_n,
                    count: am4core.type.toNumber(store.count)
                };

                // Process state-level data
                if (regionalSeries[s.state] == undefined) {
                    let statePolygon = polygonSeries.getPolygonById("US-" + s.state);
                    if (statePolygon) {

                        // Add state data
                        regionalSeries[s.state] = {
                            target: s.state,
                            type: "state",
                            name: statePolygon.dataItem.dataContext.name,
                            count: s.count,
                            stores: 1,
                            lat: statePolygon.visualLatitude,
                            long: statePolygon.visualLongitude,
                            state: s.state,
                            markerData: []
                        };
                        regionalSeries.US.markerData.push(regionalSeries[s.state]);

                    }
                    else {
                        // State not found
                        return;
                    }
                }
                else {
                    regionalSeries[s.state].stores++;
                    regionalSeries[s.state].count += s.count;
                }

                // Process city-level data
                if (regionalSeries[s.city] == undefined) {
                    regionalSeries[s.city] = {
                        target: s.city,
                        type: "city",
                        name: s.city,
                        count: s.count,
                        stores: 1,
                        lat: s.lat,
                        long: s.long,
                        state: s.state,
                        markerData: []
                    };
                    regionalSeries[s.state].markerData.push(regionalSeries[s.city]);
                }
                else {
                    regionalSeries[s.city].stores++;
                    regionalSeries[s.city].count += store.count;
                }

                // Process individual store
                regionalSeries[s.city].markerData.push({
                    name: s.location,
                    count: s.count,
                    stores: 1,
                    lat: s.lat,
                    long: s.long,
                    state: s.state
                });

            });

            regionalSeries.US.series.data = regionalSeries.US.markerData;
        }
    }, [elementId]);

    return (
        <Paper elevation={3} style={{ padding: 24 }}>
            <Typography variant="h4" color="textSecondary" style={{ marginBottom: 16 }}>
                {title}
            </Typography>
            <div id={elementId} style={{ 'height': 500 }}></div>
        </Paper>
    );
}