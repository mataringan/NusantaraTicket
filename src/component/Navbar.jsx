"use client";

/* 
@DOCS :
1. core
    -> package from react / next
2. third party
    -> package from third party
3. global state management {ex.redux}
    -> redux global state management
4. components
    -> reusable component
5. data
    -> handle data model or application static data
6. apis
    -> api functions
7. utils
    -> utility functions
*/

// core
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// third party
import clsx from "clsx";
import { signOut, useSession } from "next-auth/react";

// global state management
// ---
// components
// ---
// data
// ---
// apis
// ---
// utils
// ---

const links = [
    { name: "Beranda", href: "/" },
    { name: "Lainnya", href: "" },
    { name: "Kontak", href: "/kontak" },
    { name: "Petunjuk", href: "/petunjuk" },
];

export default function Navbar() {
    const session = useSession();
    const pathname = usePathname();
    const [isLainnyaActive, setIsLainnyaActive] = useState(false);

    const token = session?.data?.user?.token;

    const handleLainnya = () => {
        setIsLainnyaActive((prevState) => !prevState);
    };

    return (
        <section className='fixed top-0 z-10 flex h-[60px] w-full items-center justify-center bg-[#0a4773] py-3 text-white'>
            {/* mobile navbar */}
            <h1 className='text-[18px] font-bold md:hidden'>Logo | Navbar Mobile</h1>
            {/* mobile navbar */}

            {/* md and higher navbar */}
            <div className='hidden md:flex md:w-full md:max-w-screen-md md:items-center md:justify-between md:px-[12px] lg:max-w-screen-lg'>
                <p className='md:text-[28px] md:font-bold'>Logo</p>
                <div className='md:flex md:gap-[24px]  '>
                    {links.map((link) => {
                        if (link.name === "Lainnya") {
                            return (
                                <div
                                    onClick={handleLainnya}
                                    key={link.name}
                                    className={clsx(
                                        "md:relative md:cursor-pointer md:font-medium",
                                        { " md:text-[#f1c40f]": pathname === "/lainnya/harga-tiket" },
                                        { " md:text-[#f1c40f]": pathname === "/lainnya/faq" },
                                    )}>
                                    <p>{link.name}</p>
                                    {isLainnyaActive && (
                                        <div className='md:absolute md:top-[32px] md:flex md:w-[120px]  md:flex-col md:border md:bg-[#0a4773]  md:text-white '>
                                            <Link
                                                href={"/lainnya/harga-tiket"}
                                                className={clsx(
                                                    "md:border-b  md:p-[8px]  md:hover:bg-[#f1c40f] md:hover:text-white",
                                                    {
                                                        " md:bg-[#f1c40f] md:text-white": pathname === "/lainnya/harga-tiket",
                                                    },
                                                )}>
                                                <p>Harga Tiket</p>
                                            </Link>
                                            <Link
                                                href={"/lainnya/faq"}
                                                className={clsx("  md:p-[8px]  md:hover:bg-[#f1c40f] md:hover:text-white", {
                                                    " md:bg-[#f1c40f] md:text-white": pathname === "/lainnya/faq",
                                                })}>
                                                <p>FAQ</p>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <div key={link.name}>
                                <Link
                                    onClick={() => setIsLainnyaActive(false)}
                                    href={link.href}
                                    key={link.name}
                                    className={clsx("md:font-medium", { " md:text-[#f1c40f]": pathname === link.href })}>
                                    <p>{link.name}</p>
                                </Link>
                            </div>
                        );
                    })}
                    {token ? <button onClick={() => signOut()}>Logout</button> : <Link href={"/login"}>Login</Link>}
                </div>
            </div>
            {/* md and higher navbar */}
        </section>
    );
}
