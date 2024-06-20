'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Marquee from "react-fast-marquee"

const MarqueeGen = ({data, imgWidth=200, hoverText}:{data:any, imgWidth?: number, hoverText:string}) => {
    const [hover, setHover] = useState({c: 0, hover: false})

    return (
        <section className='my-3'>
            <Marquee speed={120}>
                {data.map((d: any, i: number) => {
                    const isHovered = hover.c === i && hover.hover === true

                    return(
                    <div key={i} className='m-3' onMouseEnter={()=>setHover({c:i, hover: true})} onMouseLeave={()=>setHover({c:i, hover: false})}>
                        <div className='relative h-[80%]'>
                            <Image src={d.imgSrc} alt={d.title} width={imgWidth} height={100} className=' rounded-xl'/>
                            <div className={`absolute h-full w-full top-0 ${isHovered?"flex-center":"hidden"} bg-[#00000021] backdrop-blur-sm `}>
                                <button className='font-semibold bg-white rounded-full px-5 py-2'>{hoverText}</button>
                            </div>
                        </div>
                        <div className='mx-2 h-[20%]'>
                            <h1 className='text-lg font-medium w-[90%] overflow-hidden text-wrap'>{d.title}</h1>
                            <h1 className=' text-gray-700'>{d.genere}</h1>
                        </div>

                    </div>
                )})}
            </Marquee>
        </section>
    )
}

export default MarqueeGen