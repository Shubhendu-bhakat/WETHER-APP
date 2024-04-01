import "./SearchBox.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [Error , setError ] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "56bd596da7644011e38abedd95470299";

  let getWetherInfo = async () => {
    try{
      setError(false);
      let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponce = await res.json();
      console.log(jsonResponce);
      let result = {
        city: city,
        temp: jsonResponce.main.temp,
        tempMin: jsonResponce.main.temp_min,
        tempMax: jsonResponce.main.temp_max,
        humidity: jsonResponce.main.humidity,
        feelsLike: jsonResponce.main.feels_like,
        weather: jsonResponce.weather[0].description,
      };
      console.log(result);
      return result;
    }
    catch(er){
      throw er;
    }
  };

  let handelOnChange = (event) => {
    setCity(event.target.value);
  };
  let handelSubmit = async (event) => {
    try{

      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWetherInfo();
      updateInfo(newInfo);
    }catch(er){
      setError(true);
    }
  };
  return (
    <div className="searchBox">
      <form action="" onSubmit={handelSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handelOnChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          search
        </Button>
        {Error && <p style={{color:"red"}}>No such places existes </p> }
      </form>
    </div>
  );
}
