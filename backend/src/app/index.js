const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('../middleware/errorHandler');
const { corsOptions } = require('../config/corsOptions');

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use('/api', routes);

app.use(errorHandler);

module.exports = app;