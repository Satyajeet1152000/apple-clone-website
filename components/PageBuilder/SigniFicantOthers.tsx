'use client'
import React, { useState } from 'react'
import BnGText from '../BnGText'
import Image from 'next/image'

const SigniFicantOthers = ({ heading, data }: { heading: string, data: any }) => {
    const btnSymbol = <svg className="accordion-icon-svg" viewBox="0 0 17 8.85">	<polyline data-accordion-icon-shape="" stroke="currentColor" strokeWidth={2} stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd" points="15 1.13 8.5 7.72 2 1.13"></polyline></svg>

    const [btnStatus, setBtnStatus] = useState([true, false, false])
    const [img, setImg] = useState(data[0].imgSrc)

    const handleButton = (i: number) => {
        const trueI = btnStatus.findIndex(value => value === true);

        if (i !== trueI) {
            const a = [...btnStatus]
            a[i] = true
            a[trueI] = false

            setBtnStatus(a)
            setImg(data[i].imgSrc)
        }
    }
    return (
        <section className='w-full relative text-[3vmin] py-[5vmin] gap-[5vmin] h-max bbr'>
            <div className='w-[100vw] bbs'>
                <BnGText btext={heading} />
                <div className='bbr mx-[10vmin] p-[5vmin] bg-[#f1fbff]/50 rounded-2xl'>
                    {data.map((d: any, i: number) =>(
                        <div key={i} className='bbs'>
                            <button
                            className={`flex items-center justify-between text-left px-3 py-2 text-[1.2em] font-semibold text-nowrap ${btnStatus[i] ? "" : ""} w-full`}
                            onClick={() => handleButton(i)}
                            >
                                {d.title}
                                <span
                                    className={`text-4xl text-gray-500 w-6 ${btnStatus[i] ? "rotate-180" : "rotate-0"}`}
                                >
                                    {btnSymbol}
                                </span>
                            </button>

                            {/* description */}
                            <div className={`${btnStatus[i] ? "pb-5" : "hidden"} px-3 text-[.8em]`}>
                                {data[i].description}
                            </div>

                            {/* Image Area */}
                            <div className={`${btnStatus[i] ? "flex-center" : "hidden"}`}>
                                <Image src={data[i].imgSrc} alt='image' width={1000} height={300} className='w-[45vmin]' />
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className='flex-center flex-col bbr'> */}
                    {/* <div className=' bg-[#fff] rounded-2xl w-[80vw] p-[5vmin] shadow-lg bbs'> */}
                        {/* {data.map((d: any, i: number) => ( */}
                                {/* <div key={i} className=''> */}
                                {/* <button
                                    className={`flex items-center justify-between text-left px-3 py-2 text-[1.2em] font-semibold text-nowrap ${btnStatus[i] ? "" : ""} w-full`}
                                    onClick={() => handleButton(i)}
                                >
                                    {d.title}
                                    <span
                                        className={`text-4xl text-gray-500 w-6 ${btnStatus[i] ? "rotate-180" : "rotate-0"}`}
                                    >
                                        {btnSymbol}
                                    </span>
                                </button> */}

                                {/* description */}
                                {/* <div className={`${btnStatus[i] ? "pb-5" : "hidden"} px-3 text-[.8em]`}>{data[i].description} */}
                                {/* </div> */}

                                {/* Image Area */}
                                {/* <div className={` px-[10vmin] ${btnStatus[i] ? "flex-center" : "hidden"}`}>
                                    <Image src={data[i].imgSrc} alt='image' width={1000} height={300} style={{ height: 'auto', width: "auto" }} />
                                </div> */}

                                {/* Extra Line */}
                                {/* <div className='border-b-2 border-gray-300 w-[100%] mt-[2vh]'></div> */}
                            {/* </div> */}
                        {/* ))} */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </section>
    )
}

export default SigniFicantOthers