import { storeImg, userImg } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ShoppingTop = ({btext, gtext}:{btext:string, gtext?:string}) => {
    return (
        <section className=' flex justify-center w-full'>
            <div className=' flex justify-between mt-28'>
                <h1 className='text-6xl font-semibold w-[50%]'>
                    {btext}
                    <span className=' text-gray-600'>
                        {" "}{gtext}
                    </span>
                </h1>
                <div className='flex flex-col gap-y-3'>
                    <div className='flex gap-x-3'>
                        <Image src={userImg} alt='user' width={45} height={35} />
                        <div>
                            <h1>Need shopping help?</h1>
                            <Link href={""} className='text-blue hover:underline'>Ask a Specialist</Link>
                        </div>
                    </div>
                    <div className='flex gap-x-3'>
                        <Image src={storeImg} alt='store' width={40} height={35} />
                        <div>
                            <h1>Need shopping help?</h1>
                            <Link href={""} className='text-blue hover:underline'>Ask a Specialist{">"}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShoppingTop