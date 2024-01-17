"use client";

import { getDestination, getDestinationByCategory } from "@/axios/admin";
import BottomNavbar from "@/component/BottomNavbar";
import Navbar from "@/component/Navbar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DestinationCard from "./destinationCard";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";
import axios from "axios";

// export const metadata = {
//     title: "Destinasi",
// };

export default function Destination() {
    const session = useSession();
    const router = useRouter();
    const token = session?.data?.user?.token;

    const category = useSelector((state) => state.destination.category);
    const [destination, setDestination] = useState([]);

    // const [searchName, setSearchName] = useState("");
    // const [searchAddress, setSearchAddress] = useState("");
    // const [searchDate, setSearchDate] = useState("");
    // const [searchStatus, setSearchStatus] = useState("");
    // const searchCategory = category;

    // const [debouncedSearchName] = useDebounce(searchName, 200);
    // const [debouncedSearchAddress] = useDebounce(searchAddress, 200);
    // const [debouncedSearchDate] = useDebounce(searchDate, 200);
    // const [debouncedSearchStatus] = useDebounce(searchStatus, 200);
    // const [debouncedSearchCategory] = useDebounce(category, 200);

    // console.log(category);

    // useEffect(() => {
    //     getAllDestination(
    //         debouncedSearchName,
    //         debouncedSearchAddress,
    //         debouncedSearchStatus,
    //         debouncedSearchDate,
    //         debouncedSearchCategory,
    //     );
    // }, [debouncedSearchName, debouncedSearchAddress, debouncedSearchStatus, debouncedSearchDate, debouncedSearchCategory]);

    // const getAllDestination = async (searchName, searchAddress, searchStatus, searchDate, searchCategory) => {
    //     await getDestination(searchName, searchAddress, searchStatus, searchDate, searchCategory).then((res) => {
    //         setDestination(res.data);
    //         // console.log(res);
    //     });
    // };

    useEffect(() => {
        getCategoryDestination();
    }, []);

    const getCategoryDestination = async () => {
        await getDestinationByCategory({ category }).then((res) => {
            // console.log(res);
            setDestination(res.data);
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
            {destination.length > 0
                ? destination.map((item) => <DestinationCard key={item._id} item={item} handleBooking={handleBooking} />)
                : destination.length === 0 && <p>No data available.</p>}

            {/* <button className='mt-96 w-20 bg-blue-500' onClick={() => signOut()}>
                Sign Out
            </button> */}
            <BottomNavbar />
        </>
    );
}
