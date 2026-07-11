import Link from 'next/link';
import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';

const CTASection = () => {
    return (
        <section className="py-16">
            <div className="mx-auto w-[85%]">
                <div
                    className="rounded-[28px] bg-[#16423C] bg-cover bg-center px-6 py-14 text-center shadow-lg md:px-10 lg:py-16"
                    style={{
                        backgroundImage: "url('/assets/howitworks.png')",
                    }}
                >
                    <h2 className="text-3xl font-extrabold tracking-wide text-white md:text-4xl">
                        Ready to Build a Healthier You?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
                        Join thousands of people who are transforming their lives with FitTrack.
                    </p>

                    <div className="mt-7 flex justify-center">
                        <Link href="/register">
                            <button className="flex items-center gap-3 rounded-full bg-white px-10 py-4 text-base font-bold text-[#16423C] transition hover:bg-[#E9EFEC]">
                                Get Started Now
                                <HiArrowRight className="text-xl" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;