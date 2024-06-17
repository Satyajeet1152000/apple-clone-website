import BnGText from '../BnGText'
import ImageCarousel from '../ImageCarousel'
import Image from 'next/image'

const WhyAppleIsBest = ({ heading, data }: { heading: string, data: any }) => {
    return (
        <section className=' my-14'>
            <BnGText btext={heading} gtext='' classname=' w-[50%] mx-28 pb-16 font-semibold text-5xl' />
            <div className=''>
                <ImageCarousel margin={24}>
                    {data.map((d: any, index: number) => (
                        <div key={index} className='relative m-5 w-72 h-64 scale-95 shrink-0 hover:scale-100 transition-all ease-linear shadow-xl p-5'>
                            <Image src={d.imgSrc} alt={`section${index}_image`} width={50} height={20} />
                            <div className="pt-5">
                                <h1 className=' text-2xl font-semibold'>{d.title}</h1>
                                <h1 className=''>{d.description}</h1>
                            </div>
                        </div>
                    ))}
                </ImageCarousel>
            </div>
        </section>
    )
}

export default WhyAppleIsBest