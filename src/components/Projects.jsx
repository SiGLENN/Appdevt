import React, { useState } from 'react';
import './Projects.css'; 

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    { question: "What is your background?", answer: "I am a student studying Bachelor of Science in Information Technology." },
    { question: "What technologies do you use?", answer: "I primarily work with React, JavaScript, and CSS." },
    { question: "What is your sleep cycle?", answer: "I sleep early in the morning between 3am to 4am. It depends if I have an early class, I will sleep 11pm." },
    { question: "How can I contact you?", answer: "You can reach me via the contact form on this website or through my email at gtcotales.student@asiancollege.edu.ph" },
  ];

  return (
    <section id="projects">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </button>
              <div
                className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
