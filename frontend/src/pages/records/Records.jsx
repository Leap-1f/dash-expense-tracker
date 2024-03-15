import React from 'react'
import Navbar from "@/pages/records/navbar/navbar"
import Sidebar from './sidebar/sidebar'

const Records = () => {
  return (
        <>
            <div className='flex-1 bg-gray-100 items-center justify-center'>
              <div className='flex bg-white justify-center items-center pt-2 h-20'>
                <Navbar />
              </div>
              <div className='flex bg-white justify-center items-center pt-2 h-20'>
                <Sidebar />
              </div>
            </div>
        </>
  )
}

export default Records