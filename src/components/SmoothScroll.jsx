'use client';

import { ReactLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';

const SmoothScroll = ({ children }) => {
    const pathname = usePathname();

    const disabledPages =
        pathname === '/login' ||
        pathname === '/register' ||
        pathname.startsWith('/dashboard');

    if (disabledPages) {
        return children;
    }

    return (
        <ReactLenis root options={{ lerp: 0.08 }}>
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;