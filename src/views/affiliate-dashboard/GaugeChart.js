import React from 'react'
import ReactApexChart from 'react-apexcharts'

const GaugeChart = ({ value }) => {
    const options = {
        chart: {
            type: 'radialBar',
            offsetY: 0,
            offsetX: 0,
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '10px',
                        color: "black",
                        offsetY: 20,
                    },
                    value: {
                        offsetY: -10,
                        fontSize: '20px',
                        color: undefined,
                        formatter: function (val) {
                            return val + '%'
                        },
                    },
                },
            },
        },
        fill: {
            type: 'solid',
            color: ['#2196F3']
        },
        labels: ['Lead Conversion'],
    }

    const series = [value]

    return (
        <div id="chart" className='' style={{ width: "260px" }}>
            <ReactApexChart
                options={options}
                series={series}
                type="radialBar"
            />
        </div>
    )
}

export default GaugeChart
