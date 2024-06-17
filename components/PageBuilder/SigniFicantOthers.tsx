'use client'
import React, { useState } from 'react'
import BnGText from '../BnGText'
import Image from 'next/image'

const SigniFicantOthers = ({ heading, data }: { heading: string, data: any }) => {
    const btnSymbol =<svg className="accordion-icon-svg" viewBox="0 0 17 8.85">	<polyline data-accordion-icon-shape="" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd" points="15 1.13 8.5 7.72 2 1.13"></polyline></svg>

    const [btnStatus, setBtnStatus] = useState([true, false, false])
    const [img, setImg] = useState(data[0].imgSrc)

    const handleButton = (i: number) => {
        const trueI = btnStatus.findIndex(value => value === true);

        if(i !== trueI){
            const a = [...btnStatus]
            a[i] = true
            a[trueI] = false

            setBtnStatus(a)
            setImg(data[i].imgSrc)
        }
    }
    return (
        <section className=' my-14'>
            <BnGText btext={heading} gtext='' classname=' mx-28 pb-16 font-semibold text-5xl' />
            <div className='flex mx-[15%]'>
                {/* text area */}
                <div className=' flex flex-col w-[30%]'>
                    {data.map((d: any, i: number) => (
                        <>
                            <button 
                                key={i}
                                className={`flex items-center justify-between px-3 py-4 text-2xl font-semibold text-nowrap ${btnStatus[i]?"":""}`}
                                onClick={()=>handleButton(i)}
                            >
                                {d.title}
                                <span 
                                    className={`text-4xl text-gray-500 w-6 ${btnStatus[i]?"rotate-180":"rotate-0"}`}
                                >
                                    {btnSymbol}
                                </span>
                            </button>

                            {/* description */}
                            <div className={`${btnStatus[i]?"pb-5":"hidden"} px-3`}>{data[i].description}
                            
                            {/* Extra Line */}
                            </div>
                            <div className='border-b-2 border-gray-300 w-[100%]'></div>
                        </>
                    ))}
                </div>
                {/* Image Area */}
                <div className='px-28'>
                    <Image src={img} alt='image' width={1000} height={1000} />
                </div>
            </div>
        </section>
    )
}

export default SigniFicantOthers