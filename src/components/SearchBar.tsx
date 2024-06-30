"use client"
import Image from 'next/image'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'

import React from 'react'

const SearchBar = () => {
    const router = useRouter()
   const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
const formData = new FormData(e.currentTarget);
const name = formData.get('name') as string ;
if (name) {
    router.push(`/list?name={name}`)
}   
}
  return (
     
    <form className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1'>
        <input type="text" name='name' placeholder='Search' className='flex-1' onSubmit={handleSearch}  />
        <button className='cursor-pointer'>
      <Image src="/search.png" alt='' width={16} height={16} />

        </button>
    </form>
 
  )
}

export default SearchBar
