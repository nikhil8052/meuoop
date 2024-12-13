'use client';
import { useState } from 'react';
import Header from './layout/Header';
import HomeContent from './pages/HomeContent';
import Image from 'next/image';


const MeuooopComponent = () => {
    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
    
             <HomeContent/>
              
    );
};

export default MeuooopComponent;