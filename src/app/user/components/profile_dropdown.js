import React from "react";
import Image from "next/image";


export default function Profile_drop(){
    return(
        <>
            <div className="profile-drpdwn">
                <div className="drop-img-text">
                <div className="drop-img">
                    <img src="/images/drop-profile.png" alt="profile"></img>
                </div>
                <p className="m-0">Rajeev chaudhary</p>
                </div>
                <div className="request-btn">
                    <a href="">Request Content <img src="/images/plus-icon.png" alt="request"></img></a>
                </div>
               
                <ul className="list-unstyled m-0">
                    <li><a href=""> My Collection</a></li>
                    <li><a href=""> Settings</a></li>
                    <li><a href=""> Pricing</a></li>
                    <li><a href=""> FAQ</a></li>
                </ul>

                <p className="sign-out">Sign Out</p>

            </div>
        </>
    );
}