import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className='flex flex-col items-center justify-center gap-y-4 bg-[#164863] pb-24 pt-14 text-white md:flex-row md:gap-x-8 md:gap-y-0 md:pb-14 '>
            <Link className='text-base font-semibold tracking-wider transition hover:opacity-75 xl:font-normal' href={"/"}>
                About
            </Link>
            <Link className='text-base font-semibold tracking-wider transition hover:opacity-75 xl:font-normal' href={"/"}>
                Terms and Condiiton
            </Link>
            <Link className='text-base font-semibold tracking-wider transition hover:opacity-75 xl:font-normal' href={"/"}>
                Privacy Policy
            </Link>
        </footer>
    );
}
