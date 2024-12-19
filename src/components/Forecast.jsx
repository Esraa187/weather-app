import React from 'react';
import './weather.css';
import { allIcons } from './Icons';


function Forecast({ forecastData }) {

  return (
    <div className="h-100 text-light mx-auto forecast">
      <p className='forcact-days ps-3'>5-DAYFORCAST</p>
      <div className="row h-100">
        {forecastData?.map((day, index) => (
          <div key={index}>
            <div className="d-flex align-items-center  justify-content-around" >
              <span>{new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: 'short' })}</span>
              <img
                src={allIcons[day.weather[0].icon]}
                alt={day.weather[0].description}
                className="img-fluid" style={{ width: "60px" }} />
              <span>{day.weather[0].main}</span>
              <span>{Math.round(day.main.temp_max)} °C</span>

            </div>
            <hr />
          </div>
        ))}

      </div>
    </div>
  );
}

export default Forecast;
