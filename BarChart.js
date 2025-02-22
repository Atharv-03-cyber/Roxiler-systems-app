import React, { useEffect, useState } from 'react';
import { fetchBarChartData } from '../services/api';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

const BarChart = ({ month }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBarChartData(month);
        setChartData(data);
      } catch (error) {
        console.error('Error fetching bar chart data', error);
      }
    };

    fetchData();
  }, [month]);

  const data = {
    labels: ['0-100', '101-200', '201-300', '301-400', '401-500', '501-600', '601-700', '701-800', '801-900', '901-above'],
    datasets: [
      {
        label: 'Items Sold',
        data: chartData.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };
  
  return <Bar data={data} />;
};

export default BarChart;
