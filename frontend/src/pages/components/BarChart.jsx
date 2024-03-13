import React from 'react'
import { useState, useEffect } from "react"
import { Bar } from "react-chartjs-2";
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

Chartjs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)



const BarChart = () => {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Jul', 'Jul', 'Jul', 'Jul', 'Jul', 'Jul', 'Jul',],
            datasets: [
                {
                    data: [3000000,2000000,1000000,0],
                    borderColor: 'rgb(102, 204, 153)',
                    backgroundColor: 'rgb(135, 211, 124)'
                },
                {
                    data: [2000000,2000000,2000000,0],
                    borderColor: 'rgb(102, 204, 153)',
                    backgroundColor: 'rgb(242, 120, 75)'
                },
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Income - Expense"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

  return (
        <>
            <div className='w-[450px] h-[300px] items-center'>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
  )
}

export default BarChart

