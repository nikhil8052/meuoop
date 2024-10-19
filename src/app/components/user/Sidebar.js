import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar} id="sidebar">
            <a href="#"><i className="fas fa-home"></i></a>
            <a href="#"><i className="fas fa-user"></i></a>
            <a href="#"><i className="fas fa-cog"></i></a>
        </div>
    );
};

export default Sidebar;