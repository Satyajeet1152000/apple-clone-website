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
                const s = cRef.current.scrollWidth > cRef.current.clientWidth
                setScrollPresence(s);

                if (s! && (cRef.current && cRef.current.firstChild)) {
                    (cRef.current.firstChild as HTMLElement).classList.add('ml-[10vmin]'); 
                    (cRef.current.lastChild as HTMLElement).classList.add('mr-[10vmin]'); 
                }

            }
        };

        checkScrollPresence();
        window.addEventListener('resize', checkScrollPresence);

        return () => {
            window.removeEventListener('resize', checkScrollPresence);
        };
    }, [children.length]);

    const scroll = (dir: number) => {
        const eleWidth = cRef.current!.scrollWidth / children.length
        const scrollOffset = eleWidth
        cRef.current!.scrollLeft += scrollOffset * dir;
    };

    return (
        <div className="flex-center">
            <div
                ref={cRef}
                className={`${scrollPresence? "flex": "flex-center"} overflow-x-scroll scroll-smooth  w-[100vw] py-10 gap-5`}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseEnter={() => setButtonVisible(true)}
                onMouseLeave={() => setButtonVisible(false)}
            >
                {children}
            </div>
            {
                scrollPresence &&
                <>
                    <button
                        className={`${buttonVisible ? "flex-center" : "hidden"} hover:flex-center h-14 w-14 bg-gray-300/75 hover:bg-slate-100 rounded-full hover:text-black absolute left-3 text-2xl text-gray-500 hover:border border-black`}
                        onClick={() => scroll(-1)}
                    >{"<"}</button>
                    <button
                        className={`${buttonVisible ? "flex-center" : "hidden"} hover:flex-center h-14 w-14 bg-gray-300 hover:bg-slate-100 rounded-full hover:text-black absolute right-5 text-2xl text-gray-500 hover:border border-black`}
                        onClick={() => scroll(1)}
                    >{">"}</button>
                </>
            }
        </div>
    );
};

export default ImageCarousel;
