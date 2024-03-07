import React from 'react'
import Image from "next/image";
import Logo from "@/pages/login/Logo.png"

const LoginPage = () => {
  return (
        <>
            <section className='min-h-screen flex items-center justify-center'>
                <div className='w-screen h-screen grid grid-rows-2 text-black md:grid-cols-2'>
                    <div className='w-full h-full bg-white centered md:h-screen'>
                        <div className='grid grid-rows-2'>
                            <h3 className='centered font-bold text-2xl'>
                                    <Image src={Logo} />
                            </h3>
                            <h3 className='text-black text-2xl font-semibold mb-3 mt-6 centered'>
                                    Welcome Back
                            </h3>
                            <p className='text-gray-900 text-sm text-mt-4 centered'>
                                Welcome Back, Please enter your details
                            </p>

                            <form action="" className='flex flex-col gap-4 text-sm'>
                                <input type="text" className='p-2 rounded-md border mt-8 bg-gray-100' name="email" placeholder='Email'/>
                                <input type="password" className='p-2 rounded-md border bg-gray-100' name="email" placeholder='Password'/>
                                <button className='bg-blue-600 rounded-2xl py-2 text-white hover:scale-110'>
                                            Log in
                                </button>
                            </form>
                                <div className='mt-6 text-xs flex justify-center font-semibold items-center'>
                                        <p>Don't have account</p>
                                            <button className='py-2 px-5 rounded-xl text-blue-500 hover:scale-110'>
                                                    Sign up
                                            </button>
                                </div>
                        </div>
                    </div>
                    <div className='md:block hidden w-full h-full bg-blue-600 centered md:h-screen'>

                    </div>
                </div>
            </section>
        </>
  )
}

export default LoginPage