const express = require('express');
require('dotenv').config();
const routes = require('./Router/router');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const url = require('./configure');
const cors = require('cors');
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests only from this origin
    optionsSuccessStatus: 200,
    credentials: true
}));
app.use('/', routes);

const server = async() => {
    try {
        await mongoose.connect(url);
        console.log('Database connected');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(`Error connecting to database: ${error}`);
    }
};

server();