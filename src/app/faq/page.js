'use client';
import React from 'react'

import FAQ from '@/app/components/user/components/FAQ';

import UserLayout from '@/app/user/layout/UserLayout';


export default function HomeContent() {
    return (
        <>

            <div className='home-content-main-div'>
                
                <div className='right-content-main-div home-content-second-div'>

                    <section className=' section section-3 '>
                        <UserLayout>
                    <FAQ/>
                    </UserLayout>
                    </section>
                    

                </div>


            </div>

        </>
    )
}