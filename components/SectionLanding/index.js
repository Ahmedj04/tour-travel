import React from 'react';
import Header from '../Header';
import Link from 'next/link';

function SectionLanding({ setMenu, title, backgroundImage }) {
    return (
        <section className='relative section-bg lg:h-96 bg-no-repeat bg-cover bg-center ' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Header setMenu={(e) => setMenu(e)} />

            <div className='relative mx-7 md:mx-20'>
                {/* Content */}
                <div className='content-div'>
                    <div className='py-1'>
                        <div className='text-center'>
                            <h1 className='mt-5 animate-slide-in text-white text-2xl md:text-5xl lg:text-7xl md:leading-relaxed font-normal'>
                                {title}
                            </h1>
                            <h3 className='text-xl md:text-2xl font-light text-white pt-3 animate-slide-in'>
                                <span className='text-gray-300 cursor-pointer'><Link href="/" className='hover:text-purple-500'>Home</Link></span> • {title}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    @media (max-width: 1000px) {
                        .section-bg {
                            height: 30vh;
                        }
                    }

                    @media (min-width: 768px) {
                        .content-div {
                            margin-top: 80px;
                        }
                    }

                    @media (max-width: 700px) {
                        .section-bg {
                            height: 35vh;
                        }
                        .content-div {
                            margin-top: 10px;
                        }
                    }

                    @media (min-width: 1020px) and (max-width: 1200px) {
                        .content-div {
                            margin-top: 100px;
                        }
                    }
                    @media (min-width: 1200px) {
                        .content-div {
                            margin-top: 80px;
                        }
                    }
                `}
            </style>
        </section>
    );
}

export default SectionLanding;
