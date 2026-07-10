import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default layout;