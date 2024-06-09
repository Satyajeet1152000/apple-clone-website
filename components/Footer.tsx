import { footerLinks } from '@/constants'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' py-5 sm:px-10 px-5'>
        <div className="screen-max-width">
            <div>
                <p className=' font-semibold text-gray text-xs'>
                    More ways to shop: {' '}
                    <span className="underline text-blue">
                        {' '} Find an Apple Store {' '}
                    </span>
                    or
                    <span className="underline text-blue">
                        {' '} other retailer {' '}
                    </span>
                    near you.
                </p>
                <p className=' font-semibold text-gray text-xs'>
                    Or call 000800-040-1946 {' '}
                </p>
            </div>
        </div>
        <div className=' bg-neutral-700 my-7 h-[1px] w-full'/>
        <div className="flex md:flex-row flex-col md:items-center justify-between">
                <p className=' font-semibold text-gray text-xs'>
                    Copyright @ 2024 Apple Inc. All rights reserved.
                </p>
                <div className="flex">
                    {footerLinks.map((link, i)=>(
                        <p className="font-semibold text-gray text-xs" key={link}>{link}{' '}{
                            i !== footerLinks.length -1 && (
                                <span className="mx-2"> | </span>
                            )
                        }</p>
                    ))}
                </div>
        </div>
    </footer>
  )
}

export default Footer