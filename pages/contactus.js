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