import { appleHueVideo, appleImg } from '@/utils'
import Image from 'next/image'
import Introducing from './Introducing'
import Ios18 from './Ios18'
import IpadOS from './IpadOS'
import ExploreBtn from './ExploreBtn'
import MacOS from './MacOS'
import WatchOS11 from './WatchOS11'
import VisionOS from './VisionOS'

const index = () => {
	return (
		<>
			<section className=' bg-black flex-center flex-col h-[100vh]'>
				<video autoPlay muted loop className='scale-95 -mt-5'>
					<source src={appleHueVideo} />
				</video>
				<div className='flex-center flex-col gap-y-5'>
					<div className='flex-center gap-3'>
						<Image src={appleImg} alt='apple' width={40} height={30} className='pb-2' />
						<h1 className=' text-5xl text-center font-semibold inline-block'>
							<span className='-tracking-widest'>VWDC</span>24
						</h1>
					</div>
					<p className=' w-[40%] text-center text-3xl font-medium'>
						Introducing Apple Intelligence, AI for the rest of us. And exciting updates coming with iOS 18, iPadOS 18, macOS Sequoia, watchOS 11, and visionOS 2.
					</p>
					<button className='text-white hover:border-black border px-5 py-3 rounded-full bg-black hover:bg-white hover:text-black'>
						Watch the keynote
					</button>
				</div>
			</section>
			<Introducing />
			<Ios18 />
			<IpadOS />
			<MacOS />
			<WatchOS11 />
			<VisionOS />
		</>
	)
}

export default index