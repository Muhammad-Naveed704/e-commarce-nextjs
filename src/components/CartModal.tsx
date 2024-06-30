"use client";

import Image from "next/image";
import React from "react";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0.0.0.0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20"> 
    
      {!cartItems ? (
        <div className=""> cart is empty</div>
      ) : (
      <>
      <h2 className="text-xl">Shoping Cart</h2>
         {/* LIST */}
        <div className="flex flex-col gap-8 ">
            {/* item */}
        
        <div className="flex gap-4">
          
          <Image
            src="https://images.pexels.com/photos/26201692/pexels-photo-26201692/free-photo-of-a-woman-in-a-wedding-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={72}
            height={96}
            alt=""
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            {/* top */}
            <div className="t">
                {/* title */}
                <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* desc */}
                <div className="text-sm text-gray-500">
                    available
                </div>
            </div>
            {/* bottom */}
            <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty 2</span>
                <span className="text-gray-500">Remove</span>
            </div>
          </div>
        </div>
            {/* item */}
        
        <div className="flex gap-4">
          
          <Image
            src="https://images.pexels.com/photos/26201692/pexels-photo-26201692/free-photo-of-a-woman-in-a-wedding-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={72}
            height={96}
            alt=""
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            {/* top */}
            <div className="t">
                {/* title */}
                <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* desc */}
                <div className="text-sm text-gray-500">
                    available
                </div>
            </div>
            {/* bottom */}
            <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty 2</span>
                <span className="text-gray-500">Remove</span>
            </div>
          </div>
        </div>
        </div>
            {/* //BOTTOM */}
                    <div className="b">
                <div className="flex items-center justify-between font-semibold">
                <span>subtotal</span>
                <span>$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-2">Lorem ipsum dolor sit amet ajjdhjsnh    </p>
        <div className="flex justify-between text-sm">
            <button className="rounded-md py-3 px-4 ring-gray-300">view cart</button>
            <button className="rounded-md py-3 px-4 bg-black text-white">checkout</button>
        </div>
        </div>
            </>
      )}
    </div>

);
};

export default CartModal;
 