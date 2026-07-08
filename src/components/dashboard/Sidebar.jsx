'use client';

import Link from 'next/link';
import {
    House,
    ChartColumn,
    Calculator,
    Person,
    Bars,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { IoLeafSharp } from "react-icons/io5";
import { LuDumbbell } from "react-icons/lu";

export default function Sidebar() {
    const navItems = [
        {
            icon: House,
            label: 'Overview',
            href: '/dashboard',
        },
        {
            icon: LuDumbbell,
            label: 'Workout Plans',
            href: '/dashboard/workout-plans',
        },
        {
            icon: ChartColumn,
            label: 'Progress Charts',
            href: '/dashboard/progress-charts',
        },
        {
            icon: IoLeafSharp,
            label: 'Diet Plans',
            href: '/dashboard/diet-plans',
        },
        {
            icon: Calculator,
            label: 'BMI Calculator',
            href: '/dashboard/bmi-calculator',
        },
        {
            icon: Person,
            label: 'User Profile',
            href: '/dashboard/user-profile',
        },
    ];

    return (
        <>
            {/* Medium and large device sidebar */}
            <aside className="hidden min-h-screen w-[260px] border-r border-[#C4DAD2] bg-white px-5 py-6 shadow-sm md:block">
                <h2 className="mb-8 text-2xl font-bold text-[#16423C]">
                    FitTrack
                </h2>

                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#16423C] transition hover:bg-[#C4DAD2]"
                            >
                                <Icon className="size-5" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Small device drawer */}
            <div className="md:hidden">
                <Drawer>
                    <Button className="m-4 bg-[#16423C] text-white">
                        <Bars />
                        Menu
                    </Button>

                    <Drawer.Backdrop>
                        <Drawer.Content placement="left">
                            <Drawer.Dialog>
                                <Drawer.CloseTrigger />

                                <Drawer.Header>
                                    <Drawer.Heading className="text-xl font-bold text-[#16423C]">
                                        Navigation
                                    </Drawer.Heading>
                                </Drawer.Header>

                                <Drawer.Body>
                                    <nav className="flex flex-col gap-2">
                                        {navItems.map((item) => {
                                            const Icon = item.icon;

                                            return (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#16423C] transition hover:bg-[#C4DAD2]"
                                                >
                                                    <Icon className="size-5" />
                                                    {item.label}
                                                </Link>
                                            );
                                        })}
                                    </nav>
                                </Drawer.Body>
                            </Drawer.Dialog>
                        </Drawer.Content>
                    </Drawer.Backdrop>
                </Drawer>
            </div>
        </>
    );
}