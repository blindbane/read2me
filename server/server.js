const express = require('express');
const app = express();
const api = require('./api');
require('./middleware')(app);


app.use('/api', api)

app.get('/', (req, res) => res.send('Hello World!'))
app.all('*', (req, res) => {
  res.json({api: true})
})

module.exports = app;
