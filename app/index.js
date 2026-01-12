
const express = require('express')
const _ = require('lodash')
const app = express()

app.get('/', (req, res) => {
  res.send("Hello DevSecOps")
})

app.get('/user', (req, res) => {
  eval(req.query.name)   // ❌ intentional vulnerability
  res.send("User processed")
})

app.listen(3000, () => {
  console.log("App running on port 3000")
})

