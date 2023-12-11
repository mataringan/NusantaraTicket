"use client";

import { getDestination } from "@/axios/admin";
import BottomNavbar from "@/component/BottomNavbar";
import Navbar from "@/component/Navbar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DestinationCard from "./destinationCard";
import { useDebounce } from "use-debounce";

// export const metadata = {
//     title: "Destinasi",
// };

export default function DestinationInfo() {
    const session = useSession();
    const router = useRouter();
    const token = session?.data?.user?.token;

    const [destination, setDestination] = useState([]);

    const [searchName, setSearchName] = useState("");
    const [searchAddress, setSearchAddress] = useState("");
    const [searchDate, setSearchDate] = useState("");
    const [searchStatus, setSearchStatus] = useState("");

    const [debouncedSearchName] = useDebounce(searchName, 200);
    const [debouncedSearchAddress] = useDebounce(searchAddress, 200);
    const [debouncedSearchDate] = useDebounce(searchDate, 200);
    const [debouncedSearchStatus] = useDebounce(searchStatus, 200);

    useEffect(() => {
        getAllDestination(debouncedSearchName, debouncedSearchAddress, debouncedSearchStatus, debouncedSearchDate);
    }, [debouncedSearchName, debouncedSearchAddress, debouncedSearchStatus, debouncedSearchDate]);

    const getAllDestination = async (searchName, searchAddress, searchStatus, searchDate) => {
        await getDestination(searchName, searchAddress, searchStatus, searchDate).then((res) => {
            setDestination(res.data);
            // console.log(res);
        });
    };

    const handleBooking = (_id) => {
        try {
            if (!token) {
                alert("anda belum login");
                router.push("/login");
            } else {
                router.push(`/destinasi/${_id}`);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Navbar />
            <BottomNavbar />
            <div className='flex'>
                <div className=''>
                    <label htmlFor=''>Name: </label>
                    <input
                        type='search'
                        placeholder='Search...'
                        className='mt-20 h-10 w-24 rounded-md p-2'
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor=''>Address: </label>
                    <input
                        type='search'
                        placeholder='Address...'
                        className='mt-20 h-10 w-24 rounded-md p-2'
                        onChange={(e) => setSearchAddress(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor=''>Date: </label>
                    <input
                        type='date'
                        // type='date'
                        placeholder='Address...'
                        className='mt-20 h-10 w-24 rounded-md p-2'
                        onChange={(e) => setSearchDate(e.target.value)}
                    />
                </div>
                {/* <div>
                    <label htmlFor=''>Status: </label>
                    <select
                        className='mt-20 h-10 w-24 rounded-md bg-white p-2'
                        name=''
                        id=''
                        onChange={(e) => setSearchStatus(e.target.value)}>
                        <option value='buka'>Buka</option>
                        <option value='tutup'>Tutup</option>
                    </select>
                </div> */}
            </div>
            {destination.length ? (
                destination.map((item) => <DestinationCard key={item._id} item={item} handleBooking={handleBooking} />)
            ) : (
                <p>Loading....</p>
            )}

            <button className='mt-96 w-20 bg-blue-500' onClick={() => signOut()}>
                Sign Out
            </button>
        </>
    );
}
