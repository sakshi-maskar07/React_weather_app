const baseURL= "https://api.weatherapi.com/v1/current.json?key=f0f82cb42726417c91d140343252412";

export const getweatherDataForCity = async(city) =>{
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
  return  await response .json();
};

export const getweatherDataForLocation = async(lat,lon) =>{
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
  return  await response .json();
};