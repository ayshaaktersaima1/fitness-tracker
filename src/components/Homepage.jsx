import React from 'react';
import Banner from './Banner';
import Stats from './Stats';
import Features from './Features';
import HowItWorks from './HowItWorks';
import CTASection from './CTASection';
import Footer from './Footer';
import GsapFadeUp from './GsapFadeUp';

const Homepage = () => {
    return (
        <div>
            <GsapFadeUp>
                <Banner></Banner>
            </GsapFadeUp>
            <GsapFadeUp>
                <Stats></Stats>
            </GsapFadeUp>
            <GsapFadeUp>
                <Features></Features>
            </GsapFadeUp>
            <GsapFadeUp>
                <HowItWorks></HowItWorks>
            </GsapFadeUp>
            <GsapFadeUp>
                <CTASection></CTASection>
            </GsapFadeUp>


        </div>
    );
};

export default Homepage;