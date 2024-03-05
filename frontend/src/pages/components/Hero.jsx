import React from 'react'
import Image from "next/image"
import Logo from "@/pages/Logo.png"
import Noise from '@/pages/Noise.png'
import Shape from '@/pages/Shape.png'

const Hero = () => {
  return (
        <div className='grid grid-cols-3 w-full items-center px-4 max-w-7xl mx-auto gap-x-4'>
            <div className='flex bg-blue-600 rounded-2xl w-[350px] h-[200px]'>
                <div>
                    <Image src={Noise} />
                    <div className='relative flex flex-row-reverse absolute top-0 left-0'>
                            <Image src={Logo} 
                            className='absolute top-0 left-0 object-cover'/>
                            <Image src={Shape} 
                            className='absolute top-0 left-0'/>
                            <p className='absolute top-0 left-0'>
                                Cash</p>
                            <p>
                                10,000,00</p>
                            
                    </div>
                </div>
            </div>
            <div className='flex bg-blue-600 rounded-2xl w-[350px] h-[200px]'>
                <Image src={Logo} className='w-[100px] h-[40px]'/>
                <p>Cash</p>
                <p>10,000,00</p>
            </div>
            <div className='flex bg-blue-600 rounded-2xl w-[350px] h-[200px]'>
                <Image src={Logo} className='w-[100px] h-[40px]'/>
                <p>Cash</p>
                <p>10,000,00</p>
            </div>
        </div>
  )
}

export default Hero