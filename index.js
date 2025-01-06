require('dotenv').config();
let port = process.env.PORT || 3001;

const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const { app, server } = require("./socket/index");

// app.use(cors({
//      origin: 'https://real-time-chat-frontend-chi.vercel.app'
// }));
app.use(cors());

app.use(express.json());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


//IMPORT THE MONGODB CONNECTION FILE FROM UTILS FOLDER
const GetConnection = require("./utils/GetConnection");

// call the connect function
GetConnection();


// ===================================> IMAGE UPLOAD APIS <=================================== //

const imageRoutes = require('./routes/image');
app.use('/image', imageRoutes);


// ===================================> USER AUTHENTICATION APIS <=================================== //

const userRoute = require('./routes/User');
app.use("/user", userRoute);

server.listen(port, () => {

     console.log(`server is running on port ${port}`);

});

