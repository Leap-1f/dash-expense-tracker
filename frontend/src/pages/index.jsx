import React from 'react'
import Header from './components/Header'
import Card from '@/pages/components/Card'
import BarChart from './components/BarChart'

const HomePage = () => {

  
  return (
    <>    
            <div className='flex-1 bg-gray-100 items-center justify-center'>
              <div className='flex bg-white justify-center items-center pt-2 h-20'>
                <Header />
              </div>
                <div className='bg-gray-100 pt-12 items-center justify-center'>
                    <Card />
                </div>
                <div className='bg-gray-100 pt-12 items-center justify-center'>
                    <BarChart />
                </div>
            </div>
    </>
  )
}

export default HomePage
