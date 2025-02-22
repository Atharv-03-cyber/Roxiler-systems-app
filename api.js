import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Adjust if your backend runs on a different port

// Fetch transactions based on the selected month, search text, page, and per page
export const fetchTransactions = async (month, searchText = '', page = 1, perPage = 10) => {
  try {
    const response = await axios.get(`${API_URL}/transactions`, {
      params: { month, searchText, page, perPage },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions', error);
    throw error;
  }
};

// Fetch transaction statistics for a given month
export const fetchStatistics = async (month) => {
  try {
    const response = await axios.get(`${API_URL}/statistics`, { params: { month } });
    return response.data;
  } catch (error) {
    console.error('Error fetching statistics', error);
    throw error;
  }
};

// Fetch bar chart data (price ranges) for a given month
export const fetchBarChartData = async (month) => {
  try {
    const response = await axios.get(`${API_URL}/bar-chart`, { params: { month } });
    return response.data;
  } catch (error) {
    console.error('Error fetching bar chart data', error);
    throw error;
  }
};

// Fetch pie chart data (categories) for a given month
export const fetchPieChartData = async (month) => {
  try {
    const response = await axios.get(`${API_URL}/pie-chart`, { params: { month } });
    return response.data;
  } catch (error) {
    console.error('Error fetching pie chart data', error);
    throw error;
  }
};
