import React from 'react'
import BnGText from '../BnGText'
import ImageCarousel from '../ImageCarousel'
import Image from 'next/image'

const GetToKnow = ({ heading, data }: { heading: string, data: any }) => {
    return (
        <section className=' my-14'>
            <BnGText btext={heading} gtext='' classname=' mx-28 pb-16 font-semibold text-5xl' />
            <div className=''>
                <ImageCarousel margin={24}>
                    {data.map((d: any, index: number) => (
                        <div key={index} className='relative h-full scale-95 shrink-0 hover:scale-100 transition-all ease-linear'>
                            <Image src={d.imgSrc} alt={`section${index}_image`} width={400} height={200} className=' rounded-3xl' />
                            <div className={`absolute top-0 mt-10 ml-10 text-${d.textData.color}`}>
                                <h1 className='text-xl'>{d.textData.label}</h1>
                                <h1 className='text-3xl font-bold'>{d.textData.headline}</h1>
                            </div>
                        </div>
                    ))}
                </ImageCarousel>
            </div>
        </section>
    )
}

export default GetToKnow