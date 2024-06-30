import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      {/* top */}
      <div className=" flex flex-col md:flex-row justify-between gap-24">
        {/* left */}
        <div className=" w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
        <Link href="/" >
        <div className='text-2xl tracking-wide'>mega</div>
        </Link>
        <p>Lorem ipsum dolor, sit amet consectetur </p>
        <span  className='font-semibold'>amirprinceak@gmail.com</span>
        <span className='font-semibold'>+92 03442862704</span>
        <div className="flex gap-6">
          <Image src="/facebook.png"  alt="" width={16} height={16}/>
          <Image src="/instagram.png"  alt="" width={16} height={16}/>
          <Image src="/youtube.png"  alt="" width={16} height={16}/>
          <Image src="/pinterest.png "  alt="" width={16} height={16}/>
          <Image src="/x.png"  alt="" width={16} height={16}/>
        </div>
        </div>

        {/* center */}
        <div className="hidden lg:flex justify-between w-1/2 ">
        <div className="flex flex-col justify-between" >
        <h1 className='font-medium text-lg'>Company</h1>
        <div className="flex flex-col justify-between">
          <Link href=""> About Us</Link>
          <Link href="">Careers </Link>
          <Link href="">Affiliates</Link>
          <Link href="">Blog</Link>
          <Link href="">Contact</Link>
        </div>
        </div>
        <div className="flex flex-col justify-between" >
        <h1 className='font-medium text-lg'>Company</h1>
        <div className="flex flex-col justify-between">
          <Link href=""> About Us</Link>
          <Link href="">Careers </Link>
          <Link href="">Affiliates</Link>
          <Link href="">Blog</Link>
          <Link href="">Contact</Link>
        </div>
        </div>
        <div className="flex flex-col justify-between" >
        <h1 className='font-medium text-lg'>Company</h1>
        <div className="flex flex-col justify-between">
          <Link href=""> About Us</Link>
          <Link href="">Careers </Link>
          <Link href="">Affiliates</Link>
          <Link href="">Blog</Link>
          <Link href="">Contact</Link>
        </div>
        </div>
        </div>
        {/* right */}
        <div className=" w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
        <h1 className='font-medium text-lg'>Subscribe</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio autem possimus 
        </p>
        <div className="flex">
          <input type="text" placeholder='Email Address ' className='p-4 w-3/4'/>
          <button className='w-1/4 bg-naveed text-white '> JOIN</button>
          </div>
          <span className='font-semibold'> secure payments</span>
          <div className="flex justify-between">
          <Image src="/discover.png"  alt="" width={40} height={20}/>
          <Image src="/skrill.png"  alt="" width={40} height={20}/>
          <Image src="/paypal.png"  alt="" width={40} height={20}/>
          <Image src="/mastercard.png "  alt="" width={40} height={20}/>
          <Image src="/visa.png"  alt="" width={40} height={20}/>
        </div>
        </div>
      </div>
      {/* bottom */}
        <div className=" flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
          <div className="">@ 2024 mega mart</div>
          <div className="flex flex-col gap-8 md:flex-row"> 
            <div className="">
              <span className='to-gray-500 mr-4'>Language</span>
              <span className=' font-medium'>pakistan | Urdu</span>
            </div>
            <div className="">
              <span className='to-gray-500 mr-4'>Currency</span>
              <span className=' font-medium'>$49</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
