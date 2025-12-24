import { FiX } from "react-icons/fi";

const ImageModal = ({ open, setOpen, image }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
            {/* Close Button */}
            <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 text-white text-3xl"
            >
                <FiX />
            </button>

            {/* Image */}
            <img
                src={image}
                alt="Preview"
                className="max-w-full max-h-full object-contain"
            />
        </div>
    );
};

export default ImageModal;
