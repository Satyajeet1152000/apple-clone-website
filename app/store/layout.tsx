import BnGText from "@/components/BnGText";
import { storeImg, userImg } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
    return (
        <main className=" bg-[#f5f5f7] w-[100%]">
            <section className='w-full text-[3vmin] h-max py-[5vmin] gap-[5vmin]'>                
                <div className=' flex flex-col items-start lg:items-center lg:flex-row lg:justify-between mt-24'>
                    <BnGText btext="Store. " gtext="The best way to buy the products you love." classname={'lg:text-[1.7em]'} />
                    <div className=' text-[.7em] ml-[10vmin] lg:mr-[10vmin] text-nowrap space-y-5'>
                        <div className='flex lg:flex-center gap-x-3'>
                            <Image src={userImg} alt='user' width={100} height={100} className="w-[3vw] h-[3vw]" quality={100}/>
                            <div>
                                <h1>Need shopping help?</h1>
                                <Link href={""} className='text-blue hover:underline'>Ask a Specialist {">"}</Link>
                            </div>
                        </div>
                        <div className='flex lg:flex-center gap-x-3'>
                            <Image src={storeImg} alt='store' width={100} height={100} className="w-[3vw] h-[3vw]" quality={100}/>
                            <div>
                                <h1>Need shopping help?</h1>
                                <Link href={""} className='text-blue hover:underline'>Ask a Specialist {">"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {children}
        </main>
    )
}