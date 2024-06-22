import { iOS18Imgs } from '@/utils'
import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import HeadingText from './HeadingText'
import Heading from './Heading'

const Ios18 = () => {
    return (
        <section className=' bg-neutral-100 section'>
            <div className='flex-center flex-col gap-y-5'>
                <Heading text='iOS 18' className='from-red-700 to-sky-800' />
                <HeadingText text='Customize your iPhone in more ways than ever, stay connected with friends and family, and relive your favorite moments. And with Apple Intelligence, the things you do every day become even more magical.' />
                <Button text='Explore the preview' />
            </div>
            <div className='flex items-center justify-center gap-3 w-[90vmax]'>
                <div className={`w-[25vmax] hidden xl:flex`}>
                    <Image
                        src={iOS18Imgs[0]}
                        alt={`iOS18`}
                        width={500}
                        height={200}
                    />
                </div>
                <div className='flex-center gap-3 w-[50vmax]'>
                    {iOS18Imgs.map((imgSrc, i) => (
                        (i >= 1 && i < iOS18Imgs.length - 1) && 
                        <div key={i}>
                            <Image
                                src={imgSrc}
                                alt={`iOS18_${i + 1}`}
                                width={500}
                                height={200}
                                className="w-[100%]"
                            />
                        </div>
                    ))}
                </div>
                <div className={`w-[25vmax] hidden xl:flex`}>
                    <Image
                        src={iOS18Imgs[4]}
                        alt={`iOS18`}
                        width={500}
                        height={200}
                    />
                </div>
            </div>
        </section>
    )
}

export default Ios18