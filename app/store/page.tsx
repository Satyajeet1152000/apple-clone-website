import Image from 'next/image'
import { accessoriesData, appleExpirenceData, helpIsHereData, loudAndClearData, specialStoreData, theAppleStoreData, theLatestData, topData } from './data'
import BnGText from '@/components/BnGText'
import ImageCarousel from '@/components/ImageCarousel'
import Button from '@/components/Button'
import DeviceTypesList from '@/components/PageBuilder/DeviceTypesList'

const page = () => {
    return (
        <>
            {/* Types device listing Section */}
            {/* <DeviceTypesList data={topData} /> */}
            <section className="section">
                <div className="relative w-full flex-center text-[.8em]">
                    <ImageCarousel margin={0}>
                        {topData.map((d:any, i:number) => (
                            <div key={i} className='relative h-full flex-center flex-col shrink-0 hover:scale-105 transition-all ease-linear gap-1'>
                                <div className=' w-[12vw] sm:w-[10vw] md:w-[8vw] lg:w-[6vw]'>
                                    <Image src={d.imgSrc} alt={`TopDataImage${i}`} className='h-[100%] w-[100%]' width={150} height={150} />
                                </div>
                                <h1 className='text-center w-full'>{d.title}</h1>
                            </div>
                        ))}
                    </ImageCarousel>
                </div>
            </section>

            {/* The Latest Section */}
            <section className='section'>
                <div>
                    <BnGText btext='The latest.' gtext="Take a look at what's new, right now." />
                    <div className=' relative text-[.8em]'>
                        <ImageCarousel margin={24}>
                            {theLatestData.map((data, i) => (
                                <div key={i} className='imgCarousel relative'>
                                    <div className={`text-${data.color} absolute m-[1vmin] flex flex-col gap-2`}>
                                        <h1>{data.title.toUpperCase()}</h1>
                                        <h1 className=' font-bold text-[1.5em]'>{data.h1}</h1>
                                        <h1>
                                            {
                                                data.monthlyInstallment ? ("From " + data.price + "or " + data.monthlyInstallment) : data.price
                                            }
                                        </h1>
                                    </div>
                                    <Image className='rounded-2xl shadow-xl w-[45vmin]' src={data.imgSrc} alt={`theLatestImage${i}`} width={500} height={400}/>
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>

            {/* Help is Here Section */}
            <section className='section'>
                <div>
                    <BnGText btext='Help is here.' gtext=" Whenever and however you need it."/>
                    <div>
                        <ImageCarousel margin={24}>
                            {helpIsHereData.map((data, i) => (
                                <div key={i} className='imgCarousel relative'>
                                    <div className={`absolute m-6 flex flex-col gap-2`}>
                                        <h1 className={`${data.titleBold ? "font-semibold text-[1em]" : "text-[.8em]"}`}>{data.title.toUpperCase()}</h1>
                                        <h1 className={`${data.desBold ? "font-semibold text-[1em]" : "text-[.8em]"}`}>{data.description}</h1>
                                    </div>
                                    <Image className='rounded-3xl shadow-xl w-[50vmin]' src={data.imgSrc} alt={`theLatestImage${i}`} width={550} height={500} />
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>

            {/* The Apple Store Difference Section */}
            <section className='section'>
                <div >
                    <BnGText btext='The Apple Store difference. ' gtext=" Even more reasons to shop with us." />
                    <div className='relative'>
                        <ImageCarousel margin={24}>
                            {theAppleStoreData.map((data, i) => (
                                <div key={i} className='bg-white drop-shadow-xl imgCarousel flex-grow p-5 flex flex-col gap-3 rounded-2xl'>
                                    <div>
                                        {data.icon}
                                    </div>
                                    <div className={'text-[1em] font-semibold w-[45vmin]'}>
                                        {data.text}
                                    </div>
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>

            {/* Accessories Section */}
            <section className='section'>
                <div>
                    <BnGText btext='Accessories.' gtext=" Father’s Day gifts for whoever you call Dad." />
                    <div>
                        <ImageCarousel margin={24}>
                            {accessoriesData.map((data, i) => (
                                <div key={i} className='imgCarousel overflow-hidden flex-center flex-col bg-white rounded-2xl drop-shadow-lg text-[.8em] h-[50vh] w-[45vmin]'>
                                    {
                                        i === 0 || i === accessoriesData.length - 1
                                            ?
                                            <div className='relative flex h-max w-full'>
                                                <Image className='rounded-2xl' src={data.imgPath} alt={`theLatestImage${i}`} width={350} height={400} />
                                                <div className={`absolute p-6 flex flex-col gap-5 justify-between w-full`}>
                                                    <h1 className="">{data.title.toUpperCase()}</h1>
                                                    <h1 className="font-semibold text-[1.2em]">{data.description}</h1>
                                                </div>
                                            </div>
                                            :
                                            <div className='flex-center flex-col h-max w-full'>
                                                <Image src={data.imgPath} alt={`theLatestImage${i}`} width={300} height={400} />
                                                <div className={`p-6 flex flex-col gap-5 justify-between w-full`}>
                                                    <h1 className=" text-[1.2em] font-semibold">{data.title.toUpperCase()}</h1>
                                                    <h1>{data.price}</h1>
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
            <section className='section'>
                <div>
                    <BnGText btext='Loud and clear. ' gtext="Unparalleled choices for rich, high-quality sound."/>
                    <div >
                        <ImageCarousel margin={24}>
                            {loudAndClearData.map((data, i) => (
                                <div key={i} className='imgCarousel flex-center flex-col bg-white rounded-2xl drop-shadow-lg text-[.65em] h-max'>
                                    <div className='h-full flex-center flex-col overflow-hidden'>
                                        <Image src={data.imgPath} alt={`theLatestImage${i}`} width={350} height={400} className='w-[40vmin] h-full' />
                                        
                                        <div className={`p-6 flex flex-col gap-5 justify-between w-full`}>
                                            <h1 className="text-[1.2em] font-semibold">{data.name}</h1>
                                            <h1 className={``}>{data.price}</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>

            {/* The Apple expireince Section */}
            <section className='section'>
                <div>
                    <BnGText btext='The Apple experience. ' gtext=" Do even more with Apple products and services." />
                    <div>
                        <ImageCarousel margin={24}>
                            {appleExpirenceData.map((data, i) => (
                                <div key={i} className='imgCarousel relative text-[.8em]'>
                                    <div className={`absolute m-6 flex flex-col gap-2 ${i === 0 ? 'text-white' : ''}`}>
                                        <h1 >{data.title}</h1>
                                        <h1 className="text-[1.3em] font-semibold">{data.linkText}</h1>
                                        <h1 >{data.description}</h1>
                                    </div>
                                    <Image className='rounded-3xl shadow-xl w-[60vmin]' src={data.imgPath} alt={`theLatestImage${i}`} width={550} height={500} />
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>

            {/* Special Store Section */}
            <section className='section'>
                <div>
                    <BnGText btext='Special stores. ' gtext="Exclusive savings for education, businesses, and more." />
                    <div>
                        <ImageCarousel margin={24}>
                            {specialStoreData.map((data, i) => (
                                <div key={i} className='imgCarousel relative flex text-[.8em]'>
                                    <div className={`absolute m-6 flex flex-col gap-2 ${i === 2 ? 'text-white' : ''}`}>
                                        <h1 >{data.title}</h1>
                                        <h1 className="text-[1.2em] font-semibold">{data.linkText}</h1>
                                        <h1 >{data.description}</h1>
                                    </div>
                                    <Image className='rounded-3xl shadow-xl w-[60vmin]' src={data.imgPath} alt={`theLatestImage${i}`} width={500} height={500} />
                                </div>
                            ))}
                        </ImageCarousel>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className='flex flex-col text-[3vmin] gap-1 py-[5vmin]'>
                <BnGText btext='Quick Links ' gtext="" />
                <div className='flex gap-3 ml-[10vmin] text-[.8em]'>
                    {
                        ["Order Status", "Shopping Help", "Returns", "Your Saves"].map((item, i)=>(
                            <Button key={i} text={item}/>
                        ))
                    }
                </div>
            </section>

        </>
    )
}
export default page