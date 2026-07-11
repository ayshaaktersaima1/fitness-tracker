import React from 'react';
import { FaUsers, FaDumbbell, FaBullseye, FaHeartbeat } from 'react-icons/fa';

const Stats = () => {
    const statsData = [
        {
            id: 1,
            icon: <FaUsers />,
            value: '10K+',
            label: 'Happy Users',
        },
        {
            id: 2,
            icon: <FaDumbbell />,
            value: '500+',
            label: 'Workouts Completed',
        },
        {
            id: 3,
            icon: <FaBullseye />,
            value: '95%',
            label: 'Goal Accuracy',
        },
        {
            id: 4,
            icon: <FaHeartbeat />,
            value: '24/7',
            label: 'Progress Monitoring',
        },
    ];

    return (
        <div className="pb-14">
            <div className="mx-auto w-full px-5 pt-12 md:w-[85%] md:px-0 md:pt-16">
                <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-[#C4DAD2] bg-white shadow-lg lg:grid-cols-4">
                    {statsData.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col items-center justify-center bg-white px-4 py-6 text-center shadow-sm md:px-6 md:py-8"
                        >
                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#E9EFEC] text-xl text-[#16423C] md:mb-4 md:h-16 md:w-16 md:text-2xl">
                                {stat.icon}
                            </div>

                            <h3 className="text-2xl font-extrabold text-[#16423C] md:text-3xl">
                                {stat.value}
                            </h3>

                            <p className="mt-1 text-xs font-medium text-[#263F3A] md:text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;