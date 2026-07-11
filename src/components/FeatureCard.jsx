import React from 'react';

const FeatureCard = ({ feature }) => {
    return (
        <div className="group rounded-2xl border border-[#C4DAD2] bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-md">
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
    );
};

export default FeatureCard;