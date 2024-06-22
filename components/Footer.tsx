import { footerLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

type FooterLinksType = {
    [key: string]: { name: string; href: string }[];
};
const footerLinksData = footerLinks as FooterLinksType;


const Footer = () => {
    return (
        <footer className='py-10 px-5 bg-white text-gray-600 flex-center flex-col text-sm'>
            <div className=' w-[90%] border-black'>
                <div className=' flex flex-col gap-3'>                    
                    <ol className=' list-decimal pl-5 flex flex-col gap-y-3'>
                        <li>Apple Intelligence will be available in beta on iPhone 15 Pro, iPhone 15 Pro Max, and iPad and Mac with M1 and later, with Siri and device language set to U.S. English, as part of iOS 18, iPadOS 18, and macOS Sequoia this fall.</li>
                        <li>The Vitals app is for wellness purposes only and not for medical use.</li>
                        <li>Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.</li>
                    </ol>
                    <ol className='pl-5 flex flex-col gap-y-3'>
                        <li>A subscription is required for Apple TV+.</li>
                        <li>To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.</li>
                        <li>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.</li>
                        <li>A subscription is required for Apple Arcade, Apple Fitness+, and Apple Music.</li>
                    </ol>
                    <div>
                        Features are subject to change. Some features, applications, and services may not be available in all regions or all languages, and compatible hardware and software may be required.
                    </div>
                </div>
                <div className='border-t-[1px] border-gray-400 w-full my-5'></div>
                <div className=' columns-2 md:columns-3 lg:columns-4 xl:columns-5'>
                    {Object.keys(footerLinksData).map((category: string, i: any) => (
                        <div key={i} className=' font-bold flex flex-col break-inside-avoid gap-1 py-3'>
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
                    <span className=' flex gap-x-3 text-center'>
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