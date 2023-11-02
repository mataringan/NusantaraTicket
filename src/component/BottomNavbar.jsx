"use client";

import { useState } from "react";
import {
    MdHome,
    MdLanguage,
    MdOutlinePermPhoneMsg,
    MdInfoOutline,
    MdReplay,
    MdOutlineQuestionMark,
    MdDiscount,
} from "react-icons/md";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
    { name: "Tutorial", href: "/tutorial", icon: MdLanguage },
    {
        name: "Cancel",
        href: "/cancel",
        icon: MdReplay,
    },
    { name: "Home", href: "/", icon: MdHome },
    { name: "Kontak", href: "/contact", icon: MdOutlinePermPhoneMsg },
    { name: "Lainnya", href: "", icon: MdInfoOutline },
];

export default function BottomNavbar() {
    const pathname = usePathname();
    const [isLainnyaActive, setIsLainnyaActive] = useState(false);

    const handleLainnya = () => {
        setIsLainnyaActive((prevState) => !prevState);
    };

    return (
        <section className="md:hidden py-[8px] fixed bottom-0 flex items-center w-full bg-white shadow-low justify-between px-[24px]">
            {isLainnyaActive && (
                <div className="absolute right-[24px] bottom-[94px] flex flex-col items-end gap-[24px] ">
                    <Link href={"/lainnya/harga-tiket"} className="flex items-center gap-[24px]">
                        <p
                            className={clsx("px-3 py-1 text-white bg-blue-500", {
                                " bg-red-600": pathname === "/lainnya/harga-tiket",
                            })}
                        >
                            Harga Tiket
                        </p>
                        <MdDiscount
                            className={clsx("w-[34px] h-[34px] bg-blue-500 rounded-full text-white p-2", {
                                " bg-red-600": pathname === "/lainnya/harga-tiket",
                            })}
                        />
                    </Link>
                    <Link href={"/lainnya/faq"} className="flex items-center gap-[24px]">
                        <p
                            className={clsx("px-3 py-1 text-white bg-blue-500", {
                                " bg-red-600": pathname === "/lainnya/faq",
                            })}
                        >
                            FAQ
                        </p>
                        <MdOutlineQuestionMark
                            className={clsx("w-[34px] h-[34px] bg-blue-500 rounded-full text-white p-2", {
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
                                }
                            )}
                        >
                            <LinkIcon className="w-[30px] h-[30px] " />
                            <p className=" md:block text-[12px] ">{link.name}</p>
                        </div>
                    );
                } else {
                    if (link.name === "Home") {
                        return (
                            <div key={link.name} className="relative px-[18px] ">
                                <Link
                                    onClick={() => setIsLainnyaActive(false)}
                                    href={link.href}
                                    className={clsx(
                                        "absolute left-[50%]  translate-x-[-50%]  top-[-60px] flex flex-col justify-end items-center w-[64px] h-[64px]  bg-blue-500 hover:bg-red-600 rounded-full p-[8px]",
                                        {
                                            " bg-red-600": pathname === link.href,
                                        }
                                    )}
                                >
                                    <LinkIcon className="w-[30px] h-[30px] text-white" />
                                    <p className=" md:block text-[12px] text-white">{link.name}</p>
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
                                })}
                            >
                                <LinkIcon className="w-[30px] h-[30px]" />
                                <p className="md:block text-[12px] ">{link.name}</p>
                            </Link>
                        );
                    }
                }
            })}
        </section>
    );
}
