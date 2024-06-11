import { iPadOS18Imgs } from '@/utils'
import Image from 'next/image'
import React from 'react'
import ExploreBtn from './ExploreBtn'
import HeadingText from './HeadingText'
import Heading from './Heading'

const IpadOS = () => {
    const iW = 400;
    const iH = 300;
    return (
        <section className=' h-[110vh] bg-white'>
            <div className='flex-center flex-col gap-y-5 py-10'>
                <Heading text='iPadOS 18' className='from-sky-500 via-sky-800 to-purple-400' />
                <HeadingText text='Explore new ways to work with Apple Pencil, discover new experiences in apps, and customize iPad even further. And bring your ideas to life like never before with Apple Intelligence.'
                />
                <ExploreBtn text='Explore the preview' />
            </div>
            <div className='flex items-center justify-center gap-x-5 mt-5'>
                <div>
                    <Image
                        src={iPadOS18Imgs[0]}
                        alt={`iPadOS18_1`}
                        width={iW}
                        height={iH}
                    />
                </div>
                <div className='gap-5 flex flex-col'>
                    <Image
                        src={iPadOS18Imgs[1]}
                        alt={`iPadOS18_1`}
                        width={iW}
                        height={iH}
                    />
                    <Image
                        src={iPadOS18Imgs[2]}
                        alt={`iPadOS18_1`}
                        width={iW}
                        height={iH}
                    />
                </div>
                <div>
                    <Image
                        src={iPadOS18Imgs[3]}
                        alt={`iPadOS18_1`}
                        width={iW}
                        height={iH}
                    />
                </div>
            </div>
        </section>
    )
}

export default IpadOS

