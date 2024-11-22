'use client';
import { useState } from 'react';
import Header from './layout/Header'

const MeuooopComponent = () => {
    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
        
       


        <div>
             <Header/>
            

            
        </div>
    );
};

export default MeuooopComponent;