import React from 'react'
import Image from "next/image"
import Logo from "@/pages/Logo.png"
import Money from "@/pages/Money.png"

const ExchangePage = () => {
  return (
        <>
                <section className="flex items-center centered">
                    <div className="grid grid-rows text-black">
                        <div className='w-full bg-white md:h-screen'>
                            <div className='sticky top-0 pt-10'>
                                        <div className="centered font-bold text-2xl sticky pt-0">
                                        <Image src={Logo} />
                                        </div>
    
                                        <ul className="steps sticky top-0 pt-10 centered">
                                            <li className="step step-primary">Currency</li>
                                            <li className="step">Balance</li>
                                            <li className="step">Finish</li>                           
                                        </ul>
                            

                                        <form action="" className="grid grid-rows-2 gap-4 text-sm pt-36">
                                            <div className="centered">
                                                    <div className="bg-blue-600 rounded-3xl w-[40px] h-[40px] centered">
                                                        <Image src={Money}  className="w-[25px]"/>
                                                    </div>
                                            </div>

                                        <h3 className="text-xl flex justify-center font-bold items-center">
                                                        Select base currency
                                                        </h3>

                                        <select className="select select-bordered max-w-l bg-gray-100 h-[60px] font-bold hover:scale-110">
                                                <option disabled selected>MNT - Mongolian Tugrik</option>
                                                <option>Han Solo</option>
                                                <option>Greedo</option>
                                        </select>
                                                <p className="mb-6 text-sm w-[420px]">
                                                        Your base currency should be the one you use most often. All
                                                        transaction in other currencies will be calculated based on this one</p>
                                                <button className='bg-blue-600 rounded-3xl py-2 text-white hover:scale-110 h-[50px]'>Confirm
                                                </button>
                                        </form>
                                </div>
                            </div>
                        </div>
                </section>
        </>
    )
}

export default ExchangePage