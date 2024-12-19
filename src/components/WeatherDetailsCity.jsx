import React from 'react'
import './weather.css'
import { allIcons } from './Icons'

function WeatherDetailsCity({weatherData}) {
    
    return (
        <div>
            <div className="row align-items-center text-light mb-5">
                <div className='col-6 d-flex flex-column gap-4'>
                    <div>
                        <h1>{weatherData?.name}</h1>
                        <p>{weatherData?.weather[0].description}</p>
                    </div>
                    <h1>{weatherData?.main?.temp} °C</h1>
                </div>
                <div className='col-6'>
                    <img src={allIcons[weatherData?.weather[0].icon]|| clear_Icon} alt="" className='img-fluid'/>
                </div>
            </div>

            <div className='row align-items-center text-light p-4  air-conditins'>
                <div className='col-6 d-flex flex-column gap-5'>
                    <div>
                        <p>Real Feel</p>
                        <h2>{weatherData?.main?.feels_like} °C</h2>
                    </div>
                    <div>
                        <p>Chance of rain</p>
                        <h2>{weatherData?.rain ? `${weatherData.rain["1h"] || 0} mm` : "0%"}</h2>
                    </div>
                </div>
                <div className='col-6 d-flex flex-column gap-5'>
                    <div>
                        <p>Wind</p>
                        <h2>{weatherData?.wind?.speed} km/h</h2>
                    </div>
                    <div>
                        <p>Humidity</p>
                        <h2>{weatherData?.main?.humidity}%</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetailsCity
