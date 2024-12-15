'use client';
import React from 'react'

import LandingCard from '@/app/user/components/LandingCard';
import Dropdown from '@/app/user/components/Dropdown';



export default function HomeContent() {
    
    return (
        <>
            <div className='right-content-main-div home-content-second-div'>
                <div className='filters-main-div mt-2'>
                    <div className='row'>
                        <div className='col-md-2'> 
                                <Dropdown/>
                        </div>
                        <div className='col-md-2'> 
                                <Dropdown/>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <div className="row g-1">
                        <div className="col-12 col-md-6 col-lg-4">
                            <LandingCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <LandingCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <LandingCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <LandingCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <LandingCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <LandingCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <LandingCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

