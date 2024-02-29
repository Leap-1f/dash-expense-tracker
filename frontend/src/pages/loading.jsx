import React from 'react'
import Image from 'next/image';
import Logo from "@/pages/Logo.png"

const LoadingPage = () => {
  return (
        <>
            <div className='w-full h-full flex bg-white centered md:h-screen grid grid-cols-3'>
                <Image src={Logo} />
                <span className="loading loading-spinner loading-lg"></span>
                <p>Түр хүлээнэ үү...</p>
            </div>
        </>
  )
}

export default LoadingPage