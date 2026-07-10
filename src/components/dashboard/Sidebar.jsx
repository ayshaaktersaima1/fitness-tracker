'use client';

import { useEffect, useState } from 'react';
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


export default function Sidebar() {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    const handleLogout = async () => {
        await authClient.signOut();

        router.push('/login');
        router.refresh();
    };

    const navItems = [
        {
            icon: House,
            label: 'Overview',
            href: '/dashboard/user',
        },
        {
            icon: LuDumbbell,
            label: 'Workout Plans',
            href: '/dashboard/user/workout-plans',
        },
        {
            icon: ChartColumn,
            label: 'Progress Charts',
            href: '/dashboard/user/progress-charts',
        },
        {
            icon: IoLeafSharp,
            label: 'Diet Plans',
            href: '/dashboard/user/diet-plans',
        },
        {
            icon: Calculator,
            label: 'BMI Calculator',
            href: '/dashboard/user/bmi-calculator',
        },
        {
            icon: Person,
            label: 'User Profile',
            href: '/dashboard/user/user-profile',
        },
    ];

    return (
        <>
            {/* Medium and large device sidebar */}
            <aside className="hidden h-screen w-[30%] min-w-60 max-w-70 shrink-0 flex-col bg-[#003F32] px-5 py-7 text-white md:flex">
                <div>
                    <Link href="/" className="mb-10 block">
                        <Image
                            src="/assets/whitelogo.png"
                            alt="FitTrack Logo"
                            width={180}
                            height={70}
                            className="h-[58px] w-auto object-contain"
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

                <button onClick={handleLogout}
                    type="button"
                    className="mt-auto flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                    <MdLogout className="size-5" />
                    Logout
                </button>
            </aside>

            {/* Small device drawer */}
            {isMobile && (
                <div className="md:hidden">
                    <Drawer>
                        <Button className="m-4 bg-[#003F32] text-white">
                            <Bars />
                            Menu
                        </Button>

                        <Drawer.Backdrop>
                            <Drawer.Content placement="left">
                                <Drawer.Dialog className="min-h-screen bg-[#003F32] text-white">
                                    <Drawer.CloseTrigger />

                                    <Drawer.Header>
                                        <Drawer.Heading>
                                            <Link href="/" className="block w-fit">
                                                <Image
                                                    src="/assets/whitelogo.png"
                                                    alt="FitTrack Logo"
                                                    width={170}
                                                    height={65}
                                                    className="h-[55px] w-auto object-contain"
                                                />
                                            </Link>
                                        </Drawer.Heading>
                                    </Drawer.Header>

                                    <Drawer.Body className="flex min-h-[85vh] flex-col">
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
                </div>
            )}
        </>
    );
}