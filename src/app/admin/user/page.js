"use client";
import { deleteUser, getUser } from "@/axios/admin";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import UserCard from "./userCard";
import { useDebounce } from "use-debounce";
import Link from "next/link";

export default function User() {
    const session = useSession();
    const token = session?.data?.user?.token;

    const [users, setUsers] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchRole, setSearchRole] = useState("");

    const [debouncedSearchName] = useDebounce(searchName, 200);
    const [debouncedSearchRole] = useDebounce(searchRole, 200);

    useEffect(() => {
        if (token) {
            getUser({ token, searchName: debouncedSearchName, searchRole: debouncedSearchRole }).then((res) => {
                // console.log(res.data);
                setUsers(res.data);
            });
        }
    }, [token, debouncedSearchName, debouncedSearchRole]);

    const handleDelete = async (_id) => {
        try {
            await deleteUser({ _id, token }).then((res) => {
                // console.log(res);
                alert("user berhasil dihapus");
                setTimeout(() => {
                    setUsers((prevUser) => prevUser.filter((p) => p._id !== _id));
                }, 1000);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div>List Users</div>
            <div>
                <Link href={"/admin/user/add-user"}>Add User</Link>
            </div>
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
                <div className='flex'>
                    <select
                        name=''
                        id=''
                        onChange={(e) => setSearchRole(e.target.value)}
                        className='mt-20 h-10 w-24 rounded-md p-2'>
                        <option value=''>Role</option>
                        <option value='admin'>Admin</option>
                        <option value='user'>User</option>
                    </select>
                </div>
            </div>
            <div>
                {users.length > 0 ? (
                    users.map((item) => <UserCard user={item} key={item._id} handleDelete={handleDelete} />)
                ) : users.length === 0 && debouncedSearchName === "" && debouncedSearchRole === "" ? (
                    <p>Loading...</p>
                ) : (
                    <p>Data tidak ditemukan</p>
                )}
            </div>
        </div>
    );
}
