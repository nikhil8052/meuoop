'use client';
import React from 'react'
import Image from 'next/image';

import UxFlow from '../flows/UxFlow';
import LandingPage from '../flows/LandingPage';
import Subscription from '../components/Subscription';
import FAQ from '../components/FAQ';
import Footer from '@/app/user/components/Footer';

export default function HomeContent() {
    return (
        <>
            <div>
                <section className=' section section-1 homesection-1  site-padding text-white'>
                    <div className='container'>
                        <div className='home-bnr-wrap'>
                        <div className='banner-home text-center'> 
                        <h1 className='gradient-text'> Inspiring UI/UX Designs <br></br> Explore the Best with Meuoop</h1>
                        <p>Explore 1,000 UI screens, 100 landing pages, and 10+ UX flows for design inspiration.</p>
                    </div> 

                 
                    </div>
                 
                    </div>
                    
                </section>

                <section className='home-links p_45'>
                    <div className='container'>
                    <div className='home-bnr-links'>
                        <ul className='list-unstyled'>
                            <li><a href=''>Flows</a></li>
                            <li><a href=''>UI Screens</a></li>
                            <li><a href=''>Landing Pages</a></li>
                            <li><a href=''>App Videos</a></li>
                        </ul>

                    </div>
                    </div>
                </section>

                <section className=' section section-2 second-section site-padding'>
                    <UxFlow/>
                </section>
                <section className=' section section-2 second-section site-padding'>
                    <LandingPage/>
                </section>

                <section className=' section section-3 '>
                    <Subscription/>
                </section>

                <section className=' section section-3 '>
                    <FAQ/>
                </section>

                <section className=' section section-3 '>
                    <Footer/>
                </section>
            </div> 
        </>
    )
}
