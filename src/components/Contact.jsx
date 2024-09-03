import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>If you have any questions or just want to get in touch, feel free to reach out through the following:</p>
        <ul className="contact-list">
          <li>
            <a href="mailto:gtcotales.student@asiancollege.edu.ph" className="contact-link">gtcotales.student@asiancollege.edu.ph</a>
          </li>
          <li>
            <a href="mailto:glenn.cotales@gmail.com" className="contact-link">glenn.cotales@gmail.com</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
