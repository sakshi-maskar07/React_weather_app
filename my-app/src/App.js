import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./Context/Weather";

function App() {
  const Weather = useWeather();

  useEffect(() => {
    Weather.fetchCurrentUserLocationData();
  }, []);

  const condition =
    Weather?.Data?.current?.condition?.text
      ?.toLowerCase()
      ?.replace(/\s+/g, "");

  console.log("CSS CLASS:", condition); // DEBUG

  return (
    <div className={`App ${condition}`}>
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={Weather.fetchData} value="Search" />
      <Card />
      <Button
        onClick={Weather.fetchCurrentUserLocationData}
        value="Refresh"
      />
    </div>
  );
}

export default App;



