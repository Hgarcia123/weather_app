import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import WeatherBackCard from "./weatherBackCard";

const WeatherCard = ({ weather, cityInfo }) => {
  const icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const city = cityInfo;
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      {Math.round(weather.main.temp) + "ºC"}
                    </Typography>
                    <img alt="WeatherIcon" src={icon}></img>
                    <Typography variant="body2">
                      {capitalize(weather.weather[0].description)}
                    </Typography>
                    <Typography sx={{ fontSize: 10 }}>
                      {weather.dt_txt}
                    </Typography>
                    <Link to='/more'>More</Link>
                  </CardContent>
                </Card>
              </>
            }
          />
          <Route path="/more" element={<WeatherBackCard weather={weather} cityInfo={city}/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default WeatherCard;
