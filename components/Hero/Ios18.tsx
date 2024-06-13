import { iOS18Imgs } from '@/utils'
import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import HeadingText from './HeadingText'
import Heading from './Heading'

const Ios18 = () => {
    return (
        <section className=' bg-neutral-100 flex-center flex-col h-[110vh]'>
            <div className='flex-center flex-col gap-y-5'>
                <Heading text='iOS 18' className='from-red-700 to-sky-800' />
                <HeadingText text='Customize your iPhone in more ways than ever, stay connected with friends and family, and relive your favorite moments. And with Apple Intelligence, the things you do every day become even more magical.' />
                <Button  text='Explore the preview' />
            </div>
            <div className='flex-center gap-x-5 w-full'>
            {iOS18Imgs.map((imgSrc, i)=>(
                <Image
                    key={i}
                    src={imgSrc}
                    alt={`iOS18_${i+1}`}
                    width={i==0 || i==iOS18Imgs.length-1? 500 : 250}
                    height={200}
                    className={`${i==((iOS18Imgs.length-1)/2)?" mt-40":""}`}
                />
            ))}
        </div>
        </section>
    )
}

export default Ios18