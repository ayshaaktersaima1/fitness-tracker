'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLeaf } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi2';
import { MdDashboard } from 'react-icons/md';
import { authClient } from '@/lib/auth-client';

const Banner = () => {
    const { data: session } = authClient.useSession();

    const user = session?.user;

    return (
        <section id="home">
            <div className="lg:h-[88vh] mx-auto grid w-[85%] grid-cols-1 items-center gap-2 py-10 md:py-14 lg:grid-cols-[46%_54%] lg:gap-6 lg:py-0">

                {/* Left Content */}
                <div className="order-1 text-center lg:text-left">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#C4DAD2] px-4 py-2 text-sm font-semibold text-[#16423C]">
                        <FaLeaf className="text-[#6A9C89]" />
                        <span>Your personal fitness companion</span>
                    </div>

                    <h1 className="text-3xl font-semibold leading-snug text-[#16423C] md:text-5xl">
                        Track Your Fitness.
                        <br />
                        Build Better Habits.
                    </h1>

                    <p className="mx-auto mt-5 max-w-140 text-base leading-8 text-[#263F3A] md:text-lg lg:mx-0">
                        Plan workouts, follow diet plans, calculate BMI, and track your
                        progress — all in one place. Stay consistent. Stay healthy.
                    </p>

                    <div className="mt-7 flex items-center justify-center gap-4 lg:justify-start">
                        <Link href={user ? '/dashboard/user' : '/register'}>
                            <button className="flex items-center gap-2 rounded-full bg-[#16423C] px-8 py-4 text-sm font-bold text-white shadow-md transition hover:bg-[#0f302b]">
                                Get Started
                                <HiArrowRight className="text-lg" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="order-2 flex h-90 w-full items-center justify-center sm:h-[430px] md:h-[520px] lg:h-[620px] lg:justify-end">
                    <Image
                        src="/assets/banner.png"
                        alt="Woman using fitness tracking app"
                        width={1100}
                        height={750}
                        priority
                        className="h-auto w-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;