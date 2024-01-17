"use client";

import { resetPassword } from "@/axios/auth";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function ResetPassword() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordConfirmVisibility = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordMatch(e.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(e.target.value === password);
    };

    useEffect(() => {
        const tokenParams = searchParams.get("token");
        setToken(tokenParams);
    }, []);

    const handleReset = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            resetPassword({ password, confirmPassword, token }).then((res) => {
                // console.log(res);
                alert("reset password berhasil");
                router.push("/login");
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
                    <h1 className='mb-2 text-2xl font-bold'>Reset Password</h1>
                    <div>
                        <form onSubmit={handleReset}>
                            <div className='relative my-4 flex flex-col'>
                                <label htmlFor='password' className='mb-2'>
                                    Password
                                    <span className='text-red-600'>*</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id='password'
                                    placeholder='Enter your password.'
                                    className='rounded-lg border bg-[#F7FBFF] p-2'
                                    onChange={handlePasswordChange}
                                />
                                <button
                                    type='button'
                                    className='absolute right-4 top-11 cursor-pointer'
                                    onClick={togglePasswordVisibility}>
                                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </button>
                            </div>
                            <div className='relative my-4 flex flex-col'>
                                <label htmlFor='confirmPassword' className='mb-2'>
                                    Confirm Password
                                    <span className='text-red-600'>*</span>
                                </label>
                                <input
                                    type={showPasswordConfirm ? "text" : "password"}
                                    id='confirmPassword'
                                    placeholder='Enter your confirm password.'
                                    className='rounded-lg border bg-[#F7FBFF] p-2'
                                    onChange={handleConfirmPasswordChange}
                                />
                                <button
                                    type='button'
                                    className='absolute right-4 top-11 cursor-pointer'
                                    onClick={togglePasswordConfirmVisibility}>
                                    {showPasswordConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                </button>
                                {!passwordMatch && <p className='text-red-500'>Passwords do not match.</p>}
                            </div>
                            <button
                                type='submit'
                                className={`mt-3 w-full rounded-xl border bg-[#162D3A] p-3 text-white lg:mt-5 ${
                                    isLoading ? "pointer-events-none opacity-70" : ""
                                }`}>
                                {isLoading ? "Loading..." : "Submit"}
                            </button>
                        </form>
                    </div>
                    <div className='mt-4 text-center text-[13px] lg:mt-7 '>
                        <p className='mt-10'>© 2024 Nusantara Ticket</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
