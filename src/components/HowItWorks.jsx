import React from 'react';
import { FaUser, FaRegCalendarCheck, FaChartLine } from 'react-icons/fa';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            icon: <FaUser />,
            title: 'Create Your Profile',
            description: 'Add your age, height, weight, and fitness goals to get started.',
        },
        {
            id: 2,
            icon: <FaRegCalendarCheck />,
            title: 'Choose Your Plan',
            description: 'Select workout and diet plans that fit your lifestyle.',
        },
        {
            id: 3,
            icon: <FaChartLine />,
            title: 'Track Your Progress',
            description: 'Monitor your daily activity, nutrition, and achievements.',
        },
    ];

    return (
        <section id="how-it-works" className="bg-[#E9EFEC] py-16">
            <div className="mx-auto w-[90%]">
                <div className="rounded-[32px] bg-white/60 px-6 py-12 shadow-sm md:px-10 lg:px-16">

                    {/* Section Heading */}
                    <div className="mb-12 text-center">
                        <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#6A9C89]">
                            How It Works
                        </p>

                        <h2 className="text-3xl font-extrabold leading-tight text-[#16423C] md:text-4xl">
                            Start Your Fitness Journey in 3 Simple Steps
                        </h2>
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3 md:gap-6">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative flex flex-col items-center text-center">

                                {/* Dashed Line */}
                                {index !== steps.length - 1 && (
                                    <div className="absolute left-[62%] top-[58px] hidden h-[1px] w-[75%] border-t border-dashed border-[#6A9C89]/60 md:block"></div>
                                )}

                                {/* Number Circle */}
                                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#16423C] text-lg font-bold text-white">
                                    {step.id}
                                </div>

                                {/* Icon Circle */}
                                <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#E9EFEC] text-2xl text-[#16423C]">
                                    {step.icon}
                                </div>

                                {/* Text */}
                                <h3 className="mt-5 text-xl font-bold text-[#16423C]">
                                    {step.title}
                                </h3>

                                <p className="mt-3 max-w-[260px] text-sm leading-6 text-[#263F3A]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;