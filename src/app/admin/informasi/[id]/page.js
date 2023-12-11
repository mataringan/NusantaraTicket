"use client";
import { getDestinationByAdmin, getInformationById, updateInformationDestination } from "@/axios/admin";
import { formatDateForInput } from "@/utils/formatDateInput";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function EditInformasiDestinasi() {
    const { id } = useParams();
    const session = useSession();
    const router = useRouter();
    const token = session?.data?.user?.token;

    const [isLoading, setIsLoading] = useState(false);
    const [dataDestinations, setDataDestinations] = useState();

    const [idDestination, setIdDestination] = useState();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState();

    useEffect(() => {
        if (token) {
            getDestinationByAdmin({ token }).then((res) => {
                // console.log(res);
                setDataDestinations(res.data);
                // setIdDestination(res.data[0]._id);
            });

            getInformationById({ _id: id }).then((res) => {
                // console.log(res);
                setIdDestination(res.data.idDestination);
                setTitle(res.data.title);
                setDescription(res.data.description);
                setDate(res.data.date);
            });
        }
    }, [token]);

    const handleUpdateInformation = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            await updateInformationDestination({ _id: id, idDestination, title, date, description, token }).then((res) => {
                // console.log(res);
                setIsLoading(false);
                alert("update berhasil");
                router.push("/admin/informasi");
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div>Update Informasi</div>
            <form onSubmit={handleUpdateInformation} className='mx-auto w-[80%] lg:w-[40%]'>
                <div className='flex flex-col'>
                    <div className='mb-5 flex items-center'>
                        <label htmlFor='title' className='w-20 text-sm font-bold text-gray-700'>
                            Title:
                        </label>
                        <input
                            type='text'
                            id='title'
                            value={title}
                            className='focus:shadow-outline flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='mb-5 flex items-center'>
                        <label htmlFor='description' className='w-20 text-sm font-bold text-gray-700'>
                            Description:
                        </label>
                        <textarea
                            type='text'
                            id='description'
                            value={description}
                            className='focus:shadow-outline flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className='mb-5 flex items-center'>
                        <label htmlFor='Date' className='w-20 text-sm font-bold text-gray-700'>
                            Date:
                        </label>
                        <input
                            type='date'
                            id='date'
                            value={formatDateForInput(date)}
                            className='focus:shadow-outline flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className='mb-5 flex items-center'>
                        <label htmlFor='destinasi' className='w-20 text-sm font-bold text-gray-700'>
                            Destinasi:{" "}
                        </label>
                        {dataDestinations &&
                            dataDestinations.map((item) => (
                                <select
                                    name='destinasi'
                                    id='destinasi'
                                    className='focus:shadow-outline flex-1 appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                                    key={item._id}
                                    onClick={(e) => setIdDestination(e.target.value)}>
                                    <option value={item._id}>{item.name} </option>
                                </select>
                            ))}
                    </div>
                </div>
                <button
                    type='submit'
                    className={`mt-3 w-full rounded-xl border bg-[#162D3A] p-3 text-white lg:mt-5 ${
                        isLoading ? "pointer-events-none opacity-70" : ""
                    }`}>
                    {isLoading ? "Loading..." : "Update Information Destination"}
                </button>
            </form>
        </div>
    );
}
