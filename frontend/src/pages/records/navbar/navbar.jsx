import React from 'react'
import Vectored from "@/pages/login/Vectored.png"
import Image from 'next/image'
import Placeholder from "@/pages/login/Placeholder.png"
import Link from 'next/link';

const Header = () => {
  return (
            <div className='mx-auto px-4 max-w-7xl text-black absolute flex w-full items-center justify-between text-center'>
                    <div className='items-center justify-center px-4 grid grid-cols-3'>
                            <Image src={Vectored} />
                                    <Link href="/dashboard/Dashboard" className='text-sm'>
                                        Dashboard
                                    </Link>     
                                <p className='font-semibold text-sm'>
                                    Records</p>
                        </div>
                        <div className='flex justify-between items-center px-4 gap-x-6'>
                            <button className='bg-blue-600 rounded-3xl w-[90px] h-[30px] text-white text-sm items-center'>
                                + Record
                            </button>
                            <Image src={Placeholder} />
                        </div>   
            </div>
  )
}

export default Header