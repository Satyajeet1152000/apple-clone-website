import React from 'react'
import Heading from './Heading'
import HeadingText from './HeadingText'
import Button from '../Button'
import Image from 'next/image'
import { macOSImgs } from '@/utils'

const MacOS = () => {
    return (
        <section className='bg-neutral-100 section'>
            <div className='flex-center flex-col gap-y-5 py-10'>
                <Heading text='macOS Sequoia' className=' from-sky-800 via-sky-600 to-orange-800' />
                <HeadingText text='Lay out your workspace on the fly, browse the web with focus, and even use iPhone wirelessly. And Apple Intelligence helps you simplify and accelerate tasks big and small.'
                />
                <Button text='Explore the preview' />
            </div>
            <div className='flex-center gap-x-5 mt-5 relative w-[100vw]'>
                <div className='flex-center'>
                    <Image
                        src={macOSImgs[0]}
                        alt={`iPadOS18_1`}
                        width={800}
                        height={800}
                        className='w-[80vmin]'
                    />
                </div>
                <div className='flex-center absolute bottom-0 gap-[20vmin]'>
                    <Image
                        src={macOSImgs[1]}
                        alt={`iPadOS18_1`}
                        width={1000}
                        height={1000}
                        className='w-[40vmin]'
                    />
                    <Image
                        src={macOSImgs[2]}
                        alt={`iPadOS18_1`}
                        width={1000}
                        height={1000}
                        className='w-[40vmin]'
                    />
                </div>
            </div>
        </section>
    )
}

export default MacOS