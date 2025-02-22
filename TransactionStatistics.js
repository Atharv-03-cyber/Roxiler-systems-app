import React, { useEffect, useState } from 'react';
import { fetchStatistics } from '../services/api';

const TransactionStatistics = ({ month }) => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStatistics(month);
        setStatistics(data);
      } catch (error) {
        console.error('Error fetching statistics', error);
      }
    };

    fetchData();
  }, [month]);

  return (
    <div>
      <h3>Transaction Statistics for {month}</h3>
      <div>Total Sale Amount: ${statistics.totalAmount}</div>
      <div>Total Sold Items: {statistics.soldItems}</div>
      <div>Total Not Sold Items: {statistics.notSoldItems}</div>
    </div>
  );
};

export default TransactionStatistics;
