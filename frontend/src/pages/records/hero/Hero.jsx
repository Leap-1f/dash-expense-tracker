import React from 'react'

const Hero = () => {
  return (
        
        <>
            <div className='flex flex-cols-2 justify-between'>
                <div className='flex items-start'>
                    <div className="join">
                        <button className="join-item btn">«</button>
                        <button className="join-item btn">Page 22</button>
                        <button className="join-item btn">»</button>
                    </div>
                </div>
                <div className="join flex justify-end">
                    <select className="select select-bordered w-full max-w-xs bg-gray-50 items-center pr-24 border-b-gray-100">
                        <option>Newest first</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
            </div>
        </>
  )
}

export default Hero
