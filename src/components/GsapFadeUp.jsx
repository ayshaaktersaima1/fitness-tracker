'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const GsapFadeUp = ({ children, className = '' }) => {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            gsap.from(sectionRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                },
            });
        },
        { scope: sectionRef }
    );

    return (
        <div ref={sectionRef} className={className}>
            {children}
        </div>
    );
};

export default GsapFadeUp;