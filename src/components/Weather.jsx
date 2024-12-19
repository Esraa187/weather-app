import React, { useContext } from 'react';
import WeatherDetailsCity from './WeatherDetailsCity';
import Forecast from './Forecast';
import DetailedForecast from './DetailedForecast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WeatherContext } from '../context/WeatherContext';

function Weather() {
    const {
        weatherData,
        forecastData,
        city,
        setCity,
        loading,
        error,
        fetchWeather,
    } = useContext(WeatherContext);

    return (
        <div className="container">
            <ToastContainer />
            <div className="search-engine">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && fetchWeather(city)}
                />
                <button onClick={() => fetchWeather(city)}>
                    <i className="fas fa-search" style={{ fontSize: "18px" }}></i>
                </button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}

            <div className="row gap-5">
                <div className="col-lg-7">
                    {!loading && !error && weatherData && (
                        <WeatherDetailsCity weatherData={weatherData} />
                    )}
                </div>
                <div className="col-lg-4">
                    {!loading && !error && forecastData.length > 0 && (
                        <Forecast forecastData={forecastData} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Weather;
