import Link from 'next/link';
import { MdHome, MdArrowBack, MdFitnessCenter } from 'react-icons/md';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#E9EFEC] px-5 py-12">
            <section className="mx-auto flex min-h-[70vh] w-full items-center justify-center md:w-[85%]">
                <div className="w-full max-w-2xl rounded-3xl border border-[#C4DAD2] bg-white px-6 py-12 text-center shadow-sm md:px-10">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E9EFEC] text-4xl text-[#16423C]">
                        <MdFitnessCenter />
                    </div>

                    <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#6A9C89]">
                        Page Not Found
                    </p>

                    <h1 className="mt-4 text-5xl font-bold text-[#16423C] md:text-7xl">
                        404
                    </h1>

                    <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#16423C] md:text-4xl">
                        This page is not available
                    </h2>

                    <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#263F3A] md:text-base">
                        The page you are looking for may have been moved, deleted, or the URL may be incorrect.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 md:flex-row md:justify-center">
                        <Link
                            href="/"
                            className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#16423C] px-6 text-sm font-semibold text-white transition hover:bg-[#0f302b]"
                        >
                            <MdHome className="text-lg" />
                            Back to Home
                        </Link>

                        <Link
                            href="/dashboard/user"
                            className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#16423C] bg-white px-6 text-sm font-semibold text-[#16423C] transition hover:bg-[#E9EFEC]"
                        >
                            <MdArrowBack className="text-lg" />
                            Go to Dashboard
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}