import Link from 'next/link'
import React from 'react'

interface SubNavProps{
    hoverStatus: boolean,
    data: any
}

const SubNav = ({hoverStatus, data}:SubNavProps) => {
  return (
    hoverStatus &&  
    <div className='flex w-full gap-x-44 screen-max-width'>
      {Object.keys(data).map((category, i) => (
        <div key={category}>
          <h3 className='text-gray mb-2 text-sm tracking-wider text-gray-400'>{category}</h3>
          <ul>
            {data[category].map((item:any, index: number) => (
              <li key={index} className='py-1'>
                <Link href={item.href} className={`${i===0? 'text-2xl font-semibold':"text-lg"} `}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default SubNav