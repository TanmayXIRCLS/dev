import React from 'react'
import { Bar } from 'react-chartjs-2'

function greenBg() {
    const array = [20, 40, 60, 80, 100, 80, 60]
    const maxValue = Math.max(...array)

    const bg = array.map(a => (a === maxValue ? "rgb(115, 103, 240)" : "rgba(115, 103, 240,0.16)"))
    return bg
};

const data = {
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            data: [80, 75, 90, 80, 100, 80, 60],
            backgroundColor: greenBg(),
            barThickness: 15,
            borderRadius: 5,
            border: 0,
            borderSkipped: 'bottom'
        }
    ]
}

const chartOptions = {
    maintainAspectRatio: false,
    scales: {
        x: {
            display: true,
            grid: {
                display: false,
                drawBorder: false, // Hide the border
                drawOnChartArea: false
            }
        },
        y: {
            beginAtZero: true,
            display: false,
            grid: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }

}

const DailyBarGraph = () => {
    data.datasets[0].barPercentage = 0.5

    return (
        <div style={{ width: '270px', height: '200px' }}>
            <Bar data={data} width={100} height={65} options={chartOptions} />
        </div>
    )
}

export default DailyBarGraph

