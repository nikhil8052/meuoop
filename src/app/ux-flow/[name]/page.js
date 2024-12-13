'use client';
import React from 'react'

import Image from 'next/image'

export default function HomeContent() {

    return (
        <>
            <div className='right-content-main-div home-content-second-div  '>

                <div className='landing-page-div d-flex row  '>
                    <div className='landing-page-left col-md-8 justify-content-center align-items-center '>

                        <Image
                            src="/uploads/landing_page.svg" // Replace with your actual image path
                            alt="Product Image"
                            width={500} // Arbitrary width ratio
                            height={200} // Arbitrary height ratio
                            className="product-image"
                        />
                    </div>
                    {/* Landing page detial right div  */}
                    <div className='landing-page-right col-md-4 p-4'>
                        <div className='landing-page-main-wrapper-right'>
                        <div className='landing-page-image-icon d-flex mb-3'>
                            <div className='brand-image-name-div d-flex gap-3'>
                                <div className='brand-image'>
                                    <Image
                                        src="/icons/grab.svg" // Replace with your actual image path
                                        alt="Product Image"
                                        width={32} // Adjust the width as needed
                                        height={32} // Adjust the height as needed
                                        className="product-image"
                                    />
                                </div>
                                <div className='brand-name'>
                                    <p> Grab Driver</p>
                                </div>
                            </div>
                            <div className='landing-page-icon-right'>
                                <div className='brand-image'>
                                    <Image
                                        src="/icons/grab.svg" // Replace with your actual image path
                                        alt="Product Image"
                                        width={32} // Adjust the width as needed
                                        height={32} // Adjust the height as needed
                                        className="product-image"
                                    />
                                </div>
                            </div>

                        </div>

                        <div className='information-tag-div'>
                            <div className='tag-name-div'>
                                <p className='info-tag-name'> Tags </p>
                                <div className='show-items-div d-flex flex-wrap gap-2 mb-3'>
                                    <div class="badge1">Finance</div>
                                    <div class="badge1">Finance</div>
                                    <div class="badge1">Finance</div>
                                    <div class="badge1">Finance</div>
                                </div>
                            </div>
                            <div className='tag-name-div'>
                                <p className='info-tag-name'> Tags </p>
                                <div className='show-items-div d-flex flex-wrap gap-2 mb-3'>
                                    <div class="badge1">Finance</div>
                                    <div class="badge1">Finance</div>
                                    <div class="badge1">Finance</div>
                                    <div class="badge1">Finance</div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

