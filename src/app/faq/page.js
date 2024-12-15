'use client';
import React from 'react'
import Image from 'next/image';

import FAQ from '@/app/components/user/components/FAQ';
import Header from '@/app/components/user/layout/Header';




export default function HomeContent() {
    return (
        <>

            <div className='home-content-main-div'>
                
                <div className='right-content-main-div home-content-second-div'>

                    <section className=' section section-3 '>
                    <FAQ/>
                    </section>
                </div>
            </div>

        </>
    )
}