import { appleHueVideo, appleImg } from '@/utils'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className=' bg-black flex-center flex-col text-white h-[100vh] text-[3vmin]'>
            <video autoPlay muted loop className='-mt-5 w-[50vmin]'>
                <source src={appleHueVideo} />
            </video>
            <div className='flex-center flex-col gap-y-5 w-[80vmin]'>
                <div className='flex-center gap-3 '>
                    <Image src={appleImg} alt='apple' width={40} height={30} className='pb-2 w-[1em]' />
                    <h1 className=' text-[1.5em] text-center font-semibold inline-block'>
                        <span className='-tracking-widest'>VWDC</span>24
                    </h1>
                </div>
                <p className=' text-center text-[1em] font-medium'>
                    Introducing Apple Intelligence, AI for the rest of us. And exciting updates coming with iOS 18, iPadOS 18, macOS Sequoia, watchOS 11, and visionOS 2.
                </p>
                <button className='text-white text-[.8em] hover:border-black border px-5 py-3 rounded-full bg-black hover:bg-white hover:text-black'>
                    Watch the keynote
                </button>
            </div>
        </section>
    )
}

export default Hero