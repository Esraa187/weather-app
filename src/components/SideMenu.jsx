import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdFormatListBulleted } from "react-icons/md";
import { FaMap } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import './sidebar.css';
import { Link } from 'react-router-dom';
function SideMenu() {
    return (
        <div className='side'>
            <p className='wind'><FaWind /></p>
            <Link className="menu-item" to='/'>
                <TiWeatherPartlySunny className='menu-icon' />
                <p>Weather</p>
            </Link>
            <Link className="menu-item" to='/details'>
                <MdFormatListBulleted className='menu-icon' />
                <p>Details</p>
            </Link>
            <a className="menu-item">
                <FaMap className='menu-icon' />
                <p>Map</p>
            </a>
            <a className="menu-item">
                <IoSettingsSharp className='menu-icon' />
                <p>Settings</p>
            </a>
        </div>
    )
}

export default SideMenu
