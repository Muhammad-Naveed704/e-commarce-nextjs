import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%]  lg:w-[22%] ">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/4938511/pexels-photo-4938511.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/7290669/pexels-photo-7290669.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium"> Product Name</span>
            <span className="font-semibold"> $49</span>

        </div>
    <div className="text-sm text-gray-500">My description</div>
    <button className="rounded-2xl ring-1 ring-naveed text-naveed py-2 px-4 w-max text-xs hover:bg-naveed hover:text-white"> Add to cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%]  lg:w-[22%] ">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/6461238/pexels-photo-6461238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/6167442/pexels-photo-6167442.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium"> Product Name</span>
            <span className="font-semibold"> $49</span>

        </div>
    <div className="text-sm text-gray-500">My description</div>
    <button className="rounded-2xl ring-1 ring-naveed text-naveed py-2 px-4 w-max text-xs hover:bg-naveed hover:text-white"> Add to cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%]  lg:w-[22%] ">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/6803754/pexels-photo-6803754.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/5863536/pexels-photo-5863536.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium"> Product Name</span>
            <span className="font-semibold"> $49</span>

        </div>
    <div className="text-sm text-gray-500">My description</div>
    <button className="rounded-2xl ring-1 ring-naveed text-naveed py-2 px-4 w-max text-xs hover:bg-naveed hover:text-white"> Add to cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%]  lg:w-[22%] ">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/7440062/pexels-photo-7440062.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/10574126/pexels-photo-10574126.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium"> Product Name</span>
            <span className="font-semibold"> $49</span>
        </div>
    <div className="text-sm text-gray-500">My description</div>
    <button className="rounded-2xl ring-1 ring-naveed text-naveed py-2 px-4 w-max text-xs hover:bg-naveed hover:text-white"> Add to cart</button>
      </Link>
       
    </div>
  );
};

export default ProductList;
