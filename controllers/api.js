const axios = require('axios')

const api = (req, res) => {
  axios({
    method: 'get',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=bahrain&units=imperial&appid=b9e1521ae54f5f4b7933d5d32322b586'
  })
    .then((resp) => {
      res.render('../views/index.ejs', { data: resp.data.Search })
    })
    .catch((err) => {
      console.log(err)
    })
}

const showing = (req, res) => {
  axios({
    method: 'get',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=bahrain&units=imperial&appid=b9e1521ae54f5f4b7933d5d32322b586'
  })
    .then((resp) => {
      res.render('../views/weather/show.ejs', { data: resp.data.Search })
    })
    .catch((err) => {
      console.log(err)
    })
}
module.exports = {
  api,
  showing
}
