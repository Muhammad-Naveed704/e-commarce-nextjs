"use client"
import Image from "next/image";
import React, { useState } from "react";

// const images =[
//   {
//     id:1,
//     url:"https://images.pexels.com/photos/26100664/pexels-photo-26100664/free-photo-of-a-young-male-deer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//   },
//   {
//     id:2,
//     url:"https://images.pexels.com/photos/25288209/pexels-photo-25288209/free-photo-of-a-building-with-two-windows-and-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//   },
//   {
//     id:3,
//     url:"https://images.pexels.com/photos/24244035/pexels-photo-24244035/free-photo-of-elephant-by-river.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//   },
//   {
//     id:4,
//     url:"https://images.pexels.com/photos/26732346/pexels-photo-26732346/free-photo-of-a-record-player-sits-on-a-table-with-flowers-in-a-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//   },
// ]

const ProductImages = ({items}:{items:any}) => {
  const [index , setIndex] = useState(0) 
  return (
    <div className="a">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover  rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
    {items.map((item:any, i:number) =>(

        <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={item._id} onClick={() => setIndex(i)}>
      <Image
          src={item.image?.url}
          alt=""
          fill
          sizes="30vw"
          className="object-cover rounded-md"
          />
          </div>
    ))}
      </div>
    </div>
  );
};

export default ProductImages;
