import React from "react";

export default function ButtonHome({ children, ...props }) {
    return (
        <button
            {...props}
            className='box-border rounded-md border border-white bg-transparent px-3 py-2 transition hover:border-[#164863] hover:bg-[#164863] md:text-[14px] xl:text-[16px]'>
            {children}
        </button>
    );
}
