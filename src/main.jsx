import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 4
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import WeatherProvider from './context/WeatherContext';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </BrowserRouter>
  </StrictMode>,
)