import React from 'react';
import cricketLogo from '../../assets/banner-main.png';

const Banner = () => {
    return (
        <div className="banner-bg rounded-2xl text-center py-16 px-6 container mx-auto mt-5">
            <img src={cricketLogo} alt="Cricket" className="w-44 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-3 text-white">
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-6 text-white/60">
                Beyond Boundaries Beyond Limits
            </p>
            <button className="bg-[#d4f536] text-black font-bold px-8 py-3 rounded-lg">
                Claim Free Credit
            </button>
        </div>
    );
};

export default Banner;