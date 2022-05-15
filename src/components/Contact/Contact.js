import React, { useRef }  from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FiPhone} from 'react-icons/fi'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_auw545d', 'template_2qthoz8', form.current, 'RUoa-TaAJFHj5oMG-')
     
    e.target.reset()
  };
  return (
    <section id="Contact">
      <h2 className='contact__header'>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__icon' />
            <h4>E-Mail</h4>
            <h5>cook.stephanie10@gmail.com</h5>
            <a href="mailto:cook.stephanie10@gmail.com" target="_blank"></a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__icon' />
            <h4>Messenger</h4>
            <h5>Stephanie Kirshner</h5>
            <a href="http://m.me/DJshortKAKE" target="_blank">Connect with Me</a>
          </article>
          <article className='contact__option'>
            <FiPhone className='contact__icon' />
            <h4>Phone</h4>
            <h5>(602)783-2805</h5>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Full Name" required />
          <input type="email" name='email' placeholder="Email" required />
          <textarea name="message" rows="8" placeholder='Enter Your Message Here' required></textarea>
          <button type='submit'className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact