import React from 'react';
import logo from '../../assets/logo.png';
import currency from '../../assets/currency.png';

const Navbar = () => {
    return (
        <div className="navbar items-center max-w-11/12 mx-auto">
            <div className="navbar-start">
                <img className='h-18 w-20 ' src={logo} alt="" />
            </div>
            <div className="navbar-end flex items-center">
                <ul className="menu menu-horizontal px-1 gap-8 text-black/70">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <div className='flex items-center gap-2 font-medium text-sm ml-15'>
                    <button className='btn'>
                        0 Coins
                        <img src={currency} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;