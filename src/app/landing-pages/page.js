"use client";
import React from "react";
import Image from "next/image";
import Footer from "../user/components/Footer";
import LandingCard from "@/app/user/components/LandingCard";
import Dropdown from "@/app/user/components/Dropdown";

export default function HomeContent() {
  return (
    <>
      <div className="landing-main-pge">
        <div className="filters-main-div mt-2">
         <Dropdown/>
        </div>
        <div className="ux-flow-products">
          <div className="row top-cards">
            <LandingCard />
            <LandingCard />
            <LandingCard />
            <LandingCard />
            <LandingCard />
            <LandingCard />
          </div>

          {/* <div className='row bottom-cards'>
                                 <LandingCard/>
                                  <LandingCard/>
                                  <LandingCard/>
                                 </div> */}
        </div>
        <div className='ux-flow-btn'>
                    <a href='' className='cta-white'>Show more
                    </a>

                </div>
        <section
          className="foot-sec section section-3"
          style={{ backgroundImage: "url('/icons/footer-bg-new.png')" }}
        >
          <Footer />
        </section>
      </div>
    </>
  );
}
