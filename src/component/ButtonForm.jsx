import React from "react";

export default function ButtonForm({ children, ...props }) {
    return (
        <button
            {...props}
            className={
                "box-border rounded-lg border border-[#164863] bg-[#164863] px-4 py-3 text-white transition hover:bg-inherit hover:text-black"
            }>
            {children}
        </button>
    );
}
