import { formatTime } from "@/utils/formatDateTime";
import Link from "next/link";

const DestinationCard = ({ item }) => {
    return (
        <div className='mx-auto my-5 max-w-md overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow'>
            <img className='h-48 w-full object-cover' src={item.image} alt={item.name} />
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{item.name}</h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{item.description}</p>
            <Link
                href={`/destinasi/${item._id}`}
                className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Read more
                <svg
                    className='ms-2 h-3.5 w-3.5 rtl:rotate-180'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'>
                    <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' d='M1 5h12m0 0L9 1m4 4L9 9' />
                </svg>
            </Link>
        </div>
    );
};

export default DestinationCard;
