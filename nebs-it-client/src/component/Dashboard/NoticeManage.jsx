import React from 'react';

// import Header from '../Shared/Header';
import NoticeDemo from '../Shared/NoticeDemo';
import NoticeFilter from '../Shared/NoticeFilter';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import StatusPopup from '../Shared/StatusPopup';
import NoticeTable from '../Shared/NoticeTable';

const NoticeManage = () => {


    const { data: notices = [] } = useQuery({
        queryKey: ["notices"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/notices");
            return res.data;
        },
    });



    return (
        <div className="p-6 m-5 rounded">
            <NoticeDemo />
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
                        {notices.map((notice) => (
                            <NoticeTable key={notice._id} notice={notice}></NoticeTable>
                        ))}
                    </tbody>
                </table>

                {notices.length === 0 && (
                    <h2 className="text-2xl text-center my-10 text-gray-400">
                        Notice Not Found
                    </h2>
                )}
            </div>
        </div>
    );
};

export default NoticeManage;