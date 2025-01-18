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
                  <div className='ux-flow-products'> 
                
                                 <div className='row top-cards'>
                                 <LandingCard/>
                                  <LandingCard/>
                                  <LandingCard/>
                                  <LandingCard/>
                                  <LandingCard/>
                                  <LandingCard/>
                                 </div>
                                 
                                 {/* <div className='row bottom-cards'>
                                 <LandingCard/>
                                  <LandingCard/>
                                  <LandingCard/>
                                 </div> */}
                                
                
                                </div>
            </div>
        </>
    )
}

