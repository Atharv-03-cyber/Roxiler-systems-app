const axios = require('axios');
const mongoose = require('mongoose');
const Transaction = require('../models/transactionModel'); // Assuming you have a model for the transactions

// MongoDB URI from .env or directly (ensure MongoDB is running)
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/transactionDB';

// Fetch JSON data from the given URL and store it in the database
const fetchDataAndInitialize = async () => {
  try {
    // Fetch data from the given URL
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const transactions = response.data;

    // Connect to MongoDB
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    // Insert data into the database
    await Transaction.insertMany(transactions);

    console.log('Database initialized with transaction data!');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

fetchDataAndInitialize();
