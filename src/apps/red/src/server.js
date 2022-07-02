const express = require('express')
const app = express()

const calculator = require('calculator');

app.get('/', (req, res) => {
  res.send(`1 + 1 = ${calculator.add(1, 1)}`);
})

module.exports = app;