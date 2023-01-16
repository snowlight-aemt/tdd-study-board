const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8000);

module.exports = app;