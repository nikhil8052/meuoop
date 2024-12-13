import React from 'react'
import Image from 'next/image';


export default function ProductCard() {
    return (
        <>

            <div className="product-card-main-div">
                <div className="product-image-footer-wrapper">
                    {/* Image Section */}
                    <div className="product-card-image">
                        <Image
                            src="/uploads/landing1.svg" // Replace with your actual image path
                            alt="Product Image"
                            width={300} // Adjust the width as needed
                            height={100} // Adjust the height as needed
                            className="product-image"
                        />
                    </div>

                    {/* Footer Section */}
                    <div className="product-card-footer text-white">

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
                    </div>
                </div>
            </div>
        </>
    )
}
