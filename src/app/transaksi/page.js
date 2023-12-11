"use client";
import { getTransactionEmail, getTransactionUser } from "@/axios/user";
import { formatDate } from "@/utils/formatDateTime";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function Transaksi() {
    const session = useSession();
    const token = session?.data?.user?.token;

    const [transactions, setTransactions] = useState([]);
    const [searchDate, setSearchDate] = useState();
    const [searchStatus, setSearchStatus] = useState("");

    const [debouncedSearchDate] = useDebounce(searchDate, 200);
    const [debouncedSearchStatus] = useDebounce(searchStatus, 200);

    useEffect(() => {
        if (token) {
            getTransactionUser({ token, searchDate: debouncedSearchDate, searchStatus: debouncedSearchStatus }).then((res) => {
                // console.log(res);
                setTransactions(res.data);
            });
        }
    }, [token, debouncedSearchDate, debouncedSearchStatus]);

    const generateInvoice = async ({ _id }) => {
        getTransactionEmail({ token, idTransaction: _id }).then((res) => {
            alert("invoice sudah dikirim, silahkan cek email");
            // console.log(res);
        });
    };

    return (
        <div>
            <div>Transaksi</div>
            <div className='container mx-auto mt-8'>
                <h1 className='mb-4 text-2xl font-bold'>Transaction List</h1>
                <div className='flex'>
                    <div>
                        <label htmlFor=''>Date: </label>
                        <input
                            type='date'
                            placeholder='Date...'
                            className=' h-10 w-24 rounded-md p-2'
                            onChange={(e) => setSearchDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='status'>Status: </label>
                        <select
                            id='status'
                            className=' h-10 w-24 rounded-md p-2'
                            onChange={(e) => setSearchStatus(e.target.value)}>
                            <option value=''>Pilih Status</option>
                            <option value='terverifikasi'>Terverifikasi</option>
                            <option value='belum terverifikasi'>Belum Terverifikasi</option>
                        </select>
                    </div>
                </div>
                <ul>
                    {transactions.length ? (
                        transactions.map((transaction) => (
                            <li
                                key={transaction._id}
                                className={
                                    transaction.status === "terverifikasi"
                                        ? `mb-4 border bg-green-400 p-4`
                                        : "mb-4 border bg-red-400 p-4"
                                }>
                                <p>ID Transaksi: {transaction._id}</p>
                                <p>User: {transaction.user.name}</p>
                                <p>Booking: {transaction.booking.name}</p>
                                <p>Email: {transaction.booking.email}</p>
                                <p>Phone: {transaction.booking.phone}</p>
                                <p>Destinasi: {transaction.booking.destination.name}</p>
                                <p>Date: {formatDate(transaction.booking.date)}</p>
                                <p>Amount: {transaction.amount}</p>
                                <p>Status: {transaction.status}</p>
                                <button
                                    className='bg-white'
                                    onClick={() => {
                                        generateInvoice({ _id: transaction._id });
                                    }}>
                                    Invoice
                                </button>
                            </li>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </ul>
            </div>
        </div>
    );
}
