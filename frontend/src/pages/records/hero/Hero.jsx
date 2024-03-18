import React from 'react'
import Image from 'next/image'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Group from "@/pages/records/hero/Group 8.png"
import Fork from "@/pages/records/hero/Fork.png"

const Hero = () => {
  return (
        
        <>
            <div className='flex flex-cols-2 pb-4 justify-between'>
                <div className='flex items-start'>
                    <div className="join">
                        <button className="join-item btn">«</button>
                        <button className="join-item btn">Last 30 Days</button>
                        <button className="join-item btn">»</button>
                    </div>
                </div>
                <div className="join flex justify-end">
                    <select className="select select-bordered w-full text-md font-bold max-w-xs bg-gray-50 items-center pr-24 border-b-gray-100">
                        <option>Newest first</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-cols-2 pl-4 justify-start bg-white gap-x-4 text-md w-full h-[50px] items-center rounded-xl'>
                <div className="form-control relative">
                <label className="label cursor-pointer">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                </label>
                </div>               
                    Select all
                <p className='relative m-auto justify-end mr-4 text-sm'>
                    - 35,000$
                </p>
            </div>
            <h3 className='relative font-md text-xl pt-4'>Today</h3>

                <div className='flex flex-cols-2 pl-4 justify-start bg-white gap-x-2 w-full h-[55px] items-center rounded-xl'>
                    <div className="form-control relative">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                    </label>
                    </div> 
                    <Image src={Group} className='w-[25px] h-[25px]'/>                
                        Lending & Renting
                    <p className='relative m-auto justify-end mr-4'>
                        - 1,000$
                    </p>
                </div>

                <div className='flex flex-cols-2 pl-4 justify-start bg-white gap-x-2 w-full h-[55px] items-center rounded-xl'>
                    <div className="form-control relative">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                    </label>
                    </div> 
                        <Image src={Fork}  className='w-[25px] h-[25p] text-md'/>      
                        Food & Drinks
                    <p className='relative m-auto justify-end mr-4'>
                        - 1,000$
                    </p>
                </div>

                <div className='flex flex-cols-2 pl-4 justify-start bg-white gap-x-2 w-full h-[55px] items-center rounded-xl'>
                    <div className="form-control relative">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                    </label>
                    </div> 
                        <Image src={Fork}  className='w-[25px] h-[25p]'/>               
                        Food & Drinks
                    <p className='relative m-auto justify-end mr-4'>
                        - 1,000$
                    </p>
                </div>

                <div className='flex flex-cols-2 pl-4 justify-start bg-white gap-x-2 w-full h-[55px] items-center rounded-xl'>
                    <div className="form-control relative">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                    </label>
                    </div> 
                        <Image src={Fork}  className='w-[25px] h-[25p]'/>               
                        Food & Drinks
                    <p className='relative m-auto justify-end mr-4'>
                        - 1,000$
                    </p>
                </div>
                <div className='flex flex-cols-2 pl-4 justify-start bg-white gap-x-2 w-full h-[55px] items-center rounded-xl'>
                    <div className="form-control relative">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                    </label>
                    </div> 
                        <Image src={Fork}  className='w-[25px] h-[25p]'/>                
                        Food & Drinks
                    <p className='relative m-auto justify-end mr-4'>
                        - 1,000$
                    </p>
                </div>
            
                <h3 className='relative font-semibold text-xl pt-4'>Yesterday</h3>

                <div className='flex flex-cols-2 pl-4 justify-start bg-white gap-x-2 w-full h-[55px] items-center rounded-xl'>
                    <div className="form-control relative">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                    </label>
                    </div> 
                    <Image src={Fork}  className='w-[25px] h-[25p]'/>                
                        Food & Drinks
                    <p className='relative m-auto justify-end mr-4'>
                        - 1,000$
                    </p>
                </div>

                <div className='flex flex-cols-2 pl-4 justify-start bg-white gap-x-2 w-full h-[55px] items-center rounded-xl'>
                    <div className="form-control relative">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                    </label>
                    </div> 
                    <Image src={Fork}  className='w-[25px] h-[25p]'/>      
                    Food & Drinks
                <p className='relative m-auto justify-end mr-4'>
                    - 1,000$
                </p>
                </div>

                <div className='flex flex-cols-2 pl-4 justify-start bg-white gap-x-2 w-full h-[55px] items-center rounded-xl'>
                    <div className="form-control relative">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                    </label>
                    </div> 
                    <Image src={Fork}  className='w-[25px] h-[25p]'/>               
                    Food & Drinks
                <p className='relative m-auto justify-end mr-4'>
                    - 1,000$
                </p>
                </div>

                <div className='flex flex-cols-2 pl-4 justify-start bg-white gap-x-2 w-full h-[55px] items-center rounded-xl'>
                    <div className="form-control relative">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                    </label>
                    </div> 
                    <Image src={Fork}  className='w-[25px] h-[25p]'/>               
                    Food & Drinks
                <p className='relative m-auto justify-end mr-4'>
                    - 1,000$
                </p>
                </div>
                <div className='flex flex-cols-2 pl-4 justify-start bg-white gap-x-2 w-full h-[55px] items-center rounded-xl'>
                    <div className="form-control relative">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                    </label>
                    </div> 
                    <Image src={Fork}  className='w-[25px] h-[25p]'/>                
                    Food & Drinks
                <p className='relative m-auto justify-end mr-4'>
                    - 1,000$
                </p>
                </div>
                <div className='flex flex-cols-2 pl-4 justify-start bg-white gap-x-2 w-full h-[55px] items-center rounded-xl'>
                    <div className="form-control relative">
                    <label className="label cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                    </label>
                    </div> 
                    <Image src={Fork}  className='w-[25px] h-[25p]'/>                
                    Food & Drinks
                <p className='relative m-auto justify-end mr-4'>
                    - 1,000$
                </p>
                </div>
        </>
  )
}

export default Hero
