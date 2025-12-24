import React from 'react';
import { MdEditNote } from "react-icons/md";
import { Link } from 'react-router';

const NoticeDemo = ({ notices }) => {
    const NoticePub = notices.filter(notice => notice.status === 'published')
    const NoticeDraft = notices.filter(notice => notice.status === 'draft')
    return (
        <div className="flex justify-between items-center mb-10">
            <div >
                <h3 className="text-lg font-semibold">Notice Management</h3>
                <div className='flex justify-center items-center gap-5 my-2'>
                    <h3 className='text-[#00a46e]'>Active Notices: {NoticePub.length} </h3>
                    <h3 className='text-gray-400'>|</h3>
                    <h3 className='text-[#ffa307]'>Draft Notice: {NoticeDraft.length}</h3>
                </div>
            </div>
            <div className="flex space-x-2">
                <Link to='/create-form' className="bg-orange-500 text-white px-4 py-1 rounded">+ Create Notice</Link>
                <button className="border flex items-center gap-1 border-orange-500 text-orange-500 px-4 py-1 rounded"><MdEditNote size={22} /> <span>All Draft Notice</span></button>
            </div>
        </div>
    );
};

export default NoticeDemo;