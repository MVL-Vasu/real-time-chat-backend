require("dotenv").config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

const GetConnection = async () => {

     await mongoose.connect( mongoURI)
          .then(() => {
               console.log('Connected to MongoDB successfully!');
          }).catch((error) => {
               console.error('Error connecting to MongoDB:', error);
          });

}

module.exports = GetConnection;