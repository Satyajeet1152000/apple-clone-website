'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { appleImg, bagImg, searchImg } from '../../utils'
import { navLists } from '../../constants'
import Link from 'next/link'
import SubNav from './SubNav'

const Navbar = () => {
    const [linkHover, setLinkHover] = useState({hoverStatus: false, navSubData: {}})

    return (
        <header className=' w-full py-3 sm:px-10 px-5 flex flex-col justify-between items-center bg-[#131315af] backdrop-blur-md gap-y-8 fixed top-0 z-10'
        onMouseLeave={()=> setLinkHover({hoverStatus: false, navSubData: {}})}
        id='navbar'
        >
            <nav className=' flex w-full screen-max-width'>
                <Image src={appleImg} width={14} height={18} alt='Apple' />
                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {
                        navLists.map((nav, i) => (
                            <Link 
                                key={i} 
                                href={nav.main.href}
                                className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all' 
                                onMouseEnter={()=> setLinkHover({hoverStatus: true, navSubData: nav.sub})}
                            >
                                {nav.main.name}
                            </Link>
                        ))
                    }
                </div>

                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <Image src={searchImg} alt='search' width={18} height={18} />
                    <Image src={bagImg} alt='bag' width={18} height={18} />
                </div>
            </nav>
            <SubNav hoverStatus={linkHover.hoverStatus} data={linkHover.navSubData}/>
        </header>
    )
}

export default Navbar