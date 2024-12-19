import { useEffect, useState } from 'react';
import './App.css'
import SideMenu from './components/SideMenu'
import Weather from './components/Weather'
import { Route, Routes } from 'react-router-dom';
import DetailedForecast from './components/DetailedForecast';
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <button onClick={toggleTheme} className='toggle'>
        {theme === "dark" ? <i className="fa-solid fa-toggle-on"></i> : <i className="fa-solid fa-toggle-off"></i>}
      </button>
      <div className='app'>
        <SideMenu />
        <Routes>
          <Route element={<Weather />} path='/' />
          <Route element={<DetailedForecast />} path='/details' />

        </Routes>
      </div>
    </>
  )
}

export default App
