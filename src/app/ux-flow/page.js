'use client';
import React from 'react'

import ProductCard from '@/app/user/components/ProductCard';



export default function HomeContent() {

    return (
        <>
            <div className='right-content-main-div home-content-second-div p-3'>
                <div className='page-main-heading'>

                    <div className='heading-div-wrapper'> 
                        <h2 className='page-heading '> UX Flow </h2>
                    </div>
                </div>
                <div className='filters-main-div-ux mt-2 '>
                    <div className='ux-all-filter-wrapper'>

                        <div className='ux-main-filter-div'>
                        <button class="filter-button">
        <i class="fas fa-sliders-h"></i>
        Filter
    </button>
                        </div>
                        <div className='all-filters-ux d-flex flex-wrap gap-2 mb-2 '>
                            <div class="badge1">Finance</div>
                            <div class="badge1">Finance</div>
                            <div class="badge1">Finance</div>
                            <div class="badge1">Finance</div>
                        </div>
                    </div>
                </div>
                <div className="main-products-wrapper">
                    <div className="row g-1">
                        <div className="col-12 col-md-6 col-lg-3">
                            <ProductCard />
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <ProductCard />
                        </div><div className="col-12 col-md-6 col-lg-3">
                            <ProductCard />
                        </div><div className="col-12 col-md-6 col-lg-3">
                            <ProductCard />
                        </div><div className="col-12 col-md-6 col-lg-3">
                            <ProductCard />
                        </div><div className="col-12 col-md-6 col-lg-3">
                            <ProductCard />
                        </div><div className="col-12 col-md-6 col-lg-3">
                            <ProductCard />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

