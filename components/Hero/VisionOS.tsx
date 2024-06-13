import React from 'react'
import Heading from './Heading'
import HeadingText from './HeadingText'
import Button from '../Button'
import Image from 'next/image'
import { visionOSImg } from '@/utils'

const VisionOS = () => {
    return (
        <section className=' h-[110vh] bg-neutral-100'>
            <div className='flex-center flex-col gap-y-5 py-10'>
                <Heading text='visionOS 2' className=' from-red-800 via-purple-600 to-sky-700' />
                <HeadingText text='Relive and share photos in magical new ways. Immerse yourself in entertainment and work. Navigate easily with new gestures. The groundbreaking experiences of Apple Vision Pro go even further.'
                />
                <Button text='Explore the preview' />
            </div>
            <div className='flex justify-center items-center'>
                <Image
                    src={visionOSImg}
                    alt='visionOS 2'
                    width={1200}
                    height={1200}
                    className=" rounded-[50px]"
                />
            </div>
        </section>
    )
}

export default VisionOS