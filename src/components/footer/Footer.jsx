import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Hemanta Thapa</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experiences">Experiences</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contacts">Contact Me</a></li>

            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com" target='_blank'><FaFacebookF /></a>
                <a href="https://instagram.com" target='_blank'><FiInstagram /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Hemanta Thapa Projects. All rights reserevd.</small>
            </div>
        </footer>
    )
}

export default Footer