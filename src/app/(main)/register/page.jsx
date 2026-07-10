'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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

const features = [
    { icon: FaChartLine, title: 'Track Progress' },
    { icon: FaDumbbell, title: 'Workout Plans' },
    { icon: FaCalculator, title: 'BMI Insights' },
];

const fitnessGoals = [
    { value: 'lose-weight', title: 'Lose Weight', text: 'Burn fat and stay active' },
    { value: 'build-muscle', title: 'Build Muscle', text: 'Gain strength and muscle' },
    { value: 'stay-fit', title: 'Stay Fit', text: 'Maintain healthy habits' },
];

const activityLevels = [
    { value: 'beginner', title: 'Beginner', text: 'New to fitness' },
    { value: 'moderate', title: 'Moderate', text: 'Few days weekly' },
    { value: 'active', title: 'Active', text: 'Regular workout' },
];

const OptionCard = ({ item, selected, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex min-h-24 w-full flex-col justify-between rounded-2xl border px-5 py-4 text-left transition ${selected
                ? 'border-[#16423C] bg-[#16423C] text-white'
                : 'border-[#C4DAD2] bg-[#E9EFEC] text-[#16423C] hover:bg-[#C4DAD2]'
                }`}
        >
            <div>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className={`mt-1 text-xs leading-5 ${selected ? 'text-white/70' : 'text-[#6A9C89]'}`}>
                    {item.text}
                </p>
            </div>

            <span
                className={`mt-4 flex h-5 w-5 items-center justify-center rounded-full border ${selected ? 'border-white bg-white' : 'border-[#6A9C89]'
                    }`}
            >
                {selected && <span className="h-2 w-2 rounded-full bg-[#16423C]" />}
            </span>
        </button>
    );
};

export default function RegisterPage() {
    const router = useRouter();
    const [fitnessGoal, setFitnessGoal] = useState('');
    const [activityLevel, setActivityLevel] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!fitnessGoal) return alert('Please select your fitness goal');
        if (!activityLevel) return alert('Please select your activity level');

        const form = Object.fromEntries(new FormData(e.currentTarget));

        const height = Number(form.height);
        const weight = Number(form.weight);
        const bmi = weight / ((height / 100) * (height / 100));

        const { error } = await authClient.signUp.email({
            name: form.name,
            email: form.email,
            password: form.password,
            age: Number(form.age),
            height,
            weight,
            fitnessGoal,
            activityLevel,
            bmi: bmi.toFixed(1),
            callbackURL: '/dashboard/user',
        });

        if (error) {
            alert(error.message);
            return;
        }

        alert('Account created successfully!');
        router.push('/dashboard/user');
    };

    return (
        <main className="min-h-screen bg-[#E9EFEC] px-5 py-10 md:px-8">
            <section className="mx-auto grid w-[95%] overflow-hidden rounded-3xl bg-white shadow-lg md:w-[90%] lg:grid-cols-2">
                <div className="relative hidden min-h-[900px] bg-[url('/assets/register-side.png')] bg-cover bg-center bg-no-repeat lg:block">
                    <div className="absolute inset-0 bg-[#C4DAD2]/20" />

                    <div className="relative z-10 flex h-full flex-col p-12 xl:p-16">
                        <h2 className="mt-16 text-3xl font-semibold leading-[1.25] tracking-tight text-[#16423C] md:text-4xl md:leading-[1.22] lg:text-5xl lg:leading-[1.25]">
                            Start Your
                            <br />
                            Fitness Journey
                            <br />
                            Today
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-[#263F3A]">
                            Create an account to track workouts, monitor your diet, check your BMI, and achieve your goals.
                        </p>

                        <div className="mt-10 flex max-w-[280px] flex-col gap-4">
                            {features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={feature.title}
                                        className="flex items-center gap-4 rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm"
                                    >
                                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6A9C89] text-white">
                                            <Icon />
                                        </span>

                                        <span className="text-sm font-semibold text-[#16423C]">
                                            {feature.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center px-5 py-10 md:px-10 lg:px-16">
                    <div className="w-full max-w-xl">
                        <div className="mb-9 text-center">


                            <h1 className="text-3xl font-semibold leading-[1.25] tracking-tight text-[#16423C] md:text-4xl md:leading-[1.22] lg:text-5xl lg:leading-[1.25]">
                                Create your account
                            </h1>

                            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#263F3A]">
                                Add your fitness details so FitTrack can understand your goal, calculate BMI, and prepare your dashboard.
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
                                    if (value.length < 6) return 'Password must be at least 6 characters long';
                                    if (!/[A-Z]/.test(value)) return 'Password must contain at least one capital letter';
                                    if (!/[a-z]/.test(value)) return 'Password must contain at least one lowercase letter';

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
                                    {fitnessGoals.map((goal) => (
                                        <OptionCard
                                            key={goal.value}
                                            item={goal}
                                            selected={fitnessGoal === goal.value}
                                            onClick={() => setFitnessGoal(goal.value)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <Label className="mb-3 block text-sm font-semibold text-[#16423C]">
                                    Activity Level
                                </Label>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    {activityLevels.map((level) => (
                                        <OptionCard
                                            key={level.value}
                                            item={level}
                                            selected={activityLevel === level.value}
                                            onClick={() => setActivityLevel(level.value)}
                                        />
                                    ))}
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