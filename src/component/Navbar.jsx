"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
    { name: "Beranda", href: "/" },
    { name: "Informasi Tiket", href: "" },
    { name: "Kontak Kami", href: "/contact" },
    { name: "Petunjuk", href: "/tutorial" },
    {
        name: "Pembatalan Tiket",
        href: "/cancel",
    },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isLainnyaActive, setIsLainnyaActive] = useState(false);

    const handleLainnya = () => {
        setIsLainnyaActive((prevState) => !prevState);
    };

    return (
        <section className="fixed top-0 flex items-center justify-center w-full py-3 text-white bg-[#0a4773] h-[60px]">
            <h1 className="text-[18px] md:hidden"> Navbar Mobile</h1>
            <div className="hidden md:max-w-screen-lg md:w-full md:flex md:justify-between md:items-center">
                <p className="text-[28px] font-bold">Logo</p>
                <div className="flex gap-[24px]  ">
                    {links.map((link) => {
                        if (link.name === "Informasi Tiket") {
                            return (
                                <Link
                                    onClick={handleLainnya}
                                    href={link.href}
                                    key={link.name}
                                    className={clsx(
                                        "font-medium relative",
                                        { " text-[#f1c40f]": pathname === link.href },
                                        { " text-[#f1c40f]": pathname === "/lainnya/harga-tiket" },
                                        { " text-[#f1c40f]": pathname === "/lainnya/faq" }
                                    )}
                                >
                                    <p>{link.name}</p>
                                    {isLainnyaActive && (
                                        <div className="absolute bg-red-400 top-[32px]">
                                            <div></div>
                                        </div>
                                    )}
                                </Link>
                            );
                        }

                        return (
                            <Link
                                href={link.href}
                                key={link.name}
                                className={clsx("font-medium", { " text-[#f1c40f]": pathname === link.href })}
                            >
                                <p>{link.name}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
