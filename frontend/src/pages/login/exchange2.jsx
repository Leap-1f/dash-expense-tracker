import React from 'react'
import Image from "next/image"
import Logo from "@/pages/login/Logo.png"
import Money from "@/pages/login/Money.png"
import Link from "next/link";

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
                                            <input placeholder='Balance' type='number' id="quantity" name="quantity" min="1" max="5" className="items-center w-full h-[60px] mt-4 px-8 text-xl text-gray-400 bg-gray-100 rounded-2xl border-2 " />
                                                <p className="mb-6 text-sm w-[420px]">
                                                        How much cash do you have in your wallet</p>
                                                        <Link href="/login/exchange3">
                                                            exchange 3
                                                        </Link>
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