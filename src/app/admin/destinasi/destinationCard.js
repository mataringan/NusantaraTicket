import { formatTime } from "@/utils/formatDateTime";
import Link from "next/link";

const DestinationCard = ({ item, handleDelete }) => {
    return (
        <div className='mx-auto my-10 max-w-md overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:shadow-lg'>
            <img className='h-48 w-full object-cover' src={item.image} alt={item.name} />
            <div className='p-6'>
                <h2 className='mb-2 text-xl font-bold'>{item.name}</h2>
                <p className='mb-4 text-gray-600'>{item.address}</p>
                <p className='text-base text-gray-700'>{item.description}</p>
                <div className='mt-4 flex items-center justify-between'>
                    <p className='text-gray-600'>Quota: {item.quota}</p>
                    <p className={`text-${item.status === "buka" ? "green" : "red"}-600`}>{item.status}</p>
                </div>
                <p className='text-gray-600'>Price: {item.ticketPrice}</p>
                <div className='flex justify-between'>
                    <p className='text-gray-600'>Opening Time: {item.openingTime}</p>
                    <p className='text-gray-600'>Closing Time: {item.closingTime}</p>
                </div>
            </div>
            <Link href={`/admin/destinasi/${item._id}`} className='mx-10 my-5 bg-green-500'>
                Update
            </Link>
            <button
                onClick={() => {
                    handleDelete(item._id);
                }}>
                Delete
            </button>
        </div>
    );
};

export default DestinationCard;
