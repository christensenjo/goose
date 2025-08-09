import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Landing() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Goose — Custom Embroidery" />

            <div className="min-h-screen bg-[#F5F4ED] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC] flex flex-col">
                <header className="w-full p-6 lg:p-4 bg-[#F8F0DD]">
                    <nav className="mx-auto flex max-w-6xl items-center justify-between -mt-6">
                        <div className="flex items-center justify-center gap-3">
                            <img src="/goose_wordmark.svg" alt="Goose Wordmark" className="w-16 mt-8" />
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-4 py-1.5 opacity-50 cursor-not-allowed hover:border-[#19140035] dark:border-[#3E3E3A] dark:hover:border-[#3E3E3A]"
                                    tabIndex={-1}
                                    aria-disabled="true"
                                    onClick={e => e.preventDefault()}
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block px-4 py-1.5 opacity-50 cursor-not-allowed hover:underline"
                                        tabIndex={-1}
                                        aria-disabled="true"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-[#19140035] px-4 py-1.5 opacity-50 cursor-not-allowed hover:border-[#19140035] dark:border-[#3E3E3A] dark:hover:border-[#3E3E3A]"
                                        tabIndex={-1}
                                        aria-disabled="true"
                                        onClick={e => e.preventDefault()}
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                <main className="flex-1">
                    <section className="relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F0DD] to-transparent dark:from-[#120b00]" aria-hidden />
                        <div className="relative">
                            <div className="mx-auto max-w-6xl px-6 py-16 text-center lg:px-8 lg:py-16">
                                <div className="mx-auto mb-6 flex w-48 h-48 sm:h-64 sm:w-64 items-center justify-center rounded-full dark:bg-white/5">
                                    <img src="/logo_transparent.svg" className="h-full w-full" alt="" />
                                </div>
                                <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl font-script">
                                    Coming Soon...
                                </h1>
                                <p className="mx-auto mt-4 max-w-xl sm:max-w-3xl text-[#1B1B18] dark:text-[#A1A09A]">
                                    Premium handsewn and embroidered goods produced in small batches with fast turnarounds.
                                </p>
                                <div className="mt-8 flex justify-center gap-4">
                                    {/* <Link
                                        href={route('register')}
                                        className="inline-flex items-center rounded-sm border border-black bg-[#1b1b18] px-5 py-2 text-white hover:border-black hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:border-white dark:hover:bg-white"
                                    >
                                        Start a project
                                    </Link> */}
                                    <a
                                        href="https://www.instagram.com/gooseoriginals"
                                        className="inline-flex items-center rounded-sm border border-[#19140035] px-5 py-2 hover:border-[#1915014a] dark:border-[#3E3E3A] dark:hover:border-[#62605b] hover:bg-[#FF4B16] transition-all duration-300"
                                    >
                                        Follow us on Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="features" className="pb-30">
                        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
                            <div className="rounded-lg bg-white p-6 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                                <h3 className="mb-1 font-medium">🚩 Home & Event Decor</h3>
                                <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                    Add a festive touch to your next event with our handmade bunting—perfect for parties, celebrations, or brightening up your home.
                                </p>
                            </div>
                            <div className="rounded-lg bg-white p-6 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                                <h3 className="mb-1 font-medium">🧵 Apparel with Custom Embroidery</h3>
                                <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                    Stand out with personalized shirts, jackets, and patches—each piece stitched to reflect your unique style.
                                </p>
                            </div>
                            <div className="rounded-lg bg-white p-6 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                                <h3 className="mb-1 font-medium">🪡 Handmade in Your Backyard</h3>
                                <p className="text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                    Every item is lovingly designed and crafted by Zoe and Emily— just for you!
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="border-t border-[#19140012] py-8 text-center text-sm dark:border-white/10">
                    <div className="mx-auto max-w-6xl px-6 lg:px-8">
                        <p>© {new Date().getFullYear()} Goose — Custom Sewing & Embroidery</p>
                    </div>
                </footer>
            </div>
        </>
    );
}


