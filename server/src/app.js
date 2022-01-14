const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
const routes = require('./routes');
app.use(config.basePath, routes);

const connectDB = () => {
    const options = { keepAlive: 1, useNewUrlParser: true };
    mongoose.connect(config.dbUrl, options);

    return mongoose.connection;
}

const connection = connectDB();

connection
    .on('error', console.log)
    .on('disconnected', connectDB)
    .once('open', () => {
        console.log(`MongoDB server connected.`);
    });


app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
});