import type { Metadata } from "next";
import localFont from "next/font/local";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./globals.css";
import './components/user/styles/user.css';
import Image from 'next/image'
import Header from '@/app/user/components/Header';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className='home-content-main-div'>

          <div className='left-sidebar home-content-first-div '>
            <div className='header-left-icons-div '>
              <div className='left-icon mb-3 cursor-pointer '>
                <Image
                  src="/icons/ux_flow.svg" 
                  alt="External Image Example"
                  width={52}
                  height={52}
                />
                <p className='left-icon-text'> Ux Flow</p>
              </div>
              <div className='left-icon mb-3 cursor-pointer '>
                <Image
                  src="/icons/ux_flow.svg" 
                  alt="External Image Example"
                  width={52}
                  height={52}
                />
                <p className='left-icon-text'> Landing</p>
              </div>
              <div className='left-icon mb-3 cursor-pointer '>
                <Image
                  src="/icons/ux_flow.svg" 
                  alt="External Image Example"
                  width={52}
                  height={52}
                />
                <p className='left-icon-text'> UI Element </p>
              </div>
              <div className='left-icon mb-3 cursor-pointer '>
                <Image
                  src="/icons/ux_flow.svg" 
                  alt="External Image Example"
                  width={52}
                  height={52}
                />
                <p className='left-icon-text'> UI Motion </p>
              </div>
            </div>
          </div>
          <div className="right-content-main-div home-content-second-div ">

              {children}
          </div>
        </div>
      </body>
    </html>
  );
}
