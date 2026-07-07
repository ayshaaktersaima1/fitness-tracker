import React from 'react';
import {
    FaDumbbell,
    FaChartLine,
    FaUtensils,
    FaCalculator,
    FaBullseye,
    FaUser,
    FaLeaf,
} from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            id: 1,
            icon: <FaDumbbell />,
            title: 'Workout Plans',
            description: 'Choose from a variety of workout plans for all fitness levels.',
        },
        {
            id: 2,
            icon: <FaChartLine />,
            title: 'Progress Charts',
            description: 'Track your progress with interactive charts and detailed analytics.',
        },
        {
            id: 3,
            icon: <FaUtensils />,
            title: 'Diet Plans',
            description: 'Get personalized meal plans and track your daily nutrition.',
        },
        {
            id: 4,
            icon: <FaCalculator />,
            title: 'BMI Calculator',
            description: 'Calculate your BMI instantly and get health category feedback.',
        },
        {
            id: 5,
            icon: <FaBullseye />,
            title: 'Goal Tracking',
            description: 'Set goals and monitor your daily, weekly, and monthly progress.',
        },
        {
            id: 6,
            icon: <FaUser />,
            title: 'User Profile',
            description: 'Manage your personal information and fitness preferences.',
        },
    ];

    return (
        <section id="features" className="bg-[#E9EFEC] py-16">
            <div className="mx-auto w-[90%]">
                {/* Section Heading */}
                <div className="mb-12 text-center">
                    <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#6A9C89]">
                        Our Features
                    </p>

                    <h2 className="text-3xl font-extrabold text-[#16423C] md:text-4xl">
                        Everything You Need in One App
                    </h2>

                    <div className="mx-auto mt-4 flex items-center justify-center gap-3">
                        <span className="h-[1px] w-16 bg-[#C4DAD2]"></span>
                        <FaLeaf className="text-sm text-[#6A9C89]" />
                        <span className="h-[1px] w-16 bg-[#C4DAD2]"></span>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group rounded-2xl border border-[#C4DAD2] bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-md"
                        >
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#E9EFEC] text-2xl text-[#16423C] transition duration-300 group-hover:bg-[#16423C] group-hover:text-white">
                                {feature.icon}
                            </div>

                            <h3 className="mb-3 text-lg font-bold text-[#16423C]">
                                {feature.title}
                            </h3>

                            <p className="text-sm leading-6 text-[#263F3A]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;