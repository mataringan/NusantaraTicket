"use client";

import React, { useState } from "react";
import Image from "next/image";
import { forgotPassword } from "@/axios/auth";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleForgot = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            forgotPassword({ email }).then((res) => {
                console.log(res);
                setIsLoading(false);
                alert("silahkan cek email");
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='lg:flex lg:h-screen  lg:overflow-y-hidden '>
            <div className='order-2 flex  h-[35%] justify-center lg:h-screen lg:w-[50%]  lg:items-center'>
                <div className='relative mt-4 h-[200px] w-[80%] md:h-[500px] lg:h-[90%] lg:w-[90%] '>
                    <Image
                        alt='image-auth'
                        src={"/image/image-auth.jpg"}
                        fill
                        className='rounded-2xl border lg:object-cover lg:object-top'
                    />
                </div>
            </div>
            <div className='order-1  mt-6 flex items-center justify-center lg:mt-0 lg:w-[50%]'>
                <div className='w-[80%]  lg:w-[60%]'>
                    <h1 className='mb-2 text-2xl font-bold'>Forgot Password</h1>
                    <div>
                        <form onSubmit={handleForgot}>
                            <div className='my-2 flex flex-col'>
                                <div className='my-4 flex flex-col'>
                                    <label htmlFor='email' className='mb-2'>
                                        Email
                                        <span className='text-red-600'>*</span>
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        placeholder='mataringan@gmail.com'
                                        className='rounded-lg border bg-[#F7FBFF] p-2'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button
                                type='submit'
                                className={`mt-3 w-full rounded-xl border bg-[#162D3A] p-3 text-white lg:mt-5 ${
                                    isLoading ? "pointer-events-none opacity-70" : ""
                                }`}>
                                {isLoading ? "Loading..." : "Submit"}
                            </button>
                        </form>
                        <div className='mt-4 text-center text-[13px] lg:mt-7 '>
                            <p className='mt-10'>© 2023 nusaGO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
