import Image from "next/image"

const page = () => {
    const appleSVG = <svg className=" scale-[3]" height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"></path></svg>


    return (
        <>

            {/* Hero Section */}
            <section className='pt-20 px-24 w-full h-[100vh]  border border-red-700 pb-10'>
                <div className="flex justify-between">
                    <h1 className=" font-semibold text-2xl">Apple Vision Pro</h1>
                    <div className=" text-md flex-center gap-5 ">
                        <a href="" className="hover:text-blue">Overview</a>
                        <a href="" className="hover:text-blue">Guide Tour</a>
                        <a href="" className="hover:text-blue">Tech Space</a>
                        <a href="" className="hover:text-white hover:bg-black border rounded-full px-3 py-1 border-black">Book Demo</a>
                        <a href="" className=" bg-sky-600 rounded-full px-3 py-1 text-white">Buy</a>
                    </div>
                </div>
                <div className="relative w-full h-full overflow-hidden">
                    <video className="relative pointer-events-none w-full h-[100%]" autoPlay loop muted preload='none'>
                        <source src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/hero-us/medium.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute bottom-12 w-full flex-center flex-col text-orange-600 text-3xl font-medium">
                        <h1 className="text-black text-6xl pb-2 flex gap-5">
                            <span className="flex-center">{appleSVG}</span>
                            Vision Pro</h1>
                        <a className="hover:underline">Book a demo</a>
                        <a className="hover:underline">Preview visionOS2</a>
                    </div>
                </div>
            </section>

            {/* Video player Section */}
            <section className=" w-full h-[100vh] relative flex-center ">
                {/* <div className="border-2 border-sky-700 h-[100%] w-full"> */}
                <video className="pointer-events-none w-full h-full object-cover" autoPlay loop muted preload='none'>
                    <source src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/foundation/medium.mp4#t=3.50109" />
                </video>

                {/* </div> */}
                <div className=" w-full flex-center flex-col gap-5 text-3xl font-semibold text-white absolute">
                    <span>Apple Vision Pro seamlessly blends digital<br /> content with your physical space.</span>
                    <span>So you can work, watch, relive memories, and<br /> connect in ways never before possible.</span>
                    <span>The era of spatial computing is here.</span>
                    <button className=" hover:bg-orange-600 ease-linear duration-100 hover:text-white text-orange-600 border-[4px] border-orange-600 px-4 py-2 text-lg rounded-full">Watch the film</button>
                </div>
            </section>

            {/* vision pro Image */}
            <section className="flex-center flex-col h-[100vh]">
                <h1 className="text-black text-5xl pb-2 flex gap-5 font-semibold"><span className="flex-center scale-[0.9]">{appleSVG}</span>Vision Pro</h1>
                <Image src="https://www.apple.com/v/apple-vision-pro/e/images/overview/intro/intro_spin_endframe__dy927flmi3au_large.jpg" alt="visionPro" width={1000} height={500} />
                <button className="border-[3px] border-black hover:bg-black hover:text-white px-4 py-2 text-2xl font-medium rounded-full"> + Take a closer look</button>
            </section>

            {/* ultimate theater */}
            <VideoSection src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-entertainment-a/large.mp4" heading="Entertainment" des={<span>The ultimate theater.<br />Wherever you are.</span>} />
            <InfoSection heading={<span>A new dimention for<br />entertainment.</span>} des="Apple Vision Pro can transform any room into your own personal theater. Expand your movies, shows, and games to your perfect size and experience them in Spatial Audio. Apple Immersive Video puts you in the center of the action with mind‑blowing immersion. And with more pixels than a 4K TV for each eye, you can enjoy stunning content wherever you are - on a long flight or the couch at home." btnText=" + Learn more about entertainment" />

            {/* productivity */}
            <VideoSection src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-productivity/large.mp4" heading="Productivity" des={<span>A workspace with<br />infinite space.</span>} />
            <InfoSection heading={<span>Discover new ways<br />to work.</span>} des="Apple Vision Pro gives you limitless space to get things done. Organize everything you need anywhere around you, in any way you like. Seamlessly bring in your Mac workflows using Mac Virtual Display. Connect a Magic Keyboard, a Magic Trackpad, and other Bluetooth accessories to expand how you navigate. And with SharePlay in FaceTime, you can collaborate with colleagues using apps together in real time." btnText=" + Learn More about productivity" />

            {/* photo and videos section */}
            <VideoSection src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-photos-videos/large.mp4" heading="Photos and Videos" des={<span>Be in the moment.<br />All over again.</span>} />
            <InfoSection heading={<span>Your memories<br />come alive.</span>} des="Apple Vision Pro is Apple’s first 3D camera. You can capture magical spatial photos and spatial videos in 3D, then relive those cherished moments like never before with immersive Spatial Audio. Your existing library of photos and videos looks incredible at remarkable scale — and coming this fall, you’ll be able to transform your 2D photos into spatial photos with just a tap. Even panoramas wrap around you — making you feel like you’re standing right where you took them. You can also take spatial videos with iPhone 15 Pro, then view them on Apple Vision Pro." btnText=" + Learn More about photos and videos" />

            {/* connection section */}
            <VideoSection src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-connection-a/large.mp4" heading="Connection" des={<span>Share quality time.<br />And space.</span>} />
            <InfoSection heading={<span>A more engaging way<br />to get together.</span>} des="Apple Vision Pro makes it easy to collaborate and connect wherever you are. You can see FaceTime participants in life-size video tiles, or you can choose to use your spatial Persona and feel like you are sharing the same space with others. And use SharePlay to watch, listen, and play together with your favorite people." btnText=" + Learn More about connection" />

            {/* Apps Section */}
            <VideoSection src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-apps-a/large.mp4" heading="Apps" des={<span>Do what you love.<br />Reimagine how<br />you do it.</span>} />
            <InfoSection heading={<span>A world of apps.<br />A world of discovery.</span>} des="Apple Vision Pro expands the experience of your go‑to apps and opens up new possibilities in entertainment, productivity, gaming, and more. Browse the web in Safari, create a to‑do list in Notes, chat in Messages, and seamlessly move between them with a glance. And explore the App Store to discover an ever-expanding collection of awe-inspiring spatial apps designed for Apple Vision Pro." btnText="+ Learn More about apps" />

            {/* vision os Section */}
            <VideoSection src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/visionos-a/large.mp4" heading="visionOS" des={<span>An operating system<br />designed for spatial.</span>} />
            <InfoSection heading={<span>Navigate spatial<br />experiences.<br />Naturally.</span>} des="Built on the foundation of macOS, iOS, and iPadOS, visionOS enables powerful spatial experiences. Control Apple Vision Pro with your eyes, hands, and voice — interactions feel intuitive and magical. Simply look at an element, tap your fingers together to select, and use the virtual keyboard or dictation to type. And coming this fall, visionOS 2 introduces even more ways to enhance work, entertainment, and connecting with friends and family using Apple Vision Pro." btnText="+ Learn More about visionOS" />

            <DesignedByApple />

            {/* Image Showcase */}
            <section className="p-24 flex-center flex-col gap-10">
                <div className="flex-center gap-10 w-full">
                    <Image src="https://www.apple.com/v/apple-vision-pro/e/images/overview/design/glass_top__k3b8lzqd1l2m_large.jpg" alt="showcase1" width={500} height={500} className="w-full" />
                    <Image src="https://www.apple.com/v/apple-vision-pro/e/images/overview/design/glass_side__gm4agomrwl2e_large.jpg" alt="showcase2" width={500} height={500} className="w-full" />
                </div>
                <video className="pointer-events-none w-full h-full object-cover" autoPlay muted preload='none'>
                    <source src="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/glass/large.mp4" />
                </video>
            </section>

            <section className="px-24 flex-center flex-col relative">
                <p className="text-xl pb-10 font-semibold text-gray-600 w-[40%] text-center py-24 mb-24">A singular piece of <span className="text-black">three-dimensionally formed laminated glass </span>acts as an optical surface for the cameras and sensors that view the world. It flows seamlessly into a <span className="text-black">custom aluminum alloy frame </span>that gently curves to wrap around your face while serving as an attachment point for the <span className="text-black">Light Seal.</span>
                </p>
                <Image src="https://www.apple.com/v/apple-vision-pro/e/images/overview/design/light_seal__fo87cv0zkcmm_large.jpg" alt="showcase1" width={500} height={500} className="w-[60%]" quality={100} />
                {/* <button className=" hover:bg-orange-500 bg-orange-600 ease-linear duration-100 text-white px-5 py-3 text-xl rounded-full absolute bottom-24"> + Learn more about design</button> */}
                <OrangeButton text="+ Learn more about design" className=" absolute bottom-24"/>
            </section>

            <TechnologySection />


            {/* Values Section */}
            <section className="px-24 w-full h-[100vh] flex-center">
                <div className="w-[40%] text-xl font-semibold text-center mb-24 space-y-5">
                    <h1>Values</h1>
                    <h1 className="text-7xl font-bold">Designed to make a difference.</h1>
                    <p className="pb-10 text-gray-500"><span className="text-black">Our values lead the way.</span> SApple Vision Pro was designed to help protect your privacy and keep you in control of your data. Its built‑in accessibility features are designed to work the way you do.
                    </p>
                    <OrangeButton text="+ Learn more about values" />
                </div>
            </section>

            {/* Use Ar Section */}
            <section className=" w-full h-[100vh] px-24 my-10">
                <div className="bg-[#f5f5f8] h-full rounded-3xl flex-center p-36 pb-0 gap-20">
                    <div className="font-semibold w-[35%] space-y-5">
                        <Image src={"https://www.apple.com/v/apple-vision-pro/e/images/overview/routers/ar_logo__bmtaba6ckk76_medium_2x.png"} alt="artoview" width={80} height={80} quality={100}/>
                        <h1 className="text-6xl">Use AR to View Apple Vision Pro.</h1>
                        <p className=" text-gray-500 text-3xl">Open this page using Safari on your iPhone or iPad</p>
                    </div>
                    <Image src={"https://www.apple.com/v/apple-vision-pro/e/images/overview/routers/ar_tile__que64jqs2t2e_large.jpg"} alt="artoview" width={600} height={500} quality={100}/>
                </div>
            </section>

            {/* explore Section */}
            <section className=" w-full h-[100vh] px-24 my-10">
                <div className="bg-[#f5f5f8] h-full rounded-3xl flex-center p-36 gap-20">
                    <div className=" w-[35%] space-y-5">
                        <h1 className="font-semibold text-6xl">Explore Apple Vision Pro accessories.</h1>
                        <h1 className=" text-blue text-3xl hover:underline">Shop {">"}</h1>
                    </div>
                    <Image src={"https://www.apple.com/v/apple-vision-pro/e/images/overview/routers/accessories__et6yc9y3xvu6_large.jpg"} alt="artoview" width={600} height={500} quality={100}/>
                </div>                
            </section>

            {/* explore Section */}
            <section className=" w-full h-[100vh] px-24 my-10">
                <div className="bg-[#f5f5f8] h-full rounded-3xl flex-center flex-col p-36 gap-20">
                    <Image src={"https://www.apple.com/v/apple-vision-pro/e/images/overview/routers/developers__bxrd1uafspsi_large.png"} alt="artoview" width={600} height={500} quality={100}/>
                    <div className=" w-[60%] space-y-5 text-center">
                        <h1 className="font-semibold text-5xl">An all‑new platform. <br/> An all‑new world for developers.</h1>
                        <p className="text-2xl">The possibilities for what developers can dream up and build for Apple Vision Pro are endless. And with familiar tools and frameworks like Xcode, SwiftUI, RealityKit, and ARKit, as well as support for Unity and the 3D-content preparation app Reality Composer Pro, developers have everything they need to create amazing spatial experiences.</p>
                        <h1 className=" text-blue text-2xl hover:underline">Shop Learn more about developing for visionOS</h1>
                    </div>
                </div>                
            </section>
    
        </>
    )
}

export default page

const TechnologySection = () => {
    return (
        <section className="px-24 py-32 bg-black flex-center flex-col">
            <div className="w-[40%] text-white text-xl font-semibold text-center mb-24 space-y-5">
                <h1>Technology</h1>
                <h1 className="text-7xl font-bold">Innovation you can see, hear, and feel.</h1>
                <p className="pb-10 text-gray-400"><span className="text-white">Pushing boundaries from the inside out.</span> Spatial experiences on Apple Vision Pro are only possible through groundbreaking Apple technology. Displays the size of a postage stamp that deliver more pixels than a 4K TV to each eye. Incredible advances in Spatial Audio. A revolutionary dual‑chip design featuring custom Apple silicon. A sophisticated array of cameras and sensors. All the elements work together to create an unprecedented experience you have to see to believe.
                </p>
            </div>

            <Image src={"https://www.apple.com/v/apple-vision-pro/e/images/overview/technology/features/sensors_off__cfzcmow4c3f6_large_2x.jpg"} alt="insidevision" width={500} height={500} className="w-[70%]" quality={100}/>
            <div className="w-[40%] text-white text-xl font-semibold text-center mt-24 space-y-5">
                <h1 className="text-4xl font-bold">More pixels than a 4K TV. For each eye.</h1>
                <p className="text-gray-400">The<span className="text-white"> custom micro‑OLED display system</span> features 23 million pixels, delivering stunning resolution and colors. And a specially designed three‑element lens creates the feeling of a display that’s everywhere you look.
                </p>
            </div>

            <div className=" w-full relative pb-52">
                <video className="pointer-events-none w-full h-full object-cover" autoPlay muted preload='none'>
                    <source src={"https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/spatial-audio/large.mp4"} />
                </video>
                <div className="w-[25%] text-white text-xl font-semibold mt-24 space-y-5 absolute bottom-32 right-52">
                    <h1 className="text-4xl font-bold">Our most advanced Spatial Audio system ever.</h1>
                    <p className="text-gray-400">Dual-driver audio pods positioned next to each ear deliver personalized sound while letting you hear what’s around you. <br/><span className="text-white">Spatial Audio </span>makes sounds feel like they’re coming from your surroundings. Audio ray tracing analyzes your room’s acoustic properties to adapt and match sound to your space. And if you want to use headphones with Apple Vision Pro, AirPods Pro (2nd generation) with USB‑C offer the perfect experience, featuring Lossless Audio with ultra-low latency enabled by the H2 chip in both devices.
                    </p>
                </div>
            </div>

            <TechnologySectionEle 
                imgSrc="https://www.apple.com/v/apple-vision-pro/e/images/overview/technology/displays/hero_base__bpxhq09r962u_large_2x.jpg" 
                heading="Responsive, precision eye tracking." 
                des={<> A high‑performance eye‑tracking system of <span className="text-white">LEDs </span>and <span className="text-white"> infrared cameras </span> projects invisible light patterns onto each eye. This advanced system provides ultraprecise input without your needing to hold any controllers, so you can accurately select elements just by looking at them.</>}
            />
            <TechnologySectionEle 
                imgSrc="https://www.apple.com/v/apple-vision-pro/e/images/overview/technology/features/sensors_all__dp0a8e4y4u4i_large_2x.jpg" 
                heading="A sophisticated sensor array." 
                des={<> A pair of <span className="text-white">high-resolution cameras </span>transmit over one billion pixels per second to the displays so you can see the world around you clearly. The system also helps deliver <span className="text-white"> precise head and hand tracking </span> and <span className="text-white">and real‑time 3D mapping,</span> all while understanding your hand gestures from a wide range of positions.</>}
            />
            <TechnologySectionEle 
                imgSrc="https://www.apple.com/v/apple-vision-pro/e/images/overview/technology/features/sensors_chips__s805s5o3gkii_small_2x.jpg" 
                heading="Revolutionary dual‑chip performance." 
                des={<>A unique dual‑chip design enables the spatial experiences on Apple Vision Pro. The powerful <span className="text-white">M2</span>chip simultaneously runs visionOS, executes advanced computer vision algorithms, and delivers stunning graphics, all with incredible efficiency. And the brand-new <span className="text-white"> R1 </span>chip is specifically dedicated to process input from the cameras, sensors, and microphones, streaming images to the displays within 12 milliseconds — for a virtually lag-free, real-time view of the world.</>}
            />

            <button className="text-xl border-2 bg-white py-3 px-5 rounded-full font-semibold"> + Learn more about technology</ button>
        </section>
    )
}

const TechnologySectionEle = ({imgSrc, heading, des}:{imgSrc: string, heading: string, des: any}) => {
    return(
        <div className="w-full flex-center flex-col my-24">
            <Image src={imgSrc} alt="insidevision" width={500} height={500} className="w-[60%]" quality={100}/>
            <div className="w-[40%] text-white text-xl font-semibold text-center mt-24 space-y-5">
                <h1 className="text-4xl font-bold">{heading}</h1>
                <p className="text-gray-400">{des}</p>
            </div>
        </div>
    )
}

const DesignedByApple = () => {
    const scrollData = [
        {
            title: "Front.", des: " A singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy frame that curves to wrap around your face."
        },
        {
            title: "Light Seal.", des: " The Light Seal gently flexes to conform to your face, delivering a precise fit while blocking out stray light."
        },
        {
            title: "Head bands.", des: " The Solo Knit Band provides cushioning, breathability, and stretch, and a Fit Dial lets you adjust Apple Vision Pro precisely to your head. The Dual Loop Band offers an additional option for a personalized fit."
        },
        {
            title: "Power. ", des: " The external battery supports up to 2 hours of general use and up to 2.5 hours of video playback."
        },
        {
            title: "Sound. ", des: " Speakers positioned close to your ears deliver rich Spatial Audio while keeping you aware of your surroundings."
        },
        {
            title: "EyeSight. ", des: " An outward display reveals your eyes while wearing Apple Vision Pro, letting others know when you are using apps or fully immersed."
        },
    ]
    return (
        <section className="bg-[#f4f4f7] flex-center flex-col py-24">
            <div className="flex-center flex-col text-xl font-semibold w-[40%] text-center gap-5 mb-24">
                <h1 className="">Design</h1>
                <h1 className="text-7xl font-bold">Designed by Apple.</h1>
                <p className=" text-gray-500">Apple Vision Pro is the result of decades of experience designing high‑performance, mobile, and wearable devices - culminating in the most ambitious product Apple has ever created. Apple Vision Pro integrates incredibly advanced technology into an elegant, compact form, resulting in an amazing experience every time you put it on.</p>
            </div>
            <div>
                <Image src="https://www.apple.com/v/apple-vision-pro/e/images/overview/design/portrait_right_base__cd0c4xdglcs2_large_2x.jpg" alt="designedbyapple" width={1000} height={1000} />
            </div>
        </section>
    )
}

const InfoSection = ({ heading, des, btnText }: { heading: any, des: string, btnText: string }) => {
    return (
        <section className=" w-full my-12 flex-center py-24">
            <div className="flex w-[50%] gap-32">
                <h1 className="text-3xl font-bold text-nowrap">{heading}</h1>
                <div className="">
                    <p className="text-xl pb-10 font-semibold text-gray-600 text-justify">{des}</p>                    
                    <OrangeButton text={btnText}/>
                </div>
            </div>
        </section>
    )
}

const VideoSection = ({ src, heading, des }: { src: string, heading: string, des: any }) => {
    return (
        <section className=" w-full h-[100vh] relative flex-center my-12">
            <video className="pointer-events-none w-full h-full object-cover" autoPlay muted preload='none'>
                <source src={src} />
            </video>
            <div className=" w-full flex-center flex-col gap-5 text-3xl font-semibold text-white absolute">
                <h1 className="text-md font-medium">{heading}</h1>
                <h1 className="text-8xl text-center">{des}</h1>
            </div>
        </section>
    )
}

const OrangeButton = ({text, className}:{text:string, className?:string}) => {
    return (
        <button className={`hover:bg-orange-500 bg-orange-600 ease-linear duration-100 text-white px-5 py-3 text-xl rounded-full ${className}`}>{text}</button>
    )
}