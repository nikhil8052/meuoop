import React from 'react'
import LandingCard from '../components/LandingCard'
export default function UxFlow() {
    return (
        <>

            <div className='ux-flow-main-div'>
                <div className='ux-flow-name-div'>

                    <div className='ux-heading brand-heaing-text'>

                        <h2 className='gradient-text'> Landing Page </h2>
                    </div>
                    <div className='ux-flow-counts d-flex gap-3'>

                        <div className='ux-flow-count'>
                            <p> No of Flows </p>
                            <p> 100+  </p>

                        </div>
                        <div className='ux-flow-count'>
                            <p> Categories </p>
                            <p> 100+ </p>
                        </div>

                    </div>
                </div>
                <div className='ux-flow-products'> 

                 <div className='row top-cards'>
                 <LandingCard/>
                  <LandingCard/>
                  <LandingCard/>
                 </div>
                 
                 <div className='row bottom-cards'>
                 <LandingCard/>
                  <LandingCard/>
                  <LandingCard/>
                 </div>
                

                </div>
                <div className='ux-flow-btn'>
                    <a href='' className='cta-white'>View More 
                        <div className='arrw-up-icon'>
                        <img alt="arrw Image" loading="lazy" src="/icons/arrw-up-square.png">
                        </img>
                        </div>
                    </a>

                </div>
            </div>
        </>
    )
}

