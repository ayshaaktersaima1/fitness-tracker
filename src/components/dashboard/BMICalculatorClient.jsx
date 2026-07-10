'use client';

import { useState } from 'react';
import {
    MdCalculate,
    MdMonitorWeight,
    MdHeight,
    MdHealthAndSafety,
} from 'react-icons/md';

export default function BMICalculatorClient({ userData }) {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(null);

    const getBmiStatus = (bmi) => {
        const value = Number(bmi);

        if (value < 18.5) return 'Underweight';
        if (value < 25) return 'Healthy';
        if (value < 30) return 'Overweight';
        return 'Obese';
    };

    const calculateBMI = (e) => {
        e.preventDefault();

        const heightInMeter = Number(height) / 100;
        const weightValue = Number(weight);

        if (!heightInMeter || !weightValue) return;

        const bmi = weightValue / (heightInMeter * heightInMeter);

        setResult({
            bmi: bmi.toFixed(1),
            status: getBmiStatus(bmi),
        });
    };

    return (
        <div className="space-y-7">
            {/* Header */}
            <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#6A9C89]">
                    BMI Calculator
                </p>

                <h1 className="text-3xl font-bold text-[#16423C] md:text-4xl">
                    Check Your Body Mass Index
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5F6F69]">
                    See your current BMI from your profile and calculate a new BMI using custom height and weight.
                </p>
            </div>

            {/* Current BMI */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="rounded-3xl bg-[#003F32] p-6 text-white shadow-sm md:col-span-1">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                        <MdHealthAndSafety />
                    </div>

                    <p className="text-sm text-white/70">Your Present BMI</p>

                    <h2 className="mt-3 text-5xl font-bold">
                        {userData?.bmi}
                    </h2>

                    <p className="mt-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                        {getBmiStatus(userData?.bmi)}
                    </p>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9EFEC] text-2xl text-[#003F32]">
                        <MdHeight />
                    </div>

                    <p className="text-sm text-[#5F6F69]">Current Height</p>

                    <h3 className="mt-2 text-3xl font-bold text-[#16423C]">
                        {userData?.height} cm
                    </h3>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9EFEC] text-2xl text-[#003F32]">
                        <MdMonitorWeight />
                    </div>

                    <p className="text-sm text-[#5F6F69]">Current Weight</p>

                    <h3 className="mt-2 text-3xl font-bold text-[#16423C]">
                        {userData?.weight} kg
                    </h3>
                </div>
            </div>

            {/* Calculator */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <div className="mb-6 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9EFEC] text-2xl text-[#003F32]">
                            <MdCalculate />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#16423C]">
                                Calculate New BMI
                            </h2>
                            <p className="mt-1 text-sm text-[#5F6F69]">
                                Enter height and weight to calculate BMI.
                            </p>
                        </div>
                    </div>

                    <form onSubmit={calculateBMI} className="space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-[#16423C]">
                                Height
                            </label>

                            <input
                                type="number"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                placeholder="Enter height in cm"
                                className="w-full rounded-2xl border border-[#DDE7E2] bg-[#F8FAF9] px-5 py-4 text-sm outline-none focus:border-[#6A9C89]"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-[#16423C]">
                                Weight
                            </label>

                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="Enter weight in kg"
                                className="w-full rounded-2xl border border-[#DDE7E2] bg-[#F8FAF9] px-5 py-4 text-sm outline-none focus:border-[#6A9C89]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#003F32] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#0b4f41]"
                        >
                            <MdCalculate className="text-xl" />
                            Calculate BMI
                        </button>
                    </form>
                </div>

                <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#16423C]">
                        Result
                    </h2>

                    {result ? (
                        <div className="mt-8 text-center">
                            <p className="text-sm text-[#5F6F69]">
                                Your calculated BMI is
                            </p>

                            <h3 className="mt-4 text-6xl font-bold text-[#003F32]">
                                {result.bmi}
                            </h3>

                            <p className="mx-auto mt-5 w-fit rounded-full bg-[#E9EFEC] px-5 py-2 text-sm font-semibold text-[#16423C]">
                                {result.status}
                            </p>
                        </div>
                    ) : (
                        <div className="mt-8 rounded-2xl bg-[#E9EFEC] p-6 text-center">
                            <p className="text-sm leading-6 text-[#5F6F69]">
                                Your BMI result will appear here after you enter height and weight.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}