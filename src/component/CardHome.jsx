import Image from "next/image";
import React from "react";

export default function CardHome({ text, ...props }) {
    return (
        <div className='group relative w-full flex-col overflow-hidden md:w-[200px] xl:w-[340px]'>
            <div className='absolute top-1/2 flex w-full -translate-y-1/2 justify-center text-[27px] font-semibold tracking-wider text-white'>
                <p className='-translate-y-32 shadow-white transition text-shadow-lg group-hover:translate-y-0 xl:-translate-y-48'>
                    {text}
                </p>
            </div>
            <div className='-z-10 transition group-hover:shadow-inner2'>
                <div className='relative -z-10 h-[200px] w-full xl:h-[340px] '>
                    <Image {...props} layout='fill' alt={text} objectFit='cover' />
                </div>
            </div>
        </div>
    );
}
