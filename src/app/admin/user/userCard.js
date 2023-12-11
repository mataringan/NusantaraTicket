import React from "react";
import Link from "next/link";

export default function UserCard({ user, handleDelete }) {
    return (
        <div>
            <div className='container mx-auto mt-8'>
                <div className='grid grid-cols-2 gap-4'>
                    <div key={user._id} className='rounded bg-gray-200 p-4'>
                        <p className='font-semibold'>{user.name}</p>
                        <p className='text-gray-600'>{user.email}</p>
                        <p className='text-gray-600'>{user.phone}</p>
                        <p className='text-gray-600'>{user.role}</p>
                        <div className='flex justify-between'>
                            <Link href={`/admin/user/${user._id}`}>Edit</Link>
                            <button
                                onClick={() => {
                                    handleDelete(user._id);
                                }}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
