import React from "react";
import WeatherCard from "./weatherCard";
import "../index.css";

const weatherCards = ({ weather }) => {
  const getForecast = (weather) => {
    let forecast = [];
    const city = weather.city
    for (let index = 0; index < 40; index += 8) {
      const data = weather.list[index];
      forecast.push(<WeatherCard weather={data} cityInfo={city}></WeatherCard>);
    }
    console.log(forecast);
    
    return forecast;
  };

  return (
    <div className="Hlist">
      <ul>
        {getForecast(weather).map((card, index) => {
          return <li key={index}>{card}</li>;
        })}
      </ul>
    </div>
  );

};

export default weatherCards;
