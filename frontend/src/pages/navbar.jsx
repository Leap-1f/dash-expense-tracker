import React from 'react'
import Image from "next/image"
import Vectored from "@/pages/Vectored.png"

const Navbar = () => {
  return (
    <div className='w-full h-full bg-white grid grid-cols-2'>
            <h3>
                <Image src={Vectored} />
            </h3>
            <p>Dashboard</p>
            <p>Records</p>
    </div>
  )
}

export default Navbar