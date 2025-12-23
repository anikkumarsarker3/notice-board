import { Check } from "lucide-react";

const SuccessModal = ({ open, onClose, noticeTitle }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="relative w-full max-w-2xl rounded-xl bg-white p-8 shadow-lg animate-scaleIn">

                {/* Icon */}
                <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500">
                        <Check className="h-10 w-10 text-white" strokeWidth={3} />
                    </div>
                </div>

                {/* Content */}
                <div className="mt-6 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Notice Published Successfully
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Your notice <span className="font-medium">“{noticeTitle}”</span> has
                        been published and is now visible to all selected departments.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <button className="rounded-full border border-blue-500 px-6 py-2 text-blue-600 hover:bg-blue-50">
                        View Notice
                    </button>

                    <button className="rounded-full border border-orange-500 px-6 py-2 text-orange-600 hover:bg-orange-50 flex items-center gap-2">
                        <span className="text-lg">+</span> Create Another
                    </button>

                    <button
                        onClick={onClose}
                        className="rounded-full border border-gray-400 px-6 py-2 text-gray-700 hover:bg-gray-100"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
