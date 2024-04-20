import Footer from '@/components/Footer'
import AboutLanding from '@/components/AboutLanding'
import React, { useState } from 'react'
import MenuSM from '@/components/MenuSM'
import Button from '@/components/Button'
import Image from 'next/image'

function aboutus() {
    const [menu, setMenu] = useState(0)

    return (
        <main>
            <AboutLanding
                setMenu={(e) => setMenu(e)}
            />

            {/* content section */}
            <section className='py-24'>
                <div className='px-3 md:px-20'>
                    {/* row */}
                    <div className='lg:flex'>
                        {/* column 1 (About us content) */}
                        <div className='px-3 lg:w-6/12'>
                            <div>
                                <h3 className='text-xl font-medium'>About us</h3>
                                <h2 className='pt-5 text-4xl font-medium'>We Are The World Best Travel Agency Company Since 2000</h2>
                                <p className='pt-4 text-slate-400'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, </p>
                                <p className='pt-4 text-slate-400'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, </p>
                                <div className='mt-6'>
                                    <Button text="Contact us" />
                                </div>
                            </div>
                        </div>

                        {/* column 2  (pic)*/}
                        <div className='px-3 lg:w-6/12'>
                            <div className='pt-14'>
                                <Image
                                    src='/about1.png'
                                    alt="aboutus"
                                    width={500}
                                    height={500}
                                    className='md:w-full'
                                />

                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <Footer />

            {/* menu for small screen */}
            <MenuSM
                menu={menu}
                setMenu={(e) => setMenu(e)}
            />

        </main>
    )
}

export default aboutus