const HeroVideo_Heading = ({heading, videoSrc}:{heading:any, videoSrc:string}) => {
  return (
    <section className=''>
      {/* Heading */}
      <div className='mx-[10vmin] my-10 flex flex-col md:flex-row justify-between font-semibold gap-2'>
        <h1 className=' text-5xl'>{heading[0]}</h1>
        <h1 className='text-2xl leading-none'>
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