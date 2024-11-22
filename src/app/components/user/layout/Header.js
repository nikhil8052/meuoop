import React from 'react'
import styles from './Header.module.css';

export default function Header() {
    return (
        <>

            {/* Header Section */}
            <header className="main-header">
                <div className="website-logo">Meuooop</div>
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <input placeholder="Search app screen" type="text" />
                </div>
                <div className="actions">
                    <a href="#">Get inspiration</a>
                    <button className="getProBTN"> Get Pro </button>
                    <div className='profileSection'>
                        <a className="profile" href="#">
                            <img
                                alt="Profile picture"
                                height="40"
                                src="https://storage.googleapis.com/a1aa/image/pWYDB2jvvXIuGpfCgbum4MsnxDZmFOeqp5yw3nTeLdu8UnQnA.jpg"
                                width="40"
                            />
                        </a>
                    </div>
                    <div className="menu-toggle" >
                        <i className="fas fa-bars"></i>
                    </div>
                </div>

            </header>
        </>
    )
}
