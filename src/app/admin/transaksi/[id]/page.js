"use client";

import { getTransactionById, updateTransaction } from "@/axios/admin";
import { formatDateForInput } from "@/utils/formatDateInput";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function EditTransaksi() {
    const { id } = useParams();
    const session = useSession();
    const router = useRouter();

    const token = session?.data?.user?.token;

    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState();
    const [email, setEmail] = useState("");
    const [citizenship, setCitizenship] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (token) {
            getTransactionById({ _id: id, token }).then((res) => {
                // console.log(res);
                const data = res.data;

                setName(data.user.name);
                setPhone(data.booking.phone);
                setDate(formatDateForInput(data.booking.date));
                setEmail(data.booking.email);
                setCitizenship(data.booking.citizenship);
                setQuantity(data.booking.quantity);
                setStatus(data.status);
            });
        }
    }, [token]);

    const handleRadioChange = (e) => {
        e.target.value;
    };

    const handleUpdateTransaction = async (e) => {
        setIsLoading(true);
        e.preventDefault();

        try {
            updateTransaction({ _id: id, name, email, phone, status, date, citizenship, quantity, token }).then((res) => {
                // console.log(res);
                setIsLoading(false);
                alert("update berhasil");
                router.push("/admin/transaksi");
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div>Edit Transaksi</div>
            <div className='mx-auto w-[80%] lg:w-[40%]'>
                <form onSubmit={handleUpdateTransaction}>
                    <div className='mb-4'>
                        <label htmlFor='name' className='mb-2 block text-sm font-bold text-gray-700'>
                            Name:
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={name}
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='phone' className='mb-2 block text-sm font-bold text-gray-700'>
                            Phone:
                        </label>
                        <input
                            type='text'
                            id='phone'
                            name='phone'
                            value={phone}
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='date' className='mb-2 block text-sm font-bold text-gray-700'>
                            Date:
                        </label>
                        <input
                            type='date'
                            id='date'
                            name='date'
                            value={date}
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='mb-2 block text-sm font-bold text-gray-700'>
                            Email:
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='my-4'>
                        <p className='mb-2 block text-sm font-bold text-gray-700'>Status</p>
                        <div className='flex gap-4'>
                            <div className='flex'>
                                <input
                                    type='radio'
                                    id='wni'
                                    value='WNI'
                                    onChange={handleRadioChange}
                                    checked={citizenship === "WNI"}
                                    className='mr-2'
                                />
                                <label htmlFor='wni'>WNI</label>
                            </div>
                            <div className='flex'>
                                <input
                                    type='radio'
                                    id='wna'
                                    value='WNA'
                                    onChange={handleRadioChange}
                                    checked={citizenship === "WNA"}
                                    className='mr-2'
                                />
                                <label htmlFor='wna'>WNA</label>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='quantity' className='mb-2 block text-sm font-bold text-gray-700'>
                            Quantity:
                        </label>
                        <input
                            type='number'
                            id='quantity'
                            name='quantity'
                            value={quantity}
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex'>
                            <input
                                type='radio'
                                id='terverifikasi'
                                value='Terverifikasi'
                                onChange={handleRadioChange}
                                checked={status === "terverifikasi"}
                                className='mr-2'
                            />
                            <label htmlFor='Terverifikasi'>Terverifikasi</label>
                        </div>
                        <div className='flex'>
                            <input
                                type='radio'
                                id='BelumTerverifikasi'
                                value='Belum Terverifikasi'
                                onChange={handleRadioChange}
                                checked={status === "belum terverifikasi"}
                                className='mr-2'
                            />
                            <label htmlFor='BelumTerverifikasi'>Belum Terverifikasi</label>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className={`mt-3 w-full rounded-xl border bg-[#162D3A] p-3 text-white lg:mt-5 ${
                            isLoading ? "pointer-events-none opacity-70" : ""
                        }`}>
                        {isLoading ? "Loading..." : "Update Transaction"}
                    </button>
                </form>
            </div>
        </div>
    );
}
