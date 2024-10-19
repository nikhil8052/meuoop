
'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Meuooop</div>
            <div className={styles.searchBar}>
                <i className="fas fa-search"></i>
                <input placeholder="Search app screen" type="text" />
            </div>
            <div className={styles.actions}>
                <Link href="#">Get inspiration</Link>
                <Link href="#">
                    <img className={styles.profileImg} src="https://storage.googleapis.com/a1aa/image/pWYDB2jvvXIuGpfCgbum4MsnxDZmFOeqp5yw3nTeLdu8UnQnA.jpg" alt="Profile" />
                </Link>
            </div>
            <div className={styles.menuToggle} onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
            </div>
        </header>
    );
};

const toggleSidebar = () => {
    document.getElementById('sidebar').classList.toggle('active');
};

export default Header;