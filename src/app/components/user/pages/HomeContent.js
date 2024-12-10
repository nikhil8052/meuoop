'use client';
import React from 'react'
import Image from 'next/image';

import UxFlow from '../flows/UxFlow';

export default function HomeContent() {
    return (
        <>


            <div className='home-content-main-div'>
                <div className='left-sidebar home-content-first-div '>
                    <div className='p-2'>
                        <div className='left-icon mb-3 cursor-pointer '>
                            <Image
                                src="/icons/ux_flow.svg" // Replace with your external image URL
                                alt="External Image Example"
                                width={52}
                                height={52}
                            />
                            <p className='left-icon-text'> Ux Flow</p>
                        </div>
                        <div className='left-icon mb-3 cursor-pointer '>
                            <Image
                                src="/icons/ux_flow.svg" // Replace with your external image URL
                                alt="External Image Example"
                                width={52}
                                height={52}
                            />
                            <p className='left-icon-text'> Ux Flow</p>

                            
                        </div>
                        
                        
                    </div>
                </div>
                <div className='right-content-main-div home-content-second-div'>

                    <section className=' section section-1 homesection-1  site-padding text-white'>

                            <h2> Inspiring UI/UX Designs Explore the Best with Meuoop</h2>
                    </section>
                    <section className=' section section-2 second-section site-padding'>
                    <UxFlow/>
                    </section>


                </div>


            </div>

        </>
    )
}