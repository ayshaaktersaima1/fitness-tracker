'use client';

import {
    BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend,
} from 'recharts';
import {
    MdFitnessCenter, MdLocalFireDepartment, MdDirectionsWalk, MdWaterDrop, MdMonitorWeight, MdCalculate,
} from 'react-icons/md';

export default function ProgressChartsPage() {
    const weeklyData = [
        { day: 'Mon', workouts: 1, calories: 280, steps: 5200, water: 5 },
        { day: 'Tue', workouts: 1, calories: 320, steps: 6800, water: 6 },
        { day: 'Wed', workouts: 0, calories: 120, steps: 4100, water: 4 },
        { day: 'Thu', workouts: 1, calories: 350, steps: 7600, water: 7 },
        { day: 'Fri', workouts: 1, calories: 400, steps: 8200, water: 6 },
        { day: 'Sat', workouts: 0, calories: 180, steps: 5000, water: 5 },
        { day: 'Sun', workouts: 1, calories: 300, steps: 6400, water: 6 },
    ];

    const bodyData = [
        { week: 'Week 1', weight: 61, bmi: 21.9 },
        { week: 'Week 2', weight: 60.5, bmi: 21.7 },
        { week: 'Week 3', weight: 60.2, bmi: 21.6 },
        { week: 'Week 4', weight: 60, bmi: 21.5 },
    ];

    const workoutTypeData = [
        { name: 'Strength', value: 45 },
        { name: 'Cardio', value: 30 },
        { name: 'Stretching', value: 15 },
        { name: 'Core', value: 10 },
    ];

    const calorieBarColors = [
        '#C4DAD2',
        '#A9CABE',
        '#8FB9AA',
        '#6A9C89',
        '#4F806E',
        '#2F5F50',
        '#003F32',
    ];

    const chartColors = ['#003F32', '#6A9C89', '#C4DAD2', '#E9EFEC'];

    const totalWorkouts = weeklyData.reduce((total, item) => total + item.workouts, 0);
    const totalCalories = weeklyData.reduce((total, item) => total + item.calories, 0);
    const totalSteps = weeklyData.reduce((total, item) => total + item.steps, 0);
    const avgWater = Math.round(
        weeklyData.reduce((total, item) => total + item.water, 0) / weeklyData.length
    );

    const currentWeight = bodyData[bodyData.length - 1].weight;
    const currentBmi = bodyData[bodyData.length - 1].bmi;

    const summaryCards = [
        {
            icon: MdFitnessCenter,
            label: 'Weekly Workouts',
            value: totalWorkouts,
            subText: 'Sessions completed',
        },
        {
            icon: MdLocalFireDepartment,
            label: 'Calories Burned',
            value: totalCalories,
            subText: 'kcal this week',
        },
        {
            icon: MdDirectionsWalk,
            label: 'Total Steps',
            value: totalSteps.toLocaleString(),
            subText: 'Steps recorded',
        },
        {
            icon: MdWaterDrop,
            label: 'Avg Water Intake',
            value: `${avgWater} Glasses`,
            subText: 'Daily average',
        },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#6A9C89]">
                    Progress Charts
                </p>

                <h1 className="text-3xl font-bold text-[#16423C] md:text-4xl">
                    Your Weekly Progress
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5F6F69]">
                    Track your weekly workouts, calories, steps, water intake, weight, and BMI progress.
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {summaryCards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={card.label}
                            className="rounded-3xl border border-[#DDE7E2] bg-white p-6 shadow-sm"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9EFEC] text-3xl text-[#003F32]">
                                <Icon />
                            </div>

                            <p className="text-sm font-medium text-[#5F6F69]">
                                {card.label}
                            </p>

                            <h2 className="mt-3 text-3xl font-bold text-[#16423C]">
                                {card.value}
                            </h2>

                            <p className="mt-2 text-sm text-[#6A9C89]">
                                {card.subText}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
                {/* Calories Burned */}
                <div className="rounded-3xl border border-[#DDE7E2] bg-white p-6 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-[#16423C]">
                            Calories Burned
                        </h2>

                        <p className="mt-2 text-sm text-[#5F6F69]">
                            Daily calories burned during the week.
                        </p>
                    </div>

                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={weeklyData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />

                                <Bar dataKey="calories" radius={[10, 10, 0, 0]}>
                                    {weeklyData.map((entry, index) => (
                                        <Cell
                                            key={entry.day}
                                            fill={calorieBarColors[index]}
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Daily Steps */}
                <div className="rounded-3xl border border-[#DDE7E2] bg-white p-6 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-[#16423C]">
                            Daily Steps
                        </h2>

                        <p className="mt-2 text-sm text-[#5F6F69]">
                            Step count across the week.
                        </p>
                    </div>

                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={weeklyData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />

                                <Line
                                    type="monotone"
                                    dataKey="steps"
                                    stroke="#003F32"
                                    strokeWidth={3}
                                    dot={{ r: 5 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Weight and BMI */}
                <div className="rounded-3xl border border-[#DDE7E2] bg-white p-6 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-[#16423C]">
                            Weight & BMI Progress
                        </h2>

                        <p className="mt-2 text-sm text-[#5F6F69]">
                            Weight and BMI changes over the last four weeks.
                        </p>
                    </div>

                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={bodyData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="week" />
                                <YAxis />
                                <Tooltip />
                                <Legend />

                                <Line
                                    type="monotone"
                                    dataKey="weight"
                                    name="Weight"
                                    stroke="#003F32"
                                    strokeWidth={3}
                                    dot={{ r: 5 }}
                                />

                                <Line
                                    type="monotone"
                                    dataKey="bmi"
                                    name="BMI"
                                    stroke="#6A9C89"
                                    strokeWidth={3}
                                    dot={{ r: 5 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Workout Type Breakdown */}
                <div className="rounded-3xl border border-[#DDE7E2] bg-white p-6 shadow-sm">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-[#16423C]">
                            Workout Type Breakdown
                        </h2>

                        <p className="mt-2 text-sm text-[#5F6F69]">
                            Workout category distribution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
                        <div className="h-70">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={workoutTypeData}
                                        dataKey="value"
                                        nameKey="name"
                                        innerRadius={65}
                                        outerRadius={100}
                                        paddingAngle={4}
                                    >
                                        {workoutTypeData.map((entry, index) => (
                                            <Cell
                                                key={entry.name}
                                                fill={chartColors[index]}
                                            />
                                        ))}
                                    </Pie>

                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="space-y-4">
                            {workoutTypeData.map((item, index) => (
                                <div
                                    key={item.name}
                                    className="flex items-center justify-between rounded-2xl bg-[#E9EFEC] px-4 py-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="h-3 w-3 rounded-full"
                                            style={{ backgroundColor: chartColors[index] }}
                                        ></span>

                                        <span className="text-sm font-semibold text-[#16423C]">
                                            {item.name}
                                        </span>
                                    </div>

                                    <span className="text-sm font-bold text-[#003F32]">
                                        {item.value}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-3xl bg-[#003F32] p-6 text-white shadow-sm">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                        <MdMonitorWeight />
                    </div>

                    <p className="text-sm text-white/70">Current Weight</p>

                    <h2 className="mt-2 text-4xl font-bold">
                        {currentWeight} kg
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-white/75">
                        Your weight progress is moving steadily over the last four weeks.
                    </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9EFEC] text-3xl text-[#003F32]">
                        <MdCalculate />
                    </div>

                    <p className="text-sm text-[#5F6F69]">Current BMI</p>

                    <h2 className="mt-2 text-4xl font-bold text-[#16423C]">
                        {currentBmi}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[#5F6F69]">
                        BMI stays in the healthy range based on your progress.
                    </p>
                </div>
            </div>
        </div>
    );
}