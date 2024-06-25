const Banner = ({data}:{data:any}) => {
  return (
    <section className=' w-full bg-slate-100 flex-center gap-1 py-2 px-2 text-center'>
        <h1>{data.text} <span className=' text-blue hover:underline hover:cursor-pointer'>{data.linkText}</span></h1>
    </section>
  )
}

export default Banner