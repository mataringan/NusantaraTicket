// components/TransactionCard.js
import { formatDate } from "@/utils/formatDateTime";
import React from "react";

const TransactionCard = ({ transaction, handleVerifikasi, handleEdit, handleDelete }) => {
    const { _id, user, booking, amount, status } = transaction;

    return (
        <div className='mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl'>
            <div className='md:flex'>
                <div className='md:flex-shrink-0'>
                    <img className='h-full w-full object-cover md:w-48' src={booking.image} alt='Transaction Image' />
                </div>
                <div className='p-8'>
                    <div
                        className={`text-sm font-semibold uppercase tracking-wide ${
                            status === "terverifikasi" ? "text-green-500" : "text-red-500"
                        }`}>
                        {status}
                    </div>
                    <p className='mt-2 text-gray-600'>Transaction ID: {_id}</p>
                    <p className='mt-2 text-gray-600'>
                        User: {user.name} ({user.email})
                    </p>
                    <p className='mt-2 text-gray-600'>Booking Name: {booking.name}</p>
                    <p className='mt-2 text-gray-600'>Date: {formatDate(booking.date)}</p>
                    <p className='mt-2 text-gray-600'>Destination: {booking.destination.name}</p>
                    <p className='mt-2 text-gray-600'>Amount: {amount}</p>
                    <div className='mt-2 flex gap-5'>
                        <button
                            className='text-green-500'
                            onClick={() => {
                                handleVerifikasi(_id);
                            }}>
                            Verifikasi
                        </button>
                        <button
                            className='text-blue-500'
                            onClick={() => {
                                handleEdit(_id);
                            }}>
                            Edit
                        </button>
                        <button
                            className='text-red-500'
                            onClick={() => {
                                handleDelete(_id);
                            }}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionCard;
