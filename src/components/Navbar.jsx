'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'BMI Calculator', href: '#bmi-calculator' },
        { name: 'About', href: '#about' },
    ];

    return (
        <div className="sticky top-0 z-50 bg-[#E9EFEC]/90 px-4 py-5 backdrop-blur-md">
            <nav className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between rounded-[18px] bg-white px-6 shadow-[0_18px_60px_rgba(22,66,60,0.12)] lg:px-10">

                {/* Logo */}
                <Link href="/" onClick={() => setActiveLink('Home')}>
                    <Image
                        src="/assets/fitTrackLogo.png"
                        alt="FitTrack Logo"
                        width={220}
                        height={80}
                        className="h-[48px] w-auto object-contain md:h-[56px]"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden items-center gap-10 lg:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                onClick={() => setActiveLink(link.name)}
                                className={`pb-2 text-[17px] font-semibold transition hover:text-[#16423C] ${activeLink === link.name
                                    ? 'border-b-2 border-[#16423C] text-[#16423C]'
                                    : 'border-b-2 border-transparent text-[#1F2937]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden items-center gap-5 lg:flex">
                    <Link href="/login">
                        <button className="h-[52px] rounded-full border border-[#16423C] bg-white px-9 text-[16px] font-semibold text-[#16423C] transition hover:bg-[#E9EFEC]">
                            Login
                        </button>
                    </Link>

                    <Link href="/register">
                        <button className="h-[52px] rounded-full bg-[#16423C] px-9 text-[16px] font-semibold text-white shadow-[0_10px_24px_rgba(22,66,60,0.25)] transition hover:bg-[#0f302b]">
                            Register
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C4DAD2] text-[#16423C] lg:hidden"
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div className="mx-auto mt-3 max-w-[1500px] rounded-[18px] bg-white p-5 shadow-[0_18px_60px_rgba(22,66,60,0.12)] lg:hidden">
                    <ul className="space-y-2">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => {
                                        setActiveLink(link.name);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`block rounded-xl px-4 py-3 text-[16px] font-semibold transition ${activeLink === link.name
                                        ? 'bg-[#E9EFEC] text-[#16423C]'
                                        : 'text-[#1F2937] hover:bg-[#E9EFEC]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-5 flex flex-col gap-3">
                        <Link href="/login">
                            <button className="h-12 w-full rounded-full border border-[#16423C] bg-white font-semibold text-[#16423C]">
                                Login
                            </button>
                        </Link>

                        <Link href="/register">
                            <button className="h-12 w-full rounded-full bg-[#16423C] font-semibold text-white">
                                Get Started →
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;