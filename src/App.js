import "./App.css";
import WeatherCards from "./Components/weatherCards";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import $ from "jquery";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const App = () => {
  const [weather, setWeather] = useState({});
  const [country, setCountry] = useState("PT");
  const [region, setRegion] = useState("Lisboa");
  const [time, setTime] = useState(0);

  const fetchWeather = async () => {
    console.log(country);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ regionReq: `${region}`, countryReq: `${country}`})
    };

    return await fetch(
      `http://localhost:8000/weather`, 
      requestOptions
    )
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error("Error!", error);
      });
  };

  useEffect(() => {
    const getWeather = async () => {
      const weatherApi = await fetchWeather();
      setWeather(weatherApi);
    };
    getWeather();

    const interval = setInterval(() => {
      setTime(time + 1);
    }, 350000);
    return () => clearInterval(interval);
  }, [time, region]);

  return (
    <div className="App">
      <header>
        <h1 className="Title">WeatherApp</h1>
      </header>
      <h2 className="SubTitle">5 Day Forecast</h2>
      <h3 className="SelectRegion">Select a region: </h3>
      <div>
        <CountryDropdown
          valueType="short"
          value={country}
          onChange={(val) => setCountry(val)}
        />
        <RegionDropdown
          countryValueType="short"
          country={country}
          value={region}
          onChange={(val) => setRegion(val)}
        />
      </div>
      <div className="Main">
        {$.isEmptyObject(weather) ? (
          <Oval className="Loader" secondaryColor="green"></Oval>
        ) : (
          <WeatherCards weather={weather} />
        )}
      </div>
    </div>
  );
};

export default App;
