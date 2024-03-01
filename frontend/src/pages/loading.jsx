import React from 'react'
import Image from 'next/image';
import Logo from "@/pages/Logo.png"

const LoadingPage = () => {
  return (
        <>
            <div className='w-full h-full bg-white md:h-screen centered'>
              <div className='grid grid-rows-2'>
                <Image src={Logo}  />
                <div className='centered'>
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
                <p className='centered'>Түр хүлээнэ үү...</p>
              </div>
            </div>
        </>
  )
}

export default LoadingPage