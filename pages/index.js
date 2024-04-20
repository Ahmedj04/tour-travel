import React, { useState } from 'react'
import HomeLanding from "@/components/HomeLanding";
import MenuSM from '@/components/MenuSM';
import { MdOutlineFlightTakeoff, MdFlightLand } from "react-icons/md";
import Button from '@/components/Button';
import Footer from '@/components/Footer';

export default function Home() {

  const [menu, setMenu] = useState(0)
  const [selectTrip, setSelectTrip] = useState({
    oneWay: 1,
    roundTrip: 0,
  })

  return (
    <main>
      <div className='z-10 relative'>
        <HomeLanding
          setMenu={(e) => setMenu(e)}
        />
      </div>

      {/* flights booking */}
      <section className='flex justify-center z-20 relative mt-[-50px]'>
        <div className='w-11/12 rounded-3xl shadow-2xl border-2 mb-10 bg-white'>
          <div className='p-10'>

            {/* Flight filters */}
            <div className='text-center pb-5 md:pb-10 lg:pb-10 lg:flex lg:justify-between'>
              <div className='inline-block lg:block pb-5 lg:pb-0'>
                <div className='rounded-md bg-purple-600 text-white p-2 flex'>
                  <MdOutlineFlightTakeoff className='my-auto' />
                  <span className='pl-2'>Flights</span>
                </div>
              </div>

              <div className='lg:my-auto'>
                <span className={`${selectTrip.oneWay === 1 ? "text-purple-600" : ""} pr-5 font-medium cursor-pointer`} onClick={() => { setSelectTrip({ oneWay: 1, roundTrip: 0 }) }}>One Way</span>
                <span className={`${selectTrip.roundTrip === 1 ? "text-purple-600" : ""} font-medium cursor-pointer`} onClick={() => { setSelectTrip({ oneWay: 0, roundTrip: 1 }) }}>Round Trip</span>
              </div>
            </div>

            {/* Flights form grid */}
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
              {/* Flight from */}
              <div className='bg-slate-200 rounded-md p-4'>
                <div className='flex justify-between'>
                  <span className='text-gray-500'>From</span>
                  <MdOutlineFlightTakeoff size={30} />
                </div>
                <input className='bg-transparent border-none outline-none py-2 w-full' />
                <p className='text-xs pt-2'>JFK-John F.Kennedy International..</p>
              </div>

              {/* Flight to */}
              <div className='bg-slate-200 rounded-md p-4'>
                <div className='flex justify-between'>
                  <span className='text-gray-500'>To</span>
                  <MdFlightLand size={30} />
                </div>
                <input className='bg-transparent border-none outline-none py-2 w-full' />
                <p className='text-xs pt-2'>LCY, london city airport</p>
              </div>

              {/* Journey date */}
              <div className='bg-slate-200 rounded-md p-4'>
                <div className='flex justify-between'>
                  <span className='text-gray-500'>Journey date</span>
                </div>
                <input type='date' className='bg-transparent border-none outline-none py-2 w-full' />
                <p className='text-xs pt-2'>Thursday</p>
              </div>

              {/* Passenger class */}
              <div className='bg-slate-200 rounded-md p-4'>
                <div className='flex justify-between'>
                  <span className='text-gray-500'>Passenger class</span>
                </div>
                <p className='font-medium text-lg pt-2'>0 Passenger</p>
                <p className='text-xs pt-2'>Business</p>
              </div>
            </div>

            {/* search button */}
            <div className='flex justify-center pt-10'>
              <Button text="Search" />
            </div>

          </div>
        </div>
      </section>

      {/* destinations */}
      <section>
        <div className='lg:py-14 lg:px-10'>

          {/* section heading */}
          <div className='flex justify-center'>
            <div>
              <h2 className='text-4xl font-medium pb-3'>Top destinations</h2>
              <div className='flex justify-center'><span className='w-3/4 border-b border-purple-600'> </span></div>
            </div>
          </div>

          {/* destination photos */}
          <div className='md:overflow-x-auto px-10 lg:px-0  my-8 '>
            <div className='lg:flex lg:justify-between'>

              <div className="main-banner relative mb-16 lg:mb-0  lg:h-screen lg:w-5/12  rounded-2xl overflow-hidden">
                {/* Background Image with Purple Overlay */}
                <div className="bg-[url('/dest1.png')] h-full bg-no-repeat bg-cover rounded-2xl transition-transform duration-300 transform hover:scale-105 relative">
                  {/* Purple overlay */}
                  <div className="absolute inset-0 bg-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                </div>

                {/* Content */}
                <div>
                  {/* <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white z-10 pointer-events-none" style={{ "left": "25%" }}> */}
                  <div className="absolute  text-white z-10 pointer-events-none" style={{ "left": "20%", "top": "25%" }}>
                    {/* Content inside the div */}
                    <div className="text-4xl my-auto font-medium">
                      <p>Up to</p>

                      <p className='md:py-5 lg:py-10'><span className="font-semibold text-7xl">50</span>% off</p>

                      <p> Holiday packages</p>
                    </div>

                  </div>
                  <div className="absolute" style={{ "bottom": "14%", "left": "20%" }}>
                    <Button text="Book now" />
                  </div>
                </div>

              </div>


              {/* other columns (3 COLUMNS) */}
              <div className='lg:w-7/12'>
                <div className='lg:pl-10'>
                  <div className='md:flex justify-evenly lg:justify-normal  lg:gap-5'>
                    {/* column 1 */}
                    <div className='flex gap-5 flex-col pb-5 md:pb-0'>
                      {/* row 1 */}
                      <div className='relative overflow-hidden rounded-2xl'>
                        <div className="relative bg-[url('/dest2.png')] h-72 md:h-44 w-full md:w-56 bg-no-repeat bg-cover rounded-2xl transition-transform duration-300 transform hover:scale-105  flex items-center justify-center ">
                          {/* Purple overlay */}
                          <div className="absolute inset-0 bg-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                          <h2 className='text-center text-2xl text-white '>China</h2>
                        </div>
                      </div>

                      {/* row 2 */}
                      <div className='relative overflow-hidden rounded-2xl'>
                        <div className="relative bg-[url('/dest5.png')] h-72 md:h-44 w-full md:w-56 bg-no-repeat bg-cover rounded-2xl transition-transform duration-300 transform hover:scale-105  flex items-center justify-center ">
                          {/* Purple overlay */}
                          <div className="absolute inset-0 bg-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                          <h2 className='text-center text-2xl text-white '>Darjeeling</h2>
                        </div>
                      </div>

                      {/* row 3 */}
                      <div className='relative overflow-hidden rounded-2xl'>
                        <div className="relative bg-[url('/dest6.png')] h-96 md:h-64 w-full md:w-56 bg-no-repeat bg-cover rounded-2xl transition-transform duration-300 transform hover:scale-105  flex items-center justify-center ">
                          {/* Purple overlay */}
                          <div className="absolute inset-0 bg-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                          <h2 className='text-center text-2xl text-white '>Malaysia</h2>
                        </div>
                      </div>
                    </div>

                    {/* column 2 */}
                    <div className='flex gap-5 flex-col pb-5 md:pb-0'>
                      {/* row 1 */}
                      <div className='relative overflow-hidden rounded-2xl'>
                        <div className="relative bg-[url('/dest3.png')] h-80 md:h-64 w-full md:w-56 bg-no-repeat bg-cover rounded-2xl transition-transform duration-300 transform hover:scale-105  flex items-center justify-center ">
                          {/* Purple overlay */}
                          <div className="absolute inset-0 bg-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                          <h2 className='text-center text-2xl text-white '>Gangtok</h2>
                        </div>
                      </div>

                      {/* row 2 */}
                      <div className='relative overflow-hidden rounded-2xl'>
                        <div className="relative bg-[url('/dest7.png')] h-96 md:h-48 w-full md:w-56 bg-no-repeat bg-cover rounded-2xl transition-transform duration-300 transform hover:scale-105  flex items-center justify-center ">
                          {/* Purple overlay */}
                          <div className="absolute inset-0 bg-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                          <h2 className='text-center text-2xl text-white '>Thailand</h2>
                        </div>
                      </div>

                      {/* row 3 */}
                      <div className='relative overflow-hidden rounded-2xl'>
                        <div className="relative bg-[url('/dest8.png')] h-80 md:h-44 w-full md:w-56 bg-no-repeat bg-cover rounded-2xl transition-transform duration-300 transform hover:scale-105  flex items-center justify-center ">
                          {/* Purple overlay */}
                          <div className="absolute inset-0 bg-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                          <h2 className='text-center text-2xl text-white '>Australia</h2>
                        </div>
                      </div>
                    </div>


                    {/* column 3 */}
                    <div className='flex gap-5 flex-col pb-5 md:pb-0'>
                      {/* row 1 */}
                      <div className='relative overflow-hidden rounded-2xl'>
                        <div className="relative bg-[url('/dest4.png')] h-96 md:h-64 w-full md:w-56 bg-no-repeat bg-cover rounded-2xl transition-transform duration-300 transform hover:scale-105  flex items-center justify-center ">
                          {/* Purple overlay */}
                          <div className="absolute inset-0 bg-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                          <h2 className='text-center text-2xl text-white '>London</h2>
                        </div>
                      </div>

                      {/* row 2 */}
                      <div className='relative overflow-hidden rounded-2xl'>
                        <div className="relative bg-[url('/dest9.png')] h-80 md:h-64 w-full md:w-56 bg-no-repeat bg-cover rounded-2xl transition-transform duration-300 transform hover:scale-105  flex items-center justify-center ">
                          {/* Purple overlay */}
                          <div className="absolute inset-0 bg-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-50"></div>
                          <h2 className='text-center text-2xl text-white '>USA</h2>
                        </div>
                      </div>

                      {/* row 3 */}
                      <div >
                        <Button customCSS="w-full" text="Book now" />
                      </div>
                    </div>
                  </div>

                </div>
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

      <style jsx>
        {`
                {/* for md screens */}
                @media (max-width: 1000px) {
                    .main-banner {
                        height: 500px;
                    }
                }
                `}
      </style>

    </main>

  );
}
