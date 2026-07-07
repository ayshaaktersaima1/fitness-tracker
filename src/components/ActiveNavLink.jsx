'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActiveNavLink = ({ href, children }) => {
    const pathname = usePathname();

    const isActive = href === '/' && pathname === '/';

    return (
        <Link
            href={href}
            className={
                activeLink === link.name
                    ? "text-[#16423C] border-b-2 border-[#16423C] pb-2"
                    : "text-[#1F2937] pb-2"
            }
        >
            {children}
        </Link>
    );
};

export default ActiveNavLink;