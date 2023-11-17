"use client";

import { registerApi } from "@/axios/auth";
import Image from "next/image";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
    const router = useRouter();
    const session = useSession();

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        setIsLoading(true);
        e.preventDefault();

        signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
        }).then((res) => {
            // console.log(res);
            if (res.error) {
                console.log(res.error);
            }
            if (!res.error) {
                // const token = session?.data?.user?.token;
                // console.log(token);
                setIsLoading(false);
                router.push("/destinasi");
            }
        });
    };

    return (
        <div className='lg:flex lg:h-screen  lg:overflow-y-hidden '>
            <div className='order-2 flex  h-[35%] justify-center lg:h-screen lg:w-[50%]  lg:items-center'>
                <div className='relative mt-4 h-[180px] w-[80%] md:h-[500px] lg:h-[90%] lg:w-[90%] '>
                    <Image
                        alt='image-auth'
                        src={"/image/image-auth.jpg"}
                        fill
                        className='rounded-2xl border object-cover object-top lg:object-cover lg:object-top'
                        priority='true'
                    />
                </div>
            </div>
            <div className='order-1  mt-4 flex items-center justify-center lg:mt-0 lg:w-[50%]'>
                <div className='w-[80%]  lg:w-[60%]'>
                    <h1 className='mb-2 text-2xl font-bold'>Welcome Back 🖐️</h1>
                    <p className='mb-2 lg:mb-7'>Today is a new day.Its your day.</p>
                    <div>
                        <form onSubmit={handleLogin}>
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
                            <div className='my-4 flex flex-col'>
                                <label htmlFor='password' className='mb-2'>
                                    Password
                                    <span className='text-red-600'>*</span>
                                </label>
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='Enter your password.'
                                    className='rounded-lg border bg-[#F7FBFF] p-2'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type='submit'
                                className={`mt-3 w-full rounded-xl border bg-[#162D3A] p-3 text-white lg:mt-5 ${
                                    isLoading ? "pointer-events-none opacity-70" : ""
                                }`}>
                                {isLoading ? "Loading..." : "Sign In"}
                            </button>
                        </form>
                    </div>
                    <div className='mt-4 text-center text-[13px] lg:mt-7 '>
                        <p>
                            Dont you have an account?
                            <Link href='/register' className='ml-2 font-semibold text-blue-700'>
                                Sign Up
                            </Link>
                        </p>
                        <p className='mt-4 md:mt-10'>© 2023 BanyuGO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
