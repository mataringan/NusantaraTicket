"use client";
import { getDestinationById, updateDestination } from "@/axios/admin";
import { formatDateForInput } from "@/utils/formatDateInput";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function UpdateDestinasi() {
    const session = useSession();
    const token = session?.data?.user?.token;

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState();
    const [openingTime, setOpeningTime] = useState();
    const [closingTime, setClosingTime] = useState();
    const [status, setStatus] = useState("");
    const [image, setImage] = useState(null);
    const [newImage, setNewImage] = useState(null);
    const [quota, setQuota] = useState();
    const [ticketPrice, setTicketPrice] = useState();

    const handleRadioChange = (e) => {
        setStatus(e.target.value);
    };

    useEffect(() => {
        getDestinationById({ _id: id }).then((res) => {
            setName(res.data.name);
            setAddress(res.data.address);
            setDescription(res.data.description);
            setDate(formatDateForInput(res.data.date));
            setOpeningTime(res.data.openingTime);
            setClosingTime(res.data.closingTime);
            setStatus(res.data.status);
            setImage(res.data.image);
            setQuota(res.data.quota);
            setTicketPrice(res.data.ticketPrice);
        });
    }, []);

    const handleUpdate = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            await updateDestination({
                _id: id,
                name,
                address,
                date,
                closingTime,
                openingTime,
                description,
                image,
                status,
                ticketPrice,
                token,
            }).then((res) => {
                setIsLoading(false);
                console.log(res);
            });
        } catch (error) {
            console.log(error);
        }
    };

    // console.log(date);

    return (
        <div>
            <div>Update Destinasi</div>;
            <div className='mx-auto max-w-md'>
                <form onSubmit={handleUpdate}>
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
                        <label htmlFor='address' className='mb-2 block text-sm font-bold text-gray-700'>
                            Address:
                        </label>
                        <input
                            type='text'
                            id='address'
                            name='address'
                            value={address}
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setAddress(e.target.value)}
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
                        <label htmlFor='openingTime' className='mb-2 block text-sm font-bold text-gray-700'>
                            Opening Time:
                        </label>
                        <input
                            type='time'
                            id='openingTime'
                            name='openingTime'
                            value={openingTime}
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setOpeningTime(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='closingTime' className='mb-2 block text-sm font-bold text-gray-700'>
                            Closing Time:
                        </label>
                        <input
                            type='time'
                            id='closingTime'
                            name='closingTime'
                            value={closingTime}
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setClosingTime(e.target.value)}
                        />
                    </div>
                    <div className='my-4'>
                        <p className='mb-2 block text-sm font-bold text-gray-700'>Status</p>
                        <div className='flex gap-4'>
                            <div className='flex items-center'>
                                <input
                                    type='radio'
                                    id='buka'
                                    name='status'
                                    value='buka'
                                    onChange={handleRadioChange}
                                    checked={status === "buka"}
                                    className='mr-2'
                                />
                                <label htmlFor='buka'>Buka</label>
                            </div>
                            <div className='flex items-center'>
                                <input
                                    type='radio'
                                    id='tutup'
                                    name='status'
                                    value='tutup'
                                    onChange={handleRadioChange}
                                    checked={status === "tutup"}
                                    className='mr-2'
                                />
                                <label htmlFor='tutup'>Tutup</label>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='quota' className='mb-2 block text-sm font-bold text-gray-700'>
                            Quota:
                        </label>
                        <input
                            type='number'
                            id='quota'
                            name='quota'
                            value={quota}
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setQuota(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='ticketPrice' className='mb-2 block text-sm font-bold text-gray-700'>
                            Ticket Price:
                        </label>
                        <input
                            type='number'
                            id='ticketPrice'
                            name='ticketPrice'
                            value={ticketPrice}
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setTicketPrice(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='description' className='mb-2 block text-sm font-bold text-gray-700'>
                            Description:
                        </label>
                        <textarea
                            id='description'
                            value={description}
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='Image' className='mb-2 block font-semibold'>
                            Gambar Destinasi
                        </label>
                        <input type='file' onChange={(e) => setImage(e.target.files[0])} className='w-full' />
                    </div>
                    <div className='mb-4'>
                        {newImage ? (
                            <img src={URL.createObjectURL(newImage)} width={100} height={100} alt={name} className='rounded' />
                        ) : image ? (
                            <img src={image} width={100} height={100} alt={name} className='rounded' />
                        ) : null}
                    </div>
                    <button
                        type='submit'
                        className={`mt-3 w-full rounded-xl border bg-[#162D3A] p-3 text-white lg:mt-5 ${
                            isLoading ? "pointer-events-none opacity-70" : ""
                        }`}>
                        {isLoading ? "Loading..." : "Update Destination"}
                    </button>
                </form>
            </div>
        </div>
    );
}
