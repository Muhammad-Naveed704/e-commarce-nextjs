import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
        <div className="flex gap-4 md:gap-8">
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide '> Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide '> Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide '> Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide '> Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide '> Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide '> Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide '> Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide '> Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide '> Category Name</h1>
            </Link>
            <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
            <div className="relative bg-slate-100 w-full h-96">
                <Image src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' fill sizes='20vw' className='object-cover'/>
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide '> Category Name</h1>
            </Link>
        </div>
    </div>
  )
}

export default CategoryList
