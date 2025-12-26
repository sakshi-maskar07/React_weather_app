import React from "react";
import { useWeather } from "../Context/Weather";

const Card = () => {
      const weather = useWeather();

      return(
            <div className="card">
                  <img src= {weather?.Data?.current?.condition?.icon}/>
                  <h2>{weather.Data?.current?.temp_c}°C</h2>
                  <h5>{weather?.Data?.location?.name} {weather?.Data?.location?.region} {weather.Data?.location?.country}</h5>
            </div>
      )
}
export default Card;