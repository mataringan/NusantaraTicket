"use client";
import { getUserById, updateUserById } from "@/axios/admin";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function EditUser() {
    const { id } = useParams();
    const session = useSession();
    const router = useRouter();
    const token = session?.data?.user?.token;

    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        if (token) {
            getUserById({ _id: id, token }).then((res) => {
                // console.log(res);
                const data = res.data;
                setName(data.name);
                setPhone(data.phone);
                setEmail(data.email);
                setRole(data.role);
            });
        }
    }, [token]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUserById({ _id: id, name, email, phone, role, token }).then((res) => {
                alert("update user berhasil");
                router.push("/admin/user");
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div>Update User</div>
            <div>
                <form onSubmit={handleUpdate}>
                    <div className='my-4 flex flex-col'>
                        <label htmlFor='name' className='mb-2'>
                            Name
                            <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='text'
                            id='name'
                            placeholder='Enter your name.'
                            value={name}
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
                            value={email}
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
                            value={phone}
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
                    <button
                        type='submit'
                        className={`mt-3 w-full rounded-xl border bg-[#162D3A] p-3 text-white lg:mt-5 ${
                            isLoading ? "pointer-events-none opacity-70" : ""
                        }`}>
                        {isLoading ? "Loading..." : "Update"}
                    </button>
                </form>
            </div>
        </div>
    );
}
