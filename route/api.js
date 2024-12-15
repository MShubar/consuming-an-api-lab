const express = require("express")
const router = express.Router()
const {
  getWeatherPage,
  getWeather,
} = require("../controllers/weatherController")

router.get("/", getWeatherPage)
router.post("/weather", getWeather)

module.exports = router
