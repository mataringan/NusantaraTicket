import { formatTime } from "@/utils/formatDateTime";
import React from "react";

const DestinationInfo = ({ data }) => {
    const { name, description, address, openingTime, closingTime, image, status, ticketPrice, quota } = data;

    return (
        <div className='flex flex-col items-center justify-center rounded-lg bg-white p-8'>
            {image && <img src={image} alt={name} className='mb-4 h-auto max-w-full rounded-lg' />}
            {name && <h2 className='mb-2 text-2xl font-bold'>{name}</h2>}
            {address && <p className='mb-2 text-gray-600'>{address}</p>}
            {description && <p className='mb-4 text-gray-800'>{description}</p>}
            {status && <p className='text-gray-700'>Status: {status}</p>}
            {ticketPrice && <p className='text-gray-700'>Ticket Price: {ticketPrice}</p>}
            {quota && <p className='text-gray-700'>Quota: {quota}</p>}
            {openingTime && <p className='text-gray-700'>Opening Time: {formatTime(openingTime)}</p>}
            {closingTime && <p className='text-gray-700'>Closing Time: {formatTime(closingTime)}</p>}
        </div>
    );
};

export default DestinationInfo;
