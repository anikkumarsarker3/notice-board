import React, { useState } from 'react';
import StatusPopup from './StatusPopup';
import { FiEye, FiEdit, FiMoreVertical } from "react-icons/fi";

const NoticeTable = ({ notice }) => {
    const [openId, setOpenId] = useState(null);
    const handleToggleStatus = (id, currentStatus) => {
        // 🔥 API call can go here
        console.log("Toggle status for:", id, currentStatus);

        setOpenId(null); // close popup after toggle
    };
    return (
        <tr className="bg-white">
            <th><input type="checkbox" /></th>
            <td>{notice.title}</td>
            <td>{notice.noticeType}</td>
            <td>{notice.target}</td>
            <td>{notice.publishDate}</td>

            <td>
                <span
                    className={`px-2 py-1 rounded text-sm ${notice.status === "published"
                        ? "bg-green-100 text-green-700"
                        : notice.status === "unpublished"
                            ? "bg-gray-100 text-gray-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                >
                    {notice.status}
                </span>
            </td>

            <td>
                <div className="flex justify-center items-center gap-3 relative">
                    <FiEye className="cursor-pointer" />
                    <FiEdit className="cursor-pointer" />

                    <button
                        onClick={() =>
                            setOpenId(openId === notice._id ? null : notice._id)
                        }
                        className="p-2 rounded hover:bg-gray-100"
                    >
                        <FiMoreVertical />
                    </button>

                    <StatusPopup
                        open={openId === notice._id}
                        setOpen={setOpenId}
                        status={notice.status}
                        onToggle={() =>
                            handleToggleStatus(notice._id, notice.status)
                        }
                    />
                </div>
            </td>
        </tr>
    );
};

export default NoticeTable;