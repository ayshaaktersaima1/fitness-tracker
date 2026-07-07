import React from 'react';
import Banner from './Banner';
import Stats from './Stats';
import Features from './Features';
import HowItWorks from './HowItWorks';
import CTASection from './CTASection';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <Features></Features>
            <HowItWorks></HowItWorks>
            <CTASection></CTASection>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;