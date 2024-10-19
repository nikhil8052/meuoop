import React from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
    return (
        <div className={styles.faq}>
            <h2>Frequently asked questions</h2>
            <div className={styles.question}>
                <h3>What is Meuooop?</h3>
                <p>Meuooop is a platform that provides a rich collection of UI flows, UI screens , landing pages, and videos, giving designers the inspiration they need to create exceptional user experiences and UI interfaces.</p>
            </div>
            <div className={styles.question}>
                <h3>How often do you update the library?</h3>
                <p>We update the Meuooop library every month to ensure you have access to the latest design inspiration and trends.</p>
            </div>
            <div className={styles.question}>
                <h3>Can I cancel my subscription?</h3>
                <p>You can cancel your Meuooop subscription at any time. Please note that cancellations do not qualify for a refund. However, you will still have access to all membership features until the end of your current billing cycle. Find out how to cancel your subscription here.</p>
            </div>
        </div>
    );
};

export default FAQ;