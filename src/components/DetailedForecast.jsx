import React, { useContext } from 'react';
import './weather.css';
import { allIcons } from './Icons';
import { WeatherContext } from '../context/WeatherContext';

function DetailedForecast() {
    const { forecastData, loading, error } = useContext(WeatherContext);

    if (loading) return <p className="loading-message text-light">Loading detailed forecast...</p>;
    if (error) return <p className="error-message text-light">{error}</p>;
    if (!forecastData.length) return null;

    return (
        <div className="container text-light">
            <h3 className="text-center mb-4">Detailed Forecast</h3>
            <div className="row gap-4 justify-content-center">
                {forecastData.map((item, index) => (
                    <div key={index} className="col-lg-2 col-md-4 col-sm-6 forecast-card ">
                        <div className="card py-3 text-center">
                            <p className="date fw-bold mb-2">
                                {new Date(item.dt * 1000).toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    month: 'short',
                                    day: 'numeric',
                                })}
                            </p>
                            <img
                                src={allIcons[item.weather[0].icon]}
                                alt={item.weather[0].description}
                                className="weather-icon mx-auto mb-2"
                            />
                            <p className="description text-capitalize mb-3">
                                {item.weather[0].description}
                            </p>
                            <div className="temperature mb-3">
                                <span className="d-block">High: {Math.round(item.main.temp_max)}°C</span>
                                <span className="d-block">Low: {Math.round(item.main.temp_min)}°C</span>
                            </div>
                            <div className="additional-info">
                                <p className="mb-1">Wind: {item.wind.speed} km/h</p>
                                <p className="mb-1">Humidity: {item.main.humidity}%</p>
                                <p>Pressure: {item.main.pressure} hPa</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DetailedForecast;
