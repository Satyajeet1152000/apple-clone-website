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

            <section className="bg-[#f4f5f8] section">
                <div className="text-[2em] font-bold w-full text-center">
                    A magical connection to <br /> you devices.
                </div>
                <ImageCarousel margin={24}>
                    {magicalData.map((d, i) => (
                        <div key={i} className="relative imgCarousel h-[55vmin] w-[45vmin] bg-white rounded-3xl">
                            <div className="overflow-hidden w-full h-[88%] flex-center ">
                                <Image src={d.imgSrc} alt="magicalImages" width={400} height={200} quality={100} className=" h-full object-contain" />
                            </div>
                            <div className="flex items-center w-full px-[1vmin]  justify-between text-[.8em] font-semibold h-[12%] text-nowrap">
                                <h1>{d.text}</h1>
                                <button className="bg-black text-white rounded-full h-[3vmin] w-[3vmin] flex-center">+</button>
                            </div>
                        </div>
                    ))}
                </ImageCarousel>
            </section>


            {/* Product data section */}
            <section className="section">
                <div className="text-[2em] font-bold w-full py-12 text-center">
                    Which AirPods are <br /> right for you?
                </div>
                <ImageCarousel margin={24}>
                {productData.map((d,i) => (
                    <div key={i}>
                        <div className="flex-center flex-col text-center w-[40vmin]">
                            <div className="flex items-end h-72">
                                <Image src={d.imgSrc} alt="airpods" width={200} height={100} quality={100} />
                            </div>
                            <div className=" h-[15vmin] flex-center flex-col">
                                <h1 className="text-[1em] font-semibold">{d.title}</h1>
                                {d.subTitle? 
                                    <h1 className="text-[.8em]">{d.subTitle}</h1>
                                    :
                                    <h1>-</h1>
                                }
                                <h1 className="text-[.8em]">{d.price}</h1>
                            </div>
                            <div className="text-[.7em] flex justify-between w-full px-[5vmin]">
                                <button className={` text-white px-[2vmin] py-[.4vmin] rounded-full bg-sky-700`}>Buy</button>
                                <a href="" className={`hover:underline text-sky-700 underline-offset-4`}>Learn More</a>
                            </div>
                            <div className="w-full border-[1px] border-gray-400 my-2"></div>

                            <div className="text-[2vmin] space-y-[1vmin]">
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
                                        <Image src={d.resist.imgSrc} alt="adaptive" width={30} height={40} className="w-[2vmin]"/>
                                        <div>{d.resist.info}</div>
                                    </div>
                                    :
                                    <div className="flex-center flex-col h-20">
                                        <div>-</div>
                                    </div>
                                }
                                {d.magsafe && 
                                    <div className="flex-center flex-col">
                                        <Image src={d.magsafe.imgSrc} alt="adaptive" width={100} height={40} className="w-[5vmin]"/>
                                        <div>{d.magsafe.info}</div>
                                    </div>
                                }
                                {d.battery ? 
                                    <div className="flex-center flex-col h-20">
                                        <h1 className="text-[1.2em] font-medium">{d.battery} hrs</h1>
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

                <h1 className=" text-sky-700 text-[.8em] font-medium w-full text-center mt-[2vmin] hover:underline underline-offset-2">Compare all AirPods models {">"}</h1>

                {/* <div className="w-90% border border-gray-400 my-24"></div> */}
                
                <div className="flex  flex-wrap justify-center gap-[5vmin]">
                    {lastData.map((d,i) => (
                        <div key={i} className="flex items-center justify-start flex-col gap-2 text-center px-[2vmin] shadow-xl rounded-2xl">
                            <Image src={d.icon} alt="lastdata" width={50} height={50}/>
                            <h1 className="font-semibold text-[1em]">{d.title}</h1>
                            <h1 className="text-[.7em]">{d.des}</h1>
                            <h1 className=" text-[.7em] text-sky-700 hover:underline underline-offset-2">Learn more {">"}</h1>
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
        <section className="bg-[#f4f5f8] w-full relative flex-center flex-col text-[3vmin] h-[100vh] py-[5vmin] gap-[5vmin]">
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
                <h1 className="text-[2em] font-semibold" style={{ color }}>{title}</h1>
                <h1 className="text-[1em] font-semibold" style={{ color }}>{subTitle}</h1>
                <h1 className="text-[1em]" style={{ color }}>From {price}</h1>
                <ButtonLink bgColor={btnBg} textColor={btnText} />
            </div>
        </section>
    )
}

const ButtonLink = ({ btnText = "Buy", linkText = "Learn More >", bgColor = "blue", textColor = "white" }: { btnText?: string, linkText?: string, bgColor?: string, textColor?: string }) => {
    return (
        <div className={`space-x-[3vmin] bottom-[8vmin] absolute`}>
            <button className={` text-${textColor} px-[4vmin] py-[.8vmin] rounded-full bg-${bgColor}`}>{btnText}</button>
            <a href="" className={`hover:underline text-${bgColor} underline-offset-4`}>{linkText}</a>
        </div>
    )
}