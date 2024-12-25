import React from "react";
import Image from "next/image";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS

export default function Subscription() {
    return (
        <>
            <div className="sub-main-div ">
                <div className="sub-div-1 p_65">
                    <div className="sub-main-heading">
                        <h2 className="subscription-heading gradient-text">
                            Upgrade to Pro <br />
                            Get unlimited access.
                        </h2>
                    </div>
                    <div className="sub-plan-btns">
                        <div className="free-pro-tabs">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="pills-monthly-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-monthly"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-monthly"
                                        aria-selected="true"
                                    >
                                        Monthly
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-annually-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-annually"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-annually"
                                        aria-selected="false"
                                    >
                                        Annually
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                {/* Monthly Tab Content */}
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-monthly"
                                    role="tabpanel"
                                    aria-labelledby="pills-monthly-tab"
                                >
                                    <p className="white-text text-center">Save 33.33% on a yearly subscription</p>
                                    <div className="annual-month-box">
                                        {/* Free Plan */}
                                        <div className="free-box">
                                            <span className="free-span-text">Free</span>
                                            <p className="free-para">
                                                Basic access with essential features. Perfect for beginners.
                                            </p>
                                            <p className="price-text bcbcbc-text">
                                                $0/ <span>month</span>
                                            </p>
                                            <div className="free-btn">
                                                <a href="">Free Plan</a>
                                            </div>
                                            <div className="free-list">
                                                <ul className="list-unstyled m-0 bcbcbc-text">
                                                    <li>
                                                        <div className="check">
                                                            <img src="/icons/check.png" alt="Check Icon" />
                                                        </div>
                                                        Limited library: Access to only ~3% of the full collection.
                                                    </li>
                                                    <li>
                                                        <div className="check">
                                                            <img src="/icons/check.png" alt="Check Icon" />
                                                        </div>
                                                        Basic search: Search by tag or company.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Pro Plan */}
                                        <div className="free-box pro-box">
                                            <span className="free-span-text violet-color">Pro</span>
                                            <p className="free-para">Enjoy all the features and our library.</p>
                                            <p className="price-text bcbcbc-text">
                                                $3/ <span>month</span>
                                            </p>
                                            <div className="free-btn">
                                                <a href="">Upgrade</a>
                                            </div>
                                            <div className="free-list">
                                                <ul className="list-unstyled m-0 bcbcbc-text">
                                                    <li>
                                                        <div className="check">
                                                            <img src="/icons/check.png" alt="Check Icon" />
                                                        </div>
                                                        Browse all apps & websites.
                                                    </li>
                                                    <li>
                                                        <div className="check">
                                                            <img src="/icons/check.png" alt="Check Icon" />
                                                        </div>
                                                        Browse flows.
                                                    </li>
                                                    <li>
                                                        <div className="check">
                                                            <img src="/icons/check.png" alt="Check Icon" />
                                                        </div>
                                                        Unlimited collections.
                                                    </li>
                                                    <li>
                                                        <div className="check">
                                                            <img src="/icons/check.png" alt="Check Icon" />
                                                        </div>
                                                        Search functionality.
                                                    </li>
                                                    <li>
                                                        <div className="check">
                                                            <img src="/icons/check.png" alt="Check Icon" />
                                                        </div>
                                                        Multiple downloads.
                                                    </li>
                                                    <li>
                                                        <div className="check">
                                                            <img src="/icons/check.png" alt="Check Icon" />
                                                        </div>
                                                        Early access to new products.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Annually Tab Content */}
                                <div
                                    className="tab-pane fade annual-tab"
                                    id="pills-annually"
                                    role="tabpanel"
                                    aria-labelledby="pills-annually-tab"
                                >
                                    <p className="white-text">Save 33.33% on a yearly subscription</p>
                                    <div className="free-box pro-box">
                                        <span className="free-span-text violet-color">Pro</span>
                                        <p className="free-para">Enjoy all the features and our library.</p>
                                        <p className="price-text bcbcbc-text">
                                            $3/ <span>month</span>
                                        </p>
                                        <div className="free-btn">
                                            <a href="">Upgrade</a>
                                        </div>
                                        <div className="free-list">
                                            <ul className="list-unstyled m-0 bcbcbc-text">
                                                <li>
                                                    <div className="check">
                                                        <img src="/icons/check.png" alt="Check Icon" />
                                                    </div>
                                                    Browse all apps & websites.
                                                </li>
                                                <li>
                                                    <div className="check">
                                                        <img src="/icons/check.png" alt="Check Icon" />
                                                    </div>
                                                    Browse flows.
                                                </li>
                                                <li>
                                                    <div className="check">
                                                        <img src="/icons/check.png" alt="Check Icon" />
                                                    </div>
                                                    Unlimited collections.
                                                </li>
                                                <li>
                                                    <div className="check">
                                                        <img src="/icons/check.png" alt="Check Icon" />
                                                    </div>
                                                    Search functionality.
                                                </li>
                                                <li>
                                                    <div className="check">
                                                        <img src="/icons/check.png" alt="Check Icon" />
                                                    </div>
                                                    Multiple downloads.
                                                </li>
                                                <li>
                                                    <div className="check">
                                                        <img src="/icons/check.png" alt="Check Icon" />
                                                    </div>
                                                    Early access to new products.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
