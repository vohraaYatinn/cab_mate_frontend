import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import img from '../assets/ldddgh 1.svg';
import discoundimg from '../assets/discount.png';
import mobileimg from '../assets/download.png';
import travelcarimg from '../assets/schedule.png';
import roadimg from '../assets/road.png';
import { countrydata } from './countrydata';

const Header = () => {
    const isMobile = useMediaQuery('(max-width:1475px)');
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [selected, setSelected] = useState(countrydata[0]); // Default to the first item
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSelect = (item) => {
        setSelected(item);
        setIsDropdownOpen(false);
    };

    return (
        <header className="bg-customDarkBlue text-white">
            {/* Top Header */}
            <div className="flex items-center justify-between px-6 py-2">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <i className="ri-mail-fill"></i>
                        <span>info@cabmate.com</span>
                    </div>
                    <div className="h-4 w-px bg-white"></div>
                    <div className="flex items-center gap-2">
                        <i className="ri-phone-fill"></i>
                        {/* <span>{import.meta.env.VITE_PHONE}</span> */}
                        <span>+91 9525565936</span>
                    </div>
                </div>
                <div className="relative w-48">
                    <div
                        className="flex items-center justify-end gap-2 px-3 py-2  rounded cursor-pointer"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <img
                            src={selected.flag}
                            alt=""
                            className="w-5 h-4 rounded"
                        />
                        <span>
                            {selected.name.slice(0, 3)} ({selected.currency_symbol})
                        </span>
                        <span
                            className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                        >
                            ▼
                        </span>
                    </div>

                    {isDropdownOpen && (
                        <div className="absolute left-0 w-full mt-2 bg-white text-black rounded shadow-lg z-10">
                            {countrydata.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-200 ${selected.name === item.name ? 'bg-gray-300' : ''
                                        }`}
                                    onClick={() => handleSelect(item)}
                                >
                                    <img
                                        src={item.flag}
                                        alt=""
                                        className="w-5 h-4 rounded"
                                    />
                                    <span>
                                        {item.name} ({item.currency_symbol})
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Navbar */}
            <div className="flex  md:flex-row items-center justify-between px-6 py-4 bg-white">
                {/* Logo */}
                <div className="flex sm:flex-row flex-col w-full">
                    <div className="flex flex-row w-full justify-between">
                        <div>
                            <Link to="/">
                                <img src={img} alt="Logo" className="" />
                            </Link>
                        </div>

                        {/* Hamburger Menu */}
                        <button
                            className="block md:hidden px-2 py-1  rounded text-gray-800 text-2xl"
                            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                        >
                            {isNavbarOpen ? 'X' : '☰'}
                        </button>
                    </div>

                    {/* Navbar Center */}
                    <div
                        className={`flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0 text-sm md:text-base ${isMobile && isNavbarOpen ? 'block' : 'hidden md:flex'
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <img src={discoundimg} alt="Special Offers" className="w-6 h-6" />
                            <div className="text-gray-800 w-[130px]">Special Offers</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="border-customLightBlue border rounded-full w-10 flex items-center justify-center h-10 ">
                                <img src={mobileimg} alt="Travel Agent" className="w-6 h-6" />
                            </div>
                            <span className="text-gray-800 w-[130px]">Download App</span>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <div className="border-customLightBlue border rounded-full w-10 flex items-center justify-center h-10 ">
                                <img src={travelcarimg} alt="Travel Agent" className="w-6 h-6" />
                            </div>
                            <span className="text-gray-800 w-[130px]">Travel Agent?</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="border-customLightBlue border rounded-full w-10 flex items-center justify-center h-10 ">
                                <img src={roadimg} alt="Travel Agent" className="w-6 h-6" />
                            </div>
                            <span className="text-gray-800 w-[130px] ">Cab Mate Blog</span>
                        </div>



                        {/* Right Section */}
                        <div className="mt-4 md:mt-0">
                            <button className="px-8 text-sm py-3 w-[200px] bg-[#021D61] hover:bg-blue-400 rounded-full text-white">
                                Login or Signup
                            </button>
                        </div>
                    </div>
                </div>



            </div>


        </header>
    );
};

export default Header;
