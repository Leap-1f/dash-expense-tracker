import React from 'react'
import Header from './components/Header'
import Hero from '@/pages/components/Hero'
const HomePage = () => {
  return (
    <>  
            <div className='flex-1 md:flex w-screen  relative w-full justify-center'>
              <Header />
              <div className='flex-1 md:flex w-screen mt-20'>
                <Hero />
              </div>
            </div>
    </>
  )
}

export default HomePage
