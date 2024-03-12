import { data } from 'autoprefixer';
import React, { useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)


const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

const [chartOptions, setChartOptions] = useState({});

useEffect(() => {
    setChartData({
        labels: [],
        datasets: [
            {
                label: ['Jul','Jul','Jul','Jul','Jul'],
                data: [300000000,200000000,100000000,0],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235, 0.4)',
            },
        ]
    })
}, [])



  return (
        <>
            <div className="max-w-7xl mx-auto relative lg:h-[300px] h-[250px] p-4 rounded-lg">
                <Bar data={chartData} options={chartOptions} />    
            </div>        
        </>
  )
}

export default BarChart
