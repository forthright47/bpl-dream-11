import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import currency from '../../assets/currency.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = ({coin}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container mx-auto px-4">
            <div className="navbar items-center">
                <div className="navbar-start">
                    <img className='h-14 w-16 md:h-18 md:w-20' src={logo} alt="logo" />
                </div>

                {/* Desktop Menu */}
                <div className="navbar-end hidden md:flex items-center">
                    <ul className="menu menu-horizontal px-1 gap-4 lg:gap-8 text-black/70">
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <div className='flex items-center gap-2 font-medium text-sm ml-6 lg:ml-15'>
                        <button className='btn'>
                            {coin} Coins
                            <img src={currency} alt="currency" />
                        </button>
                    </div>
                </div>

                {/* Mobile Right Side */}
                <div className="navbar-end flex md:hidden items-center gap-3">
                    <button className='btn btn-sm'>
                        {coin} Coins
                        <img src={currency} alt="currency" className='w-4' />
                    </button>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen
                            ? <RiCloseLine className='text-2xl' />
                            : <RiMenu3Line className='text-2xl' />
                        }
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md rounded-xl px-6 py-4 mb-4">
                    <ul className="flex flex-col gap-4 text-black/70 font-medium">
                        <li onClick={() => setMenuOpen(false)}>Home</li>
                        <li onClick={() => setMenuOpen(false)}>Fixture</li>
                        <li onClick={() => setMenuOpen(false)}>Teams</li>
                        <li onClick={() => setMenuOpen(false)}>Schedules</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;