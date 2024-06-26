import DeviceTypesList from '@/components/PageBuilder/DeviceTypesList'
import React from 'react'
import { accessoriesData, everyReasonData, imagePanel, introData, topData, watchData, watchDataVideo } from './data'
import Image from 'next/image'
import { lastData } from '../airpods/data'

const page = () => {
  return (
    <>
        <DeviceTypesList data={topData} />
        <section className='bg-[#f5f5f7] section'>
            <Image src={introData.imgSrc} alt= "tv-home intro" width={800} height={600} className='w-[50vmin]' />
            <div className='w-[80vmin] text-center'>
                <h1 className='text-[2em] font-bold'>{introData.title}</h1>
                <p className='text-[.8em] font-semibold text-gray-500'>{introData.des}</p>
            </div>
        </section>

        {/* Image Panel */}
        <section className='section bg-[#f5f5f7]'>
            <div  className='flex-center flex-wrap gap-[5vmin]'>
                {imagePanel.map((d, i)=>(
                    <div key={i} className={`flex flex-col self-stretch`}>
                        <div className={`${imagePanel[i].color === 'white'? "bg-black text-white":"bg-white text-black"} h-full rounded-3xl flex flex-col justify-between`}>
                            <div className='w-full text-center font-semibold space-y-3 my-[10vmin]'>
                                <h1 className='text-[1em]'>{imagePanel[i].title}</h1>
                                <h1 className='text-[1.5em]'>{imagePanel[i].subTitle}</h1>
                                <h1 className='text-[1em]'>{imagePanel[i].price}</h1>
                            </div>
                            <Image src={imagePanel[i].imgSrc} alt='image panel' width={400} height={500} className='w-full rounded-3xl'/>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* every reason Section */}
        <section className='bg-[#f5f5f8] section'>
            <div className='text-center text-[2em] font-semibold'>Every reason to turn your house <br/> into a smart home.</div>
            <div className='flex-center flex-wrap gap-[5vmin]'>
                {everyReasonData.map((d,i) => (
                    <div key={i} className='rounded-3xl flex justify-between items-center flex-col w-[40vmin] bg-white self-stretch'>
                        {/* <div className='flex justify-between flex-col '> */}
                            <div className='text-center font-semibold space-y-2 w-full py-[5vmin]'>
                                <h1 className='text-[.8em]'>{d.title}</h1>
                                <a className='text-[.6em] text-sky-700 hover:underline underline-offset-2' href=''>{d.link}</a>
                            </div>
                            {d.imgSrc ? 
                                <Image src={d.imgSrc} alt='everyReason_image' width={500} height={200} className=' rounded-3xl'/>
                                :
                                <div className='h-[100%] flex justify-center items-center text-[1em] font-bold text-center px-5 bg-gradient-to-r from-red-500 via-purple-500 to-sky-500 text-transparent bg-clip-text'>Hey Siri, turn off the lights downstairs</div>
                            }
                        {/* </div> */}
                    </div>
                ))}
            </div>
        </section>

        {/* Accessories section */}
        <section className='bg-[#f5f5f8] section'>
            <div className='text-center text-[2em] font-semibold'>Accessories. Around your home<br/> and across your devices.</div>
            <a href="" className='text-sky-700 text-[.8em] font-semibold hover:underline underline-offset-2'>Shop accessories {">"}</a>
            <div className='flex-center flex-wrap gap-[5vmin]'>
                {accessoriesData.map((d,i) => (
                    <div key={i} className='bg-white rounded-3xl flex justify-between items-center flex-col w-[40vmin] self-stretch'>
                        <div className='relative h-full'>
                            <div className='text-center font-semibold space-y-[1vmin] w-full my-[2vmin] px-[1vmin]'>
                                <h1 className='text-[1em]'>{d.title}</h1>
                                <p className='text-[.6em] text-gray-500'>{d.des}</p>
                                <a className='text-[.8em] text-sky-700 hover:underline underline-offset-2' href=''>{d.link}</a>
                            </div>
                            <Image src={d.imgSrc} alt='everyReason_image' width={500} height={200} className='rounded-3xl' quality={100}/>
                            
                            <div className='absolute bottom-2 text-center px-[2vmin] w-full text-gray-600 text-[.6em]'>{d.text}</div>
                        </div>
                    </div>
                ))}
            </div>

        </section>

        {/* watch sing section */}
        <section className='bg-[#f5f5f8] section'>
            <div className='text-center text-[1.5em] font-semibold pb-[5vmin]'>Watch, sing, play, and work out.<br/> On the big screen.</div>
            <video className='border-[6px] border-black shadow-[20px_20px_20px_5px_rgba(0,_0,_0,_0.2)]' autoPlay loop muted preload=''>
                <source src={watchDataVideo}  type="video/mp4"/> 
            </video>

            <div className='flex-center flex-wrap gap-[3vmin] px-[10vmin]'>
                {watchData.map((d, i) => (
                    <div key={i} className='text-center self-stretch bg-white rounded-3xl w-[30vmin] h-[30vmin] p-[2vmin]'>
                        <div className='h-full flex items-center justify-between flex-col'>
                            <Image src={d.imgSrc} alt='watchImage' width={200} height={100} quality={100} className='w-[15vmin]'/>
                            <div className='space-y-2'>
                                <p className='text-[.7em] font-medium'>{d.des}</p>
                                <div className=' w-full flex-center flex-col gap-3'>
                                    <button className='text-[.5em] py-1 bg-sky-600 text-white w-[40%] rounded-full'>Try it free</button>
                                    <a className=' text-[.6em] text-sky-600 hover:underline underline-offset-2' href="">Learn More</a>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <div className='flex-center gap-[5vmin] self-stretch'>
                <div className='flex-center flex-col text-center'>
                    <Image src={"https://www.apple.com/ac/globalfooter/8/en_US/assets/ac-buystrip/shipping/icon_large.svg"} alt='watchImage' width={80} height={100} quality={100} className='w-[20%]'/>
                    <h1 className='text-[1em] font-semibold'>Fast, free delivery</h1>
                    <p className='text-[.8em]'>Or pick up available items at an<br/> Apple Store.</p>
                    <a href="" className='text-[.8em] text-sky-600 hover:underline underline-offset-2'>Learn More {">"}</a>
                </div>
                <div className='flex-center flex-col text-center'>
                    <Image src={"https://www.apple.com/ac/globalfooter/8/en_US/assets/ac-buystrip/help/icon_large.svg"} alt='watchImage' width={80} height={100} quality={100} className='w-[20%]'/>
                    <h1 className='text-[1em] font-semibold'>Get help buying</h1>
                    <p className=' text-[.8em]'>Have a question? Call a Specialist<br/>or chat online. <br/>Call 1-800-MY-APPLE.</p>
                    <a href="" className=' text-[.8em] hover:underline underline-offset-2'>Contact us {">"}</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default page