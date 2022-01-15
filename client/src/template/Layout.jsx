import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = (props) => {
    return (
        <section className='max-w-[768px] mx-auto'>
            <Header />
                {props.children}
            <Footer />
        </section>
    )
}

export default Layout
