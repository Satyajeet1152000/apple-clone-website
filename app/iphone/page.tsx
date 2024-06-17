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

const page = () => {
    return (
        <>
            <DeviceTypesList data={topData} />
            <Banner data={bannerDate} />
            <HeroVideo_Heading heading={headingData} videoSrc={introVideo} />
            <GetToKnow heading="Get to Know iPhone." data={getToKnowData} />
            <ExploreLineup heading="Explore the lineup." data={exploreLineupData} style={exploreLineupDataStyle} />
            <WhyAppleIsBest heading="Why Apple is the best place to buy iPhone." data={whyAppleBestData} />
            <SigniFicantOthers heading="Significant others." data={significantOtherData} />
            <Essentials heading="iPhone essentials." data={macEssentialsData} updown={false} />
        </>
    )
}

export default page