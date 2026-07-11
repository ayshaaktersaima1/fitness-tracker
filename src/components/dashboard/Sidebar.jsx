'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    House,
    ChartColumn,
    Calculator,
    Person,
    Bars,
} from '@gravity-ui/icons';
import { Button, Drawer } from '@heroui/react';
import { IoLeafSharp } from 'react-icons/io5';
import { LuDumbbell } from 'react-icons/lu';
import { MdLogout } from 'react-icons/md';
import { authClient } from '@/lib/auth-client';

const navItems = [
    { icon: House, label: 'Overview', href: '/dashboard/user' },
    { icon: LuDumbbell, label: 'Workout Plans', href: '/dashboard/user/workout-plans' },
    { icon: ChartColumn, label: 'Progress Charts', href: '/dashboard/user/progress-charts' },
    { icon: IoLeafSharp, label: 'Diet Plans', href: '/dashboard/user/diet-plans' },
    { icon: Calculator, label: 'BMI Calculator', href: '/dashboard/user/bmi-calculator' },
    { icon: Person, label: 'User Profile', href: '/dashboard/user/user-profile' },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleLogout = async () => {
        await authClient.signOut();

        setIsDrawerOpen(false);
        router.push('/login');
        router.refresh();
    };

    return (
        <>
            <aside className="hidden h-screen shrink-0 flex-col bg-[#003F32] px-5 py-7 text-white md:flex md:w-auto lg:w-[20%]">
                <div>
                    <Link href="/" className="mb-10 block">
                        <Image
                            src="/assets/whitelogo.png"
                            alt="FitTrack Logo"
                            width={180}
                            height={70}
                            className="h-14.5 w-auto object-contain"
                        />
                    </Link>

                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
                                        ? 'bg-[#6A9C89] text-white'
                                        : 'text-white/90 hover:bg-white/10'
                                        }`}
                                >
                                    <Icon className="size-5" />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <button
                    onClick={handleLogout}
                    type="button"
                    className="mt-auto flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                    <MdLogout className="size-5" />
                    Logout
                </button>
            </aside>

            <div className="flex items-center justify-between border-b border-[#C4DAD2] bg-[#E9EFEC] px-4 py-4 shadow-sm md:hidden">
                <Drawer isOpen={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                    <Button
                        onClick={() => setIsDrawerOpen(true)}
                        className="bg-[#003F32] text-white"
                    >
                        <Bars />
                        Menu
                    </Button>

                    <Drawer.Backdrop>
                        <Drawer.Content placement="left">
                            <Drawer.Dialog className="flex min-h-screen flex-col bg-[#003F32] text-white">
                                <Drawer.CloseTrigger />

                                <Drawer.Header>
                                    <Drawer.Heading>
                                        <Link
                                            href="/"
                                            onClick={() => setIsDrawerOpen(false)}
                                            className="block w-fit"
                                        >
                                            <Image
                                                src="/assets/whitelogo.png"
                                                alt="FitTrack Logo"
                                                width={170}
                                                height={65}
                                                className="h-14 w-auto object-contain"
                                            />
                                        </Link>
                                    </Drawer.Heading>
                                </Drawer.Header>

                                <Drawer.Body className="flex flex-1 flex-col">
                                    <nav className="flex flex-col gap-4">
                                        {navItems.map((item) => {
                                            const Icon = item.icon;
                                            const isActive = pathname === item.href;

                                            return (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    onClick={() => setIsDrawerOpen(false)}
                                                    className={`flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
                                                        ? 'bg-[#6A9C89] text-white'
                                                        : 'text-white/90 hover:bg-white/10'
                                                        }`}
                                                >
                                                    <Icon className="size-5" />
                                                    {item.label}
                                                </Link>
                                            );
                                        })}
                                    </nav>

                                    <button
                                        onClick={handleLogout}
                                        type="button"
                                        className="mt-auto flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                                    >
                                        <MdLogout className="size-5" />
                                        Logout
                                    </button>
                                </Drawer.Body>
                            </Drawer.Dialog>
                        </Drawer.Content>
                    </Drawer.Backdrop>
                </Drawer>

                <Link href="/">
                    <Image
                        src="/assets/fitTrackLogo.png"
                        alt="FitTrack Logo"
                        width={160}
                        height={60}
                        className="h-11 w-auto object-contain"
                    />
                </Link>
            </div>
        </>
    );
}