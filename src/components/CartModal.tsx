"use client";

import Image from "next/image";
import React from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { media as wixMedia } from "@wix/sdk";
import { useWixClient } from "@/hooks/useWixClient";
import { currentCart } from "@wix/ecom";


const CartModal = () => {
  // const cartItems = true;
  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();

  const handleCheckout = async () => {
    try {
      const checkout =
        await wixClient.currentCart.createCheckoutFromCurrentCart({
          channelType: currentCart.ChannelType.WEB,
        });

      const { redirectSession } =
        await wixClient.redirects.createRedirectSession({
          ecomCheckout: { checkoutId: checkout.checkoutId },
          callbacks: {
            postFlowUrl: window.location.origin,
            thankYouPageUrl: `${window.location.origin}/success`,
          },
        });

      if (redirectSession?.fullUrl) {
        window.location.href = redirectSession.fullUrl;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0.0.0.0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20"> 
    
      {!cart.lineItems ? (
        <div className=""> cart is empty</div>
      ) : (
      <>
      <h2 className="text-xl">Shoping Cart</h2>
         {/* LIST */}
        <div className="flex flex-col gap-8 ">
            {/* item */}
        
        {cart.lineItems.map(item => (

          <div className="flex gap-4" key={item._id}>
          
          {item.image && (

            <Image
            src={wixMedia.getScaledToFillImageUrl(item.image,72,96,{})}
            width={72}
            height={96}
            alt=""
            className="object-cover rounded-md"
            />
          )
          }
          <div className="flex flex-col justify-between w-full">
            {/* top */}
            <div className="t">
                {/* title */}
                <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">{item.productName?.original}</h3>
                    <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">{item.quantity && item.quantity >1 && <div className="text-xs bg-green-500">{item.quantity} X</div>}${item.price?.amount}</div>
                </div>
                {/* desc */}
                <div className="text-sm text-gray-500">
                    {item.availability?.status}
                </div>
            </div>
            {/* bottom */}
            <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty {item.quantity}</span>
                <span className="text-gray-500 " 
                style={{cursor: isLoading ? "not-allowed" : "pointer"}}
                onClick={() => removeItem(wixClient, item._id!)}>Remove</span>
            </div>
          </div>
        </div>
      ))
        }
            
        </div>
            {/* //BOTTOM */}
                    <div className="b">
                <div className="flex items-center justify-between font-semibold">
                <span>subtotal</span>
                <span>${cart.subtotal.amount}</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-2">Lorem ipsum dolor sit amet ajjdhjsnh    </p>
        <div className="flex justify-between text-sm">
            <button className="rounded-md py-3 px-4 ring-gray-300">view cart</button>
            <button className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75" disabled={isLoading}
             
             onClick={handleCheckout}>checkout</button>
        </div>
        </div>
            </>
      )}
    </div>

);
};

export default CartModal;
 