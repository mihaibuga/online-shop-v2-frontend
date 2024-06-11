"use client";

import React from "react";
import Image from "next/image";

import { TECarousel, TECarouselItem } from "tw-elements-react";

type SlideType = {
    src: string;
    alt: string;
    labelText: string;
    slideText: string;
};

interface IProps {
    slides: SlideType[];
}

const HeroCarousel = ({ slides }: IProps) => {
    return (
        <TECarousel
            className="w-full h-full"
            showControls
            showIndicators
            crossfade
            interval={4000}
            ride="carousel"
            prevBtnIcon={
                <>
                    <span className="inline-block text-white h-8 w-8 [&>svg]:h-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Previous
                    </span>
                </>
            }
            nextBtnIcon={
                <>
                    <span className="inline-block text-white h-8 w-8 [&>svg]:h-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Next
                    </span>
                </>
            }
            theme={{
                indicator:
                    "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
            }}
        >
            <div className="relative w-full h-full overflow-hidden after:clear-both after:block after:content-['']">
                {slides &&
                    slides.map((slide, index) => (
                        <TECarouselItem
                            key={index}
                            itemID={index + 1}
                            // className="relative float-left -mr-[100%] hidden w-full h-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                            className="relative float-left -mr-[100%] hidden w-full h-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                        >
                            <Image
                                src={slide.src}
                                className="block w-full h-full object-cover"
                                alt={slide.alt}
                                quality={100}
                                fill
                                priority
                                sizes="100%"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                                <h5 className="text-xl">{slide.labelText}</h5>
                                <p>{slide.slideText}</p>
                            </div>
                        </TECarouselItem>
                    ))}
            </div>
        </TECarousel>
    );
};

export default HeroCarousel;
