import React from "react";

export default function InputForm({ label, ...props }) {
    return (
        <div className='flex flex-col gap-y-2'>
            <label>{label}</label>
            <input {...props} className='none rounded-lg border px-2 py-3 outline-none' />
        </div>
    );
}
