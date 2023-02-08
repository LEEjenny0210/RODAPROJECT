$(document).ready(function () {
    function chart01() {
        /**
         * ---------------------------------------
         * This demo was created using amCharts 5.
         * 
         * For more information visit:
         * https://www.amcharts.com/
         * 
         * Documentation is available at:
         * https://www.amcharts.com/docs/v5/
         * ---------------------------------------
         */

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv");


        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([am5themes_Animated.new(root)]);


        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: false,
                panY: false,
                wheelX: "none",
                wheelY: "none"
            })
        );


        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var yRenderer = am5xy.AxisRendererY.new(root, {
            minGridDistance: 30
        });

        var yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
                maxDeviation: 0,
                categoryField: "country",
                renderer: yRenderer
            })
        );

        var xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 0,
                min: 0,
                renderer: am5xy.AxisRendererX.new(root, {})
            })
        );


        // Create series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        var series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
                name: "Series 1",
                xAxis: xAxis,
                yAxis: yAxis,
                valueXField: "value",
                sequencedInterpolation: true,
                categoryYField: "country"
            })
        );

        var columnTemplate = series.columns.template;

        columnTemplate.setAll({
            draggable: true,
            cursorOverStyle: "pointer",
            tooltipText: "drag to rearrange",
            cornerRadiusBR: 10,
            cornerRadiusTR: 10
        });
        columnTemplate.adapters.add("fill", (fill, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        columnTemplate.adapters.add("stroke", (stroke, target) => {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        columnTemplate.events.on("dragstop", () => {
            sortCategoryAxis();
        });

        // Get series item by category
        function getSeriesItem(category) {
            for (var i = 0; i < series.dataItems.length; i++) {
                var dataItem = series.dataItems[i];
                if (dataItem.get("categoryY") == category) {
                    return dataItem;
                }
            }
        }


        // Axis sorting
        function sortCategoryAxis() {
            // Sort by value
            series.dataItems.sort(function (x, y) {
                return y.get("graphics").y() - x.get("graphics").y();
            });

            var easing = am5.ease.out(am5.ease.cubic);

            // Go through each axis item
            am5.array.each(yAxis.dataItems, function (dataItem) {
                // get corresponding series item
                var seriesDataItem = getSeriesItem(dataItem.get("category"));

                if (seriesDataItem) {
                    // get index of series data item
                    var index = series.dataItems.indexOf(seriesDataItem);

                    var column = seriesDataItem.get("graphics");

                    // position after sorting
                    var fy =
                        yRenderer.positionToCoordinate(yAxis.indexToPosition(index)) -
                        column.height() / 2;

                    // set index to be the same as series data item index
                    if (index != dataItem.get("index")) {
                        dataItem.set("index", index);

                        // current position
                        var x = column.x();
                        var y = column.y();

                        column.set("dy", -(fy - y));
                        column.set("dx", x);

                        column.animate({
                            key: "dy",
                            to: 0,
                            duration: 600,
                            easing: easing
                        });
                        column.animate({
                            key: "dx",
                            to: 0,
                            duration: 600,
                            easing: easing
                        });
                    } else {
                        column.animate({
                            key: "y",
                            to: fy,
                            duration: 600,
                            easing: easing
                        });
                        column.animate({
                            key: "x",
                            to: 0,
                            duration: 600,
                            easing: easing
                        });
                    }
                }
            });

            // Sort axis items by index.
            // This changes the order instantly, but as dx and dy is set and animated,
            // they keep in the same places and then animate to true positions.
            yAxis.dataItems.sort(function (x, y) {
                return x.get("index") - y.get("index");
            });
        }

        // Set data
        var data = [{
            country: "USA",
            value: 2025
        }, {
            country: "China",
            value: 1882
        }, {
            country: "Japan",
            value: 1809
        }, {
            country: "Germany",
            value: 1322
        }, {
            country: "UK",
            value: 1122
        }];

        yAxis.data.setAll(data);
        series.data.setAll(data);
    }
    chart01();


    function chart02() {
        /**
         * ---------------------------------------
         * This demo was created using amCharts 5.
         * 
         * For more information visit:
         * https://www.amcharts.com/
         * 
         * Documentation is available at:
         * https://www.amcharts.com/docs/v5/
         * ---------------------------------------
         */

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv02");

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        var chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                endAngle: 270
            })
        );

        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        var series = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category",
                endAngle: 270
            })
        );

        series.states.create("hidden", {
            endAngle: -90
        });

        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series.data.setAll([{
            category: "Lithuania",
            value: 501.9
        }, {
            category: "Czechia",
            value: 301.9
        }, {
            category: "Ireland",
            value: 201.1
        }, {
            category: "Germany",
            value: 165.8
        }, {
            category: "Australia",
            value: 139.9
        }, {
            category: "Austria",
            value: 128.3
        }, {
            category: "UK",
            value: 99
        }]);

        series.appear(1000, 100);
    }
    chart02();

    function chart03() {
        /**
         * ---------------------------------------
         * This demo was created using amCharts 5.
         * 
         * For more information visit:
         * https://www.amcharts.com/
         * 
         * Documentation is available at:
         * https://www.amcharts.com/docs/v5/
         * ---------------------------------------
         */

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv03");

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create wrapper container
        var container = root.container.children.push(
            am5.Container.new(root, {
                width: am5.percent(100),
                height: am5.percent(100),
                layout: root.verticalLayout
            })
        );

        // Create series
        // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
        var series = container.children.push(
            am5hierarchy.Treemap.new(root, {
                singleBranchOnly: false,
                downDepth: 1,
                upDepth: -1,
                initialDepth: 2,
                valueField: "value",
                categoryField: "name",
                childDataField: "children",
                nodePaddingOuter: 0,
                nodePaddingInner: 0
            })
        );

        series.rectangles.template.setAll({
            strokeWidth: 2
        });

        // Generate and set data
        // https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
        var maxLevels = 2;
        var maxNodes = 10;
        var maxValue = 100;

        var data = {
            name: "Root",
            children: [{
                    name: "First",
                    children: [{
                            name: "A1",
                            value: 100
                        },
                        {
                            name: "A2",
                            value: 60
                        },
                        {
                            name: "A3",
                            value: 30
                        }
                    ]
                },
                {
                    name: "Second",
                    children: [{
                            name: "B1",
                            value: 135
                        },
                        {
                            name: "B2",
                            value: 98
                        },
                        {
                            name: "B3",
                            value: 56
                        }
                    ]
                },
                {
                    name: "Third",
                    children: [{
                            name: "C1",
                            value: 335
                        },
                        {
                            name: "C2",
                            value: 148
                        },
                        {
                            name: "C3",
                            value: 126
                        },
                        {
                            name: "C4",
                            value: 26
                        }
                    ]
                },
                {
                    name: "Fourth",
                    children: [{
                            name: "D1",
                            value: 415
                        },
                        {
                            name: "D2",
                            value: 148
                        },
                        {
                            name: "D3",
                            value: 89
                        },
                        {
                            name: "D4",
                            value: 64
                        },
                        {
                            name: "D5",
                            value: 16
                        }
                    ]
                },
                {
                    name: "Fifth",
                    children: [{
                            name: "E1",
                            value: 687
                        },
                        {
                            name: "E2",
                            value: 148
                        }
                    ]
                }
            ]
        };

        series.data.setAll([data]);
        series.set("selectedDataItem", series.dataItems[0]);

        // Make stuff animate on load
        series.appear(1000, 100);
    }
    chart03();
})