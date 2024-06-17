import React from 'react'

const HeroVideo_Heading = ({heading, videoSrc}:{heading:any, videoSrc:string}) => {
  return (
    <section className=''>
      {/* Heading */}
      <div className='mx-24 my-10 flex justify-between items-center font-semibold '>
        <h1 className=' text-6xl'>{heading[0]}</h1>
        <h1 className='text-3xl'>
          {heading[1]}
        </h1>
      </div>

      {/* Video */}
      <div >
        <video className=" pointer-events-none w-full" autoPlay loop muted preload='none'>
          <source src={videoSrc} type="video/mp4"/>
        </video>
      </div>
    </section>
  )
}

export default HeroVideo_Heading