import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <Sidebar></Sidebar>

            <div>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;