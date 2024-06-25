import BnGText from '../BnGText'
import ImageCarousel from '../ImageCarousel'
import Image from 'next/image'

const GetToKnow = ({ heading, data }: { heading: string, data: any }) => {
    return (
        <section className='section'>
            <div>
                <BnGText btext={heading}/>
                <div>
                    <ImageCarousel margin={24}>
                        {data.map((d: any, index: number) => (
                            <div key={index} className='relative imgCarousel'>
                                <Image src={d.imgSrc} alt={`section${index}_image`} width={400} height={200} className='rounded-3xl shadow-xl w-[20vmax]' />
                                <div className={`absolute top-0 ml-[2vmin] mt-[2vmin] text-${d.textData.color}`}>
                                    <h1 className='text-[.8em]'>{d.textData.label}</h1>
                                    <h1 className='text-[1em] font-bold'>{d.textData.headline}</h1>
                                </div>
                            </div>
                        ))}
                    </ImageCarousel>
                </div>
            </div>
        </section>
    )
}

export default GetToKnow