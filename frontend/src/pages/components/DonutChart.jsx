import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
)

function App() {
    const data = {
        labels: ['Yes', 'No'],
        datasets: [{
            label:'Poll'
        }]
    }
}

const DonutChart = () => {
  return (
    <div>
        <DonutChart
        data = {data}
        options = {options}
        ></DonutChart>
    </div>
  )
}

export default DonutChart
