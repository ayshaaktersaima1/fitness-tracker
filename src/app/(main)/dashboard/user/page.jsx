import Link from 'next/link';
import {
    MdCalculate,
    MdTrackChanges,
    MdDirectionsRun,
    MdMonitorWeight,
    MdArrowForward,
    MdCheckCircle,
} from 'react-icons/md';
import { IoLeafSharp } from 'react-icons/io5';
import { LuDumbbell } from 'react-icons/lu';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const goalLabels = {
    'lose-weight': 'Lose Weight',
    'build-muscle': 'Build Muscle',
    'stay-fit': 'Stay Fit',
};

const activityLabels = {
    beginner: 'Beginner',
    moderate: 'Moderate',
    active: 'Active',
};

export default async function UserDashboardOverview() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userData = session?.user;
    const bmi = Number(userData?.bmi);

    const user = {
        name: userData?.name || 'User',
        bmi: userData?.bmi || 'Not Set',
        bmiStatus:
            bmi < 18.5
                ? 'Underweight'
                : bmi < 25
                    ? 'Healthy'
                    : bmi < 30
                        ? 'Overweight'
                        : 'Obese',
        fitnessGoal: goalLabels[userData?.fitnessGoal] || 'Not Set',
        activityLevel: activityLabels[userData?.activityLevel] || 'Not Set',
        currentWeight: userData?.weight ? `${userData.weight} kg` : 'Not Set',
    };

    const summaryCards = [
        {
            icon: MdCalculate,
            title: 'BMI Score',
            value: user.bmi,
            subText: user.bmiStatus,
        },
        {
            icon: MdTrackChanges,
            title: 'Fitness Goal',
            value: user.fitnessGoal,
            subText: "You're on the right track!",
        },
        {
            icon: MdDirectionsRun,
            title: 'Activity Level',
            value: user.activityLevel,
            subText: 'Keep staying active!',
        },
        {
            icon: MdMonitorWeight,
            title: 'Current Weight',
            value: user.currentWeight,
            subText: 'Keep it up!',
        },
    ];

    return (
        <div className="space-y-7">
            <div>
                <h1 className="text-3xl font-bold tracking-wide text-[#16423C] md:text-4xl">
                    Welcome back, {user.name}!
                </h1>

                <p className="mt-2 text-sm text-[#5F6F69]">
                    Here’s your health summary.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                {summaryCards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={card.title}
                            className="rounded-2xl border border-[#DDE7E2] bg-white p-6 shadow-sm"
                        >
                            <div className="mb-7 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E9EFEC] text-2xl text-[#003F32]">
                                <Icon />
                            </div>

                            <p className="text-sm font-medium text-[#374B45]">
                                {card.title}
                            </p>

                            <h2 className="mt-3 text-3xl font-bold text-[#003F32]">
                                {card.value}
                            </h2>

                            <p className="mt-3 flex items-center gap-2 text-sm text-[#3A8C5E]">
                                <span className="h-2 w-2 shrink-0 rounded-full bg-[#3A8C5E]" />
                                {card.subText}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-[#DDE7E2] bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-center gap-4 ">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E9EFEC] text-xl text-[#003F32]">
                            <MdCheckCircle />
                        </div>

                        <h2 className="text-xl font-bold text-[#16423C]">
                            Recommended For You
                        </h2>
                    </div>

                    <p className="mb-6 max-w-xl text-sm leading-7 text-[#5F6F69]">
                        Based on your goal and activity level, we recommend a balanced
                        workout and diet plan.
                    </p>

                    <div className="space-y-3">
                        <Link
                            href="/dashboard/user/workout-plans"
                            className="flex items-center justify-between gap-4 rounded-xl bg-[#003F32] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#0b4f41]"
                        >
                            <span className="flex items-center gap-3">
                                <LuDumbbell className="shrink-0 text-lg" />
                                View Workout Plans
                            </span>

                            <MdArrowForward className="shrink-0 text-xl" />
                        </Link>

                        <Link
                            href="/dashboard/user/diet-plans"
                            className="flex items-center justify-between gap-4 rounded-xl bg-[#E9EFEC] px-5 py-4 text-sm font-semibold text-[#16423C] transition hover:bg-[#C4DAD2]"
                        >
                            <span className="flex items-center gap-3">
                                <IoLeafSharp className="shrink-0 text-lg" />
                                View Diet Plans
                            </span>

                            <MdArrowForward className="shrink-0 text-xl" />
                        </Link>
                    </div>
                </div>

                <div className="rounded-2xl border border-[#DDE7E2] bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E9EFEC] text-xl text-[#003F32]">
                            <MdCalculate />
                        </div>

                        <h2 className="text-xl font-bold text-[#16423C]">
                            Quick Actions
                        </h2>
                    </div>

                    <div className="space-y-3">
                        <Link
                            href="/dashboard/user/bmi-calculator"
                            className="flex items-center justify-between gap-4 rounded-xl bg-[#E9EFEC] px-5 py-4 text-sm font-semibold text-[#16423C] transition hover:bg-[#C4DAD2]"
                        >
                            <span className="flex items-center gap-3">
                                <MdCalculate className="shrink-0 text-lg" />
                                Calculate Your BMI
                            </span>

                            <MdArrowForward className="shrink-0 text-xl" />
                        </Link>

                        <Link
                            href="/dashboard/user/user-profile"
                            className="flex items-center justify-between gap-4 rounded-xl bg-[#E9EFEC] px-5 py-4 text-sm font-semibold text-[#16423C] transition hover:bg-[#C4DAD2]"
                        >
                            <span className="flex items-center gap-3">
                                <MdMonitorWeight className="shrink-0 text-lg" />
                                Update Profile Details
                            </span>

                            <MdArrowForward className="shrink-0 text-xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}