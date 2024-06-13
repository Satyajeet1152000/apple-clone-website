import { introAiImgs } from '@/utils'
import Image from 'next/image'
import React from 'react'
import HeadingText from './HeadingText'
import Heading from './Heading'
import Button from '../Button'

const Introducing = () => {
  return (
    <section className=' h-[100vh] bg-white overflow-hidden'>
        <div className='flex-center flex-col gap-y-5 my-16'>
            <h1 className=' text-3xl font-semibold'>
                Introducing
            </h1>
            <Heading text='Apple Intelligence' className='from-blue via-purple-500 to-yellow-400' />
            <HeadingText text='The next big step for Apple is here. Apple Intelligence is personal intelligence built into your iPhone, iPad, and Mac to help you write, express yourself, and get things done effortlessly.1 All while setting a brand-new standard for privacy in AI.' />
            <Button text='Explore the preview' />
        </div>
        <div className='flex-center gap-x-5'>
            {introAiImgs.map((imgSrc, i)=>(
                <Image
                    key={i}
                    src={imgSrc}
                    alt={`ai_${i+1}`}
                    width={i<=((introAiImgs.length-1)/2)?
                        (100*(i+2))
                        :
                        (100*((introAiImgs.length-1-i)+2))
                    }
                    height={200}
                />
            ))}
        </div>
    </section>
  )
}

export default Introducing
