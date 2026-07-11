'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    FaFacebookF, FaInstagram, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
    const pathname = usePathname();

    if (pathname.startsWith('/dashboard')) {
        return null;
    }

    return (
        <footer className="bg-[#E9EFEC] pt-12">
            <div className="w-full border-t border-[#C4DAD2]" />

            <div className="mx-auto w-[85%]">
                <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <Link href="/">
                            <Image
                                src="/assets/fitTrackLogo.png"
                                alt="FitTrack Logo"
                                width={180}
                                height={70}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-[#263F3A]">
                            FitTrack is a simple fitness tracking dashboard that helps users
                            follow workout plans, track diet goals, calculate BMI, and monitor
                            daily progress.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C4DAD2] text-[#16423C] transition hover:bg-[#16423C] hover:text-white"
                            >
                                <FaFacebookF />
                            </Link>

                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C4DAD2] text-[#16423C] transition hover:bg-[#16423C] hover:text-white"
                            >
                                <FaInstagram />
                            </Link>

                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C4DAD2] text-[#16423C] transition hover:bg-[#16423C] hover:text-white"
                            >
                                <FaGithub />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-[#16423C]">
                            Quick Links
                        </h3>

                        <ul className="mt-5 space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm font-medium text-[#263F3A] transition hover:text-[#16423C]"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#features"
                                    className="text-sm font-medium text-[#263F3A] transition hover:text-[#16423C]"
                                >
                                    Features
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#how-it-works"
                                    className="text-sm font-medium text-[#263F3A] transition hover:text-[#16423C]"
                                >
                                    How It Works
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/login"
                                    className="text-sm font-medium text-[#263F3A] transition hover:text-[#16423C]"
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-[#16423C]">
                            Contact Us
                        </h3>

                        <div className="mt-5 space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="mt-1 text-[#6A9C89]">
                                    <FaEnvelope />
                                </span>

                                <div>
                                    <p className="text-sm font-semibold text-[#16423C]">
                                        Email
                                    </p>
                                    <p className="text-sm text-[#263F3A]">
                                        fittrack@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1 text-[#6A9C89]">
                                    <FaPhoneAlt />
                                </span>

                                <div>
                                    <p className="text-sm font-semibold text-[#16423C]">
                                        Phone
                                    </p>
                                    <p className="text-sm text-[#263F3A]">
                                        +880 1234 567 890
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-1 text-[#6A9C89]">
                                    <FaMapMarkerAlt />
                                </span>

                                <div>
                                    <p className="text-sm font-semibold text-[#16423C]">
                                        Location
                                    </p>
                                    <p className="text-sm text-[#263F3A]">
                                        Chittagong, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#C4DAD2] py-5 text-center">
                    <p className="text-sm font-medium text-[#263F3A]">
                        © 2026 FitTrack. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;