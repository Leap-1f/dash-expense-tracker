import React from 'react'
import Image from "next/image"
import Logo from "@/pages/Logo.png"
import Money from "@/pages/Money.png"

const ExchangePage = () => {
  return (
        <>
            <div className='w-screen h-screen grid grid-rows-2 text-black md:h-screen'>
                    <div className='gird grid-rows-2 px-4 centered sticky p-0 relative'>
                            <div className='absolute top-0 h-16 pt-8'>                        
                                        <Image src={Logo} />
                                    <div className='center pt-8'>
                                        <ul className="steps">
                                            <li className="step step-primary">Currency</li>
                                            <li className="step">Balance</li>
                                            <li className="step">Finish</li>
                                        </ul>
                                    </div>
                            </div>
                    </div>
                    <div className='max-h-24 p-8'>
                        <div className='grid grid-rows-2'>
                            <div className='centered grid grid-rows-2'>
                                <div className='bg-blue-600 w-[40px] h-[40px] rounded-full centered'>
                                        <Image src={Money} />
                                </div>
                                <div className='relative grid grid-rows-2 flex'>
                                    <h3 className='font-bold'>Select base currency</h3>
                                </div>
                            </div>
                            </div>
                                    <div className='centered pt-4 px-4'>
                                        <label className="form-control w-full max-w-xs">
                                            <select className="select select-bordered bg-gray-100 grid grid-rows-2">
                                                <option disabled selected>MNT - Mongolian Tugrik</option>
                                                <option>KWD - Kuwaiti Dinar</option>
                                                <option>BHD - Bahraini Dinar</option>
                                                <option>OMR - Omani Rial</option>
                                                <option>JOD - Jordanian Dinar</option>
                                                <option>GBP - British Pound</option> 
                                            </select>
                                        </label>
                                    </div>
                            </div>
                    </div>
        </>
  )
}

export default ExchangePage