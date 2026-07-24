import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Enter city name",
        feelsLike: 40.05,
        humidity: 75,
        temp: 33.05,
        tempMax: 35.0,
        tempMin: 30.0,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo((prev) => ({
            ...prev,
            ...newInfo,
        }));
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Gautam Ranwa</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
