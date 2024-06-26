import DeviceTypesList from '@/components/PageBuilder/DeviceTypesList'
import { appleMusicVideoSrc, appleOneSVG, booksMarqueeData, fitnessMarqrueeData, fitnessVideoSrc, gameMarqueeData, gameVideoSrc, headingData, introVideoSrc, movieMarqueeData, musicMarqueeData, newsMarqueData, podcastMarqueeData, topData } from './data'
import Image from 'next/image'
import MarqueeGen from '@/components/MarqueeGen'

const page = () => {
    return (
        <>
            <section className='bg-[#161617] text-white h-[100vh] flex-center flex-col'>
                <DeviceTypesList data={topData} color='black' />
                <div className='bg-black text-white section text-center'>
                    <h1 className='text-[2em]'>{headingData.title}</h1>
                    <p className='text-[1em] w-[90vmin]'>{headingData.des}</p>
                </div>
                <div className='flex-center w-full h-full'>
                    <div className='flex items-center justify-between px-[5vmin] w-[100vmin] text-center'>
                        <Image src={"https://www.apple.com/v/services/h/images/services/overview/services/apple-one-banner/logo_apple_one__cftfcy53dtsi_large.png"} alt='image' width={150} height={200} className='w-[10vmin]' />
                        <h1 className=''>Get up to six services in one subscription with Apple One.</h1>
                        <button className='border-2 border-white rounded-full px-[2vmin] py-[1vmin] text-nowrap text-[.8em]'>Learn More</button>
                    </div>
                </div>
            </section>

            {/* Movie Section */}
            <VideoSectin videoSrc={introVideoSrc} logo='https://www.apple.com/v/services/h/images/services/overview/services/apple-one-banner/chiclet_apple_tv__e3uyhyy0a4sy_large_2x.png' logoText='Apple TV+' title={<span>Stream award-winning <br />Apple Originals on every screen.</span>} />                    
            <MarqueeGen data={movieMarqueeData} imgWidth={400} hoverText='Stream Now' />

            {/* music Section */}
            <VideoSectin videoSrc={appleMusicVideoSrc} logo='https://www.apple.com/v/services/h/images/services/overview/services/apple-one-banner/chiclet_music__czz4szrg9qc2_large_2x.png' logoText='Apple Music' title={<span>Listen to music you love in<br />Spatial Audio with Dolby Atmos.</span>} />
            <MarqueeGen data={musicMarqueeData} imgWidth={400} hoverText='Listen Now' />
            
            {/* arcade Section */}
            <VideoSectin videoSrc={gameVideoSrc} logo='https://www.apple.com/v/services/h/images/services/overview/services/apple-one-banner/chiclet_arcade__pg8i0s94i322_large_2x.png' logoText='Apple Arcade' title={<span>Best collection of mobile<br />games for every player.</span>} />
            <MarqueeGen data={gameMarqueeData} imgWidth={400} hoverText='Play Now' />
            
            {/* fitness Section */}
            <VideoSectin videoSrc={fitnessVideoSrc} logo='https://www.apple.com/v/services/h/images/services/overview/services/apple-one-banner/chiclet_activity__glcodp6au92e_large_2x.png' logoText='Apple Fitness+' title={<span>From HIIT to Meditation,<br />there’s something for everyone.</span>} />
            <MarqueeGen data={fitnessMarqrueeData} imgWidth={400} hoverText='Watch Now' />


            {/* news Section */}
            <VideoSectin logo='https://www.apple.com/v/services/h/images/services/overview/services/apple-one-banner/chiclet_news__ftl0tja5yv2i_medium_2x.png' logoText='Apple News+' title={<span>Hundreds of magazines<br />and leading newspapers.<br />One subscription.</span>} />
            <MarqueeGen data={newsMarqueData} imgWidth={400} hoverText='Read Now' />

            {/* podcast Section */}
            <VideoSectin logo='https://www.apple.com/v/services/h/images/services/overview/services/podcast_icon__gdo1h9k9z8uy_large_2x.png' logoText='Apple Podcasts' title={<span>Millions of shows, from<br />the biggest names to the<br />best independents.</span>} />
            <MarqueeGen data={podcastMarqueeData} imgWidth={400} hoverText='Listen Now' />

            {/* books Section */}
            <VideoSectin logo='https://www.apple.com/v/services/h/images/services/overview/services/books_icon__ctwa61h6638m_large_2x.png' logoText='Apple Books' title={<span>Read, listen, discover.<br />All in one place.</span>} />
            <MarqueeGen data={booksMarqueeData} imgWidth={400} hoverText='Listen Now' />


            {/* ending Section */}
            <section className='section text-center'>
                <Image src={"https://www.apple.com/v/services/h/images/services/overview/apple-one/full_apple_one__bbfm4onc05ua_large.jpg"} alt="endImage" width={120} height={100} quality={100} className='w-[20vmin]'/>
                <Image src={"https://www.apple.com/v/services/h/images/services/overview/apple-one/apple_services_icons__sexuv1uj3eaq_large.png"} alt="endImage" width={400} height={100} quality={100} className='w-[60vmin]' />
                <h1 className='text-[1.5em] font-medium'>Bundle up to six Apple services<br/>and enjoy more for less.</h1>
                <div className=' space-x-[5vmin]'>
                    <button className={`rounded-full py-[1vmin] px-[2vmin] text-white bg-black`}>Try it free</button>
                    <button className={`border-2 border-black rounded-full py-[1vmin] px-[2vmin]`}>Learn More</button>
                </div>
            </section>
        </>
    )
}

const VideoSectin = ({ videoSrc, logo, logoText, title }: { videoSrc?: string, logo: string, logoText: string, title: any }) => {
    return (
        <section className={`relative w-full ${videoSrc? "h-[80vh]" : "h-max mt-[15vmin]"}`}>
            {videoSrc && 
                <div className='w-full flex-center h-full'>
                    <video className=" pointer-events-none h-[100%] w-[100%] object-fill " autoPlay muted preload='none'>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            }
            <div className={`${videoSrc?"absolute text-white" : "text-black"} bottom-[10vmin] left-0 w-full flex-center`}>
                <div className='space-y-[2vmin]'>
                    <div className='flex items-center justify-start gap-[3vmin]'>
                        <Image src={logo} alt='image' width={50} height={40} className='w-[5vmin]'/>
                        <span className='text-[1em] font-semibold'>{logoText}</span>
                        <button className={`flex-center gap-2 border-2 rounded-full px-[2vmin] ${videoSrc? "border-white" : "bg-black text-white"}`}><span className=''>Build with</span><span>{appleOneSVG}</span></button>
                    </div>
                    <div className=' flex flex-wrap items-end justify-between gap-[5vmin]'>
                        <h1 className=' font-semibold text-[1.2em]'>{title}</h1>
                        <div className=' space-x-[2vmin] text-[.8em]'>
                            <button className={`rounded-full py-[.8vmin] px-[2vmin] ${videoSrc?"text-black bg-white": "text-white bg-black"}`}>Try it free</button>
                            <button className={`border-2 ${videoSrc? "border-white" : "border-black"} rounded-full py-[.8vmin] px-[2vmin]`}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
