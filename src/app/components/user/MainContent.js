'use client';
import { useState } from 'react';

const MeuooopComponent = () => {
    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
        <div>
            {/* Header Section */}
            <header className="container">
                <div className="logo">Meuooop</div>
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <input placeholder="Search app screen" type="text" />
                </div>
                <div className="actions">
                    <a href="#">Get inspiration</a>
                    <a className="profile" href="#">
                        <img
                            alt="Profile picture"
                            height="40"
                            src="https://storage.googleapis.com/a1aa/image/pWYDB2jvvXIuGpfCgbum4MsnxDZmFOeqp5yw3nTeLdu8UnQnA.jpg"
                            width="40"
                        />
                    </a>
                </div>
                <div className="menu-toggle" onClick={toggleSidebar}>
                    <i className="fas fa-bars"></i>
                </div>
            </header>

            {/* Sidebar Section */}
            <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
                <a href="#"><i className="fas fa-home"></i></a>
                <a href="#"><i className="fas fa-user"></i></a>
                <a href="#"><i className="fas fa-cog"></i></a>
            </div>

            {/* Main Content Section */}
            <div className="main-content container">
                {/* Hero Section */}
                <div className="hero">
                    <h1>Inspiring UI/UX Designs</h1>
                    <p>Explore the Best with Meuooop</p>
                    <p>Explore 1000 UI screens, 100 landing pages, and 10+ UX flows for design inspiration.</p>
                    <div className="buttons">
                        <button>Flows</button>
                        <button>UI Screens</button>
                        <button>Landing Pages</button>
                        <button>App Videos</button>
                    </div>
                </div>

                {/* UX Flows Section */}
                <div className="section">
                    <h2>UX Flows</h2>
                    <div className="cards">
                        <div className="card">
                            <img alt="UX Flow 1" height="400" src="https://storage.googleapis.com/a1aa/image/K1eVx9FRs1yvXyRy3Ldlo11aE1sOf8MeDU4EbDDhKfIKpOhOB.jpg" width="200"/>
                            <p>Cardio Driver</p>
                        </div>
                        <div className="card">
                            <img alt="UX Flow 2" height="400" src="https://storage.googleapis.com/a1aa/image/GZkheVsM9IW6LqdAlAWQWewSqgv11wxjGJYNgWm942WTqToTA.jpg" width="200"/>
                            <p>Bump</p>
                        </div>
                        <div className="card">
                            <img alt="UX Flow 3" height="400" src="https://storage.googleapis.com/a1aa/image/fyvfTu7iOWgopkZvtu80fu7xamby3Xe1rD7xgRXKOCskpOhOB.jpg" width="200"/>
                            <p>Opal</p>
                        </div>
                        <div className="card">
                            <img alt="UX Flow 4" height="400" src="https://storage.googleapis.com/a1aa/image/vanZ0a2xKX4BF1yu3X5tfUFAzSoOLAcfPbewKrMou7G2UnQnA.jpg" width="200"/>
                            <p>Kraken</p>
                        </div>
                        <div className="card">
                            <img alt="UX Flow 5" height="400" src="https://storage.googleapis.com/a1aa/image/pvd3sAfqLmxfAUD5KwubfnR3pYVRFgiyf5uw1DB1Tv8voOhOB.jpg" width="200"/>
                            <p>Kraken</p>
                        </div>
                    </div>
                </div>

                {/* Landing Pages Section */}
                <div className="section">
                    <h2>Landing Pages</h2>
                    <div className="cards">
                        <div className="card">
                            <img alt="Landing Page 1" height="400" src="https://storage.googleapis.com/a1aa/image/evQfPisWSwjmO0eh9iZTYlt2YssoPq3rkfMol3RjdW7BpOhOB.jpg" width="200"/>
                            <p>Cardio Driver</p>
                        </div>
                        <div className="card">
                            <img alt="Landing Page 2" height="400" src="https://storage.googleapis.com/a1aa/image/THSA0muLyoI4GNNfWemyLVKOj8Vy7Xx8bmQC1SwZhRAcqToTA.jpg" width="200"/>
                            <p>Cardio Driver</p>
                        </div>
                        <div className="card">
                            <img alt="Landing Page 3" height="400" src="https://storage.googleapis.com/a1aa/image/f4fnAxetbQMR0pbBvVF3Kfjo1zEsILgSMXfokWboZ3w1RdCdC.jpg" width="200"/>
                            <p>Cardio Driver</p>
                        </div>
                        <div className="card">
                            <img alt="Landing Page 4" height="400" src="https://storage.googleapis.com/a1aa/image/TISZ3DRagn7yORfyKH0NRSIAfOH56xuWJB7oiPLiswxWqToTA.jpg" width="200"/>
                            <p>Cardio Driver</p>
                        </div>
                        <div className="card">
                            <img alt="Landing Page 5" height="400" src="https://storage.googleapis.com/a1aa/image/EoXPnhi0itYoCFyl7DjDdncX2bXqyVnWFXc7WfNyBZ5C1J0JA.jpg" width="200"/>
                            <p>Cardio Driver</p>
                        </div>
                        <div className="card">
                            <img alt="Landing Page 6" height="400" src="https://storage.googleapis.com/a1aa/image/oLxFp4CH0wZfLqeMU8W4Ik3ue2p7WgBAITeNMUpxISFjoOhOB.jpg" width="200"/>
                            <p>Cardio Driver</p>
                        </div>
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="pricing">
                    <div className="plan">
                        <h3>Free</h3>
                        <p>$0/month</p>
                        <p>Basic access to essential features. Perfect for beginners.</p>
                        <button>Free Plan</button>
                        <p>Limited library access to only 50% of the full collection</p>
                        <p>Basic search: Search by tag or category</p>
                    </div>
                    <div className="plan">
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

                {/* FAQ Section */}
                <div className="faq">
                    <h2>Frequently asked questions</h2>
                    <div className="question">
                        <h3>What is Meuooop?</h3>
                        <p>Meuooop is a platform that provides a rich collection of UI flows, UI screens, landing pages, and videos, giving designers the inspiration they need to create exceptional user experiences and UI interfaces.</p>
                    </div>
                    <div className="question">
                        <h3>How often do you update the library?</h3>
                        <p>We update the Meuooop library every month to ensure you have access to the latest design inspiration and trends.</p>
                    </div>
                    <div className="question">
                        <h3>Can I cancel my subscription?</h3>
                        <p>You can cancel your Meuooop subscription at any time. Please note that cancellations do not qualify for a refund. However, you will still have access to all membership features until the end of your current billing cycle. Find out how to cancel your subscription here.</p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer>
                <p>All screenshots are of their respective owners.</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-xing"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <p>About Us | Pricing | FAQ | Read Our Blog | Privacy Policy | Blogs | Contact Us | Terms & Conditions</p>
            </footer>

            <style jsx>{`
                body {
                    margin: 0;
                    font-family: 'Inter', sans-serif;
                    background-color: #1A1A1A;
                    color: #FFFFFF;
                }
                .container {
                    width: 90%;
                    margin: 0 auto;
                }
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px 0;
                }
                header .logo {
                    font-size: 24px;
                    font-weight: 700;
                }
                header .search-bar {
                    display: flex;
                    align -items: center;
                    background-color: #2A2A2A;
                    padding: 10px;
                    border-radius: 8px;
                }
                header .search-bar input {
                    background: none;
                    border: none;
                    color: #FFFFFF;
                    margin-left: 10px;
                    outline: none;
                }
                header .actions {
                    display: flex;
                    align-items: center;
                }
                header .actions a {
                    margin-left: 20px;
                    color: #FFFFFF;
                    text-decoration: none;
                }
                header .actions .profile {
                    display: flex;
                    align-items: center;
                }
                header .actions .profile img {
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                }
                .sidebar {
                    width: 60px;
                    background-color: #2A2A2A;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    transition: transform 0.3s ease;
                }
                .sidebar a {
                    margin-bottom: 20px;
                    color: #FFFFFF;
                    text-decoration: none;
                    text-align: center;
                }
                .main-content {
                    margin-left: 80px;
                    padding: 20px 0;
                }
                .hero {
                    text-align: center;
                    padding: 60px 0;
                    background-color: #2A2A2A;
                    border-radius: 20px;
                    position: relative;
                }
                .hero::before, .hero::after {
                    content: '';
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    background-color: #3A3A3A;
                    border-radius: 10px;
                }
                .hero::before {
                    top: 20px;
                    left: 20px;
                }
                .hero::after {
                    bottom: 20px;
                    right: 20px;
                }
                .hero h1 {
                    font-size: 36px;
                    font-weight: 700;
                }
                .hero p {
                    font-size: 18px;
                    margin: 20px 0;
                }
                .hero .buttons {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }
                .hero .buttons button {
                    background-color: #3A3A3A;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 8px;
                    color: #FFFFFF;
                    cursor: pointer;
                }
                .section {
                    margin: 40px 0;
                }
                .section h2 {
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                .section .cards {
                    display: flex;
                    gap: 20px;
                    overflow-x: auto;
                }
                .section .card {
                    background-color: #2A2A2A;
                    border-radius: 10px;
                    padding: 20px;
                    min-width: 200px;
                    text-align: center;
                }
                .section .card img {
                    width: 100%;
                    border-radius: 10px;
                }
                .section .card p {
                    margin: 10px 0;
                }
                .pricing {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin: 40px 0;
                }
                .pricing .plan {
                    background-color: #2A2A2A;
                    border-radius: 10px;
                    padding: 20px;
                    text-align: center;
                    width: 300px;
                }
                .pricing .plan h3 {
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                .pricing .plan p {
                    margin: 10px 0;
                }
                .pricing .plan button {
                    background-color: #3A3A3A;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 8px;
                    color: #FFFFFF;
                    cursor: pointer;
                }
                .faq {
                    margin: 40px 0;
                }
                .faq h2 {
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                .faq .question {
                    background-color: #2A2A2A;
                    border-radius: 10px;
                    padding: 20px;
                    margin-bottom: 10px;
                }
                . faq .question h3 {
                    font-size: 18px;
                    font-weight: 600;
                }
                .faq .question p {
                    margin: 10px 0;
                }
                footer {
                    text-align: center;
                    padding: 20px 0;
                    background-color: #2A2A2A;
                    border-radius: 20px;
                    margin-top: 40px;
                }
                footer p {
                    margin: 10px 0;
                }
                footer .social-icons {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }
                footer .social-icons a {
                    color: #FFFFFF;
                    text-decoration: none;
                }
                .menu-toggle {
                    display: none;
                    font-size: 24px;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    .sidebar {
                        display: none;
                    }
                    .sidebar.active {
                        display: flex;
                    }
                    .main-content {
                        margin-left: 0;
                    }
                    .menu-toggle {
                        display: block;
                        position: absolute;
                        top: 20px;
                        right: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default MeuooopComponent;