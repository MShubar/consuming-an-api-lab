const express = require('express')
const app = express()

const ejs = require('ejs')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT
const apiRouter = require('./route/api')

app.use('/', apiRouter)

app.listen(PORT, (req, res) => {
  console.log(`listen on localhost:${PORT}`)
})
