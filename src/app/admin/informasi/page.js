"use client";
import { deleteInformationDestination, getInformationDestinationAdmin } from "@/axios/admin";
import { formatDate } from "@/utils/formatDateTime";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function InformasiDestinasiAdmin() {
    const session = useSession();
    const token = session?.data?.user?.token;

    const [informations, setInformations] = useState([]);

    useEffect(() => {
        if (token) {
            getInformationDestinationAdmin({ token }).then((res) => {
                // console.log(res);
                setInformations(res.data);
            });
        }
    }, [token]);

    const handleDelete = async (_id) => {
        try {
            await deleteInformationDestination({ _id, token }).then((res) => {
                // console.log(res);
                alert("delete berhasil");
                setTimeout(() => {
                    setInformations((prevInfor) => prevInfor.filter((p) => p._id !== _id));
                }, 1000);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className='container mx-auto p-4'>
                <h1 className='mb-4 text-3xl font-semibold'>Informasi Destinasi Admin</h1>
                <div>
                    <Link href={"/admin/informasi/add-informasi"} className='bg-blue-200'>
                        Create Informasi Destinasi
                    </Link>
                </div>
                <div className='mt-4 flex flex-col lg:flex-row lg:space-x-8'>
                    {informations.length ? (
                        informations.map((data) => (
                            <div key={data._id} className='mb-4 rounded-md border p-4'>
                                <div className='flex flex-col lg:flex-row lg:space-x-8'>
                                    <div className='lg:w-1/2'>
                                        <div className='mb-4'>
                                            <h2 className='text-xl font-semibold'>Title:</h2>
                                            <p>{data.title}</p>
                                        </div>
                                        <div className='mb-4'>
                                            <h2 className='text-xl font-semibold'>Description:</h2>
                                            <p>{data.description}</p>
                                        </div>
                                    </div>
                                    <div className='lg:w-1/2'>
                                        <div className='mb-4'>
                                            <h2 className='text-xl font-semibold'>Date:</h2>
                                            <p>{formatDate(data.date)}</p>
                                        </div>
                                        <div className='mb-4'>
                                            <h2 className='text-xl font-semibold'>Destination:</h2>
                                            <p>{data.destination.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <Link href={`/admin/informasi/${data._id}`}>Edit</Link>
                                    <button
                                        onClick={() => {
                                            handleDelete(data._id);
                                        }}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}
