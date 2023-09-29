import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from "../../Components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './style.scss';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3dtf6xu', 'template_l9ea3ik', form.current, '6JN5xOjwWTKg-Oz6V')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact" className='contact'>
    <PageHeaderContent
    headerText= "My Contact"
    icon={<BsInfoCircleFill size={40} /> }
    />
    <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              
              

      <form ref={form} onSubmit={sendEmail}>
      <div>
      <input
                  required
                  name="user_name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
      </div>
      <div>
      <input
                  required
                  name="user_name"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
      </div>
      <div>
      <textarea
                  required
                  name="message"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
      </div>
      <button>
      <input type="submit" value="Send" />
      </button>
    </form>
            
            </div>
          </div>
        </Animate>
      </div>
      
    </section>
  );
};
export default Contact;
  