import React from 'react'
import BnGText from '../BnGText'
import Image from 'next/image'
import ImageCarousel from '../ImageCarousel'

const Essentials = ({ heading, data, updown }: { heading: string, data: any, updown: boolean }) => {
    return (
        <section className='section'>
            <div>
                <BnGText btext={heading} gtext='' classname=' mx-28 pb-16 font-semibold text-5xl' />
                <div className='w-[100vw] flex-center flex-wrap gap-5'>
                    {data.map((d: any, index: number) => (
                        <>
                            {!updown ?
                                <div key={index} className='gap-10 flex items-center justify-between flex-col self-stretch'>
                                    <div className="text-center px-5 ">
                                        <h1 className=' text-[1em] font-semibold'>{d.title}</h1>
                                        <h1 className='text-[.7em]'>{d.description}</h1>
                                        <h1 className='text-[.7em] text-blue hover:underline'>{"Learn More >"}</h1>
                                    </div>

                                    <Image
                                        src={d.imgSrc}
                                        alt={`section${index}_image`}
                                        className='w-[50vmin]'
                                        width={500}
                                        height={300}
                                    />
                                </div>
                                :
                                <>
                                    {index % 2 === 0 ?
                                        <div key={index} className='gap-10 flex items-center justify-between flex-col self-stretch'>
                                            <div className="text-center px-5 ">
                                                <h1 className=' text-[1em] font-semibold'>{d.title}</h1>
                                                <h1 className='text-[.7em]'>{d.description}</h1>
                                                <h1 className='text-[.7em] text-blue hover:underline'>{"Learn More >"}</h1>
                                            </div>

                                            <Image
                                                src={d.imgSrc}
                                                alt={`section${index}_image`}
                                                className='w-[50vmin]'
                                                width={500}
                                                height={300}
                                            />
                                        </div>
                                        :
                                        <div key={index} className='gap-10 flex items-center justify-between flex-col self-stretch'>
                                            <Image
                                                src={d.imgSrc}
                                                alt={`section${index}_image`}
                                                className='w-[50vmin]'
                                                width={500}
                                                height={300}
                                            />
                                            <div className="text-center px-5 ">
                                                <h1 className=' text-[1em] font-semibold'>{d.title}</h1>
                                                <h1 className='text-[.7em]'>{d.description}</h1>
                                                <h1 className='text-[.7em] text-blue hover:underline'>{"Learn More >"}</h1>
                                            </div>
                                        </div>
                                    }
                                </>
                            }
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Essentials