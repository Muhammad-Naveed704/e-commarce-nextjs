"use client"
import { useRouter, usePathname, useSearchParams } from "next/navigation";
// import {  } from "next/router";
// import React from "react";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const {name, value} =e.target;
    // console.log(name, value);
  const params = new URLSearchParams(searchParams);
  params.set(name, value);    
  replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        onChange={handleFilterChange}
        >
          <option>type</option>
          <option value="Physical">Physical</option>
          <option value="Digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        onChange={handleFilterChange}
        />
      
        <select
          name="cat"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        
        >
          <option>Category</option>
          <option value="">New Arrivals</option>
          <option value="">Popular</option>
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
          
        </select>
      </div>
      <div className="">
        <select name="sort" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
        onChange={handleFilterChange}
        >
        
          
            <option >Sort By</option>
            <option value="asc price">Price (low to high)</option>
            <option value="desc price">Price (high to low)</option>
            <option value="asc lastUpdated">Newest</option>
            <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
