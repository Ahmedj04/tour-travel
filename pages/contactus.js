import Footer from '@/components/Footer'
import SectionLanding from '../components/SectionLanding';
import React, { useState } from 'react'
import MenuSM from '@/components/MenuSM'

function aboutus() {
    const [menu, setMenu] = useState(0)

    return (
        <main>

            <SectionLanding
                setMenu={setMenu}
                title="Contact Us"
                backgroundImage="/contactus.jpg"
            />

            {/* content section */}
            <section className='py-16 md:py-24'>
                <div className='px-3 md:px-12 lg:px-20'>
                    <h3 className='font-medium text-2xl border-b inline-block pb-2 border-purple-600'>Contact details</h3>
                    <div className='pt-4 md:flex'>
                        {/* contact info div */}
                        <div className='md:w-6/12'>
                            {/*contact helpline number  */}
                            <div className='pb-6'>
                                <h4 className='pb-2 text-gray-500 font-medium'>Help line</h4>
                                <h3 className='text-purple-600 text-2xl font-medium'>+01 234 567 890</h3>
                            </div>

                            {/*contact mails */}
                            <div className='pb-6'>
                                <h4 className='pb-2 text-gray-500 font-medium'>Support Mails</h4>
                                <h3 className='text-purple-600 text-2xl font-medium pb-2'>Customerservice@true-flights.com</h3>
                                <h3 className='text-purple-600 text-2xl font-medium pb-2'>Ticketing@true-flights.com</h3>
                                <h3 className='text-purple-600 text-2xl font-medium pb-2'>Reservations@true-flights.com</h3>
                            </div>

                            {/* contact hours */}
                            <div className='pb-6'>
                                <h4 className='pb-2 text-gray-500 font-medium'>Contact hour</h4>
                                <h3 className='text-purple-600 text-2xl font-medium'>Mon-Sun: 24 hours</h3>
                            </div>
                        </div>

                        {/* address map */}
                        <div className='md:w-6/12'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.943182736325!2d-75.21415252460118!3d38.76500715450582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b90d99b44b9b%3A0xfba6eb4b8adf94b8!2s16192%20Coastal%20Hwy!5e0!3m2!1sen!2sin!4v1713778552275!5m2!1sen!2sin"
                                // width=""
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                                className='w-full'
                            ></iframe>
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