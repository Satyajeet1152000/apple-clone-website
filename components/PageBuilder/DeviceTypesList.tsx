import Image from "next/image"
import ImageCarousel from "../ImageCarousel"

const DeviceTypesList = ({data}:{data:any}) => {
    return (
        <section className='mx-24 text-black mt-24'>
            <ImageCarousel margin={0}>
                {data.map((d:any, i:number) => (
                    <div key={i} className='px-3 hover:scale-105 ease-linear duration-75'>
                        <div className='h-20 w-20'>
                            <Image src={d.imgSrc} alt={`TopDataImage${i}`} className='h-[100%] w-[100%]' width={60} height={60} />
                        </div>
                        <h1 className='text-center w-full'>{d.title}</h1>
                    </div>
                ))}
            </ImageCarousel>
        </section>
    )
}

export default DeviceTypesList