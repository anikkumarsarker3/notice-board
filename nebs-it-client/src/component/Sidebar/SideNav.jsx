import React from 'react';
import { NavLink } from 'react-router';
import {
    LayoutGrid,
    Users,
    Wallet,
    FileText,
    CalendarCheck,
    MessageSquare,
    Briefcase,
    File,
    Bell,
    Activity,
    LogOut,
    ChevronDown
} from "lucide-react";

const SideNav = () => {
    return (
        <nav className='flex flex-col gap-5 bg-cover'>
            <NavLink to="/dashboard" className={({ isActive }) =>
                `text-base flex items-center gap-3 rounded
     ${isActive ? "bg-gray-300 font-medium border-r-3 px-3 py-2 border-[#ffa307]" : "hover:bg-gray-100 hover:px-3 hover:py-2 duration-700"}`}>
                <LayoutGrid size={16} /> Dashboard
            </NavLink>
            <NavLink to="/employee" className={({ isActive }) =>
                `text-base flex items-center gap-3 rounded
     ${isActive ? "bg-gray-300 font-medium border-r-3 px-3 py-2 border-[#ffa307]" : "hover:bg-gray-100 hover:px-3 hover:py-2 duration-700"}`}>
                <Users size={16} /> Employee
            </NavLink>

            <NavLink to="/payroll" className={({ isActive }) =>
                `text-base flex items-center gap-3 rounded
     ${isActive ? "bg-gray-300 font-medium border-r-3 px-3 py-2 border-[#ffa307]" : "hover:bg-gray-100 hover:px-3 hover:py-2 duration-700"}`}>
                <Wallet size={16} /> Payroll
            </NavLink>
            <NavLink to="/pay-ship" className={({ isActive }) =>
                `text-base flex items-center gap-3 rounded
     ${isActive ? "bg-gray-300 font-medium border-r-3 px-3 py-2 border-[#ffa307]" : "hover:bg-gray-100 hover:px-3 hover:py-2 duration-700"}`}>
                <FileText size={16} /> Pay Slip
            </NavLink>
            <NavLink to="/attendance" className={({ isActive }) =>
                `text-base flex items-center gap-3 rounded
     ${isActive ? "bg-gray-300 font-medium border-r-3 px-3 py-2 border-[#ffa307]" : "hover:bg-gray-100 hover:px-3 hover:py-2 duration-700"}`}>
                <CalendarCheck size={16} /> Attendance
            </NavLink>
            <NavLink to="/request-center" className={({ isActive }) =>
                `text-base flex items-center gap-3 rounded
     ${isActive ? "bg-gray-300 font-medium border-r-3 px-3 py-2 border-[#ffa307]" : "hover:bg-gray-100 hover:px-3 hover:py-2 duration-700"}`}>
                <MessageSquare size={16} /> Request Center
            </NavLink>
            <NavLink to="/career-database" className={({ isActive }) =>
                `text-base flex items-center gap-3 rounded
     ${isActive ? "bg-gray-300 font-medium border-r-3 px-3 py-2 border-[#ffa307]" : "hover:bg-gray-100 hover:px-3 hover:py-2 duration-700"}`}>
                <Briefcase size={16} /> Career Database
            </NavLink>





            {/* <button

                className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
                <span className="flex items-center gap-3">
                    <Briefcase size={18} /> Career Database
                </span>
                <ChevronDown size={16} />
            </button>


            <div className="ml-8 space-y-1">
                <NavLink to="/career/applicants">
                    Applicants
                </NavLink>
                <NavLink to="/career/interviews" >
                    Interviews
                </NavLink>
            </div> */}

            <NavLink to="/documaent-manager" className={({ isActive }) =>
                `text-base flex items-center gap-3 rounded
     ${isActive ? "bg-gray-300 font-medium border-r-3 px-3 py-2 border-[#ffa307]" : "hover:bg-gray-100 hover:px-3 hover:py-2 duration-700"}`}>
                <File size={16} /> Document Manager
            </NavLink>
            <NavLink
                to="/notice-board"
                className={({ isActive }) =>
                    `text-base flex items-center gap-3 rounded
     ${isActive ? "bg-gray-300 font-medium border-r-3 px-3 py-2 border-[#ffa307]" : "hover:bg-gray-100 hover:px-3 hover:py-2 duration-700"}`}
            >
                <Bell size={16} />
                Notice Board
            </NavLink>
            <NavLink to="/activity-log" className={({ isActive }) =>
                `text-base flex items-center gap-3 rounded
     ${isActive ? "bg-gray-300 font-medium border-r-3 px-3 py-2 border-[#ffa307]" : "hover:bg-gray-100 hover:px-3 hover:py-2 duration-700"}`}>
                <Activity size={18} /> Activity Log
            </NavLink>
            <NavLink to="/exit-interview" className={({ isActive }) =>
                `text-base flex items-center gap-3 rounded
     ${isActive ? "bg-gray-300 font-medium border-r-3 px-3 py-2 border-[#ffa307]" : "hover:bg-gray-100 hover:px-3 hover:py-2 duration-700"}`}>
                <LogOut size={18} /> Exit Interview
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) =>
                `text-base flex items-center gap-3 rounded
     ${isActive ? "bg-gray-300 font-medium border-r-3 px-3 py-2 border-[#ffa307]" : "hover:bg-gray-100 hover:px-3 hover:py-2 duration-700"}`}>
                <Users size={18} /> Profile
            </NavLink>
        </nav>
    );
};

export default SideNav;