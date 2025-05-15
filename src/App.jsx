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
      <div className='relative w-100 con'>
        <button onClick={toggleTheme} className={`toggle ${theme === "dark" ? "darkBtn" : ""}`}>
          {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
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
