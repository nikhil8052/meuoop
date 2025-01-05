import React from "react";
import Image from "next/image";


export default function Profile_drop(){
    return(
        <>
            <div className="profile-drpdwn">
                <ul className="list-unstyled m-0">
                    <li><a href=""><i class="fa fa-user"></i> profile</a></li>
                    <li><a href=""><i class="fa fa-user"></i> edit profile</a></li>
                    <li><a href=""><i class="fa fa-user"></i> collections</a></li>
                    <li><a href=""><i class="fa fa-user"></i>  ux flow</a></li>
                </ul>

            </div>
        </>
    );
}