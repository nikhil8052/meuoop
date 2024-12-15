import type { Metadata } from "next";
import localFont from "next/font/local";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import './components/user/styles/user.css';
import Image from 'next/image'
import Header from '@/app/user/components/Header';
import Link from "next/link";
import { DM_Sans, Poppins } from 'next/font/google';

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

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Meuoop",
  description: "Meuoop",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
        
      <body
        className={`${dmSans.className} ${poppins.className} antialiased`}
      >
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
      </body>
    </html>
  );
}
