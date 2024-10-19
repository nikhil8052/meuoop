import React from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
    return (
        <div className={styles.pricing}>
            <div className={styles.plan}>
                <h3>Free</h3>
                <p>$0/month</p>
                <p>Basic access to essential features. Perfect for beginners.</p>
                <button>Free Plan</button>
                <p>Limited library access to only 50% of the full collection</p>
                <p>Basic search: Search by tag or category</p>
            </div>
            <div className={styles.plan}>
                <h3>Pro</h3>
                <p>$3/month</p>
                <p>Enjoy all the features of our library</p>
                <button>Upgrade</button>
                <p>Browse all apps & websites</p>
                <p>Browse flows</p>
                <p>Unlimited collections</p>
                <p>Search functionality</p>
                <p>Multiple downloads</p>
                <p>Early access to new products</p>
            </div>
        </div>
    );
};

export default Pricing;