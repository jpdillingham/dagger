const express = require('express')
const app = express()

const reverser = require('reverser');

app.get('/', (req, res) => {
  res.send(`hello reversed is ${reverser.reverse('hello')}`);
})

module.exports = app;