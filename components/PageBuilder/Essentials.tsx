import React from 'react'
import BnGText from '../BnGText'
import Image from 'next/image'
import ImageCarousel from '../ImageCarousel'

const Essentials = ({ heading, data }: { heading: string, data: any }) => {
    return (
        <section className=' my-14 pt-20'>
            <BnGText btext={heading} gtext='' classname=' mx-28 pb-16 font-semibold text-5xl' />
            <div className=''>
                <ImageCarousel margin={24}>
                    {data.map((d: any, index: number) => (
                        <div key={index} className='mx-10 flex-center flex-col'>
                            <div className="flex-center flex-col w-full h-32">
                                <h1 className=' text-3xl font-semibold'>{d.title}</h1>
                                <h1 className=''>{d.description}</h1>
                                <h1 className='text-blue hover:underline'>{"Learn More >"}</h1>
                            </div>
                                <Image 
                                    src={d.imgSrc} 
                                    alt={`section${index}_image`}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    width={500}
                                    height={300} />
                            </div>
                    ))}
                </ImageCarousel>
            </div>
        </section>
    )
}

export default Essentials