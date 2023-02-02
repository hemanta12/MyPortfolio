import React from 'react'
import './portfolio.css'
import APP1 from '../../utils/appdemo1.png'
import APP2 from '../../utils/appdemo2.png'
import APP3 from '../../utils/appdemo3.png'

const data = [
    {
        id: 1,
        image: APP1,
        title: 'First app',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/15182924-One-Banking-Website'
    },
    {
        id: 2,
        image: APP2,
        title: 'Second app',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/15182924-One-Banking-Website'
    }, {
        id: 3,
        image: APP3,
        title: 'Third app',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/15182924-One-Banking-Website'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My recent work </h5>
            <h2>PortFolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">

                                    <a href={github} className='btn' target="_blank">Github</a>
                                    <a href={demo} className='btn btn-primary'
                                        target="_blank">Live Demo</a>
                                </div>

                            </article>
                        )
                    })
                }

                {/* <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={APP1} alt="first" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">

                        <a href="https://github.com" className='btn' target="_blank">Github</a>
                        <a href="https://dribbble.com/tags/dribbel" className='btn btn-primary'
                            target="_blank">Live Demo</a>
                    </div>

                </article> */}


            </div>
        </section>
    )
}

export default Portfolio