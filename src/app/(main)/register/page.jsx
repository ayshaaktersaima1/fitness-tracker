'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from '@heroui/react';
import { FaCalculator, FaChartLine, FaDumbbell } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';

export default function RegisterPage() {
    const [fitnessGoal, setFitnessGoal] = useState('');
    const [activityLevel, setActivityLevel] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        if (!fitnessGoal) {
            alert('Please select your fitness goal');
            return;
        }

        if (!activityLevel) {
            alert('Please select your activity level');
            return;
        }

        const height = Number(form.height.value);
        const weight = Number(form.weight.value);
        const heightInMeter = height / 100;
        const bmi = weight / (heightInMeter * heightInMeter);

        const userData = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            age: Number(form.age.value),
            height,
            weight,
            fitnessGoal,
            activityLevel,
            bmi: bmi.toFixed(1),
        };

        console.log(userData);

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,

            age: userData.age,
            height: userData.height,
            weight: userData.weight,
            fitnessGoal: userData.fitnessGoal,
            activityLevel: userData.activityLevel,
            bmi: userData.bmi,

            callbackURL: '/dashboard',
        });

        if (error) {
            alert(error.message);
        } else {
            alert('Account created successfully!');
            console.log(data);
        }
    };

    return (
        <main className="min-h-screen bg-[#E9EFEC] px-5 py-10 md:px-8">
            <section className="mx-auto grid w-[95%] overflow-hidden rounded-3xl bg-white shadow-lg md:w-[90%] lg:grid-cols-2">

                {/* Left Side Image */}
                <div className="relative hidden min-h-[900px] bg-[url('/assets/register-side.png')] bg-cover bg-center bg-no-repeat lg:block">
                    <div className="absolute inset-0 bg-[#C4DAD2]/20" />

                    <div className="relative z-10 flex h-full flex-col p-12 xl:p-16">

                        <h2 className="mt-16 text-6xl font-bold leading-[1.08] tracking-tight text-[#16423C]">
                            Start Your
                            <br />
                            Fitness Journey
                            <br />
                            Today
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-[#263F3A]">
                            Create an account to track workouts, monitor your diet,
                            check your BMI, and achieve your goals.
                        </p>

                        <div className="mt-10 flex max-w-[280px] flex-col gap-4">
                            <div className="flex items-center gap-4 rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm">
                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6A9C89] text-white">
                                    <FaChartLine />
                                </span>

                                <span className="text-sm font-semibold text-[#16423C]">
                                    Track Progress
                                </span>
                            </div>

                            <div className="flex items-center gap-4 rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm">
                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6A9C89] text-white">
                                    <FaDumbbell />
                                </span>

                                <span className="text-sm font-semibold text-[#16423C]">
                                    Workout Plans
                                </span>
                            </div>

                            <div className="flex items-center gap-4 rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm">
                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6A9C89] text-white">
                                    <FaCalculator />
                                </span>

                                <span className="text-sm font-semibold text-[#16423C]">
                                    BMI Insights
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side White Form */}
                <div className="flex items-center justify-center px-5 py-10 md:px-10 lg:px-16">
                    <div className="w-full max-w-xl">



                        <div className="mb-9 text-center">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#6A9C89]">
                                FitTrack
                            </p>

                            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#16423C] md:text-5xl">
                                Create your account
                            </h1>

                            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#263F3A]">
                                Add your fitness details so FitTrack can understand your goal,
                                calculate BMI, and prepare your dashboard.
                            </p>
                        </div>

                        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
                            <TextField isRequired name="name" type="text">
                                <Label className="text-[#16423C]">Name</Label>
                                <Input placeholder="Enter your full name" />
                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(value) => {
                                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                        return 'Please enter a valid email address';
                                    }

                                    return null;
                                }}
                            >
                                <Label className="text-[#16423C]">Email</Label>
                                <Input placeholder="Enter your email address" />
                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                name="password"
                                type="password"
                                minLength={6}
                                validate={(value) => {
                                    if (value.length < 6) {
                                        return 'Password must be at least 6 characters long';
                                    }

                                    if (!/[A-Z]/.test(value)) {
                                        return 'Password must contain at least one capital letter';
                                    }

                                    if (!/[a-z]/.test(value)) {
                                        return 'Password must contain at least one lowercase letter';
                                    }

                                    return null;
                                }}
                            >
                                <Label className="text-[#16423C]">Password</Label>
                                <Input placeholder="Create a password" />
                                <Description className="text-[#6A9C89]">
                                    At least 6 characters long, one capital letter, and one lowercase letter.
                                </Description>
                                <FieldError />
                            </TextField>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <TextField isRequired name="age" type="number">
                                    <Label className="text-[#16423C]">Age</Label>
                                    <Input placeholder="22" />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="height" type="number">
                                    <Label className="text-[#16423C]">Height</Label>
                                    <Input placeholder="cm" />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="weight" type="number">
                                    <Label className="text-[#16423C]">Weight</Label>
                                    <Input placeholder="kg" />
                                    <FieldError />
                                </TextField>
                            </div>

                            <div>
                                <Label className="mb-3 block text-sm font-semibold text-[#16423C]">
                                    Fitness Goal
                                </Label>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    <button
                                        type="button"
                                        onClick={() => setFitnessGoal('lose-weight')}
                                        className={`flex min-h-24 w-full flex-col justify-between rounded-2xl border px-5 py-4 text-left transition ${fitnessGoal === 'lose-weight'
                                            ? 'border-[#16423C] bg-[#16423C] text-white'
                                            : 'border-[#C4DAD2] bg-[#E9EFEC] text-[#16423C] hover:bg-[#C4DAD2]'
                                            }`}
                                    >
                                        <div>
                                            <p className="text-sm font-semibold">Lose Weight</p>
                                            <p
                                                className={`mt-1 text-xs leading-5 ${fitnessGoal === 'lose-weight'
                                                    ? 'text-white/70'
                                                    : 'text-[#6A9C89]'
                                                    }`}
                                            >
                                                Burn fat and stay active
                                            </p>
                                        </div>

                                        <span
                                            className={`mt-4 flex h-5 w-5 items-center justify-center rounded-full border ${fitnessGoal === 'lose-weight'
                                                ? 'border-white bg-white'
                                                : 'border-[#6A9C89]'
                                                }`}
                                        >
                                            {fitnessGoal === 'lose-weight' && (
                                                <span className="h-2 w-2 rounded-full bg-[#16423C]" />
                                            )}
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setFitnessGoal('build-muscle')}
                                        className={`flex min-h-24 w-full flex-col justify-between rounded-2xl border px-5 py-4 text-left transition ${fitnessGoal === 'build-muscle'
                                            ? 'border-[#16423C] bg-[#16423C] text-white'
                                            : 'border-[#C4DAD2] bg-[#E9EFEC] text-[#16423C] hover:bg-[#C4DAD2]'
                                            }`}
                                    >
                                        <div>
                                            <p className="text-sm font-semibold">Build Muscle</p>
                                            <p
                                                className={`mt-1 text-xs leading-5 ${fitnessGoal === 'build-muscle'
                                                    ? 'text-white/70'
                                                    : 'text-[#6A9C89]'
                                                    }`}
                                            >
                                                Gain strength and muscle
                                            </p>
                                        </div>

                                        <span
                                            className={`mt-4 flex h-5 w-5 items-center justify-center rounded-full border ${fitnessGoal === 'build-muscle'
                                                ? 'border-white bg-white'
                                                : 'border-[#6A9C89]'
                                                }`}
                                        >
                                            {fitnessGoal === 'build-muscle' && (
                                                <span className="h-2 w-2 rounded-full bg-[#16423C]" />
                                            )}
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setFitnessGoal('stay-fit')}
                                        className={`flex min-h-24 w-full flex-col justify-between rounded-2xl border px-5 py-4 text-left transition ${fitnessGoal === 'stay-fit'
                                            ? 'border-[#16423C] bg-[#16423C] text-white'
                                            : 'border-[#C4DAD2] bg-[#E9EFEC] text-[#16423C] hover:bg-[#C4DAD2]'
                                            }`}
                                    >
                                        <div>
                                            <p className="text-sm font-semibold">Stay Fit</p>
                                            <p
                                                className={`mt-1 text-xs leading-5 ${fitnessGoal === 'stay-fit'
                                                    ? 'text-white/70'
                                                    : 'text-[#6A9C89]'
                                                    }`}
                                            >
                                                Maintain healthy habits
                                            </p>
                                        </div>

                                        <span
                                            className={`mt-4 flex h-5 w-5 items-center justify-center rounded-full border ${fitnessGoal === 'stay-fit'
                                                ? 'border-white bg-white'
                                                : 'border-[#6A9C89]'
                                                }`}
                                        >
                                            {fitnessGoal === 'stay-fit' && (
                                                <span className="h-2 w-2 rounded-full bg-[#16423C]" />
                                            )}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <Label className="mb-3 block text-sm font-semibold text-[#16423C]">
                                    Activity Level
                                </Label>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    <button
                                        type="button"
                                        onClick={() => setActivityLevel('beginner')}
                                        className={`flex min-h-24 w-full flex-col justify-between rounded-2xl border px-5 py-4 text-left transition ${activityLevel === 'beginner'
                                            ? 'border-[#16423C] bg-[#16423C] text-white'
                                            : 'border-[#C4DAD2] bg-[#E9EFEC] text-[#16423C] hover:bg-[#C4DAD2]'
                                            }`}
                                    >
                                        <div>
                                            <p className="text-sm font-semibold">Beginner</p>
                                            <p
                                                className={`mt-1 text-xs leading-5 ${activityLevel === 'beginner'
                                                    ? 'text-white/70'
                                                    : 'text-[#6A9C89]'
                                                    }`}
                                            >
                                                New to fitness
                                            </p>
                                        </div>

                                        <span
                                            className={`mt-4 flex h-5 w-5 items-center justify-center rounded-full border ${activityLevel === 'beginner'
                                                ? 'border-white bg-white'
                                                : 'border-[#6A9C89]'
                                                }`}
                                        >
                                            {activityLevel === 'beginner' && (
                                                <span className="h-2 w-2 rounded-full bg-[#16423C]" />
                                            )}
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setActivityLevel('moderate')}
                                        className={`flex min-h-24 w-full flex-col justify-between rounded-2xl border px-5 py-4 text-left transition ${activityLevel === 'moderate'
                                            ? 'border-[#16423C] bg-[#16423C] text-white'
                                            : 'border-[#C4DAD2] bg-[#E9EFEC] text-[#16423C] hover:bg-[#C4DAD2]'
                                            }`}
                                    >
                                        <div>
                                            <p className="text-sm font-semibold">Moderate</p>
                                            <p
                                                className={`mt-1 text-xs leading-5 ${activityLevel === 'moderate'
                                                    ? 'text-white/70'
                                                    : 'text-[#6A9C89]'
                                                    }`}
                                            >
                                                Few days weekly
                                            </p>
                                        </div>

                                        <span
                                            className={`mt-4 flex h-5 w-5 items-center justify-center rounded-full border ${activityLevel === 'moderate'
                                                ? 'border-white bg-white'
                                                : 'border-[#6A9C89]'
                                                }`}
                                        >
                                            {activityLevel === 'moderate' && (
                                                <span className="h-2 w-2 rounded-full bg-[#16423C]" />
                                            )}
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setActivityLevel('active')}
                                        className={`flex min-h-24 w-full flex-col justify-between rounded-2xl border px-5 py-4 text-left transition ${activityLevel === 'active'
                                            ? 'border-[#16423C] bg-[#16423C] text-white'
                                            : 'border-[#C4DAD2] bg-[#E9EFEC] text-[#16423C] hover:bg-[#C4DAD2]'
                                            }`}
                                    >
                                        <div>
                                            <p className="text-sm font-semibold">Active</p>
                                            <p
                                                className={`mt-1 text-xs leading-5 ${activityLevel === 'active'
                                                    ? 'text-white/70'
                                                    : 'text-[#6A9C89]'
                                                    }`}
                                            >
                                                Regular workout
                                            </p>
                                        </div>

                                        <span
                                            className={`mt-4 flex h-5 w-5 items-center justify-center rounded-full border ${activityLevel === 'active'
                                                ? 'border-white bg-white'
                                                : 'border-[#6A9C89]'
                                                }`}
                                        >
                                            {activityLevel === 'active' && (
                                                <span className="h-2 w-2 rounded-full bg-[#16423C]" />
                                            )}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="mt-3 h-14 w-full rounded-2xl bg-[#16423C] text-sm font-semibold text-white shadow-md transition hover:bg-[#0f302b]"
                            >
                                Create Account
                            </Button>
                        </Form>

                        <p className="mt-7 text-center text-sm text-[#263F3A]">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="font-semibold text-[#16423C] underline-offset-4 hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}