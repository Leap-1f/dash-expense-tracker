import React from 'react'
import Vectored from "@/pages/Vectored.png"
import Image from 'next/image'
import Placeholder from "@/pages/Placeholder.png"

const Header = () => {
  return (
             <div className='mx-auto px-4 max-w-7xl bg-white text-black absolute flex flex-row w-full items-center justify-between text-center h-20'>
                    <div className='items-center justify-center px-4 grid grid-cols-3'>
                            <Image src={Vectored} />
                                <p className='font-semibold text-sm'>
                                    Dashboard</p>
                                <p className='px-4 text-sm'>
                                Records</p>
                        </div>
                        <div className='flex justify-between items-center px-4 gap-x-6'>
                            <button className='bg-blue-500 rounded-3xl w-[90px] h-[30px] text-white text-sm items-center'>
                                + Record
                            </button>
                            <Image src={Placeholder} />
                        </div>   
            </div>
  )
}

export default Header