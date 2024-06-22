'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { appleImg, bagImg, searchImg } from '../../utils'
import { navLists } from '../../constants'
import Link from 'next/link'
import SubNav from './SubNav'

const Navbar = () => {
    
    const [mobileNav, setMobileNav] = useState(true)

    useEffect(() => {
        if (!mobileNav) {
            document.body.style.overflow = "hidden"
            document.body.style.overflowX = "hidden"
        }
        else {
            document.body.style.overflow = "auto"
            document.body.style.overflowX = "hidden"
        }
    }, [mobileNav])



    return (
        <header className={`w-full fixed top-0 z-10 bg-black text-gray-200`}
            id='navbar'
        >
            <nav className='w-full py-3 px-5 h-full flex items-center justify-between xl:justify-center gap-5 xl:gap-20 2xl:gap-28'>
                <a href="/">
                    <Image src={appleImg} width={14} height={18} alt='Apple' />
                </a>
                <div className='hidden lg:flex-center md:gap-3 xl:gap-5 2xl:gap-10'>
                    {
                        navLists.map((nav, i) => (
                            <Link
                                key={i}
                                href={nav.main.href}
                                className='cursor-pointer hover:text-white hover:scale-105 transition-all'
                            >
                                {nav.main.name}
                            </Link>
                        ))
                    }
                </div>

                <div className='flex-center items-baseline gap-5'>
                    <Image src={searchImg} alt='search' width={18} height={18} />
                    <Image src={bagImg} alt='bag' width={18} height={18} />
                    <div className='w-6 lg:hidden flex-center flex-col h-[70%] gap-2 hover:cursor-pointer relative' onClick={() => setMobileNav(!mobileNav)}>
                        {mobileNav ? 
                            <>
                                <div className='border w-full border-white'></div>
                                <div className='border w-full border-white'></div>
                            </>
                            :
                            <>
                                <div className='border w-full border-white rotate-45 absolute'></div>
                                <div className='border w-full border-white -rotate-45 absolute'></div>
                            </>
                        }


                    </div>
                </div>
            </nav>
            <div className={` ${mobileNav?"hidden": "flex"} items-center py-5 gap-5 lg:hidden flex-col h-[100vh] text-3xl backdrop-blur-md`}>
                {
                    navLists.map((nav, i) => (
                        <Link
                            key={i}
                            href={nav.main.href}
                            className='cursor-pointer  hover:text-white hover:scale-105 transition-all'
                            onClick={()=>setMobileNav(true)}
                        >
                            {nav.main.name}
                        </Link>
                    ))
                }
            </div>
        </header>
    )
}

export default Navbar