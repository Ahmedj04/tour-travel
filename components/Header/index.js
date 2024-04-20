import React from 'react';
import Link from 'next/link'
import { IoIosMenu } from "react-icons/io";
import { CiMail } from "react-icons/ci";

function Header({ setMenu }) {

    return (
        <section className=' relative border-b-  border-gray-400 bg-transparent'>

            <div className='md:flex md:justify-center'>

                <div className='px-3  py-5 md:w-7/12 lg:w-8/12  flex justify-between md:flex-row-reverse'>

                    {/* property name div */}
                    <div className='lg:w-6/12 flex'>
                        <div className='inline-block mx-auto text-center'>
                            <p className='px-4 pt-2 text-2xl text-white font-medium uppercase font-family-marcellus '>
                                Tour & Travels
                            </p>

                        </div>
                        {/* } */}
                    </div>

                    {/* only for small and medium screen */}
                    <div className='my-auto lg:hidden'>
                        <i onClick={() => setMenu(1)}><IoIosMenu size={30} color='white' /></i>
                    </div>

                    {/* only for large screen  */}
                    <div className='hidden lg:block text-white my-auto lg:px-10 lg:w-6/12'>
                        <ul className='flex text-sm '>
                            <li className='pr-14 '>
                                <div className=' border-b-2 pb-2 text-center hover:text-purple-500 hover:border-purple-500'>
                                    <Link href='/' className='cursor-pointer '>HOME</Link>
                                </div>
                            </li>
                            <li className='pr-14'>
                                <div className=' border-b-2 pb-2  text-center hover:text-purple-500 hover:border-purple-500'>
                                    <Link href='/aboutus' className='cursor-pointer'>ABOUT</Link>
                                </div>
                            </li>
                            <li className='pr-14'>
                                <div className=' border-b-2 pb-2  text-center hover:text-purple-500 hover:border-purple-500'>
                                    <Link href='/faq' className='cursor-pointer'>FAQ</Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className='hidden text-white md:flex md:justify-end md:my-auto md:w-5/12 lg:w-4/12'>

                    <div className='flex hover:cursor-pointer hover:text-purple-500 hover:border-purple-500 border-b-2 pb-2 mr-10 margin-right'>
                        <span className='my-auto'><CiMail /></span>
                        <Link href="/contact" className='text-sm ml-2'> CONTACT US</Link>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Header