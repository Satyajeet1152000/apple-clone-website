import { footerLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

type FooterLinksType = {
    [key: string]: { name: string; href: string }[];
};
const footerLinksData = footerLinks as FooterLinksType;


const Footer = () => {
    return (
        <footer className=' py-5 sm:px-10 px-5 bg-white text-gray-600 flex-center flex-col text-sm'>
            <div className=' w-[50%] border-black'>
                <div className=' flex flex-col gap-3'>
                    <ol className=' list-decimal pl-5'>
                        <li>Apple Intelligence will be available in beta on iPhone 15 Pro, iPhone 15 Pro Max, and iPad and Mac with M1 and later, with Siri and device language set to U.S. English, as part of iOS 18, iPadOS 18, and macOS Sequoia this fall.</li>
                        <li className='pt-3'>The Vitals app is for wellness purposes only and not for medical use.</li>
                    </ol>
                    <div>
                        Features are subject to change. Some features, applications, and services may not be available in all regions or all languages, and compatible hardware and software may be required.
                    </div>
                </div>
                <div className='border-t-[1px] border-gray-400 w-full my-5'></div>
                <div className=' columns-5'>
                    {Object.keys(footerLinksData).map((category: string, i: any) => (
                        <div key={i} className=' font-medium flex flex-col break-inside-avoid gap-1 py-3'>
                            {category}
                            {footerLinksData[category].map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.href}
                                    className=' text-gray-800 font-normal hover:underline text-sm'
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
                <div>
                    More ways to shop: <span className=' text-blue underline'>Find an Apple Store</span> or <span className=' text-blue underline'>other retailer</span> near you. Or call 1-800-MY-APPLE.
                </div>
                <div className='border-t-[1px] border-gray-400 w-full my-5'></div>
                <div className=' flex justify-between'>
                    Copyright © 2024 Apple Inc. All rights reserved.
                    <span className=' flex gap-x-3'>
                        {[
                            { name: 'Privacy Policy', href: '' },
                            { name: 'Terms of Use', href: '' },
                            { name: 'Sales and Refunds', href: '' },
                            { name: 'Legal', href: '' },
                            { name: 'Site Map', href: '' }
                        ].map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href}
                                className=' hover:underline'
                            >
                                {link.name}
                            </Link>
                        ))}
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer