import Image from 'next/image'
import { accessoriesData, appleExpirenceData, helpIsHereData, loudAndClearData, specialStoreData, theAppleStoreData, theLatestData, topData } from './data'
import BnGText from '@/components/BnGText'
import ImageCarousel from '@/components/ImageCarousel'
import Button from '@/components/Button'

const page = () => {
    return (
        <>
            {/* Types device listing Section */}
            <section className='mx-28 pb-16'>
                <ImageCarousel margin={0}>
                    {topData.map((data, i) => (
                        <div key={i} className='flex-center flex-col font-medium hover:scale-105 transition-all ease-linear'>
                            <Image src={data.imgPath} alt={`TopDataImage${i}`} width={150} height={100} />
                            <h1>{data.title}</h1>
                        </div>
                    ))}
                </ImageCarousel>
            </section>

            {/* The Latest Section */}
            <section className='py-10'>
                <div className=''>
                    <BnGText btext='The latest.' gtext="Take a look at what's new, right now." classname=' mx-28 mb-10 font-semibold text-3xl' />
                    <div className=' relative '>
                        <ImageCarousel margin={24}>
                            {theLatestData.map((data, i) => (
                                <div key={i} className='relative h-full scale-95 shrink-0 hover:scale-100 transition-all ease-linear'>
                                    <div className={`text-${data.color} absolute m-6 flex flex-col gap-2`}>
                                        <h1 className=''>{data.title.toUpperCase()}</h1>
                                        <h1 className=' font-bold text-3xl'>{data.h1}</h1>
                                        <h1 className=''>
                                            {
                                                data.monthlyInstallment ? ("From " + data.price + "or " + data.monthlyInstallment) : data.price
                                            }
                                        </h1>
                                    </div>
                                    <Image className='rounded-2xl shadow-xl' src={data.imgSrc} alt={`theLatestImage${i}`} width={500} height={400} />
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>

            {/* Help is Here Section */}
            <section className='py-10'>
                <div className=''>
                    <BnGText btext='Help is here.' gtext=" Whenever and however you need it." classname=' mx-28 mb-5 font-semibold text-3xl' />
                    <div className=''>
                        <ImageCarousel margin={24}>
                            {helpIsHereData.map((data, i) => (
                                <div key={i} className='relative h-full scale-95 shrink-0 hover:scale-100 transition-all ease-linear'>
                                    <div className={`absolute m-6 flex flex-col gap-2`}>
                                        <h1 className={`${data.titleBold ? "font-semibold text-3xl" : ""}`}>{data.title.toUpperCase()}</h1>
                                        <h1 className={`${data.desBold ? "font-semibold text-3xl" : "text-xl"}`}>{data.description}</h1>
                                    </div>
                                    <Image className='rounded-3xl shadow-xl' src={data.imgSrc} alt={`theLatestImage${i}`} width={550} height={500} />
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>

            {/* The Apple Store Difference Section */}
            <section className='mt-10 w-[100vw]'>
                <div className='py-10'>
                    <BnGText btext='The Apple Store difference. ' gtext=" Even more reasons to shop with us." classname=' mx-28 mb-5 font-semibold text-3xl' />
                    <div className='relative'>
                        <ImageCarousel margin={24}>
                            {theAppleStoreData.map((data, i) => (
                                <div key={i} className='bg-white drop-shadow-xl h-full scale-95 shrink-0 flex-grow hover:scale-100 transition-all ease-linear p-5 flex flex-col gap-3 rounded-2xl'>
                                    <div>
                                        {data.icon}
                                    </div>
                                    <div className={'text-2xl font-semibold w-96'}>
                                        {data.text}
                                    </div>
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>

            {/* Accessories Section */}
            <section className='py-10'>
                <div className=' '>
                    <BnGText btext='Accessories.' gtext=" Father’s Day gifts for whoever you call Dad." classname=' mx-28 mb-5 font-semibold text-3xl' />
                    <div className=''>
                        <ImageCarousel margin={24}>
                            {accessoriesData.map((data, i) => (
                                <div key={i} className=' scale-95 shrink-0 hover:scale-100 transition-all ease-linear flex-center flex-col bg-white rounded-2xl drop-shadow-lg '>
                                    {
                                        i === 0 || i === accessoriesData.length - 1
                                            ?
                                            <div className='relative flex h-[30rem]'>
                                                <Image className='rounded-2xl' src={data.imgPath} alt={`theLatestImage${i}`} width={350} height={400} />
                                                <div className={`absolute p-6 flex flex-col gap-5 justify-between w-full`}>
                                                    <h1 className="">{data.title.toUpperCase()}</h1>
                                                    <h1 className="font-semibold text-3xl">{data.description}</h1>
                                                </div>
                                            </div>
                                            :
                                            <div className='h-[30rem] flex-center flex-col'>
                                                <Image className='' src={data.imgPath} alt={`theLatestImage${i}`} width={350} height={400} />
                                                <div className={`p-6 flex flex-col gap-5 justify-between w-full`}>
                                                    <h1 className="text-md font-semibold">{data.title.toUpperCase()}</h1>
                                                    <h1 className={``}>{data.price}</h1>
                                                </div>
                                            </div>
                                    }
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>

            {/* Loud and Clear */}
            <section className='mt-10 w-[100vw]'>
                <div className='py-10'>
                    <BnGText btext='Loud and clear. ' gtext="Unparalleled choices for rich, high-quality sound." classname=' mx-28 mb-5 font-semibold text-3xl' />
                    <div className='relative'>
                        <ImageCarousel margin={24}>
                            {loudAndClearData.map((data, i) => (
                                <div key={i} className=' scale-95 shrink-0 hover:scale-100 transition-all ease-linear flex-center flex-col bg-white rounded-2xl drop-shadow-lg '>
                                    {
                                        i === 0
                                            ?
                                            <div className='relative flex h-[30rem]'>
                                                <Image className='rounded-2xl' src={data.imgPath} alt={`theLatestImage${i}`} width={350} height={400} />
                                                <div className={`absolute p-6 flex flex-col gap-5 justify-between w-full`}>
                                                    <h1 className="font-semibold text-3xl">{data.name}</h1>
                                                    <h1 className="">{data.price}</h1>
                                                </div>
                                            </div>
                                            :
                                            <div className='h-[30rem] flex-center flex-col'>
                                                <Image className='' src={data.imgPath} alt={`theLatestImage${i}`} width={350} height={400} />
                                                <div className={`p-6 flex flex-col gap-5 justify-between w-full`}>
                                                    <h1 className="text-md font-semibold">{data.name}</h1>
                                                    <h1 className={``}>{data.price}</h1>
                                                </div>
                                            </div>
                                    }
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>

            {/* The Apple expireince Section */}
            <section className='py-10'>
                <div className=''>
                    <BnGText btext='The Apple experience. ' gtext=" Do even more with Apple products and services." classname=' mx-28 mb-5 font-semibold text-3xl' />
                    <div className=''>
                        <ImageCarousel margin={24}>
                            {appleExpirenceData.map((data, i) => (
                                <div key={i} className='relative h-full scale-95 shrink-0 hover:scale-100 transition-all ease-linear'>
                                    <div className={`absolute m-6 flex flex-col gap-2 ${i === 0 ? 'text-white' : ''}`}>
                                        <h1 >{data.title}</h1>
                                        <h1 className="text-3xl font-semibold">{data.linkText}</h1>
                                        <h1 >{data.description}</h1>
                                    </div>
                                    <Image className='rounded-3xl shadow-xl' src={data.imgPath} alt={`theLatestImage${i}`} width={550} height={500} />
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>

            {/* Special Store Section */}
            <section className='py-10'>
                <div className=''>
                    <BnGText btext='Special stores. ' gtext="Exclusive savings for education, businesses, and more." classname=' mx-28 mb-5 font-semibold text-3xl' />
                    <div className=''>
                        <ImageCarousel margin={24}>
                            {specialStoreData.map((data, i) => (
                                <div key={i} className='relative h-full scale-95 shrink-0 hover:scale-100 transition-all ease-linear flex'>
                                    <div className={`absolute m-6 flex flex-col gap-2 ${i === 2 ? 'text-white' : ''}`}>
                                        <h1 >{data.title}</h1>
                                        <h1 className="text-3xl font-semibold">{data.linkText}</h1>
                                        <h1 >{data.description}</h1>
                                    </div>
                                    <Image className='rounded-3xl shadow-xl' src={data.imgPath} alt={`theLatestImage${i}`} width={500} height={500} />
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className='py-10 w-full'>
                <div className='mx-28'>
                <BnGText btext='Quick Links ' gtext="" classname=' mb-5 font-semibold text-3xl' />
                <div className='flex gap-3'>
                    {
                        ["Order Status", "Shopping Help", "Returns", "Your Saves"].map((item, i)=>(
                            <Button key={i} text={item}/>
                        ))
                    }
                </div>
                </div>
            </section>

        </>
    )
}
export default page