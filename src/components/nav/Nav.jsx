import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiMessageRounded } from 'react-icons/bi'
import { BiBook } from 'react-icons/bi'
import { GrDocumentPpt } from 'react-icons/gr'
import { BiMessageAltDetail } from 'react-icons/bi'

import { useState } from 'react'


const Nav = () => {

    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a
                href="#"
                onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? 'active' : ''}>
                <AiOutlineHome />
            </a>
            <a href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}>
                <BiMessageRounded />
            </a>
            <a href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}>
                <BiBook />
            </a>
            <a href="#portfolio"
                onClick={() => setActiveNav('#portfolio')}
                className={activeNav === '#portfolio' ? 'active' : ''}>
                <GrDocumentPpt />
            </a>
            <a href="#contacts"
                onClick={() => setActiveNav('#contacts')}
                className={activeNav === '#contacts' ? 'active' : ''}>
                <BiMessageAltDetail />
            </a>

        </nav>
    )
}

export default Nav