import React from 'react'
import ProductCard from '../components/ProductCard'
export default function UxFlow() {
    return (
        <>

            <div className='ux-flow-main-div'>
                <div className='ux-flow-name-div'>

                    <div className='ux-heading brand-heaing-text'>

                        <h1> UX Flow </h1>
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
                <div className='ux-flow-products d-flex gap-4'> 

                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>


                </div>
            </div>
        </>
    )
}

