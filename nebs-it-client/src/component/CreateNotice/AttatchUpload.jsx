import { useRef, useState } from "react";
import { CloudUpload, X, Paperclip } from "lucide-react";

const AttatchUpload = ({ setPhoto }) => {
    const inputRef = useRef(null);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFile(e.target.files[0]);
            setPhoto(e.target.files[0])
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0]);
            setPhoto(e.dataTransfer.files[0])
        }
    };

    return (
        <div className="w-full">
            <h3 className="mb-2 text-sm font-medium text-gray-700">
                Upload Attachments (optional)
            </h3>

            {/* Upload Box */}
            <div
                onClick={() => inputRef.current.click()}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="cursor-pointer rounded-xl border-2 border-dashed border-emerald-400 bg-white p-8 text-center transition hover:bg-emerald-50"
            >
                <CloudUpload className="mx-auto mb-2 h-8 w-8 text-emerald-500" />
                <p className="text-sm text-emerald-600 font-medium">
                    Upload nominee profile image or drag and drop.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                    Accepted File Type: jpg, png, pdf
                </p>

                <input
                    ref={inputRef}
                    type="file"
                    accept="image/png, image/jpeg, application/pdf"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>

            {/* Uploaded File */}
            {file && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
                    <Paperclip className="h-4 w-4 text-gray-500" />
                    <span className="max-w-[200px] truncate">{file.name}</span>
                    <button
                        onClick={() => setFile(null)}
                        className="text-red-500 hover:text-red-700"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            )}
        </div>
    );
}

export default AttatchUpload;
