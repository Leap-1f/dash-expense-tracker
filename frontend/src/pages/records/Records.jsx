import React from 'react'
import Navbar from "@/pages/records/navbar/navbar"
import Sidebar from './sidebar/sidebar'
import Hero from './hero/Hero'
import Hero2 from './hero/hero2'

const Records = () => {
  return (
        <>
            <div className='flex-1 flex-cols-2 justify-between bg-gray-100 items-center'>
                <div className='flex justify-center bg-white items-center pt-2 h-20'>
                  <Navbar />
                </div>
                  <div className='flex flex-cols-2 mx-auto justify-between max-w-7xl pl-8 pt-12 bg-gray-100'>
                        <Sidebar />
                        <div className='flex flex-col justify-between w-full px-8 gap-2'>
                            <Hero />                                                    
                            <Hero2 />                        
                        </div>
                  </div>
            </div>
          
        </>
  )
}

export default Records