import React, { useState } from 'react';

const FAQ_DATA = [
    { id: 1, question: "What is your return policy?", answer: "You can return any item within 30 days of purchase for a full refund." },
    { id: 2, question: "Do you offer international shipping?", answer: "Yes, we offer worldwide shipping with additional charges." },
    { id: 3, question: "How can I track my order?", answer: "You will receive a tracking link once your order has been shipped." },
    { id: 4, question: "What payment methods do you accept?", answer: "We accept Visa, MasterCard, PayPal, and more." }
];

export default function FAQ() {
    
    const [activeQuestion, setActiveQuestion] = useState(null);
    const toggleFAQ = (id) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    return (
        <div className="faq-section-main-div">
            <h2 className="faq-header">Frequently Asked Questions</h2>
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
