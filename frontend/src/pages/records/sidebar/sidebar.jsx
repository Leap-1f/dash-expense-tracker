import React from 'react'
import { GoTriangleRight } from "react-icons/go";

import {
  FaEye,
  FaPlus,
  FaRegCircle,
} from "react-icons/fa";


const Sidebar = () => {
  return (
    <>
        <div className='p-6 w-[270px] h-screen items-center justify-center bg-white rounded-2xl'>
                <div className='flex flex-col justify-start pb-8'>
                    <h1 className='font-bold text-2xl text-black pb-8'>Records</h1>
                    <button className='w-[220px] h-[40px] bg-blue-600 text-white rounded-3xl items-center px-2'>+ Add</button>
                </div>
                <input type="text" placeholder='Search' className='w-[220px] h-[40px] bg-gray-100 rounded-xl px-2 border-b-2 border-gray-200 text-md' />
                <div className='pt-8 items-start'>
                    <h3 className='font-semibold text-xl'>Types</h3>
                      <ul className='pt-4 items-center'>
                        <li className=' flex flex-cols-2 ml-4 gap-x-4 items-center text-md pb-1'>
                        <FaRegCircle  className='relative'/>All</li>
                        <li className='flex flex-cols-2 ml-4 gap-x-4 items-center text-md pb-1'>
                        <FaRegCircle className='relative'/>Income</li>
                        <li className='flex flex-cols-2 ml-4 gap-x-4 items-center text-md pb-1'>
                        <FaRegCircle className='relative'/>Expense</li>
                      </ul>
                </div>
                <div className='flex flex-cols-2 pt-4 justify-between items-center text-center'>
                      <h1 className='font-semibold text-xl text-black items-center'>Category</h1>
                      <button className='text-md pt-1 text-gray-200 items-center'>Clear</button>
                </div>
                <div className='pt-2 justify-between'>
                      <ul className='pt-4 justify-between'>
                        <li className='flex flex-cols-2 gap-x-2 justify-start ml-2 text-md items-center pb-1'>
                            <FaEye className='relative text-center'/>Food & Drinks
                            <GoTriangleRight className='relative m-auto justify-end mr-0'/>
                        </li>
                        <li className='flex flex-cols-2 ml-2 gap-x-2 justify-start items-center text-md pb-1'>
                            <FaEye className='relative'/>Shopping
                            <GoTriangleRight className='relative m-auto justify-end mr-0'/>
                        </li>
                        <li className='flex flex-cols-2  gap-x-2 justify-start ml-2 items-center text-md pb-1'>
                            <FaEye className='relative'/>Housing
                            <GoTriangleRight className='relative m-auto justify-end mr-0'/>
                        </li>
                        <li className='flex flex-cols-2 gap-x-2 justify-start  ml-2 items-center text-md pb-1'>
                            <FaEye className='relative'/>Transportaion
                            <GoTriangleRight className='relative m-auto justify-end mr-0'/>
                        </li>
                        <li className='flex flex-cols-2 gap-x-2 justify-start  ml-2 items-center text-md pb-1'>
                            <FaEye className='relative'/>Vehicle
                            <GoTriangleRight className='relative m-auto justify-end mr-0'/>
                        </li>
                        <li className='flex flex-cols-2 gap-x-2 justify-start  ml-2 items-center text-md pb-1'>
                            <FaEye className='relative'/>Life & Entertainment
                            <GoTriangleRight className='relative m-auto justify-end mr-0'/>
                        </li>
                        <li className='flex flex-cols-2 gap-x-2 justify-start  ml-2 items-center text-md pb-1'>
                            <FaEye className='relative'/>Communication, PC
                            <GoTriangleRight className='relative m-auto justify-end mr-0'/>
                        </li>
                        <li className='flex flex-cols-2 gap-x-2 justify-start  ml-2 items-center text-md pb-1'>
                            <FaEye className='relative'/>Financial expenses
                            <GoTriangleRight className='relative m-auto justify-end mr-0'/>
                        </li>
                        <li className='flex flex-cols-2  gap-x-2 justify-start  ml-2 items-center text-md pb-1'>
                            <FaEye className='relative'/>Investments
                            <GoTriangleRight className='relative m-auto justify-end mr-0'/>
                        </li>
                        <li className='flex flex-cols-2 gap-x-2 justify-start  ml-2 items-center text-md pb-1'>
                            <FaEye className='relative'/>Income
                            <GoTriangleRight className='relative m-auto justify-end mr-0'/>
                        </li>
                        <li className='flex flex-cols-2 gap-x-2 justify-start ml-2 items-center text-md pb-1'>
                            <FaEye className='relative'/>Others
                            <GoTriangleRight className='relative  mr-0 m-auto justify-end'/>
                        </li>
                        <li className='flex flex-cols-2 gap-x-2 justify-start ml-2 items-center text-md pb-1'>
                            <FaPlus className='relative'/>Add Category
                            <GoTriangleRight className='relative m-auto justify-end mr-0'/>
                        </li>
                      </ul>
                </div>
                <div className='pt-4 items-start'>
                      <h3 className='font-semibold text-xl'>Amount Range</h3>
                      <div className='flex flex-cols-2 gap-x-2 items-center pt-4'>
                        <input type="number" placeholder="0" className='bg-gray-100 rounded-xl w-[107px] h-[45px] pl-4'/>
                        <input type="number" placeholder='1000' className='bg-gray-100 rounded-xl w-[107px] h-[45px] pl-4'/>
                      </div>
                </div>
                <div className='pt-6'>
                  <input type="range" min={0} max="100" value="40" className="range range-info" />
                </div>
        </div>
    </>
  )
}

export default Sidebar