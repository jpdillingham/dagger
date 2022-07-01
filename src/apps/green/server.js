const express = require('express')
const app = express()

const reverser = require('reverser');
const calculator = require('calculator');

app.get('/', (req, res) => {
  res.send(reverser.reverse(`1 + 1 = ${calculator.add(1, 1)}`));
})

module.exports = app;