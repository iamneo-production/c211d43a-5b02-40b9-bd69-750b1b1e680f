
import NavCandidate from "../../../Components/NavCandidate";
import "./UserHelpCenter.css";
import React, { useState } from 'react';

function HelpCenter() {
  const accordionData = [
    {
      header: 'How do I sign up for an account on the online learning portal?',
      content: 'To sign up for an account, click on the "Sign Up" button on the homepage, fill in your details, and follow the on-screen instructions.',
    },
    {
      header: 'How can I reset my password if I forget it?',
      content: 'If you forget your password, click on the "Forgot Password" link on the login page. You\'ll receive an email with instructions to reset your password.',
    },
    {
      header: 'Is there any certification provided upon course completion?',
      content: ' Yes, upon successfully completing a course, you wll receive a downloadable certificate that you can add to your resume or share on professional networks.',
    },
    {
      header:'Can I interact with instructors and other students during the course?',
      content:'Yes, our courses often include discussion forums where you can interact with instructors and fellow learners, ask questions, and share insights.'
    },
    {
      header:'Is there a refund policy for courses that I am not satisfied with?',
      content:'We offer a 30-day money-back guarantee for our paid courses. If you are not satisfied, contact our support team for a full refund.'
    },
    {
      header:'Are there any discounts or special offers available for courses?',
      content:'Yes, we frequently offer discounts and special deals on our courses. Keep an eye on our website and newsletter for the latest offers.'
    },
    {
      header:'How can I track my progress in a course?',
      content:' Our online learning portal provides progress tracking features. You can usually find a progress bar or completion status on the course dashboard or within the course materials.'
    },
    {
      header:'What payment methods are accepted on the platform?',
      content:'We accept various payment methods, including credit cards, debit cards, and PayPal. During the checkout process, you will be able to select your preferred payment option.'
    }

  ];


  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter accordion data based on the search term
  const filteredAccordionData = accordionData.filter((item) =>
    item.header.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <NavCandidate/>
    <div className='hApp'>
      <h1 id="help">FAQ</h1>
      <div className="hsearch-bar">
        <input
          type="text"
          placeholder="Search for a question..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="accordion">
        {filteredAccordionData.map((item, index) => (
          <div
            className={`accordion-item ${index === activeAccordionIndex ? 'active' : ''}`}
            key={index}
            onClick={() => setActiveAccordionIndex(index)}
          >
            <div className="accordion-item-header">
              {item.header}
            </div>
            {index === activeAccordionIndex && (
              <div className="accordion-item-body" style={{ maxHeight: '1000px' }}>
                <div className="accordion-item-body-content">
                  {item.content}
                </div>
              </div>
              
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default HelpCenter