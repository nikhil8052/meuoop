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

                <div >

                    <section className=' section section-1 homesection-1  site-padding text-white'>

                            <h2> Inspiring UI/UX DesignsExplore the Best with Meuoop</h2>
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