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
                                            <li className="step step-primary">Balance</li>
                                            <li className="step">Finish</li>                           
                                        </ul>
                            

                                        <form action="" className="grid grid-rows-2 gap-4 text-sm pt-36">
                                            <div className="centered">
                                                    <div className="bg-blue-600 rounded-3xl w-[40px] h-[40px] centered">
                                                        <Image src={Money}  className="w-[25px]"/>
                                                    </div>
                                            </div>

                                        <h3 className="text-2xl flex justify-center font-bold items-center">
                                                        Set up your cash Balance</h3>

                                        <div className="max-w-l bg-gray-100 border-2 rounded-xl h-[60px] text-gray justify-center items-center ">
                                                <p className="items-center mt-4 px-8 text-xl text-gray-400">Email</p>
                                        </div>
                                                <p className="mb-6 text-sm w-[420px]">
                                                        How much cash do you have in your wallet</p>
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