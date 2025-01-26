"use client";
import React from "react";
import ProductCard from "@/app/user/components/ProductCard";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProductCardNew from "../user/components/ProductCardNew";

export default function HomeContent() {
  return (
    <>
        <div className="flw-tabs">
          <div className="page-main-heading-tab d-flex ">
            <div className="heading-div-wrapper">
            <h2 class="gradient-text">UX Flow</h2>  
            </div>
            <ul className="nav nav-pills " id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-Apps-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Apps"
                  type="button"
                  role="tab"
                  aria-controls="pills-Apps"
                  aria-selected="true"
                >
                  Apps
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-website-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-website"
                  type="button"
                  role="tab"
                  aria-controls="pills-website"
                  aria-selected="false"
                >
                  website
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-Apps"
              role="tabpanel"
              aria-labelledby="pills-Apps-tab"
            >
              <div className="app-cntnt">
                <div className="filters-main-div-ux mt-2">
                  <div className="ux-all-filter-wrapper">
                    <div className="ux-main-filter-div">
                      <button className="filter-button" aria-label="Filter">
                        <i className="fas fa-sliders-h"></i>
                        Filter
                      </button>
                    </div>
                    <div className="all-filters-ux d-flex flex-wrap gap-2 mb-2">
                      <div className="badge1">All</div>
                      <div className="badge1">Finance</div>
                      <div className="badge1">Social Media</div>
                      <div className="badge1">Food Delivery</div>
                      <div className="badge1">Messages</div>
                  
                    </div>
                  </div>
                </div>
                <div className="main-products-wrapper">
                  <div className="flow-crds d-flex">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCardNew />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCardNew />
                    <ProductCard />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-website"
              role="tabpanel"
              aria-labelledby="pills-website-tab"
            >
              <div className="app-cntnt">
                <div className="filters-main-div-ux mt-2">
                  <div className="ux-all-filter-wrapper">
                    <div className="ux-main-filter-div">
                      <button className="filter-button" aria-label="Filter">
                        <i className="fas fa-sliders-h"></i>
                        Filter
                      </button>
                    </div>
                    <div className="all-filters-ux d-flex flex-wrap gap-2 mb-2">
                      <div className="badge1">Finance</div>
                      <div className="badge1">Finance</div>
                      <div className="badge1">Finance</div>
                      <div className="badge1">Finance</div>
                    </div>
                  </div>
                </div>
                <div className="main-products-wrapper">
                  <div className="flow-crds d-flex">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
