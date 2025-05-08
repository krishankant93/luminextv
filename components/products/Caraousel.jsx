import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1
    }
};

const Caraousel = ({images}) => {
    const customLeftArrow = (
        <div className="absolute  arrow-btn ml-5 bg-grayish-500 px-3 hover:bg-grayish-900 duration-300  left-0 text-center py-3 cursor-pointer bg-white shadow rounded-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg>
        </div>
    );

    const customRightArrow = (
        <div className="absolute arrow-btn  mr-5 bg-grayish-500 px-3 hover:bg-grayish-900 duration-300 right-0  text-center py-3 cursor-pointer bg-white shadow rounded-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
            </svg>
        </div>
    );

    return (
        <div className="px-5 lg:px-10 rounded-md">
            
            <div>
                <Carousel
                    infinite
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    showDots={true}
                    customLeftArrow={customLeftArrow}
                    customRightArrow={customRightArrow}
                    className="pb-2 bg-gray-950 lg:h-[60vh] rounded-lg"
                    swipeable={true}
                    ssr={true}
                    draggable={true}
                    minimumTouchDrag={80}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                >
                        {images.map((image,index) => (
                        //   <img src={image} alt="" className=" object-cover object-center mx-auto	 lg:h-[60vh] " key={index}/>
                        // <Image src={image} alt="" className=" object-cover object-center mx-auto	 lg:h-[60vh] " key={index} width={800} height={500}/>
<div  className="bg-contain bg-center h-[50vh] brightness-125  bg-no-repeat" style={{backgroundImage:`url(${image})`}} />
                        ))}

                   
                </Carousel>
            </div>
        </div>
    );
};

export default Caraousel;
