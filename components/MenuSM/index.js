import Link from 'next/link';
import React from 'react'
import { AiOutlineClose } from "react-icons/ai";


function MenuSM({ menu, setMenu }) {
    return (
        <div className={`transition-transform duration-500 ease-in-out transform ${menu === 1 ? 'translate-x-0' : '-translate-x-full'} fixed inset-0 z-50`}>
            {/* Dark background */}
            <div className={`absolute inset-0 bg-black opacity-70 transform transition-transform duration-500 ease-in-out ${menu === 1 ? 'translate-x-0' : '-translate-x-full'}`}></div>

            {/* Content */}
            <div className={`absolute inset-y-0 left-0 w-8/12 bg-white p-4 transform transition-transform duration-1000 ease-in-out ${menu === 1 ? 'translate-x-0 delay-300' : '-translate-x-full'}`}>
                <div className='flex justify-between'>
                    <div className=' inline-block'>
                        <p className=' py-2 text-lg font-medium uppercase font-family-marcellus'>Tour & Travels</p>
                    </div>
                    <button onClick={() => setMenu(0)}><AiOutlineClose /></button>
                </div>

                <div>
                    <ul className='pt-5 font-family-jost-regular' onClick={() => setMenu(0)}>
                        <li className='pb-2'><Link href='/'>Home</Link></li>
                        <li className='pb-2'><Link href='/aboutus'>About</Link></li>
                        <li className='pb-2'><Link href='/faq'>Faq</Link></li>
                        <li className='pb-2'><Link href='/contactus'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuSM