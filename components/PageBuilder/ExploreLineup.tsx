import React from 'react'
import BnGText from '../BnGText'
import ImageCarousel from '../ImageCarousel'
import Image from 'next/image'

const ExploreLineup = ({ heading, data, style, bg="white" }: { heading: string, data: any, style?: any, bg?:string }) => {
    return (
        <section className='section' style={{backgroundColor: bg}}>
            <div>
                <BnGText btext={heading} />
                <div className=''>
                    <ImageCarousel margin={24}>
                        {data.map((d: any, index: number) => (
                            <div key={index} className=' relative mx-2 flex flex-col items-center self-stretch'>

                                {/* Images */}
                                <div className='flex items-end justify-center h-[35vmin]'>
                                    <Image
                                        src={d.imgSrc}
                                        alt={`section${index}_image`}
                                        width={650}
                                        height={200}
                                        style={style}
                                        className='hover:scale-[1.03] transition-all ease-linear duration-75'
                                    />
                                </div>


                                <div className="mt-10 text-[3vw] sm:text-[2vw] lg:text-[1.8vw] xl:text-[1.5vw] 2xl:text-[1.1vw]">
                                    {/* Color dots */}
                                    {d.colors ?
                                        <div className='flex-center gap-2'>
                                            {d.colors && d.colors.map((c: string, i: number) => (<div key={i} className='h-3 w-3 rounded-full' style={{ backgroundColor: c }}></div>))}
                                        </div>
                                        :
                                        <div className='h-3 w-3'></div>
                                    }

                                    {/* hading and infos */}
                                    <div className='pt-5 flex-center flex-col text-center gap-2'>
                                        <div className='h-40 flex-center flex-col gap-2'>
                                            <h1 className='text-[1.2em] font-semibold text-nowrap'>{d.model.name}</h1>
                                            {d.model.chipInfo && <h1 className='text-[1em] font-semibold'>{d.model.chipInfo}</h1>}
                                            {d.model.info && <p className='text-[.8em]'>{d.model.info}</p>}
                                            <h1 className='font-semibold text-nowrap text-[.8em]'>{d.price}</h1>
                                        </div>

                                        {/* Buttons */}
                                        <div className='flex justify-between items-center w-full px-2 py-2 text-[1em]'>
                                            <button className='text-white bg-sky-600 hover:bg-sky-500 rounded-full px-4 py-2'>Learn More</button>
                                            <a href="" className=' text-blue hover:underline'>Buy{" >"}</a>
                                        </div>

                                        {/* Gray Line */}
                                        <div className='h-[2px] w-[100%] bg-gray-300 my-5'></div>

                                        {/* Apple Watch Case  */}
                                        {d.case &&
                                            <div className=' w-full'>
                                                <div className='w-full flex-center relative h-16'>
                                                    <Image src={d.case.imgSrc} alt='chip' layout='fill' objectFit='contain' />
                                                </div>
                                                <h1 className='text-sm'>{d.case.info}</h1>
                                            </div>
                                        }

                                        {/* Display infos */}
                                        {d.display &&
                                            <>
                                                <div className='w-full'>
                                                    {d.display.imgSrc &&
                                                        <div className='w-full flex-center relative h-16'>
                                                            <Image src={d.display.imgSrc} alt='chip' layout='fill' objectFit='contain' quality={100}/>
                                                        </div>
                                                    }
                                                    {d.display.size && <h1 className='font-medium text-[1em]'>{d.display.size}</h1>}
                                                    {d.display.info && <h1 className='text-[.7em]'>{d.display.info}</h1>}
                                                </div>

                                                {/* Quality Info */}
                                                {(d.display.quality && d.display.qualityInfo) &&
                                                    <div className=' w-full'>
                                                        <h1 className='font-medium text-[1em]'>{d.display.quality}K</h1>
                                                        <h1 className='text-[.7em]'>{d.display.qualityInfo}</h1>
                                                    </div>
                                                }

                                                {/* nits info */}
                                                {(d.display.nits && d.display.nitsInfo) &&
                                                    <div className=' w-full'>
                                                        <h1 className='font-medium text-[1em]'>{d.display.nits} nits</h1>
                                                        <h1 className='text-[.7em]'>{d.display.nitsInfo}</h1>
                                                    </div>
                                                }
                                            </>
                                        }

                                        {/* Chip Info */}
                                        {d.chip &&
                                            <div className=' w-full'>
                                                <div className='w-full flex-center relative h-16'>
                                                    <Image src={d.chip.imgSrc} alt='chip' layout='fill' objectFit='contain' />
                                                </div>
                                                <h1 className='text-[.7em]'>{d.chip.info}</h1>
                                            </div>
                                        }

                                        {/* camera */}
                                        {
                                            Array.isArray(d?.cameraInfo) &&
                                            d.cameraInfo.map((cam: any | undefined, i: number) => (
                                                <div key={i} className='flex-center flex-col pt-3'>
                                                    <Image src={cam?.imgSrc} alt='camera' width={50} height={50} />
                                                    <h1 className='text-[.7em]'>{cam?.info}</h1>
                                                </div>
                                            ))

                                        }

                                        {/* Apple Pencil */}
                                        {d?.pencil &&
                                            <div className='flex-center flex-col pt-3'>
                                                <Image src={d.pencil?.imgSrc} alt='camera' width={15} height={50} />
                                                <h1 className='text-[.7em]'>{d.pencil?.info}</h1>
                                            </div>
                                        }

                                        {/* Keyboard */}
                                        {d?.keyboard &&
                                            <div className='flex-center flex-col pt-3'>
                                                <Image src={d.keyboard?.imgSrc} alt='camera' width={50} height={50} />
                                                <h1 className='text-[.7em]'>{d.keyboard?.info}</h1>
                                            </div>
                                        }

                                        {/* True Tone */}
                                        {d.display?.trueTone &&
                                            <div className='flex-center flex-col h-26 w-full pt-3'>
                                                <Image src={'https://www.apple.com/v/mac/home/bz/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large.png'} alt='camera' width={50} height={50} />
                                                <h1 className='text-[.7em]'>{d.display.trueTone}</h1>
                                            </div>
                                        }


                                        {/* Pcie Slots */}

                                        {d?.pcie &&
                                            <div className=' pt-3'>
                                                <h1 className='font-medium text-[1em]'>PCIe</h1>
                                                <h1 className='text-[.7em]'>{d.pcie}</h1>
                                            </div>
                                        }

                                        {/* Battery info */}
                                        {d.battery &&
                                            <h1 className=' text-sm  w-full text-[.7em]'>
                                                Up to <br />
                                                <span className='font-medium text-[1.2em]'>{d.battery} hours</span>
                                                <br /> battery life
                                            </h1>
                                        }

                                        {/* Apple Watch Sensors */}
                                        {d?.sensors &&
                                            <div className='flex-center flex-col h-26 w-full pt-3'>
                                                <Image src={d.sensors.imgSrc} alt='camera' width={50} height={50} />
                                                <h1 className='text-[.7em]'>{d.sensors.info}</h1>
                                            </div>
                                        }

                                        {/* iphone Battery */}
                                        {d?.ibattery &&
                                            <div className='flex-center flex-col h-26 w-full pt-3'>
                                                <Image src={d.ibattery.imgSrc} alt='camera' width={50} height={50} />
                                                <h1 className='text-[.7em]'>{d.ibattery.info}</h1>
                                            </div>
                                        }

                                        {/* ports */}
                                        {d.ports &&
                                            <h1 className=' text-sm h-26 w-full pt-3 text-[.7em]'>
                                                Up to <br />
                                                <span className='font-medium text-[1.2em]'>{d.ports.count} </span>
                                                <br />{d.ports.info}
                                            </h1>
                                        }

                                        {/* Weight */}
                                        {d.weight &&
                                            <h1 className=' text-sm  w-full pt-3 text-[.7em]'>
                                                <br />
                                                <span className='font-medium text-[1.2em]'>{d.weight}</span>
                                                <br /> Weight
                                            </h1>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ImageCarousel>
                </div>
            </div>
        </section>
    )
}

export default ExploreLineup