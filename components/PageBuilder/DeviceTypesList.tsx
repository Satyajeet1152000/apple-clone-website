import Image from "next/image"
import ImageCarousel from "../ImageCarousel"

const DeviceTypesList = ({data , color="white"}:{data:any, color?:string}) => {
    return (
        <section className={`border ${color === "white"?"text-black bg-white border-white": "text-white bg-black border-black"} pt-[8vh]`}>
            <div>
                <ImageCarousel margin={0}>
                    {data.map((d:any, i:number) => (
                        <div key={i} className='imgCarousel flex-center flex-col'>
                            <div className=' h-16 w-16'>
                                <Image src={d.imgSrc} alt={`TopDataImage${i}`} className='h-[100%] w-[100%]' width={60} height={60} />
                            </div>
                            <h1 className='text-center w-full'>{d.title}</h1>
                        </div>
                    ))}
                </ImageCarousel>
            </div>
        </section>
    )
}

export default DeviceTypesList