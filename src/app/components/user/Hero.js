import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1>Inspiring UI/UX Designs</h1>
            <p>Explore the Best with Meuooop</p>
            <p>Explore 1000 UI screens, 100 landing pages, and 10+ UX flows for design inspiration.</p >
            <div className={styles.buttons}>
                <button>Flows</button>
                <button>UI Screens</button>
                <button>Landing Pages</button>
                <button>App Videos</button>
            </div>
        </div>
    );
};

export default Hero;