const PORT = 8000;
const axios = require("axios");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post("/weather", function (req, res) {

  const urlInfo = {
    region: req.body.regionReq,
    country: req.body.countryReq,
  };
  console.log(urlInfo.region);
  
  axios
    .get('http://api.openweathermap.org/data/2.5/forecast', {
      params: {
        q: `${urlInfo.region},${urlInfo.country}`,
        appid: `${process.env.OpenWeather_APIKEY}`,
        units: "metric"
      }
    })
    .then((response) => {
      console.log(response.data.cod)
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});
