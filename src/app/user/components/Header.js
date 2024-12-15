import React from 'react'
import Image from 'next/image';

export default function Header() {
    return (
        <>

            {/* Header Section */}
            <header className="main-header">
                <div className="website-logo text-white">Meuooop </div>
                <div className="search-bar">
                      <div className='search-icon'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.999 20.999L17.4991 17.499M19.999 11.499C19.999 16.1934 16.1934 19.999 11.499 19.999C6.8046 19.999 2.99902 16.1934 2.99902 11.499C2.99902 6.8046 6.8046 2.99902 11.499 2.99902C16.1934 2.99902 19.999 6.8046 19.999 11.499Z" stroke="#616170" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                      </div>
                    {/* <i className="fas fa-search"></i> Font Awesome search icon */}
                    <input placeholder="Search app screen" type="text" />
                </div>

                <div className="header-actions">
                    <div className='get-pro-and-inspiration'>
                        <a className="getProBTN get-inspi text-white"> Get Inspiration 
                            <div className='arrw-dwn-svg'>
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.998047 1.00293L6.99805 7.00293L12.998 1.00293" stroke="#E8E8E8" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>
                            </div>
                        </a>
                        <a className="getProBTN get-pro text-white"> Get Pro
                            <div className='arrw-up-right'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 15L15 5M15 5L8.33333 5M15 5V11.6667" stroke="url(#paint0_linear_480_5799)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
<linearGradient id="paint0_linear_480_5799" x1="5" y1="10" x2="15" y2="10" gradientUnits="userSpaceOnUse">
<stop stop-color="#5200FF"/>
<stop offset="1" stop-color="#2D077E"/>
</linearGradient>
</defs>
</svg>


                            </div>
                            
                        </a>

                    </div>
                    <div className='profileSection '>
                        <div className=' profile-image'>
                            <a className="profile" href="#">
                                <Image
                                    alt="Profile picture"
                                    src="/icons/profile.png" 
                                    width={40}
                                    height={40}
                                />
                                    <div className='arrw-dwn-svg'>
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.998047 1.00293L6.99805 7.00293L12.998 1.00293" stroke="#E8E8E8" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>
                            </div>
                            </a>
                        
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}
