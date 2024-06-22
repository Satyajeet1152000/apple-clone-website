import DeviceTypesList from '@/components/PageBuilder/DeviceTypesList'
import { appleMusicVideoSrc, appleOneSVG, booksMarqueeData, fitnessMarqrueeData, fitnessVideoSrc, gameMarqueeData, gameVideoSrc, headingData, introVideoSrc, movieMarqueeData, musicMarqueeData, newsMarqueData, podcastMarqueeData, topData } from './data'
import Image from 'next/image'
import MarqueeGen from '@/components/MarqueeGen'

const page = () => {
    return (
        <>
            <DeviceTypesList data={topData} color='black' />
            <section className='bg-black text-white text-center py-24 font-semibold'>
                <h1 className='text-8xl'>{headingData.title}</h1>
                <p className='text-2xl'>{headingData.des}</p>
            </section>
            <section className='flex-center gap-16 bg-[#161617] text-white py-12 text-xl'>
                <Image src={"https://www.apple.com/v/services/h/images/services/overview/services/apple-one-banner/logo_apple_one__cftfcy53dtsi_large.png"} alt='image' width={150} height={200} />
                <h1>Get up to six services in one subscription with Apple One.</h1>
                <button className='border-2 border-white rounded-full py-2 px-5'>Learn More</button>
            </section>

            {/* Movie Section */}
            <section>
                <VideoSectin videoSrc={introVideoSrc} logo='https://www.apple.com/v/services/h/images/services/overview/services/apple-one-banner/chiclet_apple_tv__e3uyhyy0a4sy_large_2x.png' logoText='Apple TV+' title={<span>Stream award-winning <br />Apple Originals on every screen.</span>} />
            </section>
            <section>
                <MarqueeGen data={movieMarqueeData} imgWidth={400} hoverText='Stream Now' />
            </section>

            {/* music Section */}
            <section>
                <VideoSectin videoSrc={appleMusicVideoSrc} logo='https://www.apple.com/v/services/h/images/services/overview/services/apple-one-banner/chiclet_music__czz4szrg9qc2_large_2x.png' logoText='Apple Music' title={<span>Listen to music you love in<br />Spatial Audio with Dolby Atmos.</span>} />
            </section>
            <section>

                <MarqueeGen data={musicMarqueeData} imgWidth={400} hoverText='Listen Now' />
            </section>

            {/* arcade Section */}
            <section>
                <VideoSectin videoSrc={gameVideoSrc} logo='https://www.apple.com/v/services/h/images/services/overview/services/apple-one-banner/chiclet_arcade__pg8i0s94i322_large_2x.png' logoText='Apple Arcade' title={<span>Best collection of mobile<br />games for every player.</span>} />
            </section>
            <section>
                <MarqueeGen data={gameMarqueeData} imgWidth={400} hoverText='Play Now' />
            </section>

            {/* fitness Section */}
            <section>
                <VideoSectin videoSrc={fitnessVideoSrc} logo='https://www.apple.com/v/services/h/images/services/overview/services/apple-one-banner/chiclet_activity__glcodp6au92e_large_2x.png' logoText='Apple Fitness+' title={<span>From HIIT to Meditation,<br />there’s something for everyone.</span>} />
            </section>
            <section>
                <MarqueeGen data={fitnessMarqrueeData} imgWidth={400} hoverText='Watch Now' />
            </section>


            {/* news Section */}
            <section>
                <VideoSectin logo='https://www.apple.com/v/services/h/images/services/overview/services/apple-one-banner/chiclet_news__ftl0tja5yv2i_medium_2x.png' logoText='Apple News+' title={<span>Hundreds of magazines<br />and leading newspapers.<br />One subscription.</span>} />
            </section>
            <section>
                <MarqueeGen data={newsMarqueData} imgWidth={400} hoverText='Read Now' />
            </section>

            {/* podcast Section */}
            <section>
                <VideoSectin logo='https://www.apple.com/v/services/h/images/services/overview/services/podcast_icon__gdo1h9k9z8uy_large_2x.png' logoText='Apple Podcasts' title={<span>Millions of shows, from<br />the biggest names to the<br />best independents.</span>} />
            </section>
            <section>
                <MarqueeGen data={podcastMarqueeData} imgWidth={400} hoverText='Listen Now' />
            </section>

            {/* books Section */}
            <section>
                <VideoSectin logo='https://www.apple.com/v/services/h/images/services/overview/services/books_icon__ctwa61h6638m_large_2x.png' logoText='Apple Books' title={<span>Read, listen, discover.<br />All in one place.</span>} />
            </section>
            <section>
                <MarqueeGen data={booksMarqueeData} imgWidth={400} hoverText='Listen Now' />
            </section>


            {/* ending Section */}
            <section className='flex-center flex-col py-20 text-center gap-5'>
                <Image src={"https://www.apple.com/v/services/h/images/services/overview/apple-one/full_apple_one__bbfm4onc05ua_large.jpg"} alt="endImage" width={120} height={100} quality={100} />
                <Image src={"https://www.apple.com/v/services/h/images/services/overview/apple-one/apple_services_icons__sexuv1uj3eaq_large.png"} alt="endImage" width={400} height={100} quality={100} />
                <h1 className='text-3xl font-medium'>Bundle up to six Apple services<br/>and enjoy more for less.</h1>
                <div className=' space-x-5'>
                    <button className={`rounded-full py-2 px-5 text-white bg-black`}>Try it free</button>
                    <button className={`border-2 border-black rounded-full py-2 px-5`}>Learn More</button>
                </div>
            </section>
        </>
    )
}

const VideoSectin = ({ videoSrc, logo, logoText, title }: { videoSrc?: string, logo: string, logoText: string, title: any }) => {
    return (
        <div className='relative w-full h-full'>
            {videoSrc &&
                <video className=" pointer-events-none w-full" autoPlay muted preload='none'>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            }
            <div className={`${videoSrc?"absolute text-white" : "text-black"} bottom-0 left-0 w-full flex-center py-10`}>
                <div className=' space-y-5'>
                    <div className='flex items-center justify-start gap-5'>
                        <Image src={logo} alt='image' width={50} height={40} />
                        <span className='text-2xl font-semibold'>{logoText}</span>
                        <button className={`flex-center gap-2 border-2 rounded-full px-5 ${videoSrc? "border-white" : "bg-black text-white"}`}><span>Build with</span><span>{appleOneSVG}</span></button>
                    </div>
                    <div className=' flex items-end justify-between gap-20'>
                        <h1 className=' font-semibold text-4xl'>{title}</h1>
                        <div className=' space-x-5'>
                            <button className={`rounded-full py-2 px-5 ${videoSrc?"text-black bg-white": "text-white bg-black"}`}>Try it free</button>
                            <button className={`border-2 ${videoSrc? "border-white" : "border-black"} rounded-full py-2 px-5`}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
