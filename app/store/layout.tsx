'use client'

import BnGText from "@/components/BnGText";
import { storeImg, userImg } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
    const path = usePathname()
    const shoppingTopText: any = {
        "/store": { btext: "Store. ", gtext: "The best way to buy the products you love." },
        "/store/buy-mac": { btext: "Shop Mac", gtext: "" },
    }

    return (
        <main className=" bg-[#f5f5f7] flex-center flex-col">
            <section className='w-full flex mt-28'>
                <div className=' flex justify-between w-full mx-28 pb-14'>
                    <BnGText 
                        classname={"w-[50%] text-6xl font-semibold"} btext={shoppingTopText[path]?.btext} gtext={shoppingTopText[path]?.gtext} 
                    />
                    <div className='flex flex-col gap-y-3'>
                        <div className='flex gap-x-3'>
                            <Image src={userImg} alt='user' width={45} height={35} />
                            <div>
                                <h1>Need shopping help?</h1>
                                <Link href={""} className='text-blue hover:underline'>Ask a Specialist</Link>
                            </div>
                        </div>
                        <div className='flex gap-x-3'>
                            <Image src={storeImg} alt='store' width={40} height={35} />
                            <div>
                                <h1>Need shopping help?</h1>
                                <Link href={""} className='text-blue hover:underline'>Ask a Specialist{">"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {children}
        </main>
    )
}