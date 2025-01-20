import type { Metadata } from "next";

import localFont from "next/font/local";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";
import './components/user/styles/user.css';

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
        <div>

       {children}
       </div>
      </body>
      
    </html>
  );
}
