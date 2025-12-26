import React from "react";
import { useWeather } from "../Context/Weather";

const Input = () => {
      const Weather = useWeather();

      return(
            <input  className ="input-field"
            placeholder="Search here"
            value= {Weather.SearchCity} 
            onChange ={(e) => Weather.setSearchCity(e.target.value)}/>
      );
};
export default Input;