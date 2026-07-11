'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from '@heroui/react';
import { FaCalculator, FaChartLine, FaDumbbell } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

const features = [
    { icon: <FaChartLine />, title: 'Track Progress' },
    { icon: <FaDumbbell />, title: 'Workout Plans' },
    { icon: <FaCalculator />, title: 'BMI Insights' },
];

const inputStyle =
    'rounded-xl border border-[#6A9C89]/60 px-4 py-3 transition focus:border-[#16423C]';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = Object.fromEntries(new FormData(e.currentTarget));

        setIsLoading(true);

        const { error } = await authClient.signIn.email({
            email: form.email,
            password: form.password,
        });

        setIsLoading(false);

        if (error) {
            toast.error(error.message);
            return;
        }

        router.push('/dashboard/user');
        router.refresh();
    };

    return (
        <main className="min-h-screen bg-[#E9EFEC] px-5 py-10 md:px-0">
            <section className="mx-auto grid w-full overflow-hidden rounded-3xl bg-white shadow-lg md:w-[85%] lg:grid-cols-2">
                <div className="relative hidden bg-[url('/assets/register-side.png')] bg-cover bg-center bg-no-repeat lg:block">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E9EFEC]/90 via-[#C4DAD2]/60 to-[#003F32]/40" />

                    <div className="relative z-10 flex h-full flex-col p-10 lg:p-14">
                        <h2 className="mt-10 text-3xl font-semibold leading-tight tracking-tight text-[#16423C] md:text-4xl lg:text-5xl">
                            Welcome
                            <br />
                            Back To
                            <br />
                            FitTrack
                        </h2>

                        <p className="mt-6 text-lg leading-relaxed text-[#263F3A]">
                            Continue tracking your workouts, diet plans, BMI, and fitness progress from your personal dashboard.
                        </p>

                        <div className="mt-10 flex max-w-xs flex-col gap-4">
                            {features.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="flex items-center gap-4 rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm"
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6A9C89] text-white">
                                        {feature.icon}
                                    </span>

                                    <span className="text-sm font-semibold text-[#16423C]">
                                        {feature.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center px-5 py-10 md:px-10 lg:px-14">
                    <div className="w-full max-w-md">
                        <div className="mb-9 text-center">
                            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[#16423C] md:text-4xl lg:text-5xl">
                                Login to your account
                            </h1>

                            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#263F3A]">
                                Enter your email and password to continue your fitness journey.
                            </p>
                        </div>

                        <Form onSubmit={onSubmit} className="flex flex-col gap-4">
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
                                <Input
                                    placeholder="Enter your email address"
                                    className={inputStyle}
                                />
                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                name="password"
                                type="password"
                                minLength={6}
                            >
                                <Label className="text-[#16423C]">Password</Label>
                                <Input
                                    placeholder="Enter your password"
                                    className={inputStyle}
                                />
                                <FieldError />
                            </TextField>

                            <Button
                                type="submit"
                                isDisabled={isLoading}
                                className="mt-3 h-14 w-full rounded-2xl bg-[#16423C] text-sm font-semibold text-white shadow-md transition hover:bg-[#0f302b]"
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </Button>
                        </Form>

                        <p className="mt-7 text-center text-sm text-[#263F3A]">
                            Don&apos;t have an account?{' '}
                            <Link
                                href="/register"
                                className="font-semibold text-[#16423C] underline-offset-4 hover:underline"
                            >
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}