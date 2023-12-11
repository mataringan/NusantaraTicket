"use client";
import { createBooking, getDestinationById } from "@/axios/admin";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DestinationInfo from "./destinastionInfo";
import { useSession } from "next-auth/react";

export default function Booking() {
    const { id } = useParams();
    const session = useSession();
    const router = useRouter();

    // console.log(id);

    const [data, setData] = useState([]);
    const token = session?.data?.user?.token;
    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [citizenship, setCitizenship] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState();

    useEffect(() => {
        getDestinationById({ _id: id }).then((res) => {
            // console.log(res);
            setData(res.data);
        });
    }, [id]);

    const handleRadioChange = (e) => {
        setCitizenship(e.target.value);
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        await createBooking({ idDestination: id, name, email, phone, quantity, citizenship, image, token }).then((res) => {
            // console.log(res);
            setIsLoading(false);
            router.push("/transaksi");
        });
    };

    return (
        <div className='mt-8'>
            <div className='gap-10 lg:flex'>
                <div className='lg:w-[50%]'>{data && <DestinationInfo data={data} />}</div>
                <div className='mx-auto w-[80%] lg:w-[40%]'>
                    <form onSubmit={handleBooking}>
                        <div className='flex flex-col'>
                            <div className='mb-5 flex items-center'>
                                <label htmlFor='name' className='w-20 text-sm font-bold text-gray-700'>
                                    Name:
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    className='focus:shadow-outline flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='mb-5 flex items-center'>
                                <label htmlFor='email' className='w-20 text-sm font-bold text-gray-700'>
                                    Email:
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    className='focus:shadow-outline flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='mb-5 flex items-center'>
                                <label htmlFor='phone' className='w-20 text-sm font-bold text-gray-700'>
                                    Phone:
                                </label>
                                <input
                                    type='text'
                                    id='phone'
                                    className='focus:shadow-outline flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className='mb-5 flex items-center'>
                                <label htmlFor='citizenship' className='w-20 text-sm font-bold text-gray-700'>
                                    Citizenship:
                                </label>
                                <div className='ml-5 flex gap-3'>
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
                            <div className='mb-5 flex items-center'>
                                <label htmlFor='quantity' className='w-20 text-sm font-bold text-gray-700'>
                                    Quantity:
                                </label>
                                <input
                                    type='number'
                                    id='quantity'
                                    className='focus:shadow-outline flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </div>
                            <div className='mb-5 flex items-center'>
                                <label htmlFor='image' className='w-20 text-sm font-bold text-gray-700'>
                                    Proof of transfer:
                                </label>
                                <input
                                    type='file'
                                    id='image'
                                    className='focus:shadow-outline flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            <button
                                type='submit'
                                className={`mt-3 w-full rounded-xl border bg-[#162D3A] p-3 text-white lg:mt-5 ${
                                    isLoading ? "pointer-events-none opacity-70" : ""
                                }`}>
                                {isLoading ? "Loading..." : "Booking"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
