import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>All screenshots are of their respective owners.</p>
            <div className={styles.socialIcons}>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-xing"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
            <p>About Us | Pricing | FAQ | Read Our Blog | Privacy Policy | Blogs | Contact Us | Terms & Conditions</p>
        </footer>
    );
};

export default Footer;