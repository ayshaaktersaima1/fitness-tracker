'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { authClient } from '@/lib/auth-client';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'How It Works', href: '/#how-it-works' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const pathname = usePathname();
    const router = useRouter();

    const { data: session } = authClient.useSession();

    const user = session?.user;
    const firstName = user?.name ? user.name.split(' ')[0] : 'User';

    if (pathname.startsWith('/dashboard')) {
        return null;
    }

    const isActive = (link) => {
        if (pathname !== '/') return false;
        return activeLink === link.name;
    };

    const handleLogout = async () => {
        await authClient.signOut();

        setIsMenuOpen(false);
        router.push('/login');
        router.refresh();
    };

    return (
        <nav className="sticky top-0 z-50 md:w-[85%] mx-auto rounded-2xl md:mt-4 border-b border-[#C4DAD2] bg-white/75 backdrop-blur-md">
            <div className="mx-auto flex w-full items-center justify-between px-5 py-4 md:w-[95%] md:px-0">
                <Link
                    href="/"
                    onClick={() => {
                        setActiveLink('Home');

                    }}
                >
                    <Image
                        src="/assets/fitTrackLogo.png"
                        alt="FitTrack Logo"
                        width={220}
                        height={80}
                        className="h-12 w-auto object-contain md:h-14"
                        priority
                    />
                </Link>

                <ul className="hidden items-center gap-10 lg:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                onClick={() => setActiveLink(link.name)}
                                className={`pb-2 text-base font-semibold transition hover:text-[#16423C] ${isActive(link)
                                    ? 'border-b-2 border-[#16423C] text-[#16423C]'
                                    : 'border-b-2 border-transparent text-[#1F2937]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-4 lg:flex">
                    {user ? (
                        <>
                            <div className="flex items-center gap-2 rounded-full border border-[#C4DAD2] bg-white px-3 py-2">
                                {user.image ? (
                                    <Image
                                        src={user.image}
                                        alt={user.name || 'User'}
                                        width={32}
                                        height={32}
                                        className="h-8 w-8 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#16423C] text-xs font-bold uppercase text-white">
                                        {firstName[0]}
                                    </div>
                                )}

                                <span className="text-sm font-semibold text-[#16423C]">
                                    {firstName}
                                </span>
                            </div>

                            <Link
                                href="/dashboard/user"
                                className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-[#16423C] px-6 text-sm font-semibold text-white transition hover:bg-[#0f302b]"
                            >
                                <MdDashboard className="text-base" />
                                Dashboard
                            </Link>

                            <button
                                type="button"
                                onClick={handleLogout}
                                className="h-11 rounded-2xl border border-[#16423C] bg-white px-6 text-sm font-semibold text-[#16423C] transition hover:bg-[#E9EFEC]"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="flex h-11 items-center justify-center rounded-2xl border border-[#16423C] bg-white px-6 text-sm font-semibold text-[#16423C] transition hover:bg-[#E9EFEC]"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="flex h-11 items-center justify-center rounded-2xl bg-[#16423C] px-6 text-sm font-semibold text-white transition hover:bg-[#0f302b]"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="flex items-center gap-3 lg:hidden">
                    {user && (
                        <div className="flex items-center gap-2 rounded-full border border-[#C4DAD2] bg-white px-2 py-2">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name || 'User'}
                                    width={34}
                                    height={34}
                                    className="h-8 w-8 rounded-full object-cover"
                                />
                            ) : (
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#16423C] text-xs font-bold uppercase text-white">
                                    {firstName[0]}
                                </div>
                            )}

                            <span className="hidden max-w-20 truncate text-sm font-bold text-[#16423C] sm:block">
                                {firstName}
                            </span>
                        </div>
                    )}

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C4DAD2] text-[#16423C]"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <HiX className="text-2xl" />
                        ) : (
                            <HiMenuAlt3 className="text-2xl" />
                        )}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="border-t border-[#C4DAD2] bg-white shadow-md lg:hidden">
                    <div className="mx-auto w-full px-5 py-5 md:w-[85%] md:px-0">
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={() => {
                                            setActiveLink(link.name);
                                            setIsMenuOpen(false);
                                        }}
                                        className={`block rounded-2xl px-4 py-3 text-base font-semibold transition ${isActive(link)
                                            ? 'bg-[#E9EFEC] text-[#16423C]'
                                            : 'text-[#1F2937] hover:bg-[#E9EFEC]'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-5 border-t border-[#C4DAD2] pt-5">
                            {user ? (
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <Link
                                        href="/dashboard/user"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#16423C] font-semibold text-white"
                                    >
                                        <MdDashboard className="text-lg" />
                                        Dashboard
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="h-12 rounded-2xl border border-[#16423C] bg-white font-semibold text-[#16423C]"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-3">
                                    <Link
                                        href="/login"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex h-12 items-center justify-center rounded-2xl border border-[#16423C] bg-white font-semibold text-[#16423C]"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        href="/register"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex h-12 items-center justify-center rounded-2xl bg-[#16423C] font-semibold text-white"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;