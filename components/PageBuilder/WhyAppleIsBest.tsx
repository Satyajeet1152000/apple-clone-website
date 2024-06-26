import BnGText from '../BnGText'
import ImageCarousel from '../ImageCarousel'
import Image from 'next/image'

const WhyAppleIsBest = ({ heading, data }: { heading: string, data: any }) => {
    return (
        <section className='section'>
            <div>
                <BnGText btext={heading}/>
                <div>
                    <ImageCarousel margin={24}>
                        {data.map((d: any, index: number) => (
                            <div key={index} className='relative space-y-5 imgCarousel shadow-xl p-[2vmin] w-[40vmin] rounded-xl'>
                                <Image src={d.imgSrc} alt={`section${index}_image`} width={50} height={20} />
                                <div>
                                    <h1 className=' text-[.9em] font-semibold'>{d.title}</h1>
                                    <h1 className='text-[.7em]'>{d.description}</h1>
                                </div>
                                <button className='absolute bottom-[2vmin] right-[2vmin] w-[5vmin] h-[5vmin] flex-center text-center rounded-full bg-black text-gray-200 text-[1.2em]'>+</button>
                            </div>
                        ))}
                    </ImageCarousel>
                </div>
            </div>
        </section>
    )
}

export default WhyAppleIsBest