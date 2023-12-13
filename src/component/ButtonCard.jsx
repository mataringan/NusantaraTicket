import React from "react";

export default function ButtonCard({ children, ...props }) {
    return (
        <button {...props} className={`box-border rounded-lg bg-blue-400 transition hover:bg-[#164863] ${props.className}`}>
            {children}
        </button>
    );
}
