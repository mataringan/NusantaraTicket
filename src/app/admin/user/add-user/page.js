"use client";
import { registerUser } from "@/axios/admin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function AddUser() {
    const router = useRouter();
    const session = useSession();
    const token = session?.data?.user?.token;

    // console.log(token);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleUser = async (e) => {
        e.preventDefault();
        try {
            registerUser({ name, email, phone, role, password, token }).then((res) => {
                // console.log(res);
                alert("register user berhasil");
                router.push("/admin/user");
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div>Register User</div>
            <div>
                <form onSubmit={handleUser}>
                    <div className='my-4 flex flex-col'>
                        <label htmlFor='name' className='mb-2'>
                            Name
                            <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='text'
                            id='name'
                            placeholder='Enter your name.'
                            className='rounded-lg border bg-[#F7FBFF] p-2'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                        <label htmlFor='phone' className='mb-2'>
                            Phone
                            <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='text'
                            id='phone'
                            placeholder='Enter your phone.'
                            className='rounded-lg border bg-[#F7FBFF] p-2'
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>
                            <input
                                type='radio'
                                id='admin'
                                value='admin'
                                checked={role === "admin"}
                                onChange={(e) => setRole(e.target.value)}
                            />
                            <label htmlFor='admin'>admin</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='user'
                                value='user'
                                checked={role === "user"}
                                onChange={(e) => setRole(e.target.value)}
                            />
                            <label htmlFor='user'>user</label>
                        </div>
                    </div>
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type='button'
                            className='absolute right-4 top-11 cursor-pointer'
                            onClick={togglePasswordVisibility}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>
                    {/* <div className='my-4 flex flex-col'>
                        <label htmlFor='confirmPassword' className='mb-2'>
                            Confirm Password
                            <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='password'
                            id='confirmPassword'
                            placeholder='Enter your confirm password.'
                            className='rounded-lg border bg-[#F7FBFF] p-2'
                            onChange={handleConfirmPasswordChange}
                        />
                        {!passwordMatch && <p className='text-red-500'>Passwords do not match.</p>}
                    </div> */}
                    <button
                        type='submit'
                        className={`mt-3 w-full rounded-xl border bg-[#162D3A] p-3 text-white lg:mt-5 ${
                            isLoading ? "pointer-events-none opacity-70" : ""
                        }`}>
                        {isLoading ? "Loading..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
}
