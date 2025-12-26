import { createContext,useContext,useState} from "react";
import {getweatherDataForCity,getweatherDataForLocation} from'../api';

export const WeatherContext = createContext(null);
export const useWeather = () => {
      return useContext (WeatherContext);
};

export const WeatherProvider = (props) =>{
      const [Data,setData] = useState(null);
      const[SearchCity,setSearchCity] = useState(null);

      const fetchData = async () =>{
         const response = await getweatherDataForCity(SearchCity)
         setData(response);
      };

      const fetchCurrentUserLocationData = () => {
            navigator.geolocation.getCurrentPosition((postion)=>{
              getweatherDataForLocation(
                  postion.coords.latitude,
                  postion.coords.longitude
            ).then((Data)=>setData(Data));
      });
      };
      
      return(
            <WeatherContext.Provider value={{SearchCity,Data,setSearchCity,fetchData,fetchCurrentUserLocationData}}>
                  {props.children}
            </WeatherContext.Provider>
      )
};