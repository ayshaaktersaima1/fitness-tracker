import Image from 'next/image';
import { MdLocalDining } from 'react-icons/md';

const DietPlanCard = ({ plan }) => {
    return (
        <div className="overflow-hidden rounded-3xl border border-[#DDE7E2] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="relative h-48">
                <Image
                    src={plan.thumbnail}
                    alt={plan.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#16423C]">
                    {plan.badge}
                </div>
            </div>

            <div className="p-5">
                <h3 className="text-xl font-bold text-[#16423C]">
                    {plan.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5F6F69]">
                    {plan.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#E9EFEC] p-3">
                        <p className="text-xs text-[#5F6F69]">Calories</p>
                        <h4 className="mt-1 text-sm font-bold text-[#16423C]">
                            {plan.calories}
                        </h4>
                    </div>

                    <div className="rounded-2xl bg-[#E9EFEC] p-3">
                        <p className="text-xs text-[#5F6F69]">Meals</p>
                        <h4 className="mt-1 text-sm font-bold text-[#16423C]">
                            {plan.meals}
                        </h4>
                    </div>
                </div>

                <div className="mt-5">
                    <p className="mb-3 text-sm font-semibold text-[#16423C]">
                        Food Focus
                    </p>

                    <div className="flex items-center gap-2 rounded-2xl bg-[#F8FAF9] px-4 py-3 text-sm font-medium text-[#374B45]">
                        <MdLocalDining className="text-lg text-[#6A9C89]" />
                        {plan.foodFocus}
                    </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {plan.foods.slice(0, 3).map((food) => (
                        <span
                            key={food}
                            className="rounded-full bg-[#E9EFEC] px-3 py-1 text-xs font-medium text-[#16423C]"
                        >
                            {food}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DietPlanCard;