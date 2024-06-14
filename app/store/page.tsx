import Image from 'next/image'
import { theLatestData, topData } from './data'
import BnGText from '@/components/BnGText'
import ImageCarousel from '@/components/ImageCarousel'

const page = () => {
    return (
        <>
            {/* Types device listing Section */}
            <section className='mx-28 pb-16'>
                <ImageCarousel margin='0'>
                    {topData.map((data, i) => (
                        <div key={i} className='flex-center flex-col font-medium hover:scale-105'>
                            <Image src={data.imgPath} alt={`TopDataImage${i}`} width={150} height={100} />
                            <h1>{data.title}</h1>
                        </div>
                    ))}
                </ImageCarousel>
            </section>

            {/* The Latest Section */}
            <section className=''>
                <div className=''>
                    <BnGText btext='The latest.' gtext="Take a look at what's new, right now." classname=' mx-28 mb-10 font-semibold text-3xl' />
                    <div className=' relative '>
                        <ImageCarousel margin='24'>
                            {theLatestData.map((data, i) => (
                                <div key={i} className='relative h-full scale-95 shrink-0 hover:scale-100 transition-all ease-linear'>
                                    <div className={`text-${data.color} absolute m-3 `}>
                                        <h1 className=''>{data.title.toUpperCase()}</h1>
                                        <h1 className=' font-bold text-3xl'>{data.h1}</h1>
                                        <h1 className=''>
                                            {
                                                data.monthlyInstallment ? ("From " + data.price + "or " + data.monthlyInstallment) : data.price
                                            }
                                        </h1>
                                    </div>
                                    <Image className='rounded-2xl shadow-xl' src={data.imgSrc} alt={`theLatestImage${i}`} width={400} height={400} />
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>
        </>
    )
}
export default page