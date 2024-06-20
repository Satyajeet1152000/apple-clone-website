import Image from "next/image"
import ImageCarousel from "../ImageCarousel"

const DeviceTypesList = ({data , color="white"}:{data:any, color?:string}) => {
    return (
        <section className={`border ${color === "white"?"text-black bg-white border-white": "text-white bg-black border-black"}`}>
            <div className="mx-24 mt-24">
                <ImageCarousel margin={0}>
                    {data.map((d:any, i:number) => (
                        <div key={i} className='px-3 hover:scale-105 hover:cursor-pointer ease-linear duration-75 flex-center flex-col'>
                            <div className='h-20 w-20'>
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