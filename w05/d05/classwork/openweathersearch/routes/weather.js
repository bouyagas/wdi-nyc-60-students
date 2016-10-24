const router = require('express').Router();
const { findWeatherByCity } = require('../services/weather');
const icons = require('../weather-icons');

// what we define as our route is only what comes after '/weather'
router.get('/city', findWeatherByCity, (req, res) => {
  let icon = icons[res.weather.weather[0].main.toLowerCase()];
  console.log(res.weather);
  // send to our weather to view
  res.render('weather', {
    weather: res.weather,
    icon
  });
});

module.exports = router;
