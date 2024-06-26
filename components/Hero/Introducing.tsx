import { introAiImgs } from '@/utils'
import Image from 'next/image'
import React from 'react'
import HeadingText from './HeadingText'
import Heading from './Heading'
import Button from '../Button'

const Introducing = () => {
    const m = 10;
    const j = 3;

    return (
        <section className='bg-white overflow-hidden section'>
            <div className='flex-center flex-col py-5 gap-2'>
                <h1 className=' text-[1.5em] font-semibold'>
                    Introducing
                </h1>
                <Heading text='Apple Intelligence' className='from-blue via-purple-500 to-yellow-400' />
                <HeadingText text='The next big step for Apple is here. Apple Intelligence is personal intelligence built into your iPhone, iPad, and Mac to help you write, express yourself, and get things done effortlessly.1 All while setting a brand-new standard for privacy in AI.' />
                <Button text='Explore the preview' />
            </div>
            <div className=' overflow-hidden flex-center w-full px-[5vmin] gap-[5vmin]'>
                {introAiImgs.map((imgSrc, i) => (
                    <div key={i} className={`w-[${i <= ((introAiImgs.length - 1) / 2) ? (m * (i + j)) : (m * ((introAiImgs.length - 1 - i) + j))}%]`}>
                        <Image
                            src={imgSrc}
                            alt={`ai_${i + 1}`}
                            height={200}
                            width={1000}
                            className='w-full h-full'
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Introducing
