import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";



const now = new Date();

const hours = now.getHours();

let greeting = "Good Evening";
if (hours < 12) greeting = "Good Morning";
else if (hours < 18) greeting = "Good Afternoon";

const formattedDate = now.toLocaleDateString("en-GD", {
    month: "long",
    day: "2-digit",
    year: "numeric",
});

const Header = () => {
    return (
        <div className="bg-[#ffffff] py-4 px-2 md:px-10 flex justify-between items-center mb-6 ">
            <div>
                <h2 className="text-lg font-semibold">{greeting} Anik</h2>
                <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
            <div className="flex items-center space-x-3">
                <div className='sm:border-r pr-3 border-gray-400 relative '>
                    <IoNotificationsOutline className='text-2xl font-semibold text-gray-500' />
                    <GoDotFill className='text-red-500 text-sm absolute top-0 right-3' />
                </div>
                <div className='sm:flex flex-col hidden '>
                    <span className="font-medium">Anik Kumar</span>
                    <span className="text-gray-400 text-right">Hr</span>
                </div>
                <img src='/mypp.png' alt="Anik" className="rounded-full w-10" />
            </div>
        </div>
    );
};

export default Header;