import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../utils/hemant-image.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            {/* <div className="switch__modes">
                <button name='btn btn-primary'>Switch Color</button>
            </div> */}
            <div className="container header__container">
                <h5>Hello I am </h5>
                <h1>Hemanta Thapa</h1>
                <h5 className="text-light">FullStack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={Me} alt="me" />
                </div>

                <a href="#contacts" className="scroll__down">Scroll Down</a>

            </div>


        </header>
    )
}

export default Header