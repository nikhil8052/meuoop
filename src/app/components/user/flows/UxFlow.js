import React from "react";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function UxFlow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3, // Adjust for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Tablet view
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Mobile view
        },
      },
    ],
  };

  return (
    <>
      <div className="ux-flow-main-div">
        <div className="ux-flow-name-div">
          <div className="ux-heading brand-heaing-text">
            <h2 className="gradient-text">UX Flow</h2>
          </div>
          <div className="ux-flow-counts d-flex gap-3">
            <div className="ux-flow-count">
              <p>No of Flows</p>
              <p>100+</p>
            </div>
            <div className="ux-flow-count">
              <p>Categories</p>
              <p>100+</p>
            </div>
          </div>
        </div>

        {/* <div className="ux-flow-products d-fle gap-4"> */}
          <div className="ux-slider-wrapper">
            <Slider {...settings}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Slider>
          </div>
        {/* </div> */}

        <div className="ux-flow-btn">
          <a href="#" className="cta-white">
            View More
            <div className="arrw-up-icon">
              <img
                alt="arrw Image"
                loading="lazy"
                src="/icons/arrw-up-square.png"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
