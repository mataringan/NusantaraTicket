"use client";
import { deleteDestination, getDestinationByAdmin } from "@/axios/admin";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import DestinationCard from "./destinationCard";
import Link from "next/link";

export default function DestinasiAdmin() {
    const session = useSession();
    const token = session?.data?.user?.token;

    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        if (token) {
            getDestinationByAdmin({ token }).then((res) => {
                // console.log(res);
                setDestinations(res.data);
            });
        }
    }, [token]);

    const handleDelete = async (_id) => {
        deleteDestination({ _id, token }).then((res) => {
            // console.log(res);
            alert("destinasi berhasil dihapus");
            setTimeout(() => {
                setDestinations((prevDestinations) => {
                    return prevDestinations.filter((p) => p._id !== _id);
                });
            }, 2000);
        });
    };

    return (
        <div>
            <div>
                <div>Destinasi Admin</div>
                <Link href='/admin/destinasi/add-destinasi'>Add Destination</Link>
            </div>
            <div>
                {destinations.length ? (
                    destinations.map((item) => <DestinationCard key={item._id} item={item} handleDelete={handleDelete} />)
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
