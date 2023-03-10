import React from 'react'
import { countryIcon } from '../assets'
import MenuIcon from '@mui/icons-material/Menu';
import BedIcon from '@mui/icons-material/Bed';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PublicIcon from '@mui/icons-material/Public';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttractionsIcon from '@mui/icons-material/Attractions';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


const Navbar = () => {

  return (
    <header id="header" className="bg-blue-800 w-full flex justify-center items-center pb-5">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className="font-bold text-lg text-white block py-6">KAP.</a>
          </div>
          <div className="flex items-center px-4 gap-6">
            {/* Currency */}
            <div className='hidden md:flex font-semibold text-base text-white cursor-pointer'>USD</div>
            {/* lang */}
            <img src={countryIcon} alt="" className='hidden md:flex rounded-full w-8 h-8 cursor-pointer' />
            {/* Help */}
            <div className='hidden md:flex border border-white rounded-full w-6 h-6 items-center justify-center text-white cursor-pointer'>?</div>
            {/* Darkmode toggle */}
            <button className='hidden md:flex w-6 h-6 items-center justify-center text-white'>
              <DarkModeOutlinedIcon />
            </button>
            {/* Auth Button */}
            <button type='button' className='hidden md:flex bg-white text-primary px-4 py-2 rounded-md font-semibold'>Sign in</button>
            {/* Mobile menu button */}
            <button type='button' className="md:hidden text-white">
              <MenuIcon />
            </button>
          </div>
        </div>
        <div className="flex items-center px-4">
          {/* Nav menu */}
          <nav id="nav-menu" className="w-full flex gap-2 overflow-x-auto">
            <a href="#home" className="flex items-center gap-1 nav-menu__link text-white border-b-2 border-white px-4 py-1 whitespace-nowrap">
              <BedIcon /> Stays
            </a>
            <a href="#home" className="flex items-center gap-1 nav-menu__link text-white px-4 py-2 whitespace-nowrap">
              <FlightTakeoffIcon /> Flights
            </a>
            <a href="#home" className="flex items-center gap-1 nav-menu__link text-white px-4 py-2 whitespace-nowrap">
              <PublicIcon /> Flight + Hotel
            </a>
            <a href="#home" className="flex items-center gap-1 nav-menu__link text-white px-4 py-2 whitespace-nowrap">
              <DirectionsCarIcon /> Car Rentals
            </a>
            <a href="#home" className="flex items-center gap-1 nav-menu__link text-white px-4 py-2 whitespace-nowrap">
              <AttractionsIcon /> Attractions
            </a>       
            <a href="#home" className="flex items-center gap-1 nav-menu__link text-white px-4 py-2 whitespace-nowrap">
              <DirectionsCarIcon /> Airport taxis
            </a>       
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar