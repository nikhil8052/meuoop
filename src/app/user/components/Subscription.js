import React from 'react'
import Image from 'next/image';

export default function Subscription() {
    return (
        <>
            <div className="sub-main-div">
                <div className='sub-div-1'>
                    <div className='sub-main-heading'>
                        <h1 className='subscription-heading white-text'> Upgrade to ProGet unlimited access.</h1>
                    </div>
                    <div className='sub-plan-btns'>
                        <div>
                            <button className='sub-plan-month subbtn white-text'> Monthly </button>
                            <button className='sub-plan-month subbtn white-text'> Monthly </button>
                        </div>
                        <p className='white-text'> Save 33.33% on a yearly subscription </p>
                    </div>
                </div>

                <div className='sub-div-2'>
                    <div className='plan-left-div sub-plain-detail'>
                        <p className='sub-free-text white-text text-start fs-24'> Free </p>
                        <p className='sub-free-text-desc white-text text-start fs-14'> Basic access with essential features. Perfect for beginners. </p>
                        <p className='sub-free-text-price white-text text-start fs-32'> 0/Month </p>
                        <div className='sub-free-plan-btn'> Free Plan </div>
                        <div className="free-sub-list-div">
                            <ul className="free-sub-list-ui text-start">
                                <li><i className="fa fa-check"></i> Limited library: Access to only ~3% of the full collection.</li>
                                <li><i className="fa fa-check"></i> Basic search: Search by tag or company.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='plan-right-div sub-plain-detail'>
                        <p className='sub-free-text'> Free </p>
                        <p className='sub-free-text-desc'> Basic access with essential features. Perfect for beginners. </p>
                        <p className='sub-free-text-price'> 0 / Month </p>
                        <div className='sub-free-plan-btn'> Free Plan </div>
                        <div>
                            <ul>
                                <li> Testing </li>
                                <li> Testing </li>
                                <li> Testing </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
