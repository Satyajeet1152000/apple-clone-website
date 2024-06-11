import React from 'react'
import Heading from './Heading'
import HeadingText from './HeadingText'
import ExploreBtn from './ExploreBtn'
import Image from 'next/image'
import { macOSImgs } from '@/utils'

const MacOS = () => {
    return (
        <section className=' h-[110vh] bg-neutral-100'>
            <div className='flex-center flex-col gap-y-5 py-10'>
                <Heading text='macOS Sequoia' className=' from-sky-800 via-sky-600 to-orange-800' />
                <HeadingText text='Lay out your workspace on the fly, browse the web with focus, and even use iPhone wirelessly. And Apple Intelligence helps you simplify and accelerate tasks big and small.'
                />
                <ExploreBtn text='Explore the preview' />
            </div>
            <div className='flex items-center justify-center gap-x-5 mt-5 relative'>
                <div>
                    <Image
                        src={macOSImgs[0]}
                        alt={`iPadOS18_1`}
                        width={800}
                        height={800}
                    />
                </div>
                <div className='flex absolute bottom-0 w-[70%] justify-between'>
                    <Image
                        src={macOSImgs[1]}
                        alt={`iPadOS18_1`}
                        width={500}
                        height={500}
                    />
                    <Image
                        src={macOSImgs[2]}
                        alt={`iPadOS18_1`}
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    )
}

export default MacOS