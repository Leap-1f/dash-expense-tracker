import React from 'react'
import Image from "next/image"
import Logo from "@/pages/login/Logo.png"
import Noise from '@/pages/login/Noise.png'
import Shape from '@/pages/login/Shape.png'
import Union from '@/pages/login/Union.png'
import Green from '@/pages/login/Green.png'
import Blue from '@/pages/login/Blue.png'
import Up from '@/pages/login/Up.png'
import Down from '@/pages/login/Down.png'

const Hero = () => {
  return (
        <>
            <div className='flex flex-cols-2 px-4 gap-x-6 justify-center items-center'>
                <div className="card w-96 text-black grid gap-x-3 bg-blue-600 flex-shrink-0">
                    <Image src={Logo}  className="w-[80px] h-[30px] absolute top-6 left-6"/>
                    <Image src={Noise} />
                    <Image src={Shape} className="absolute right-0 bottom-0"/>
                    <p className="absolute left-6 bottom-16 text-gray-400">Cash</p>
                    <p className="absolute left-6 bottom-10 font-bold text-white text-xl">10,000,00</p>
                    <Image src={Union} className="absolute bottom-12 right-8"/>
                </div>

                <div className="card w-96 bg-white text-black grid gap-x-3">
                    <h3 className="flex flex-cols-2 px-1 gap-x-1 text-sm font-bold mb-4 ml-4 mt-4 items-center">
                        <Image src={Green} className='relative'/>
                        Your income</h3>
                    <p className="border-b"></p>
                    <p className="text-4xl font-semibold ml-4 mt-4">1,200,000$</p>
                    <p className="text-xl mb-4 text-gray-400 ml-4 mt-2">Your Income Amount</p>
                    <p className="flex flex-cols-2 gap-x-1 ml-4 mt-4 mb-6 items-center">
                        <Image src={Up} className='relative w-[20px] h-[20px]'/>
                        32% from last month</p>
                </div>

                <div className="card w-96 bg-white text-black grid gap-x-3">
                    <h3 className="flex flex-cols-2 px-1 gap-x-1 text-sm font-bold mb-4 ml-4 mt-4 items-center">
                        <Image src={Blue} className='relative' />
                        Total Expenses</h3>
                    <p className="border-b"></p>
                    <p className="text-4xl font-semibold ml-4 mt-4">-1,200,000$</p>
                    <p className="text-xl mb-4 text-gray-400 ml-4 mt-2">Your Income Amount</p>
                    <p className="flex flex-cols-2 gap-x-1 ml-4 mt-4 mb-6 items-center">
                        <Image src={Down} className='relative w-[20px] h-[20px]'/>
                        32% from last month</p>
                </div>
            </div>
        </>
  )
}

export default Hero