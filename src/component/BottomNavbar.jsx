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
import {
    MdHome,
    MdLanguage,
    MdOutlinePermPhoneMsg,
    MdInfoOutline,
    MdReplay,
    MdOutlineQuestionMark,
    MdDiscount,
} from "react-icons/md";
import clsx from "clsx";

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
    { name: "Petunjuk", href: "/petunjuk", icon: MdLanguage },
    {
        name: "Batal",
        href: "/batal",
        icon: MdReplay,
    },
    { name: "Beranda", href: "/", icon: MdHome },
    { name: "Kontak", href: "/kontak", icon: MdOutlinePermPhoneMsg },
    { name: "Lainnya", href: "", icon: MdInfoOutline },
];

export default function BottomNavbar() {
    const pathname = usePathname();
    const [isLainnyaActive, setIsLainnyaActive] = useState(false);

    const handleLainnya = () => {
        setIsLainnyaActive((prevState) => !prevState);
    };

    return (
        <section className='fixed bottom-0 flex w-full items-center justify-between bg-white px-[24px] py-[8px] shadow-low md:hidden'>
            {isLainnyaActive && (
                <div className='absolute bottom-[94px] right-[24px] flex flex-col items-end gap-[24px] '>
                    <Link href={"/lainnya/harga-tiket"} className='flex items-center gap-[24px]'>
                        <p
                            className={clsx("bg-blue-500 px-3 py-1 text-white", {
                                " bg-red-600": pathname === "/lainnya/harga-tiket",
                            })}>
                            Harga Tiket
                        </p>
                        <MdDiscount
                            className={clsx("h-[34px] w-[34px] rounded-full bg-blue-500 p-2 text-white", {
                                " bg-red-600": pathname === "/lainnya/harga-tiket",
                            })}
                        />
                    </Link>
                    <Link href={"/lainnya/faq"} className='flex items-center gap-[24px]'>
                        <p
                            className={clsx("bg-blue-500 px-3 py-1 text-white", {
                                " bg-red-600": pathname === "/lainnya/faq",
                            })}>
                            FAQ
                        </p>
                        <MdOutlineQuestionMark
                            className={clsx("h-[34px] w-[34px] rounded-full bg-blue-500 p-2 text-white", {
                                " bg-red-600": pathname === "/lainnya/faq",
                            })}
                        />
                    </Link>
                </div>
            )}
            {links.map((link) => {
                const LinkIcon = link.icon;

                if (link.name === "Lainnya") {
                    return (
                        <div
                            key={link.name}
                            onClick={handleLainnya}
                            className={clsx(
                                "flex flex-col items-center text-blue-500 hover:text-red-600",
                                {
                                    " text-red-600": pathname === "/lainnya/harga-tiket",
                                },
                                {
                                    " text-red-600": pathname === "/lainnya/faq",
                                },
                                {
                                    " text-red-600": isLainnyaActive,
                                },
                            )}>
                            <LinkIcon className='h-[30px] w-[30px] ' />
                            <p className=' text-[12px] md:block '>{link.name}</p>
                        </div>
                    );
                } else {
                    if (link.name === "Beranda") {
                        return (
                            <div key={link.name} className='relative px-[18px] '>
                                <Link
                                    onClick={() => setIsLainnyaActive(false)}
                                    href={link.href}
                                    className={clsx(
                                        "absolute left-[50%]  top-[-60px]  flex h-[64px] w-[64px] translate-x-[-50%] flex-col items-center justify-end  rounded-full bg-blue-500 p-[12px] hover:bg-red-600",
                                        {
                                            " bg-red-600": pathname === link.href,
                                        },
                                    )}>
                                    <LinkIcon className='h-[30px] w-[30px] text-white' />
                                    <p className=' text-[12px] text-white md:block'>{link.name}</p>
                                </Link>
                            </div>
                        );
                    } else {
                        return (
                            <Link
                                onClick={() => setIsLainnyaActive(false)}
                                key={link.name}
                                href={link.href}
                                className={clsx("flex flex-col items-center text-blue-500 hover:text-red-600", {
                                    " text-red-600": pathname === link.href,
                                })}>
                                <LinkIcon className='h-[30px] w-[30px]' />
                                <p className='text-[12px] md:block '>{link.name}</p>
                            </Link>
                        );
                    }
                }
            })}
        </section>
    );
}
