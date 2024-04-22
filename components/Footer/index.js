import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='py-16 bg-slate-100'>
            <div className='px-3 md:px-20'>
                {/* row */}
                <div className='md:flex md:gap-20 lg:gap-40'>

                    {/* column 1 */}
                    <div>
                        {/* footer heading */}
                        <div className='border-b-2 border-purple-600 inline-block'>
                            <h3 className='font-medium text-lg'>Need any help?</h3>
                        </div>
                        <div className='pb-8'>
                            <div className='mt-6 pl-2 pt-1 border-l-2 border-purple-600'>
                                <h3 className='font-medium'>Call 24/7 for any help</h3>
                                <h3 className='pt-2 font-medium text-2xl text-purple-600'>+00 123 456 789</h3>
                            </div>
                            <div className='mt-6 pl-2 pt-1 border-l-2 border-purple-600'>
                                <h3 className='font-medium'>Mail to our support team</h3>
                                <h3 className='pt-2 font-medium text-2xl text-purple-600'>support@trueflights.com</h3>
                            </div>

                        </div>
                    </div>

                    {/* column 2 */}
                    <div>
                        {/* footer heading */}
                        <div className='border-b-2 border-purple-600 inline-block'>
                            <h3 className='font-medium text-lg'>Company</h3>
                        </div>
                        <div className='py-5'>
                            <ul>
                                <li className='pb-4 hover:text-purple-600'><Link href="/aboutus">About Us</Link></li>
                                <li className='pb-4 hover:text-purple-600'><Link href="/faq">Faq</Link></li>
                                <li className='pb-4 hover:text-purple-600'><Link href="/contactus"> Contact</Link></li>
                                <li className='pb-4 hover:text-purple-600'><Link href="#home">Privacy Policy</Link></li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
            <div className='py-5 px-3'>
                <h3 className='text-center font-semibold'>Copyright © {new Date().getFullYear()} All Rights Reserved</h3>
            </div>
        </footer>
    )
}

export default Footer