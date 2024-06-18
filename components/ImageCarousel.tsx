'use client'
import React, { MutableRefObject, useEffect, useRef, useState } from "react";

interface ImageCarouselProps {
    children: JSX.Element[];
    margin: number;
}

const ImageCarousel = ({ children, margin=24 }: ImageCarouselProps) => {
    const [buttonVisible, setButtonVisible] = useState(false)
    const [scrollPresence, setScrollPresence] = useState(false)
    const cRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

    const mLeft = "ml-24"
    const mRight = "mr-24"


    useEffect(() => {
        const checkScrollPresence = () => {
            if (cRef.current) {
                setScrollPresence(cRef.current.scrollWidth > cRef.current.clientWidth);
            }
        };

        checkScrollPresence();
        window.addEventListener('resize', checkScrollPresence);

        return () => {
            window.removeEventListener('resize', checkScrollPresence);
        };
    }, []);

    const scroll = (dir: number) => {
        const eleWidth = cRef.current!.scrollWidth / children.length
        const scrollOffset = eleWidth
        cRef.current!.scrollLeft += scrollOffset * dir;
    };

    return (
        <div className="flex-center relative ">
            <div
                ref={cRef}
                className='flex overflow-x-scroll scroll-smooth  w-full justify-between'
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseEnter={() => setButtonVisible(true)}
                onMouseLeave={() => setButtonVisible(false)}


            >
                {children.map((child, index) => (
                    // <div key={index} className={`flex-none ${ index===0?`ml-${margin}`: ""} ${index===children.length-1? `mr-${margin}`: ""} `}>
                    <div key={index} className={`flex-none ${index===0 ? mLeft : ""} ${index===(children.length-1)? mRight: ""}`} >
                        {child}
                    </div>
                ))}
            </div>

            {
                scrollPresence &&
                <>
                    <button
                        className={`${buttonVisible ? "flex-center" : "hidden"} hover:flex-center h-14 w-14 bg-gray-300/75 hover:bg-slate-100 rounded-full hover:text-black absolute left-0 m-10 text-2xl text-gray-500 hover:border border-black`}
                        onClick={() => scroll(-1)}
                    >{"<"}</button>
                    <button
                        className={`${buttonVisible ? "flex-center" : "hidden"} hover:flex-center h-14 w-14 bg-gray-300 hover:bg-slate-100 rounded-full hover:text-black absolute right-0 m-10 text-2xl text-gray-500 hover:border border-black`}
                        onClick={() => scroll(1)}
                    >{">"}</button>
                </>
            }
        </div>
    );
};

export default ImageCarousel;
