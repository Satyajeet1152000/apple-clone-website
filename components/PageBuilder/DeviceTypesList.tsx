import Image from "next/image"
import ImageCarousel from "../ImageCarousel"

const DeviceTypesList = ({data}:{data:any}) => {
    return (
        <section className='mx-24 text-black mt-24'>
            <ImageCarousel margin={0}>
                {data.map((d:any, i:number) => (
                    <div key={i} className='px-3 hover:scale-105 ease-linear duration-75'>
                        <div className='h-24 w-24'>
                            <Image src={d.imgSrc} alt={`TopDataImage${i}`} className='h-[100%] w-[100%]' width={80} height={80} />
                        </div>
                        <h1 className='flex-center w-full'>{d.title}</h1>
                    </div>
                ))}
            </ImageCarousel>
        </section>
    )
}

export default DeviceTypesList