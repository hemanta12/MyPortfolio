import React from 'react'
import './contacts.css'
import { MdOutlineEmail } from 'react-icons/md'
// import { MdOutlineEmail } from 'react-icons/md'
import { IoIosText } from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sjclc66', 'template_tkbk3oi', form.current, 'Ksq48ORrdqmLwj2ye')
        e.target.reset()
    };

    return (
        <section id='contacts'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                {/* Note: For messenger link: https://m.me/your_profile_id  */}

                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>hemanthappy4@gmail.com</h5>
                        <a href="mailto:hemanthappy4@gmail.com" target='_blank' rel='noreferer'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <IoIosText className='contact__option-icon' />
                        <h4>Text</h4>
                        <h5>+1(415)-939-4989</h5>
                        <a href="#" target='_blank'>Send a message</a>
                    </article>


                </div>
                {/* End of options */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}


export default Contacts