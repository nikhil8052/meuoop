import React, { useState } from 'react';

const FAQ_DATA = [
    { id: 1, question: "What is Meuoop?", answer: "Meuoop is a platform that provides a rich collection of UX flows, UI screens, landing pages, and videos, offering designers the inspiration they need to create exceptional user experiences and interfaces." },
    { id: 2, question: "How often do you update the library?", answer: "We update the Meuoop library every month to ensure you have access to the latest design inspirations and trends." },
    { id: 3, question: "Can I cancel my subscription?", answer: "You can cancel your Meuoop subscription at any time. Please note that cancellations do not qualify for a refund. However, you will still have access to all membership features until the end of your current billing cycle. Find out how to cancel your subscription here." },

];

export default function FAQ() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleFAQ = (id) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    return (
        <div className="faq-section-main-div">
            <h2 className="faq-header gradient-text">Frequently Asked <br></br> Questions</h2>
            {FAQ_DATA.map((faq) => (
                <div 
                    key={faq.id} 
                    className={`faq-item ${activeQuestion === faq.id ? 'active' : ''}`}
                >
                    <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
                        <span>{faq.question}</span>
                        <span className="faq-toggle-symbol">
                            {activeQuestion === faq.id ? '-' : '+'}
                        </span>
                    </div>
                    {activeQuestion === faq.id && (
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
