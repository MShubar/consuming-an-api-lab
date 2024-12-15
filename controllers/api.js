const axios = require("axios")

const getWeatherPage = (req, res) => {
  res.render("index")
}

const getWeather = async (req, res) => {
  const zipCode = req.body.zipCode
  const apiKey = process.env.API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`

  try {
    const response = await axios.get(url)
    const weatherData = response.data

    res.render("weather/show", {
      city: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
    })
  } catch (error) {
    res.send("Error retrieving weather data.")
  }
}

module.exports = { getWeatherPage, getWeather }
