import Banner from "@/components/PageBuilder/Banner"
import DeviceTypesList from "@/components/PageBuilder/DeviceTypesList"
import HeroVideo_Heading from "@/components/PageBuilder/HeroVideo_Heading"
import { bannerDate, introVideo, lastData, magicalData, productData, topData } from "./data"
import Image from "next/image"
import ImageCarousel from "@/components/ImageCarousel"

const page = () => {
    return (
        <>
            <DeviceTypesList data={topData} />
            <Banner data={bannerDate} />
            <Section
                isImage={false}
                src={introVideo}
                title="AirPods Pro"
                subTitle="2nd generation"
                price="$249"
                color="white"
                btnBg="white"
                btnText="black"
            />

            <Section
                src={"https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg"}
                title="AirPods"
                subTitle="3rd generation"
                price="$169"
            />

            <Section
                src={"https://www.apple.com/v/airpods/v/images/overview/airpods_2ndgen_left__gjpt8k836yy6_large_2x.png"}
                src2="https://www.apple.com/v/airpods/v/images/overview/airpods_2ndgen_right__gahfggwvcx6q_large_2x.png"
                title="AirPods"
                subTitle="2nd generation"
                price="$129"
            />

            <Section
                src={"https://www.apple.com/v/airpods/v/images/overview/airpods_max__f265q4g4ddym_large.png"}
                title="AirPods Max"
                subTitle=""
                price="$549"
            />

            <section className="bg-[#f4f5f8]">
                <div className="text-7xl font-bold w-full py-12 text-center">
                    A magical connection to <br /> you devices.
                </div>
                <ImageCarousel margin={24}>
                    {magicalData.map((d, i) => (
                        <div key={i} className="relative bg-white rounded-3xl mx-5 flex items-center flex-col h-[70%] px-5 shadow-xl">
                            <div className="overflow-hidden flex-center h-[95%]">
                                <Image src={d.imgSrc} alt="magicalImages" width={400} height={200} quality={100} className="" />
                            </div>
                            <div className="flex items-center w-full px-5 py-3 justify-between text-2xl font-semibold">
                                <h1>{d.text}</h1>
                                <button className="bg-black text-white rounded-full h-10 w-10 flex-center">+</button>
                            </div>
                        </div>
                    ))}
                </ImageCarousel>
            </section>

            {/* Product data section */}
            <section className="bg-[#f4f5f8] px-24 overflow-y-hidden">
                <div className="text-7xl font-bold w-full py-12 text-center">
                    Which AirPods are <br /> right for you?
                </div>
                <ImageCarousel margin={24}>
                {productData.map((d,i) => (
                    <div key={i}>
                        <div className="flex-center flex-col text-center">
                            <div className="flex items-end h-72">
                                <Image src={d.imgSrc} alt="airpods" width={200} height={100} quality={100} />
                            </div>
                            <div className=" h-28 flex flex-col justify-between">
                                <h1 className="text-3xl font-semibold">{d.title}</h1>
                                {d.subTitle? 
                                    <h1>{d.subTitle}</h1>
                                    :
                                    <h1>-</h1>
                                }
                                <h1>{d.price}</h1>
                            </div>
                            <button className={` text-white px-5 py-2 rounded-full bg-sky-700 my-2`}>Buy</button>
                            <a href="" className={`hover:underline text-sky-700 underline-offset-4`}>Learn More</a>
                            <div className="w-full border-[1px] border-gray-400 my-2"></div>

                            <div className="">
                                {d.adaptive ? 
                                    <div className="flex-center flex-col h-20">
                                        <Image src={d.adaptive.imgSrc} alt="adaptive" width={40} height={40}/>
                                        <div>{d.adaptive.info}</div>
                                    </div>
                                    :
                                    <div className="flex-center flex-col h-20">
                                        <div>-</div>
                                    </div>
                                }
                                {d.activeNoise ? 
                                    <div className="flex-center flex-col h-32">
                                        <div className=" flex gap-3">
                                            <Image src={d.activeNoise.imgSrc[0]} alt="adaptive" width={30} height={40}/>
                                            <Image src={d.activeNoise.imgSrc[1]} alt="adaptive" width={30} height={40}/>
                                        </div>
                                        <div>{d.activeNoise.info}</div>
                                    </div>
                                    :
                                    <div className="flex-center flex-col h-32">
                                        <div>-</div>
                                    </div>
                                }
                                {d.conAvr ? 
                                    <div className="flex-center flex-col h-20">
                                        <Image src={d.conAvr.imgSrc} alt="adaptive" width={40} height={40}/>
                                        <div>{d.conAvr.info}</div>
                                    </div>
                                    :
                                    <div className="flex-center flex-col h-20">
                                        <div>-</div>
                                    </div>
                                }
                                {d.perSpa ? 
                                    <div className="flex-center flex-col h-20">
                                        <Image src={d.perSpa.imgSrc} alt="adaptive" width={40} height={40}/>
                                        <div>{d.perSpa.info}</div>
                                    </div>
                                    :
                                    <div className="flex-center flex-col h-20">
                                        <div>-</div>
                                    </div>
                                }
                                {d.resist ? 
                                    <div className="flex-center flex-col h-20">
                                        <Image src={d.resist.imgSrc} alt="adaptive" width={30} height={40}/>
                                        <div>{d.resist.info}</div>
                                    </div>
                                    :
                                    <div className="flex-center flex-col h-20">
                                        <div>-</div>
                                    </div>
                                }
                                {d.magsafe && 
                                    <div className="flex-center flex-col h-52">
                                        <Image src={d.magsafe.imgSrc} alt="adaptive" width={100} height={40}/>
                                        <div>{d.magsafe.info}</div>
                                    </div>
                                }
                                {d.battery ? 
                                    <div className="flex-center flex-col h-20">
                                        <h1 className="text-4xl font-medium">{d.battery} hrs</h1>
                                        <h1>Up to {d.battery} hours of listening <br/> time with a single charge.</h1>
                                    </div>
                                    :
                                    <div className="flex-center flex-col h-20">
                                        <div>-</div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                ))}

                </ImageCarousel>

                <h1 className=" text-sky-700 text-xl font-medium w-full text-center mt-24 hover:underline underline-offset-2">Compare all AirPods models {">"}</h1>

                <div className="w-90% border border-gray-400 my-24"></div>
                
                <div className="flex gap-10 justify-center h-72 mb-10">
                    {lastData.map((d,i) => (
                        <div key={i} className="flex items-center justify-start flex-col gap-2 text-center h-[100%] ">
                            <Image src={d.icon} alt="lastdata" width={50} height={50}/>
                            <h1 className="font-semibold text-2xl">{d.title}</h1>
                            <h1>{d.des}</h1>
                            <h1 className=" text-sky-700 hover:underline underline-offset-2">Learn more {">"}</h1>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default page

const Section = ({ isImage = true, src, src2, title, subTitle, price, color = "black", btnBg, btnText }: { isImage?: boolean, src: string, src2?: string, title: string, subTitle: string, price: string, color?: string, btnBg?: string, btnText?: string }) => {
    return (
        <section className="relative bg-[#f4f5f8] px-24 py-5 flex-center h-[100vh]">
            {isImage ?
                <div className={`w-[100%] h-full rounded-3xl bg-white flex-center relative overflow-hidden ${src2 && "gap-[30%] pt-24"}`}>
                    <Image src={src} alt="sectionImage" width={500} height={600} className="" style={{ width: 'auto', height: '100%' }} quality={100} />
                    {src2 &&
                        <Image src={src2} alt="sectionImage" width={500} height={600} className="mt-[30%]" style={{ width: 'auto', height: '100%' }} quality={100} />
                    }
                </div>
                :
                <video className="pointer-events-none h-[100%] w-[100%] object-fill rounded-3xl" autoPlay loop muted preload='none'>
                    <source src={src} type="video/mp4" />
                </video>
            }
            <div className={`h-full w-full flex-center flex-col absolute top-0`}>
                <h1 className="text-9xl font-semibold" style={{ color }}>{title}</h1>
                <h1 className="text-2xl font-semibold" style={{ color }}>{subTitle}</h1>
                <h1 className="text-2xl" style={{ color }}>From {price}</h1>
                <ButtonLink bgColor={btnBg} textColor={btnText} />
            </div>
        </section>
    )
}

const ButtonLink = ({ btnText = "Buy", linkText = "Learn More >", bgColor = "blue", textColor = "white" }: { btnText?: string, linkText?: string, bgColor?: string, textColor?: string }) => {
    return (
        <div className={`space-x-3 bottom-20 absolute`}>
            <button className={` text-${textColor} px-5 py-2 rounded-full bg-${bgColor}`}>{btnText}</button>
            <a href="" className={`hover:underline text-${bgColor} underline-offset-4`}>{linkText}</a>
        </div>
    )
}