import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WetherApp(){
    const [wetherInfo,setWetherInfo] = useState({
        city: "Jamshedour",
        feelslike: 24.84,
        temp: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    })
    let updateInfo = (newInfo)=>{
        setWetherInfo(newInfo);
    }
    return(
        <div>
            <h2>Wether app </h2>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info = {wetherInfo} />
        </div>
    )
}