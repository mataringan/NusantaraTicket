"use client";

import React from "react";
import ButtonCard from "./ButtonCard";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { destinationAction } from "@/store/destination-slice";

export default function CardCategories({ categories, ...props }) {
    const dispatch = useDispatch();

    const handleCategory = (categories) => {
        dispatch(destinationAction.addToCatDest(categories));
    };
    return (
        <div className='group flex flex-col gap-y-3 overflow-hidden rounded-lg border border-slate-400 pb-5 hover:border-slate-700 md:w-[200px]  md:gap-y-6 xl:h-fit xl:w-fit'>
            {/* image start */}
            <div className='transition hover:scale-150 group-hover:shadow-inner2'>
                <div className='relative -z-10 h-[200px] w-full xl:h-[340px] xl:w-[340px]'>
                    <Image {...props} layout='fill' objectFit='cover' alt={categories} />
                </div>
            </div>
            {/* image end  */}
            <div className='flex flex-col gap-y-2 px-3'>
                <h2 className='text-lg font-semibold'>{categories}</h2>
                <h3 className='text-xl font-bold'>Informasi</h3>
                <div className='flex items-center gap-x-4'>
                    {/* <ButtonCard className='bg-transparen    t hover:scale-125 hover:bg-inherit hover:drop-shadow-lg'>🛒</ButtonCard> */}
                    {/* <Link href={"/destinasi"}> */}
                    <ButtonCard
                        className={"px-4  py-2 hover:text-white"}
                        // onClick={() => {
                        //     handleCategory(categories);
                        // }}>
                    >
                        ℹ
                    </ButtonCard>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
}
