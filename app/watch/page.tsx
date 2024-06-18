import BnGText from '@/components/BnGText'
import { bannerDate, exploreLineupData, exploreLineupDataStyle, getToKnowData, headingData, introVideo, macEssentialsData, significantOtherData, topData, whyAppleBestData } from './data'
import Banner from '@/components/PageBuilder/Banner'
import DeviceTypesList from '@/components/PageBuilder/DeviceTypesList'
import Essentials from '@/components/PageBuilder/Essentials'
import ExploreLineup from '@/components/PageBuilder/ExploreLineup'
import GetToKnow from '@/components/PageBuilder/GetToKnow'
import HeroVideo_Heading from '@/components/PageBuilder/HeroVideo_Heading'
import SigniFicantOthers from '@/components/PageBuilder/SigniFicantOthers'
import WhyAppleIsBest from '@/components/PageBuilder/WhyAppleIsBest'
import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <DeviceTypesList data={topData} />
            <Banner data={bannerDate} />
            <HeroVideo_Heading heading={headingData} videoSrc={introVideo} />
            <GetToKnow heading="Get to Know Apple Watch." data={getToKnowData} />
            <ExploreLineup heading="Explore the lineup." data={exploreLineupData} style={exploreLineupDataStyle} />
            {/* Apple  watch studio section*/}
            <section className=' my-14 py-24 bg-[#f5f5f7] px-24'>
                <BnGText btext="Apple Watch Studio" gtext='' classname=' mx-28 pb-16 font-semibold text-5xl' />
                <div className='relative flex justify-between bg-white h-[60vh] rounded-full'>
                    <div className='flex-center flex-col gap-3 text-nowrap z-[1] ml-24'>
                        <h1 className=' text-3xl font-semibold'>Mix. Match. Make it yours.</h1>
                        <h1>Choose a case. Pick a band <br/>Configure your perfect watch.</h1>
                        <button className=' hover:text-blue py-1 px-1 bg-gradient-to-r from-yellow-500  via-red-500 to-cyan-500 rounded-full'>
                            <div className=' w-full h-full px-4 py-2 rounded-full bg-white'>Create you style</div>
                        </button>
                    </div>
                    {/* <div className='relative border border-cyan-400 w-full'> */}
                        <Image 
                            src={"https://www.apple.com/v/watch/bm/images/overview/banner/banner_watch_studio__bj5ig77p2j2a_xlarge_2x.jpg"} 
                            alt='studio image' 
                            layout='fill'
                            className=''
                        />
                    {/* </div> */}
                </div>
            </section>
            <WhyAppleIsBest heading="Why Apple is the best place to buy Apple Watch." data={whyAppleBestData} />
            <SigniFicantOthers heading="Made for each other." data={significantOtherData} />
        </>
    )
}

export default page