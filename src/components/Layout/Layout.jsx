import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar/index'

export default function Layout({children}) {
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main className='overflow-hidden'>
                {children}
            </main>
             <Footer />
        </>
    )
}