import Image from 'next/image';
import { MdArrowForward } from 'react-icons/md';

const WorkoutPlanCard = ({ plan }) => {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#DDE7E2] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="relative h-48 shrink-0">
                <Image
                    src={plan.thumbnail}
                    alt={plan.title}
                    fill
                    className="object-cover"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#16423C]">
                    {plan.difficulty}
                </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold text-[#16423C]">
                    {plan.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5F6F69]">
                    {plan.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#E9EFEC] p-3">
                        <p className="text-xs text-[#5F6F69]">Duration</p>
                        <h4 className="mt-1 text-sm font-bold text-[#16423C]">
                            {plan.duration}
                        </h4>
                    </div>

                    <div className="rounded-2xl bg-[#E9EFEC] p-3">
                        <p className="text-xs text-[#5F6F69]">Muscle Group</p>
                        <h4 className="mt-1 text-sm font-bold text-[#16423C]">
                            {plan.muscleGroup}
                        </h4>
                    </div>
                </div>

                <div className="mt-auto pt-6">
                    <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#003F32] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0b4f41]">
                        View Plan
                        <MdArrowForward className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkoutPlanCard;