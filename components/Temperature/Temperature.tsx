import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  CountryCode,
  Degrees,
  TemperatureComponent,
  WeatherIcon,
} from "./Temperature.styles";

export const Temperature = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayName = days[today.getDay()];

  const url = `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`;

  const defaultState = {
    base: "",
    clouds: { all: 0 },
    cod: 200,
    coord: { lon: 0, lat: 0 },
    dt: 0,
    id: 0,
    main: { temp: 0, feels_like: 0, temp_min: 0, temp_max: 0, pressure: 0 },
    name: "",
    sys: { type: 1, id: 0, country: "DE", sunrise: 0, sunset: 0 },
    timezone: 0,
    visibility: 0,
    weather: [{}],
    wind: { speed: 0, deg: 0 },
  };

  const [state, setState] = useState(defaultState);

  useEffect(() => {
    Axios.get(url).then((response) => setState(response.data));
  }, []);

  return (
    <TemperatureComponent>
      <h2>
        <span
          style={{ marginRight: "10px", fontSize: "34px", fontWeight: "500" }}
        >
          {state.name}
        </span>
        <CountryCode>{state.sys.country}</CountryCode>
      </h2>

      <Degrees>{`${Math.round(state.main.temp)}°`}</Degrees>
      <figure>
        <WeatherIcon
          src={`https://openweathermap.org/img/wn/${state.weather[0]["icon"]}@2x.png`}
          alt="weather-icon"
        />
      </figure>

      <div>
        <h1 style={{ fontSize: "24px", fontWeight: "500" }}>{dayName}</h1>
        <h1 style={{ padding: "15px", fontSize: "25px" }}>
          {new Date().toLocaleDateString()}
        </h1>
      </div>
    </TemperatureComponent>
  );
};
