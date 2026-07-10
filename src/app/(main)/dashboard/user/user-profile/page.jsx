import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import {
    MdEmail,
    MdMonitorWeight,
    MdHeight,
    MdCalculate,
    MdCake,
    MdDirectionsRun,
    MdTrackChanges,
    MdCalendarMonth,
} from 'react-icons/md';

export default async function UserProfilePage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userData = session?.user;

    const formatText = (text) => {
        return text
            ?.split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const getBmiStatus = (bmi) => {
        const value = Number(bmi);

        if (value < 18.5) return 'Underweight';
        if (value < 25) return 'Healthy';
        if (value < 30) return 'Overweight';
        return 'Obese';
    };

    const formatDate = (date) => {
        if (!date) return 'Not available';

        return new Date(date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };

    const profileStats = [
        {
            icon: MdMonitorWeight,
            label: 'Weight',
            value: `${userData?.weight} kg`,
        },
        {
            icon: MdHeight,
            label: 'Height',
            value: `${userData?.height} cm`,
        },
        {
            icon: MdCalculate,
            label: 'BMI',
            value: userData?.bmi,
            subText: getBmiStatus(userData?.bmi),
        },
        {
            icon: MdCake,
            label: 'Age',
            value: userData?.age,
            subText: 'Years Old',
        },
        {
            icon: MdDirectionsRun,
            label: 'Activity Level',
            value: formatText(userData?.activityLevel),
        },
        {
            icon: MdTrackChanges,
            label: 'Fitness Goal',
            value: formatText(userData?.fitnessGoal),
        },
    ];

    return (
        <div className="space-y-7">
            {/* Header */}
            <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#6A9C89]">
                    User Profile
                </p>

                <h1 className="text-3xl font-bold text-[#16423C] md:text-4xl">
                    My Profile
                </h1>

                <p className="mt-3 text-sm text-[#5F6F69]">
                    View your personal and fitness information.
                </p>
            </div>

            {/* Profile Card */}
            <div className="rounded-3xl border border-[#DDE7E2] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-5">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#003F32] text-4xl font-bold uppercase text-white">
                        {userData?.name?.charAt(0)}
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold capitalize text-[#16423C]">
                            {userData?.name}
                        </h2>

                        <div className="mt-3 flex items-center gap-2 text-sm text-[#5F6F69]">
                            <MdEmail className="text-lg text-[#6A9C89]" />
                            {userData?.email}
                        </div>

                        <div className="mt-2 flex items-center gap-2 text-sm text-[#5F6F69]">
                            <MdCalendarMonth className="text-lg text-[#6A9C89]" />
                            Member since {formatDate(userData?.createdAt)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Health Details */}
            <div className="rounded-3xl border border-[#DDE7E2] bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-[#16423C]">
                    Health Details
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {profileStats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.label}
                                className="rounded-2xl bg-[#E9EFEC] p-5"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl text-[#003F32]">
                                    <Icon />
                                </div>

                                <p className="text-sm font-medium text-[#5F6F69]">
                                    {item.label}
                                </p>

                                <h3 className="mt-2 text-2xl font-bold text-[#16423C]">
                                    {item.value}
                                </h3>

                                {item.subText && (
                                    <p className="mt-2 text-sm font-medium text-[#3A8C5E]">
                                        {item.subText}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Goal Summary */}
            <div className="rounded-3xl border border-[#DDE7E2] bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-[#16423C]">
                            Your Fitness Focus
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5F6F69]">
                            You selected{' '}
                            <span className="font-semibold text-[#16423C]">
                                {formatText(userData?.fitnessGoal)}
                            </span>{' '}
                            as your fitness goal with a{' '}
                            <span className="font-semibold text-[#16423C]">
                                {formatText(userData?.activityLevel)}
                            </span>{' '}
                            activity level.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-[#003F32] px-6 py-4 text-white">
                        <p className="text-sm text-white/70">Current BMI</p>
                        <h3 className="mt-1 text-3xl font-bold">
                            {userData?.bmi}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}