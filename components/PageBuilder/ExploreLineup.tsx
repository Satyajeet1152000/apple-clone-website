import React from 'react'
import BnGText from '../BnGText'
import ImageCarousel from '../ImageCarousel'
import Image from 'next/image'

const ExploreLineup = ({ heading, data, style }: { heading: string, data: any, style: any }) => {
    return (
        <section className=' my-14'>
            <BnGText btext={heading} gtext='' classname=' mx-28 pb-16 font-semibold text-5xl' />
            <div className=''>
                <ImageCarousel margin={24}>
                    {data.map((d: any, index: number) => (
                        <div key={index} className=' relative w-80 mx-2 flex flex-col gap-4'>

                            {/* Images */}
                            <div className='h-72 flex items-end justify-center'>
                                <Image 
                                    src={d.imgSrc} 
                                    alt={`section${index}_image`} 
                                    width={450} 
                                    height={200}
                                    style={style}
                                    className='hover:scale-[1.03] transition-all ease-linear duration-75' 
                                />
                            </div>


                            <div className="mt-10">
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
                                        <h1 className='text-2xl font-semibold text-nowrap'>{d.model.name}</h1>
                                        {d.model.chipInfo && <h1 className='text-md font-semibold'>{d.model.chipInfo}</h1>}
                                        {d.model.info && <p className='text-md'>{d.model.info}</p>}
                                        <h1 className='font-semibold text-nowrap'>{d.price}</h1>
                                    </div>

                                    {/* Buttons */}
                                    <div className='flex justify-between items-center w-full px-10 py-4'>
                                        <button className='text-white bg-sky-600 hover:bg-sky-500 rounded-full px-4 py-2'>Learn More</button>
                                        <a href="" className=' text-blue hover:underline'>Buy{" >"}</a>
                                    </div>

                                    {/* Gray Line */}
                                    <div className='h-[2px] w-[100%] bg-gray-300 my-5'></div>

                                    {/* Display infos */}
                                    {d.display && 
                                        <>
                                            <div className='w-full'>
                                                {d.display.size && <h1 className='font-medium text-2xl'>{d.display.size}</h1>}
                                                {d.display.info && <h1 className='text-sm'>{d.display.info}</h1>}
                                            </div>

                                            {/* Quality Info */}
                                            {(d.display.quality && d.display.qualityInfo) &&
                                                <div className=' w-full'>
                                                    <h1 className='font-medium text-2xl'>{d.display.quality}K</h1>
                                                    <h1 className='text-sm'>{d.display.qualityInfo}</h1>
                                                </div>
                                            }

                                            {/* nits info */}
                                            {(d.display.nits && d.display.nitsInfo) && 
                                                <div className=' w-full'>
                                                    <h1 className='font-medium text-2xl'>{d.display.nits} nits</h1>
                                                    <h1 className='text-sm'>{d.display.nitsInfo}</h1>
                                                </div>                                                         
                                            }
                                        </>
                                    }

                                    {/* Chip Info */}
                                    {d.chip && 
                                        <div className=' w-full'>
                                            <div className='w-full flex-center relative h-16'>
                                                <Image src={d.chip.imgSrc} alt='chip' layout='fill' objectFit='contain'/>
                                            </div>
                                            <h1 className='text-sm'>{d.chip.info}</h1>
                                        </div>
                                    }

                                    {/* camera */}
                                    {
                                        Array.isArray(d?.cameraInfo) && 
                                        d.cameraInfo.map((cam:any | undefined, i:number)=>(
                                            <div key={i} className='flex-center flex-col pt-3'>
                                                <Image src={cam?.imgSrc} alt='camera' width={50} height={50} />
                                                <h1 className='text-sm'>{cam?.info}</h1>
                                             </div> 
                                        ))                                       

                                    }

                                    {/* Apple Pencil */}
                                    {d?.pencil &&
                                        <div className='flex-center flex-col pt-3'>
                                            <Image src={d.pencil?.imgSrc} alt='camera' width={15} height={50} />
                                            <h1 className='text-sm'>{d.pencil?.info}</h1>
                                        </div>
                                    }

                                    {/* Keyboard */}
                                    {d?.keyboard && 
                                        <div className='flex-center flex-col pt-3'>
                                            <Image src={d.keyboard?.imgSrc} alt='camera' width={50} height={50} />
                                            <h1 className='text-sm'>{d.keyboard?.info}</h1>
                                        </div>
                                    }

                                    {/* True Tone */}
                                    {d.display?.trueTone  &&
                                        <div className='flex-center flex-col h-26 w-full pt-3'>
                                            <Image src={'https://www.apple.com/v/mac/home/bz/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large.png'} alt='camera' width={50} height={50} />
                                            <h1 className='text-sm'>{d.display.trueTone}</h1>
                                        </div>
                                    }

                                    
                                    {/* Pcie Slots */}
                                    
                                    {d?.pcie &&
                                        <div className=' pt-3'>
                                            <h1 className='font-medium text-2xl'>PCIe</h1>
                                            <h1 className='text-sm'>{d.pcie}</h1>
                                        </div> 
                                    }

                                    {/* Battery info */}
                                    {d.battery && 
                                        <h1 className=' text-sm  w-full'>
                                            Up to <br />
                                            <span className='font-medium text-2xl'>{d.battery} hours</span>
                                            <br /> battery life
                                        </h1>
                                    }
                                    {/* ports */}
                                    {d.ports &&
                                        <h1 className=' text-sm h-26 w-full pt-3'>
                                            Up to <br />
                                            <span className='font-medium text-2xl'>{d.ports.count} </span>
                                            <br />{d.ports.info}
                                        </h1>
                                    }

                                    {/* Weight */}
                                    {d.weight &&
                                        <h1 className=' text-sm  w-full pt-3'>
                                            <br />
                                            <span className='font-medium text-2xl'>{d.weight}</span>
                                            <br /> Weight
                                        </h1>
                                    }
                                </div>            
                            </div>
                        </div>
                    ))}
                </ImageCarousel>
            </div>
        </section>
    )
}

export default ExploreLineup