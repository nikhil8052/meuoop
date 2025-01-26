"use client";
import React from "react";

import LandingCard from "@/app/user/components/LandingCard";
import Dropdown from "@/app/user/components/Dropdown";
import ProductCard from "@/app/user/components/ProductCard";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function HomeContent() {
  return (
    <>
      <div className="flw-tabs">
        <div className="page-main-heading-tab d-flex ">
          <div className="heading-div-wrapper">
            <h2 class="gradient-text">UI Elements </h2>
          </div>
          <ul className="nav nav-pills ui-element-page-ul" id="pills-tab" role="tablist">
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
                IOS
                <div className="iso-image">
                  <img
                    alt="arrw Image"
                    loading="lazy"
                    src="/images/ios-icon.png"
                  />
                </div>
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
                Android
                <div className="iso-image">
                  <img
                    alt="arrw Image"
                    loading="lazy"
                    src="/images/andriod-icon.png"
                  />
                </div>
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
                    <div className="badge1">Buttons</div>
                    <div className="badge1">Inputs</div>
                    <div className="badge1">Tags</div>
                    <div className="badge1">Cards</div>
                    <div className="badge1">Icons</div>
                    <div className="badge1">Menu</div>
                    <div className="badge1">Forms</div>
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
