import React from 'react'
import './about.css'
import Me from '../../utils/hemant-image.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'





const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ years experience</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>100 clients worldwide</small>
                        </article><article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>10 completed projects</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis veniam quasi
                        dicta nihil nulla facilis a quae quia, architecto obcaecati totam minima beatae porro
                        voluptatibus! Eos quis tempore voluptatum repellendus!
                    </p>

                    <a href="#contacts" className='btn btn-primary'>Let's talk</a>

                </div>
            </div>

        </section>
    )
}

export default About