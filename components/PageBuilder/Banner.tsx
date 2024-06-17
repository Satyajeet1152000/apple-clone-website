import React from 'react'

const Banner = ({data}:{data:any}) => {
  return (
    <section className=' w-full bg-slate-100 flex-center gap-1 py-2 my-5'>
        <h1>{data.text}</h1>
        <h1 className=' text-blue hover:underline hover:cursor-pointer'>{data.linkText}</h1>
    </section>
  )
}

export default Banner