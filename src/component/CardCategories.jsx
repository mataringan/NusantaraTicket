import React from "react";
import ButtonCard from "./ButtonCard";
import Image from "next/image";

export default function CardCategories({ categories, ...props }) {
    return (
        <div className='group flex flex-col md:gap-y-6 gap-y-3 overflow-hidden rounded-lg border border-slate-400 pb-5 hover:border-slate-700 md:w-[200px] xl:h-fit xl:w-fit'>
            {/* image start */}
            <div className='transition group-hover:shadow-inner2'>
                <div className='relative -z-10 h-[200px] w-full xl:h-[340px] xl:w-[340px]'>
                    <Image {...props} layout='fill' objectFit='cover' alt={categories} />
                </div>
            </div>
            {/* image end  */}
            <div className='flex flex-col gap-y-2 px-3'>
                <h2 className='text-lg font-semibold'>{categories}</h2>
                <h3 className='text-xl font-bold'>Informasi</h3>
                <div className='flex items-center gap-x-4'>
                    <ButtonCard className='bg-transparent hover:scale-125 hover:bg-inherit hover:drop-shadow-lg'>🛒</ButtonCard>
                    <ButtonCard className={"px-4  py-2 hover:text-white"}>ℹ</ButtonCard>
                </div>
            </div>
        </div>
    );
}
