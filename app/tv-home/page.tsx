import DeviceTypesList from '@/components/PageBuilder/DeviceTypesList'
import React from 'react'
import { accessoriesData, everyReasonData, imagePanel, introData, topData, watchData, watchDataVideo } from './data'
import Image from 'next/image'
import { lastData } from '../airpods/data'

const page = () => {
  return (
    <>
        <DeviceTypesList data={topData} />
        <section className='bg-[#f5f5f7] flex-center flex-col p-24 mt-10'>
            <Image src={introData.imgSrc} alt= "tv-home intro" width={800} height={600} />
            <div className='w-[60%] text-center'>
                <h1 className='text-8xl font-bold'>{introData.title}</h1>
                <p className='text-3xl font-semibold text-gray-500'>{introData.des}</p>
            </div>
        </section>

        {/* Image Panel */}
        <section className='flex-center p-24 bg-[#f5f5f7]'>
            <div  className='flex flex-row flex-wrap px-24'>
                {imagePanel.map((d, i)=>(
                    <div key={i} className={` w-1/2 flex flex-col`}>
                        <div className={`${imagePanel[i].color === 'white'? "bg-black text-white":"bg-white text-black"} m-5 h-full rounded-3xl flex flex-col justify-between`}>
                            <div className='w-full text-center font-semibold space-y-3 my-20 '>
                                <h1 className='text-xl'>{imagePanel[i].title}</h1>
                                <h1 className='text-5xl'>{imagePanel[i].subTitle}</h1>
                                <h1 className='text-xl'>{imagePanel[i].price}</h1>
                            </div>
                            <Image src={imagePanel[i].imgSrc} alt='image panel' width={400} height={500} className='w-full rounded-3xl'/>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* every reason Section */}
        <section className='bg-[#f5f5f8] p-24 flex-center flex-col'>
            <div className='text-center text-7xl font-semibold pb-10'>Every reason to turn your house <br/> into a smart home.</div>
            <div className='w-full flex justify-between'>
                {everyReasonData.map((d,i) => (
                    <div key={i} className='w-1/4'>
                        <div className='bg-white m-5 rounded-3xl flex justify-between flex-col h-[90%]'>
                            <div className='text-center font-semibold space-y-2 w-full my-10 px-3'>
                                <h1 className='text-3xl'>{d.title}</h1>
                                <a className='text-lg text-sky-700 hover:underline underline-offset-2' href=''>{d.link}</a>
                            </div>
                            {d.imgSrc ? 
                                <Image src={d.imgSrc} alt='everyReason_image' width={500} height={200} className=' rounded-3xl'/>
                                :
                                <div className='h-[100%] flex justify-center items-center text-5xl font-bold text-center px-5 bg-gradient-to-r from-red-500 via-purple-500 to-sky-500 text-transparent bg-clip-text'>Hey Siri, turn off the lights downstairs</div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Accessories section */}
        <section className='bg-[#f5f5f8] p-24 flex-center flex-col'>
            <div className='text-center text-7xl font-semibold pb-10'>Accessories. Around your home<br/> and across your devices.</div>
            <a href="" className='text-sky-700 text-xl font-semibold hover:underline underline-offset-2'>Shop accessories {">"}</a>
            <div className='w-full flex justify-between'>
                {accessoriesData.map((d,i) => (
                    <div key={i} className='w-1/4'>
                        <div className='bg-white m-5 rounded-3xl relative'>
                            <div className='text-center font-semibold space-y-3 w-full my-10 px-3'>
                                <h1 className='text-3xl'>{d.title}</h1>
                                <p className='text-lg text-gray-500'>{d.des}</p>
                                <a className='text-md text-sky-700 hover:underline underline-offset-2' href=''>{d.link}</a>
                            </div>
                            <Image src={d.imgSrc} alt='everyReason_image' width={500} height={200} className='rounded-3xl' quality={100}/>
                            
                            <div className='bsolute bottom-2 text-center px-3 w-full text-gray-600 text-md'>{d.text}</div>
                        </div>
                    </div>
                ))}
            </div>

        </section>

        {/* watch sing section */}
        <section className='bg-[#f5f5f8] p-24 flex-center flex-col'>
            <div className='text-center text-7xl font-semibold pb-10'>Watch, sing, play, and work out.<br/> On the big screen.</div>
            <video className='border-[6px] border-black shadow-[20px_20px_20px_5px_rgba(0,_0,_0,_0.2)]' autoPlay loop muted preload=''>
                <source src={watchDataVideo}  type="video/mp4"/> 
            </video>

            <div className='flex-center px-36 py-10'>
                {watchData.map((d, i) => (
                    <div key={i} className='w-1/4 flex-center flex-col text-center gap-5'>
                        <Image src={d.imgSrc} alt='watchImage' width={200} height={100} quality={100}/>
                        <div className='space-y-2'>
                            <p className='text-2xl font-medium'>{d.des}</p>
                            <div className=' w-full flex-center flex-col gap-3'>
                                <button className='text-md py-1 bg-sky-600 text-white w-[30%] rounded-full'>Try it free</button>
                                <a className=' text-sky-600 hover:underline underline-offset-2' href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex-center gap-10'>
                <div className='flex-center flex-col text-center'>
                    <Image src={"https://www.apple.com/ac/globalfooter/8/en_US/assets/ac-buystrip/shipping/icon_large.svg"} alt='watchImage' width={80} height={100} quality={100}/>
                    <h1 className='text-2xl font-semibold'>Fast, free delivery</h1>
                    <p>Or pick up available items at an<br/> Apple Store.</p>
                    <a href="" className=' text-sky-600 hover:underline underline-offset-2'>Learn More {">"}</a>
                </div>
                <div className='flex-center flex-col text-center'>
                    <Image src={"https://www.apple.com/ac/globalfooter/8/en_US/assets/ac-buystrip/help/icon_large.svg"} alt='watchImage' width={80} height={100} quality={100}/>
                    <h1 className='text-2xl font-semibold'>Get help buying</h1>
                    <p>Have a question? Call a Specialist<br/>or chat online. <br/>Call 1-800-MY-APPLE.</p>
                    <a href="" className=' text-sky-600 hover:underline underline-offset-2'>Contact us {">"}</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default page