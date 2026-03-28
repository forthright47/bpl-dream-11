import React from 'react';

const Newsletter = () => {
    return (
        <div className='relative z-10 bg-gradient-to-br from-white via-blue-50 to-orange-100 rounded-2xl text-center py-16 px-6'>
            <h2 className='text-3xl font-bold mb-3'>Subscribe to our Newsletter</h2>
            <p className='text-gray-500 mb-8'>Get the latest updates and news right in your inbox!</p>
            <div className='flex justify-center'>
                <input
                    type='email'
                    placeholder='Enter your email'
                    className='border border-gray-300 rounded-l-full px-6 py-3 w-96 outline-none'
                />
                <button className='bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold px-8 py-3 rounded-r-full'>
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Newsletter;