import React from 'react'
import Image from "next/image"
import Logo from "@/pages/login/Logo.png"
import Money from "@/pages/login/Money.png"

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
                                            <li className="step step-primary">Finish</li>                           
                                        </ul>
                            

                                        <form action="" className="grid grid-rows-2 gap-4 text-sm pt-36">
                                            <div className="centered">
                                                        <div className="bg-blue-600 rounded-3xl w-[40px] h-[40px] centered">
                                                            <Image src={Money}  className="w-[25px]"/>
                                                        </div>
                                            </div>

                                                <h3 className="text-2xl flex justify-center font-bold items-center">
                                                        Good Job!</h3>   
                                                        <p className="mb-4 ml-8 mt-4 text-sm w-[320px] flex justify-center items-center">
                                                                Your very first account has been created.Now
                                                                continue to dashboard and start tracking
                                                        </p>
                                                <button className='bg-blue-600 rounded-3xl py-2 text-white text-xl hover:scale-110 h-[50px]'>
                                                    Go to Dashboard
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