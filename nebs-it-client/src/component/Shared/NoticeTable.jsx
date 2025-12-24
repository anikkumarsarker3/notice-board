import React, { useState } from "react";
import StatusPopup from "./StatusPopup";
import { FiEye, FiEdit, FiMoreVertical } from "react-icons/fi";
import axios from "axios";
import ImageModal from "./ImageModal";

const NoticeTable = ({ notice, refetch }) => {
    const [openId, setOpenId] = useState(null);
    const [open, setOpen] = useState(false);

    const handleToggleStatus = async (id, currentStatus) => {
        console.log("Toggle status for:", id, currentStatus);
        const newStatus =
            currentStatus === "published" ? "unpublished" : "published";
        try {
            await axios.patch(`https://nebs-it-server.vercel.app/notices/${id}`, {
                status: newStatus,
            });

            console.log("Status updated:", id, newStatus);
            setOpenId(null); // popup close
        } catch (error) {
            console.error("Failed to update status", error);
        }

        refetch();
        setOpenId(null);
    };

    return (
        <tr className="bg-white">
            <th>
                <input type="checkbox" />
            </th>

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
                    <button
                        onClick={() => setOpen(true)}
                    // className="absolute top-5 right-5 text-white text-3xl"
                    >
                        {/* <FiX /> */}
                        <FiEye className="cursor-pointer" />
                    </button>
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
                        NoticeId={notice._id}
                        onToggle={() => handleToggleStatus(notice._id, notice.status)}
                    />
                    <ImageModal
                        open={open}
                        setOpen={setOpen}
                        image={notice.PhotoURL}
                    />
                </div>
            </td>
        </tr>
    );
};

export default NoticeTable;
