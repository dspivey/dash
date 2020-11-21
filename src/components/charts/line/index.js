import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React, { useEffect } from 'react';


am4core.useTheme(am4themes_animated);

export default function LineChart(props) {
    const {
              elementId,
              title
          } = props;

    useEffect(() => {
        let chart = am4core.create(elementId, am4charts.XYChart);

        // Add data
        chart.data = generateChartData();

        function generateChartData() {
            let chartData = [];
            let firstDate = new Date();
            firstDate.setDate(firstDate.getDate() - 150);

            let visits = -40;
            let b = 0.6;

            for (let i = 0; i < 150; i++) {
                // we create date objects here. In your data, you can have date strings
                // and then set format of your dates using chart.dataDateFormat property,
                // however when possible, use date objects, as this will speed up chart rendering.
                let newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);
                if (i > 80) {
                    b = 0.4;
                }
                visits +=
                    Math.round((
                                   Math.random() < b ? 1 : -1
                               ) * Math.random() * 10);

                chartData.push({
                    date: newDate,
                    visits: visits
                });
            }

            return chartData;
        }

        // Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.startLocation = 0.5;
        dateAxis.endLocation = 0.5;

        // Create value axis
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = 'visits';
        series.dataFields.dateX = 'date';
        series.strokeWidth = 3;
        series.tooltipText = '{valueY.value}';
        series.fillOpacity = 0.1;
        series.tensionX = 0.75;

        // Create a range to change stroke for values below 0
        let range = valueAxis.createSeriesRange(series);
        range.value = 0;
        range.endValue = -1000;
        range.contents.stroke = chart.colors.getIndex(4);
        range.contents.fill = range.contents.stroke;
        range.contents.strokeOpacity = 0.7;
        range.contents.fillOpacity = 0.1;

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.xAxis = dateAxis;
        chart.scrollbarX = new am4core.Scrollbar();

        series.tooltip.getFillFromObject = false;
        series.tooltip.adapter.add('x', (x, target) => {
            if (series.tooltip.tooltipDataItem.valueY < 0) {
                series.tooltip.background.fill = chart.colors.getIndex(4);
            } else {
                series.tooltip.background.fill = chart.colors.getIndex(0);
            }
            return x;
        });
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