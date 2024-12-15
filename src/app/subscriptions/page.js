'use client';
import React from 'react'
import Image from 'next/image';

import Subscription from '../components/user/components/Subscription';




export default function HomeContent() {
    return (
        <>

            <div className='home-content-main-div'>
                
                <div className='right-content-main-div home-content-second-div'>

                    <section className=' section section-3 '>
                    <Subscription/>
                    </section>
                
                </div>


            </div>

        </>
    )
}