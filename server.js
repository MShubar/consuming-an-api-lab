require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const weatherRoutes = require('./route/api')

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Routes
app.use('/', weatherRoutes)

// Start Server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)
