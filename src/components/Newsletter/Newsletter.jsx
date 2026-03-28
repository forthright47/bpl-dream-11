import React from 'react';

const Newsletter = () => {
    return (
        <div className='relative z-10 bg-gradient-to-br from-white via-blue-50 to-orange-100 rounded-2xl text-center py-10 md:py-16 px-4 md:px-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-3'>
                Subscribe to our Newsletter
            </h2>
            <p className='text-gray-500 text-sm md:text-base mb-6 md:mb-8'>
                Get the latest updates and news right in your inbox!
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-0 px-4 md:px-0'>
                <input
                    type='email'
                    placeholder='Enter your email'
                    className='border border-gray-300 sm:rounded-l-full rounded-full sm:rounded-r-none px-6 py-3 w-full sm:w-80 md:w-96 outline-none'
                />
                <button className='bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold px-8 py-3 rounded-full sm:rounded-l-none sm:rounded-r-full'>
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Newsletter;