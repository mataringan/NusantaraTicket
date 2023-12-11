// pages/createDestination.js
"use client";
import { createDestination } from "@/axios/admin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateDestination = () => {
    const session = useSession();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [date, setDate] = useState();
    const [openingTime, setOpeningTime] = useState();
    const [closingTime, setClosingTime] = useState();
    const [status, setStatus] = useState();
    const [quota, setQuota] = useState();
    const [ticketPrice, setTicketPrice] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();

    const token = session?.data?.user?.token;

    const handleRadioChange = (e) => {
        setStatus(e.target.value);
    };

    // console.log(token);

    // console.log(date);
    // console.log(openingTime);

    const handleCreateDestination = async (e) => {
        try {
            e.preventDefault();
            setIsLoading(true);
            await createDestination({
                name,
                address,
                openingTime,
                closingTime,
                status,
                date,
                ticketPrice,
                quota,
                description,
                image,
                token,
            }).then((res) => {
                setIsLoading(false);
                alert("tambah destinasi berhasil");
                // console.log(res);
                router.push("/admin/destinasi");
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='container mx-auto p-8'>
            <h1 className='mb-8 text-3xl font-bold'>Create Destination</h1>
            <div className='mx-auto max-w-md'>
                <form onSubmit={handleCreateDestination}>
                    <div className='mb-4'>
                        <label htmlFor='name' className='mb-2 block text-sm font-bold text-gray-700'>
                            Name:
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
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
                        {image && (
                            <img
                                src={URL.createObjectURL(image)}
                                width={100}
                                height={100}
                                alt='product-image'
                                className='rounded'
                            />
                        )}
                    </div>
                    <button
                        type='submit'
                        className={`mt-3 w-full rounded-xl border bg-[#162D3A] p-3 text-white lg:mt-5 ${
                            isLoading ? "pointer-events-none opacity-70" : ""
                        }`}>
                        {isLoading ? "Loading..." : "Create Destination"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateDestination;
