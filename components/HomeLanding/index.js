import React from 'react'
import Header from '../Header';

function HomeLanding({ setMenu }) {

    return (
        // <section id='home' className='relative md:h-screen lg:min-h-screen lg:h-fit'>
        <section id='home' className='relative home-bg lg:h-screen'>
            {/* this div is used to set the bg-image and set the opacity for it */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/home.png')] bg-no-repeat bg-cover bg-center "></div>
                {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
                <div className="absolute inset-0 "></div>
            </div>

            <Header
                setMenu={(e) => setMenu(e)}
            />
            <div className=' relative mx-7 md:mx-20'>
                {/* content */}
                <div >
                    <div className='content-div'>
                        <div className='py-20'>
                            <div className='text-center'>
                                <h1 className='mt-5 animate-slide-in text-white text-4xl  md:text-5xl lg:text-7xl md:leading-relaxed font-normal font-family-marcellus'>
                                    Explore the world together
                                </h1>
                                <h3 className='text-2xl font-light text-white pt-3 animate-slide-in'>
                                    Find awesome flights, hotel, tour, car and packages
                                </h3>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>
                {`      
                {/* for md screens */}
                @media (max-width: 1000px) {
                    .home-bg {
                        height:50vh;
                    }
                }
                    
                @media (min-width: 768px){
                    .content-div {
                        margin-top:50px;
                    }
                }


               {/* for sm screen */}
                @media (max-width: 700px) {
                    .home-bg {
                        height:80vh;
                    }
                    .content-div {
                        margin-top:70px;
                    }
                }  

               {/* for lg screens */}
                @media (min-width: 1020px) and (max-width:1200px){
                    .content-div {
                        margin-top:100px;
                    }
                }
                @media (min-width: 1200px){
                    .content-div {
                        margin-top:150px;
                    }
                }
        
                `}
            </style>
        </section>
    )
}

export default HomeLanding