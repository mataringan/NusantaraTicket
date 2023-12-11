"use client";
import { deleteTransaction, getTransactionAdmin, updateStatusTransaction } from "@/axios/admin";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import TransactionCard from "./transactionCard";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

export default function TransaksiAdmin() {
    const session = useSession();
    const token = session?.data?.user?.token;

    const router = useRouter();

    const [transactions, setTransactions] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchDate, setSearchDate] = useState();
    const [searchStatus, setSearchStatus] = useState("");

    const [debouncedSearchName] = useDebounce(searchName, 200);
    const [debouncedSearchDate] = useDebounce(searchDate, 200);
    const [debouncedSearchStatus] = useDebounce(searchStatus, 200);

    useEffect(() => {
        if (token) {
            getTransactionAdmin({
                token,
                searchName: debouncedSearchName,
                searchDate: debouncedSearchDate,
                searchStatus: debouncedSearchStatus,
            }).then((res) => {
                // console.log(res);
                setTransactions(res.data);
            });
        }
    }, [token, debouncedSearchName, debouncedSearchDate, debouncedSearchStatus]);

    const handleVerifikasi = async (_id) => {
        updateStatusTransaction({ _id, token }).then((res) => {
            // console.log(res);
            alert("sudah diverifikasi");
        });
    };

    const handleDelete = async (_id) => {
        deleteTransaction({ _id, token }).then((res) => {
            // console.log(res);
            alert("transaksi berhasil dihapus");
            setTimeout(() => {
                setTransactions((prevTransaction) => {
                    return prevTransaction.filter((t) => t._id !== _id);
                });
            }, 2000);
        });
    };

    const handleEditTransaksi = async (_id) => {
        router.push(`/admin/transaksi/${_id}`);
    };

    return (
        <div>
            <div>Transaksi Admin List</div>
            <div className='flex'>
                <div>
                    <label htmlFor=''>Name: </label>
                    <input
                        type='search'
                        placeholder='Search...'
                        className='mt-20 h-10 w-24 rounded-md p-2'
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor=''>Date: </label>
                    <input
                        type='date'
                        placeholder='Date...'
                        className='mt-20 h-10 w-24 rounded-md p-2'
                        onChange={(e) => setSearchDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='status'>Status: </label>
                    <select
                        id='status'
                        className='mt-20 h-10 w-24 rounded-md p-2'
                        onChange={(e) => setSearchStatus(e.target.value)}>
                        <option value=''>Pilih Status</option>
                        <option value='terverifikasi'>Terverifikasi</option>
                        <option value='belum terverifikasi'>Belum Terverifikasi</option>
                    </select>
                </div>
            </div>
            <div>
                {transactions.length > 0 ? (
                    transactions.map((item) => (
                        <TransactionCard
                            key={item._id}
                            transaction={item}
                            handleVerifikasi={handleVerifikasi}
                            handleEdit={handleEditTransaksi}
                            handleDelete={handleDelete}
                        />
                    ))
                ) : transactions.length === 0 &&
                  debouncedSearchName === "" &&
                  debouncedSearchDate === "" &&
                  debouncedSearchStatus === "" ? (
                    <p>Loading...</p>
                ) : (
                    <p>Data tidak ditemukan</p>
                )}
            </div>
        </div>
    );
}
