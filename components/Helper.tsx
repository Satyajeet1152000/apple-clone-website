'use client'

import React, { useEffect, useState } from 'react'

const Helper = () => {
    const [dim, setDim] = useState({ width: window.innerWidth, height: window.innerHeight })
    useEffect(() => {
        const updateDim = () => {
            setDim({ width: window.innerWidth, height: window.innerHeight })
        };

        updateDim();
        window.addEventListener('resize', updateDim);

        return () => {
            window.removeEventListener('resize', updateDim);
        };
    }, []);

    return (
        <div className='fixed z-20 flex-center flex-col top-[50vh] left-10 bg-white border-2 border-sky-700 p-1 gap-1'>
            <div className='flex-center gap-1 text-center'>
                <div className='border-2 border-sky-700 p-1'>
                    <h1>width</h1>
                    <h1 className='font-semibold'>{dim.width}</h1>
                </div>
                <div className='border-2 border-sky-700 p-1'>
                    <h1>height</h1>
                    <h1 className='font-semibold'>{dim.height}</h1>
                </div>
            </div>
            <div className='border-2 border-sky-700 w-full text-center font-bold sm:text-red-500 md:text-green-500 lg:text-blue xl:text-purple-600 2xl:text-indigo-700'>
                {
                    dim.width >= 1536 ? "2xl" : dim.width >= 1280 ? "xl" : dim.width >= 1024 ? "lg" : dim.width >= 768 ? "md" : dim.width >= 640 ? "sm" : "xsm"
                }
            </div>
        </div>
    )
}

export default Helper