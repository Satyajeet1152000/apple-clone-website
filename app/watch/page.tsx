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
            <ExploreLineup heading="Explore the lineup." data={exploreLineupData} style={exploreLineupDataStyle} bg='#f6f5fa'/>
            <WhyAppleIsBest heading="Why Apple is the best place to buy Apple Watch." data={whyAppleBestData} />
            {/* <SigniFicantOthers heading="Made for each other." data={significantOtherData} /> */}
        </>
    )
}

export default page