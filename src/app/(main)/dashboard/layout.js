import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex flex-col md:flex-row h-screen overflow-hidden  bg-[#E9EFEC]'>
            <Sidebar></Sidebar>

            <div className="flex-1 overflow-y-auto p-5 md:p-8  bg-[#E9EFEC]">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;