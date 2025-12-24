import axios from "axios";
import { useState, useRef, useEffect } from "react";

const StatusPopup = ({ open, setOpen, status, NoticeId, onToggle }) => {
    const [published, setPublished] = useState(status === "published");
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open, setOpen]);

    if (!open) return null;

    const handleStatusToggle = () => {
        const newStatus = !published;
        setPublished(newStatus);

        // 🔥 Call parent function
        if (onToggle) {
            onToggle(); // this will trigger handleToggleStatus in parent
        }
    };

    return (
        <div
            ref={popupRef}
            className="absolute right-0 top-8 w-44 bg-white border rounded-lg shadow-lg z-50"
        >
            <div className="flex items-center justify-between px-4 py-2">
                <span
                    className={`text-sm font-medium ${published ? "text-green-600" : "text-gray-600"
                        }`}
                >
                    {published ? "Published" : "Unpublished"}
                </span>

                {/* Toggle */}
                <button
                    onClick={handleStatusToggle}
                    className={`w-10 h-5 flex items-center rounded-full p-1 transition ${published ? "bg-green-500" : "bg-gray-400"
                        }`}
                >
                    <div
                        className={`w-4 h-4 bg-white rounded-full shadow transform transition ${published ? "translate-x-5" : ""
                            }`}
                    />
                </button>
            </div>
        </div>
    );
};

export default StatusPopup;
