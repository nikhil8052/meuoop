
'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import Header from '@/app/user/components/Header';
import Link from "next/link";

export default function UserLayout({ children }) {
    return (
        <>
            <Header />
            <div className='home-content-main-div'>
                <div className='left-sidebar home-content-first-div '>
                    <div className='header-left-icons-div '>
                        <div className='left-icon mb-3 cursor-pointer '  >
                            <Link href="/ux-flow" className="text-decoration-none">

                                <Image
                                    src="/icons/ux_flow.svg"
                                    alt="External Image Example"
                                    width={52}
                                    height={52}
                                />
                                <p className='left-icon-text'> Ux Flow</p>
                            </Link>
                        </div>
                        <div className='left-icon mb-3 cursor-pointer '>
                            <Link href="/landing-pages" className="text-decoration-none">
                                <Image
                                    src="/icons/ux_flow.svg"
                                    alt="External Image Example"
                                    width={52}
                                    height={52}
                                />
                                <p className='left-icon-text'> Landing</p>
                            </Link>
                        </div>
                        <div className='left-icon mb-3 cursor-pointer '>
                            <Link href="/ui-elements" className="text-decoration-none">

                                <Image
                                    src="/icons/ux_flow.svg"
                                    alt="External Image Example"
                                    width={52}
                                    height={52}
                                />
                                <p className='left-icon-text'> UI Element </p>
                            </Link>
                        </div>
                        <div className='left-icon mb-3 cursor-pointer '>
                            <Link href="/ui-motion" className="text-decoration-none">
                                <Image
                                    src="/icons/ux_flow.svg"
                                    alt="External Image Example"
                                    width={52}
                                    height={52}
                                />
                                <p className='left-icon-text'> UI Motion </p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="right-content-main-div home-content-second-div ">
                    {children}
                </div>
            </div>
        </>
    )
}