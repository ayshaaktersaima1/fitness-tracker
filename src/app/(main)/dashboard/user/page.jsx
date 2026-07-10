import Link from 'next/link';
import {
    MdCalculate, MdTrackChanges, MdDirectionsRun, MdMonitorWeight,
    MdArrowForward, MdCheckCircle
} from 'react-icons/md';
import { IoLeafSharp } from 'react-icons/io5';
import { LuDumbbell } from 'react-icons/lu';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export default async function UserDashboardOverview() {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const userData = session?.user;

    const user = {
        name: userData?.name,
        bmi: userData?.bmi,
        bmiStatus:
            Number(userData?.bmi) < 18.5
                ? 'Underweight'
                : Number(userData?.bmi) < 25
                    ? 'Healthy'
                    : Number(userData?.bmi) < 30
                        ? 'Overweight'
                        : 'Obese',
        fitnessGoal: userData?.fitnessGoal,
        activityLevel: userData?.activityLevel,
        currentWeight: userData?.weight,
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
            value: `${user.currentWeight} kg`,
            subText: 'Keep it up!',
        },
    ];

    return (
        <div className="space-y-7">
            {/* Header */}
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-wide text-[#16423C] md:text-4xl">
                        Welcome back, {user.name}!
                    </h1>
                    <p className="mt-2 text-sm text-[#5F6F69]">
                        Here’s your health summary.
                    </p>
                </div>


            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {summaryCards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={card.title}
                            className="rounded-2xl border border-[#DDE7E2] bg-white p-6 shadow-sm"
                        >
                            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#E9EFEC] text-2xl text-[#003F32]">
                                <Icon />
                            </div>

                            <p className="text-sm font-medium text-[#374B45]">
                                {card.title}
                            </p>

                            <h2 className="mt-3 text-3xl font-bold text-[#003F32]">
                                {card.value}
                            </h2>

                            <p className="mt-3 flex items-center gap-2 text-sm text-[#3A8C5E]">
                                <span className="h-2 w-2 rounded-full bg-[#3A8C5E]"></span>
                                {card.subText}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Recommended */}
                <div className="rounded-2xl border border-[#DDE7E2] bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9EFEC] text-xl text-[#003F32]">
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
                            className="flex items-center justify-between rounded-xl bg-[#003F32] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#0b4f41]"
                        >
                            <span className="flex items-center gap-3">
                                <LuDumbbell className="text-lg" />
                                View Workout Plans
                            </span>
                            <MdArrowForward className="text-xl" />
                        </Link>

                        <Link
                            href="/dashboard/user/diet-plans"
                            className="flex items-center justify-between rounded-xl bg-[#E9EFEC] px-5 py-4 text-sm font-semibold text-[#16423C] transition hover:bg-[#C4DAD2]"
                        >
                            <span className="flex items-center gap-3">
                                <IoLeafSharp className="text-lg" />
                                View Diet Plans
                            </span>
                            <MdArrowForward className="text-xl" />
                        </Link>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="rounded-2xl border border-[#DDE7E2] bg-white p-6 shadow-sm">
                    <div className="mb-5 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9EFEC] text-xl text-[#003F32]">
                            <MdCalculate />
                        </div>

                        <h2 className="text-xl font-bold text-[#16423C]">
                            Quick Actions
                        </h2>
                    </div>

                    <div className="space-y-3">
                        <Link
                            href="/dashboard/user/bmi-calculator"
                            className="flex items-center justify-between rounded-xl bg-[#E9EFEC] px-5 py-4 text-sm font-semibold text-[#16423C] transition hover:bg-[#C4DAD2]"
                        >
                            <span className="flex items-center gap-3">
                                <MdCalculate className="text-lg" />
                                Calculate Your BMI
                            </span>
                            <MdArrowForward className="text-xl" />
                        </Link>

                        <Link
                            href="/dashboard/user/user-profile"
                            className="flex items-center justify-between rounded-xl bg-[#E9EFEC] px-5 py-4 text-sm font-semibold text-[#16423C] transition hover:bg-[#C4DAD2]"
                        >
                            <span className="flex items-center gap-3">
                                <MdMonitorWeight className="text-lg" />
                                Update Profile Details
                            </span>
                            <MdArrowForward className="text-xl" />
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
}