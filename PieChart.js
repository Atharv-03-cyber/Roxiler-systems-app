import React, { useEffect, useState } from 'react';
import { fetchPieChartData } from '../services/api';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, ArcElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, ArcElement, CategoryScale);

const PieChart = ({ month }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPieChartData(month);
        setChartData(data);
      } catch (error) {
        console.error('Error fetching pie chart data', error);
      }
    };

    fetchData();
  }, [month]);

  const data = {
    labels: chartData.map(item => item.category),
    datasets: [
      {
        data: chartData.map(item => item.count),
        backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
