
import { bannerDate, exploreLineupData, exploreLineupDataStyle, getToKnowData, headingData, introVideo, macEssentialsData, significantOtherData, topData, whyAppleBestData } from './data'
import DeviceTypesList from '@/components/PageBuilder/DeviceTypesList'
import HeroVideo_Heading from '@/components/PageBuilder/HeroVideo_Heading'
import Banner from '@/components/PageBuilder/Banner'
import GetToKnow from '@/components/PageBuilder/GetToKnow'
import ExploreLineup from '@/components/PageBuilder/ExploreLineup'
import WhyAppleIsBest from '@/components/PageBuilder/WhyAppleIsBest'
import SigniFicantOthers from '@/components/PageBuilder/SigniFicantOthers'
import Essentials from '@/components/PageBuilder/Essentials'

const page = () => {
    return (
        <>
            <DeviceTypesList data={topData} />
            <Banner data={bannerDate} />
            <HeroVideo_Heading heading={headingData} videoSrc={introVideo} />
            <GetToKnow heading= "Get to Know Mac." data={getToKnowData}/>
            <ExploreLineup heading="Explore the lineup." data={exploreLineupData} style={exploreLineupDataStyle}/>
            <WhyAppleIsBest  heading="Why Apple is the best place to buy Mac."  data={whyAppleBestData}/>
            <SigniFicantOthers  heading="Significant others."  data={significantOtherData}/>
            <Essentials  heading="Mac essentials."  data={macEssentialsData}/>
        </>
    )
}
export default page