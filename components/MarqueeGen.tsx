'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Marquee from "react-fast-marquee"

const MarqueeGen = ({data, imgWidth=200, hoverText}:{data:any, imgWidth?: number, hoverText:string}) => {
    const [hover, setHover] = useState({c: 0, hover: false})

    return (
        <section className='my-[3vmin]'>
            <Marquee speed={120} className="flex self-stretch">
                {data.map((d: any, i: number) => {
                    const isHovered = hover.c === i && hover.hover === true

                    return(
                    <div key={i} className='mx-3 w-[40vmin] h-[100%]' onMouseEnter={()=>setHover({c:i, hover: true})} onMouseLeave={()=>setHover({c:i, hover: false})}>
                        <div className='relative'>
                            <Image src={d.imgSrc} alt={d.title} width={imgWidth} height={100} className=' rounded-xl w-[40vmin]'/>
                            <div className={`absolute h-full w-full top-0 ${isHovered?"flex-center":"hidden"} bg-[#00000021] backdrop-blur-sm `}>
                                <button className='font-semibold bg-white rounded-full px-[3vmin] py-[1vmin] text-[.8em]'>{hoverText}</button>
                            </div>
                        </div>
                        <div className='mx-[1vmin]'>
                            <h1 className='text-[1em] font-medium w-[90%] overflow-hidden text-wrap'>{d.title}</h1>
                            <h1 className=' text-gray-700 text-[.8em]'>{d.genere}</h1>
                        </div>

                    </div>
                )})}
            </Marquee>
        </section>
    )
}

export default MarqueeGen