"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Navbar from "@/component/Navbar";
import BottomNavbar from "@/component/BottomNavbar";
import DestinationInfo from "./destinastionInfo";

export default function DetailDestination() {
    const { id } = useParams();
    const session = useSession();
    const router = useRouter();

    const token = session?.data?.user?.token;

    const handleBooking = (id) => {
        if (token) {
            router.push(`/destinasi/booking/${id}`);
        } else {
            alert("Anda Belum Login");
            router.push("/login");
        }
    };

    return (
        <div>
            <Navbar />
            <BottomNavbar />
            <div className='mt-8'>
                <div className='gap-10 lg:flex'>
                    <div className='lg:w-[50%]'>{data && <DestinationInfo data={data} />}</div>
                </div>
            </div>
            <button
                onClick={() => {
                    handleBooking(id);
                }}>
                Pesan
            </button>
        </div>
    );
}
