import React from 'react';
import { IoCloseSharp } from "react-icons/io5";

const Modal= ({ invisible, onClose, children }) => {
  if ( !invisible ) return null;

  const handleClose = (e) => {
    if( e.target.id === 'wrapper' ) onClose();
  }

  return (
      <>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blue-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
        <div className='bg-white w-[700px] h-[400px] rounded-xl'>
          <div className='flex flex-cols-2 justify-between pt-4 pb-4 pl-8 border-b'>
              <h3 className='font-semibold flex flex-col'>Add Record</h3>
              <button className='text-white text-xl place-self-end justify-end'
              onClick={() => onClose()}>
                    <IoCloseSharp className='text-black w-[40px] w-[40px]'/>
              </button>
          </div>

          <div className='flex flex-cols-2 justify-between'>
              <div className='flex flex-row'>
                  <div className='form-box'>
                      <div className='button-box w-[220px] m-auto relative'>
                          <div className='btn'></div>
                          <button type='button' className='toggle-btn'>Expense</button>
                          <button type='button' className='toggle-btn'>Income</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Modal