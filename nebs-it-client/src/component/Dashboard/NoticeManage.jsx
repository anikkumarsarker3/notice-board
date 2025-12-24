import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import NoticeDemo from '../Shared/NoticeDemo';
import NoticeFilter from '../Shared/NoticeFilter';
import NoticeTable from '../Shared/NoticeTable';

const NoticeManage = () => {
    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Fetch All Notices
    const { data: notices = [], isLoading } = useQuery({
        queryKey: ['notices'],
        queryFn: async () => {
            const res = await axios.get('https://nebs-it-server.vercel.app/notices');
            return res.data;
        }
    });

    // Pagination Logic
    const totalPages = Math.ceil(notices.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNotices = notices.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    if (isLoading) {
        return (
            <p className="text-center my-10 text-gray-400 text-lg">
                Loading notices...
            </p>
        );
    }

    return (
        <div className="p-6 m-5 rounded">
            <NoticeDemo notices={notices} />
            <NoticeFilter />

            <div className="overflow-x-auto shadow rounded-2xl">
                <table className="table">
                    <thead>
                        <tr className="bg-gray-50">
                            <th><input type="checkbox" /></th>
                            <th>Title</th>
                            <th>Notice Type</th>
                            <th>Departments</th>
                            <th>Published On</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentNotices.map((notice) => (
                            <NoticeTable
                                key={notice._id}
                                notice={notice}
                            />
                        ))}
                    </tbody>
                </table>

                {notices.length === 0 && (
                    <h2 className="text-2xl text-center my-10 text-gray-400">
                        Notice Not Found
                    </h2>
                )}
            </div>

            {/* Pagination Controls */}
            {notices.length > itemsPerPage && (
                <div className="flex justify-center items-center gap-2 mt-6">
                    <button
                        className="btn btn-sm"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        Prev
                    </button>

                    {[...Array(totalPages).keys()].map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page + 1)}
                            className={`btn btn-sm ${currentPage === page + 1
                                ? 'btn-primary'
                                : 'btn-outline'
                                }`}
                        >
                            {page + 1}
                        </button>
                    ))}

                    <button
                        className="btn btn-sm"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default NoticeManage;
