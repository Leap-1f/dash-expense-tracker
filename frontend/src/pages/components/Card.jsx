import React from 'react'
import Image from "next/image"
import Logo from "@/pages/login/Logo.png"
import Noise from '@/pages/login/Noise.png'
import Shape from '@/pages/login/Shape.png'
import Union from '@/pages/login/Union.png'

const Hero = () => {
  return (
        <>
            <div className='flex flex-cols-2 px-4 gap-x-6 justify-center items-center'>
                <div className="card w-96  bg-blue-600 image-full">
                    <figure><Image src={Noise} alt="Shoes" /></figure>
                        <div className="card-body">
                            <Image src={Logo} className='w-[60px] h-[30px]'/>
                            <div className='pt-16'>
                                <p className='text-sm text-gray-600'>Cash</p>
                                <p>10,000,00</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end pt-5">
                            <Image src={Shape}/>
                        </div>
                </div>

                <div className="card w-96  bg-white image-full">
                        <div className="card-body">
                            <Image src={Logo} className='w-[60px] h-[30px]'/>
                            <div>
                                <h3>1,200,000$</h3>
                                <p className='text-sm text-gray-600'>Your income Amount</p>
                            </div>
                            <div className='pt-8'>
                                <p className='text-sm text-gray-600'>Your income Amount</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end pt-5">
                            <Image src={Shape}/>
                        </div>
                </div>

                <div className="card w-96  bg-white image-full">
                        <div className="card-body">
                            <Image src={Logo} className='w-[60px] h-[30px]'/>
                            <div>
                                <h3>1,200,000$</h3>
                                <p className='text-sm text-gray-600'>Your income Amount</p>
                            </div>
                            <div className='pt-8'>
                                <p className='text-sm text-gray-600'>Your income Amount</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end pt-5">
                            <Image src={Shape}/>
                        </div>
                </div>
            </div>
        </>
  )
}

export default Hero