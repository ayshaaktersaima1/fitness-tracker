'use client';

import { ReactLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';

const SmoothScroll = ({ children }) => {
    const pathname = usePathname();

    if (pathname.includes('dashboard')) {
        return children;
    }

    return (
        <ReactLenis root options={{ lerp: 0.08, duration: 1.2 }}>
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;