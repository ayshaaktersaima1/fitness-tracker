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
        <section className="bg-[#E9EFEC] pb-14">
            <div className="mx-auto w-[90%]">
                <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#C4DAD2] bg-white shadow-lg sm:grid-cols-2 lg:grid-cols-4">
                    {statsData.map((stat, index) => (
                        <div
                            key={stat.id}
                            className={`flex flex-col items-center justify-center px-6 py-8 text-center ${index !== statsData.length - 1
                                    ? 'lg:border-r lg:border-[#E9EFEC]'
                                    : ''
                                } ${index < statsData.length - 2
                                    ? 'sm:border-b sm:border-[#E9EFEC] lg:border-b-0'
                                    : ''
                                }`}
                        >
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E9EFEC] text-2xl text-[#16423C]">
                                {stat.icon}
                            </div>

                            <h3 className="text-3xl font-extrabold text-[#16423C]">
                                {stat.value}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-[#263F3A]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;