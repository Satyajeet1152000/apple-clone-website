import React from 'react'
import Heading from './Heading'
import HeadingText from './HeadingText'
import ExploreBtn from './ExploreBtn'
import Image from 'next/image'
import { watchOSImgs } from '@/utils'

const WatchOS11 = () => {
  return (
    <section className=' h-[110vh] bg-white'>
            <div className='flex-center flex-col gap-y-5 py-10'>
                <Heading text='watchOS 11' className=' from-teal-500 via-sky-600 via-10% to-purple-700' />
                <HeadingText text='Get a better understanding of your daily health status using your overnight vitals.2 See how workouts impact your body over time. And discover new features that make Apple Watch even more finely tuned to you.'
                />
                <ExploreBtn text='Explore the preview' />
            </div>
            <div className='flex items-center justify-center gap-x-5'>
            {watchOSImgs.map((imgSrc, i)=>(
                <Image
                    key={i}
                    src={imgSrc}
                    alt={`watchOS_watch_${i+1}`}
                    width={250}
                    height={200}
                    className={`${i%2==0?"pb-52":"pt-52"}`}
                />
            ))}
            </div>
        </section>
  )
}

export default WatchOS11