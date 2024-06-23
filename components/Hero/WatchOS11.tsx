import React from 'react'
import Heading from './Heading'
import HeadingText from './HeadingText'
import Button from '../Button'
import Image from 'next/image'
import { watchOSImgs } from '@/utils'

const WatchOS11 = () => {
  return (
    <section className='bg-white section'>
            <div className='flex-center flex-col gap-y-5 py-10'>
                <Heading text='watchOS 11' className=' from-teal-500 via-sky-600 via-10% to-purple-700' />
                <HeadingText text='Get a better understanding of your daily health status using your overnight vitals.2 See how workouts impact your body over time. And discover new features that make Apple Watch even more finely tuned to you.'
                />
                <Button text='Explore the preview' />
            </div>
            <div className='flex-center'>
            {watchOSImgs.map((imgSrc, i)=>(
                <Image
                    key={i}
                    src={imgSrc}
                    alt={`watchOS_watch_${i+1}`}
                    width={1000}
                    height={1000}
                    className={`${i%2==0?"pb-[10vmax]":"pt-[10vmax]"} w-[15%]`}
                />
            ))}
            </div>
        </section>
  )
}

export default WatchOS11