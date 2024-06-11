import { appleImg, chipImg } from '@/utils'
import { Html } from '@react-three/drei'
import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <Html>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center border'>
          <div className=' border-2'>
            <Image src={chipImg} width={14} height={18} alt='Apple'/>
          </div>
          <div className="border">
              Loading...
          </div>
        </div>
    </Html>
  )
}

export default Loader