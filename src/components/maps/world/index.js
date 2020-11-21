import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_data_countries2 from "@amcharts/amcharts4-geodata/data/countries2";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React, { useEffect } from 'react';


am4core.useTheme(am4themes_animated);

export default function WorldMap(props) {
    const {
              elementId,
              title
          } = props;

    useEffect(() => {
        let continents = {
            "AF": 0,
            "AN": 1,
            "AS": 2,
            "EU": 3,
            "NA": 4,
            "OC": 5,
            "SA": 6
        }

        // Create map instance
        let chart = am4core.create(elementId, am4maps.MapChart);
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series for world map
        let worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
        worldSeries.useGeodata = true;
        worldSeries.geodata = am4geodata_worldLow;
        worldSeries.exclude = ["AQ"];

        let worldPolygon = worldSeries.mapPolygons.template;
        worldPolygon.tooltipText = "{name}";
        worldPolygon.nonScalingStroke = true;
        worldPolygon.strokeOpacity = 0.5;
        worldPolygon.fill = am4core.color("#eee");
        worldPolygon.propertyFields.fill = "color";

        let hs = worldPolygon.states.create("hover");
        hs.properties.fill = chart.colors.getIndex(9);


        // Create country specific series (but hide it for now)
        let countrySeries = chart.series.push(new am4maps.MapPolygonSeries());
        countrySeries.useGeodata = true;
        countrySeries.hide();
        countrySeries.geodataSource.events.on("done", function(ev) {
            worldSeries.hide();
            countrySeries.show();
        });

        let countryPolygon = countrySeries.mapPolygons.template;
        countryPolygon.tooltipText = "{name}";
        countryPolygon.nonScalingStroke = true;
        countryPolygon.strokeOpacity = 0.5;
        countryPolygon.fill = am4core.color("#eee");

        let chs = countryPolygon.states.create("hover");
        chs.properties.fill = chart.colors.getIndex(9);

        // Set up click events
        worldPolygon.events.on("hit", function(ev) {
            ev.target.series.chart.zoomToMapObject(ev.target);
            let map = ev.target.dataItem.dataContext.map;
            if (map) {
                ev.target.isHover = false;
                countrySeries.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + map + ".json";
                countrySeries.geodataSource.load();
            }
        });

        // Set up data for countries
        let data = [];
        for(var id in am4geodata_data_countries2) {
            if (am4geodata_data_countries2.hasOwnProperty(id)) {
                let country = am4geodata_data_countries2[id];
                if (country.maps.length) {
                    data.push({
                        id: id,
                        color: chart.colors.getIndex(continents[country.continent_code]),
                        map: country.maps[0]
                    });
                }
            }
        }
        worldSeries.data = data;

        // Zoom control
        chart.zoomControl = new am4maps.ZoomControl();

        let homeButton = new am4core.Button();
        homeButton.events.on("hit", function() {
            worldSeries.show();
            countrySeries.hide();
            chart.goHome();
        });

        homeButton.icon = new am4core.Sprite();
        homeButton.padding(7, 5, 7, 5);
        homeButton.width = 30;
        homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
        homeButton.marginBottom = 10;
        homeButton.parent = chart.zoomControl;
        homeButton.insertBefore(chart.zoomControl.plusButton);
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