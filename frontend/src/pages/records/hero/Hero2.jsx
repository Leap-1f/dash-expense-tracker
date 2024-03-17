import React from 'react'
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Hero2 = () => {
  return (
            <>
                    <div className='flex flex-cols-2 justify-between rounded-2xl'>
                        <div className='flex flex-cols-2 ml-4 gap-x-4 items-center text-md pb-1'>
                            <p className='absolute items-center pl-4'>
                            <MdCheckBoxOutlineBlank className='relative'/>Hello</p>                        
                        </div>                   
                    </div>                                     
            </>
  )
}

export default Hero2
