import React from 'react'
// import { Chart } from 'react-chartjs-2'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";

export const PieChart = ({chartData}) => {
 
  return (
    <Pie data={chartData} />
  )
}
