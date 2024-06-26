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
                <div className="">
                    <Image
                        src={introAiImgs[0]}
                        alt={`ai_images`}
                        height={200}
                        width={1000}
                        className='w-full h-full'
                    />
                </div>
                <div className="">
                    <Image
                        src={introAiImgs[1]}
                        alt={`ai_images`}
                        height={200}
                        width={1000}
                        className='w-full h-full'
                    />
                </div>
                <div className="">
                    <Image
                        src={introAiImgs[2]}
                        alt={`ai_images`}
                        height={200}
                        width={1000}
                        className='w-full h-full'
                    />
                </div>
                <div className="">
                    <Image
                        src={introAiImgs[3]}
                        alt={`ai_images`}
                        height={200}
                        width={1000}
                        className='w-full h-full'
                    />
                </div>
                <div className="">
                    <Image
                        src={introAiImgs[4]}
                        alt={`ai_images`}
                        height={200}
                        width={1000}
                        className='w-full h-full'
                    />
                </div>

            </div>
        </section>
    )
}

export default Introducing
