window.initializeCharts = function () {
    const cpuOptions = {
        chart: {
            height: 160,
            width: 160,
            type: "radialBar"
        },
        series: [0],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 20,
                    size: "60%"
                },
                dataLabels: {
                    showOn: "always",
                    name: { show: false },
                    value: {
                        offsetY: 10,
                        color: "#111",
                        fontSize: "20px",
                        show: true
                    }
                }
            }
        },
        stroke: { lineCap: "round" },
        labels: ["CPU Usage"]
    };

    const ramOptions = {
        ...cpuOptions,
        labels: ["RAM Usage"]
    };

    window.chartCPU = new ApexCharts(document.querySelector("#chartCPU"), cpuOptions);
    window.chartRAM = new ApexCharts(document.querySelector("#chartRAM"), ramOptions);

    chartCPU.render();
    chartRAM.render();
};

window.updateCharts = function (cpuUsage, ramUsage) {
    if (window.chartCPU && window.chartRAM) {
        window.chartCPU.updateSeries([cpuUsage]);
        window.chartRAM.updateSeries([ramUsage]);
    }
};