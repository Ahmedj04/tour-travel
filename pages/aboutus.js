import Footer from '@/components/Footer'
import SectionLanding from '@/components/SectionLanding'
import React, { useState } from 'react'
import MenuSM from '@/components/MenuSM'
import Button from '@/components/Button'
import Image from 'next/image'
import { useRouter } from 'next/router';

function aboutus() {
    const [menu, setMenu] = useState(0)
    const router = useRouter();

    return (
        <main>

            <SectionLanding
                setMenu={setMenu}
                title="About Us"
                backgroundImage="/aboutus.png"
            />

            {/* content section */}
            <section className='py-16 md:py-24'>
                <div className='px-3 md:px-20'>
                    {/* row */}
                    <div className='lg:flex'>
                        {/* column 1 (About us content) */}
                        <div className='px-3 lg:w-6/12'>
                            <div>
                                <h3 className='text-xl font-medium border-b pb-2 border-purple-600 inline-block'>About us</h3>
                                <h2 className='pt-5 text-4xl font-medium'>We Are The World Best Travel Agency Company Since 2000</h2>
                                <p className='pt-4 text-slate-400'>At True Flights, we are passionate about travel. We believe that journeys can be life enriching and are happy to assist you in making your travel arrangements. From exotic beach destinations to places brimming with a rich cultural heritage, we help our customers find the perfect trip in absolutely any part of the world.</p>
                                <p className='pt-4 text-slate-400'>Traveling within a specific budget is not only desired but also necessary for you to get the most out of your vacation. Having a deep understanding of all the factors of traveling, we are committed towards our objective of making your travel desires come true. In our travel portal, you can search a wide array of flight, hotel and rental car deals at prices that fit your budget.</p>
                                <p className='pt-4 text-slate-400'>We roll out competitive prices on flight tickets, hotel rooms and rental cars from some of the most trusted global brands. We offer you exciting deals to kick-off your vacation, so that it doesn't put a hole in your pocket. You can rest assured that along with price savings, you get to enjoy the exceptional services we provide to you throughout the duration of your trip.</p>
                                <p className='pt-4 text-slate-400'>Still wondering why you should book with us? We have a hassle-free booking process that can land you amazing travel deals. If you are tired of searching for the best fares, True Flights is here to help you. Simply email at support@trueflights.com and see if we can beat the best price you've found.</p>
                                <div className='mt-6'>
                                    <Button text="Contact us" onClick={() => router.push('/contactus')} />
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