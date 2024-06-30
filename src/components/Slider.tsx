"use client";

import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "summer sale collections",
    description: "sale up to 50% off",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "summer sale collections",
    description: "sale up to 50% off",
    img: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 3,
    title: "summer sale collections",
    description: "sale up to 50% off",
    img: "https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 4,
    title: "summer sale collections",
    description: "sale up to 50% off",
    img: "https://images.pexels.com/photos/2622187/pexels-photo-2622187.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 5,
    title: "summer sale collections",
    description: "sale up to 50% off",
    img: "https://images.pexels.com/photos/1749452/pexels-photo-1749452.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 6,
    title: "summer sale collections",
    description: "sale up to 50% off",
    img: "https://images.pexels.com/photos/4383928/pexels-photo-4383928.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 7,
    title: "summer sale collections",
    description: "sale up to 50% off",
    img: "https://images.pexels.com/photos/7674586/pexels-photo-7674586.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 8,
    title: "summer sale collections",
    description: "sale up to 50% off",
    img: "https://images.pexels.com/photos/16001577/pexels-photo-16001577/free-photo-of-woman-posing-in-store.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 9,
    title: "summer sale collections",
    description: "sale up to 50% off",
    img: "https://images.pexels.com/photos/4938504/pexels-photo-4938504.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 10,
    title: "summer sale collections",
    description: "sale up to 50% off",
    img: "https://images.pexels.com/photos/7290698/pexels-photo-7290698.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
    
//   useEffect(()=> {
//     const interval = setInterval(() => {
//         setCurrent((prev) => (prev === slides.length -1 ? 0 : prev + 1));
//     },3000);
//   },[]);

  

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000 "style={{transform:`translateX(-${current * 100}vw)`}} >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}

          >
            {/* text container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center ">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold ">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  shop now
                </button>
              </Link>
            </div>
            {/* image container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
                />
            </div>
                </div>
              ))}
              </div>
            <div className=" absolute m-auto left-1/2  bottom-8 flex gap-4">

            {slides.map((slide, index) => (
                <div
                className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
                  current === index ? "scale-150" : ""
                }`}
                key={slide.id}
                onClick={() => setCurrent(index)}
              >
                {current === index && (
                  <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
                )}
              </div>
            ))}
                </div>
    </div>
  );
};

export default Slider;
