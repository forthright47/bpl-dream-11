import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className='bg-[#0d0d1a] text-white pt-36 md:pt-40'>
            {/* Logo */}
            <div className='flex justify-center py-8 md:py-10'>
                <img src={logo} alt='Cricket Logo' className='w-16 md:w-24' />
            </div>

            {/* Grid */}
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10 px-6'>

                {/* About Us */}
                <div>
                    <h3 className='font-bold text-lg mb-4'>About Us</h3>
                    <p className='text-white/60 text-sm leading-relaxed'>
                        We are a passionate team dedicated to providing the best services to our customers.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className='font-bold text-lg mb-4'>Quick Links</h3>
                    <ul className='text-white/60 text-sm space-y-2'>
                        <li className='flex items-center gap-2'><span>▪</span> Home</li>
                        <li className='flex items-center gap-2'><span>▪</span> Services</li>
                        <li className='flex items-center gap-2'><span>▪</span> About</li>
                        <li className='flex items-center gap-2'><span>▪</span> Contact</li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div className='sm:col-span-2 md:col-span-1'>
                    <h3 className='font-bold text-lg mb-4'>Subscribe</h3>
                    <p className='text-white/60 text-sm mb-4'>
                        Subscribe to our newsletter for the latest updates.
                    </p>
                    <div className='flex'>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='bg-white text-black px-4 py-2 rounded-l-full w-full outline-none text-sm'
                        />
                        <button className='bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold px-4 md:px-5 py-2 rounded-r-full text-sm whitespace-nowrap'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-t border-white/10 text-center py-5 text-white/50 text-xs md:text-sm px-4'>
                @2024 Your Company All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;