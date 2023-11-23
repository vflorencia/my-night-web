import React, { useState } from 'react';
import "./Faq.css"

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="question" onClick={toggleOpen}>
        {question}
      </div>
      {isOpen && (
        <div className="answer">
          <p>{answer.title}</p>
          <ul>
            {answer.description.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
