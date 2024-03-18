import React, { Fragment, useState } from 'react'
import Navbar from "@/pages/records/navbar/navbar"
import Sidebar from './sidebar/sidebar'
import Hero from './hero/Hero'
import Modal from './users/Modal'

const Records = () => {
  const [showModal, setShowModal] = useState (false); 
  return (
        <>
          <Fragment>
            <div className='flex-1 flex-cols-2 justify-between bg-gray-100 items-center'>
                <div className='flex justify-center bg-white items-center pt-2 h-20'>
                  <Navbar />
                </div>
                <button className='text-black bg-blue-700'></button>
                <div className='flex flex-cols-2 mx-auto justify-between max-w-7xl pl-8 pt-12 bg-gray-100'>
                        <Sidebar />
                  <div className='flex flex-col justify-between w-full px-8 gap-2'>
                              <Hero />                                                                                                      
                  </div>
                </div>
            </div>
          <Modal invisible={showModal} onClose={() => setShowModal(false)}>
            <h3 className='text-xl font-semibold text-gray-900 mb-5'>Modal Title</h3>
            </Modal>
          </Fragment>
        </>
  )
}

export default Records