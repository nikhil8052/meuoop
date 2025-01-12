import React from "react";
import Image from "next/image";

export default function GetInspiration_drop(){
      return(
        <>
           <div className="get-inspi-drop">
               <div className="row">
                  <div className=" inspi-row-col col-md-4 col-sm-4">
                     <div className="inspi-row-left">
                        <h6>Discover Our Products</h6>
                        <p>Explore UX flows, UI elements, and landing pages to elevate your design process.</p>
                       
                        <div className="view-more-div">
                        <a href="" class="cta-white">View More<div class="arrw-up-icon"><img alt="arrw Image" loading="lazy" src="/icons/arrw-up-square.png"></img></div></a>
                        </div>
                     </div>
                  </div>

                  <div className="inspi-row-col  col-md-8 col-sm-8">
                    <div className="inspi-row-right">
                        <div className="row drop-row">
                            <div className="col-md-6 col-sm-6">
                                <div className="drop-cards inspi-rgt-img">
                                   <img alt="ux Image" loading="lazy" src="/images/ux_img.png"></img>
                                 </div>
                                 <p>UX Flows</p>
                            </div>
                            <div className="drop-cards col-md-6 col-sm-6">
                                     <div className="inspi-rgt-img">
                                     <img alt="ux Image" loading="lazy" src="/images/app_ui_img.png"></img>
                                     </div>
                                     <p>App UI</p>
                            </div>
                            <div className="drop-cards col-md-6 col-sm-6">
                                <div className="inspi-rgt-img">
                                <img alt="ux Image" loading="lazy" src="/images/landing_page_img.png"></img>
                                </div>
                                <p>Landing Pages</p>
                            </div>
                        </div>
                    </div>
                  </div>
               </div>
           </div>
        </>
      );
}