import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AttatchUpload from "./AttatchUpload";
import SuccessModal from "../Shared/SuccessModal";
import { LiaLessThanSolid } from "react-icons/lia";
import axios from "axios";
import UploadImage from "./UploadImage";

const NoticeForm = () => {
    const [open, setOpen] = useState(false);
    const [photo, setPhoto] = useState(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();
    const titleValue = watch("title");
    const handlePublish = async (data) => {
        if (photo) {
            const PhotoURL = await UploadImage(photo)
            data.PhotoURL = PhotoURL;
        }
        data.status = 'published';
        await axios.post('http://localhost:3000/notices', data);
        setOpen(true);
        console.log("Form Data:", data);
    };
    const handleDraft = async (data) => {
        if (photo) {
            const PhotoURL = await UploadImage(photo)
            data.PhotoURL = PhotoURL;
        }
        data.status = 'draft'
        await axios.post('http://localhost:3000/notices', data);
        setOpen(true);
        console.log("Form Data:", data);
    };

    // const onSubmit = (data) => {
    //     // You can call your API here to submit the notice
    // };
    return (
        <div className="max-w-5xl mx-auto  p-1 mb-5 ">
            <h2 className="text-2xl font-semibold flex items-center gap-3 mb-5">
                <div className="p-2 border font-normal rounded-xl">
                    <LiaLessThanSolid />
                </div>
                <span>Create a Notice</span>
            </h2>
            <div className="rounded-lg bg-gray-200 border border-gray-400">
                <p className="p-3 border-b rounded-t-lg border-gray-400">Please fill in the details below</p>
                <form onSubmit={handleSubmit((data, event) => {
                    const action = event.nativeEvent.submitter.name;

                    if (action === "published") {
                        handlePublish(data);
                    }

                    if (action === "draft") {
                        handleDraft(data);
                    }
                })}

                    className="space-y-4 bg-white shadow p-6 rounded-b-lg">
                    {/* Target Department or Individual */}
                    <div className="bg-gray-100 p-5 rounded-lg">
                        <label className="block mb-1"><span className="text-red-600"><sup>*</sup></span>Target Department(s) or Individual</label>
                        <select
                            {...register("target", { required: true })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        >
                            <option value="">Select</option>
                            <option value="individual">Individual</option>
                            <option value="department">Department</option>
                        </select>
                        {errors.target && <p className="text-red-500 text-sm mt-1">This field is required</p>}
                    </div>
                    {/* Notice Title */}
                    <div>
                        <label className="block mb-1"><span className="text-red-600"><sup>*</sup></span>Notice Title</label>
                        <input
                            type="text"
                            {...register("title", { required: true })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Write the Title of Notice"
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">This field is required</p>}
                    </div>

                    {/* Employee Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block mb-1"><span className="text-red-600"><sup>*</sup></span>Select Employee ID</label>
                            <select
                                {...register("employeeId", { required: true })}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            >
                                <option value="">Select</option>
                                <option value="E001">E001</option>
                                <option value="E002">E002</option>
                            </select>
                            {errors.employeeId && <p className="text-red-500 text-sm mt-1">This field is required</p>}
                        </div>

                        <div>
                            <label className="block mb-1"><span className="text-red-600"><sup>*</sup></span>Employee Name</label>
                            <input
                                type="text"
                                {...register("employeeName", { required: true })}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Enter employee full name"
                            />
                            {errors.employeeName && <p className="text-red-500 text-sm mt-1">This field is required</p>}
                        </div>

                        <div>
                            <label className="block mb-1"><span className="text-red-600"><sup>*</sup></span>Position</label>
                            <input
                                type="text"
                                {...register("position", { required: true })}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Select employee department"
                            />
                            {errors.position && <p className="text-red-500 text-sm mt-1">This field is required</p>}
                        </div>
                    </div>

                    {/* Notice Type and Publish Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1"><span className="text-red-600"><sup>*</sup></span>Notice Type</label>
                            <select
                                {...register("noticeType", { required: true })}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            >
                                <option value="">Select Notice Type</option>
                                <option value="general">General</option>
                                <option value="urgent">Urgent</option>
                            </select>
                            {errors.noticeType && <p className="text-red-500 text-sm mt-1">This field is required</p>}
                        </div>

                        <div>
                            <label className="block mb-1"><span className="text-red-600"><sup>*</sup></span>Publish Date</label>
                            <input
                                type="date"
                                {...register("publishDate", { required: true })}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            {errors.publishDate && <p className="text-red-500 text-sm mt-1">This field is required</p>}
                        </div>
                    </div>

                    {/* Notice Body */}
                    <div>
                        <label className="block mb-1">Notice Body</label>
                        <textarea
                            {...register("body")}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Write the details about notice"
                            rows="4"
                        />
                    </div>

                    {/* File Upload */}
                    <div className="w-full">
                        <AttatchUpload setPhoto={setPhoto} />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            type="button"
                            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            name="draft"
                            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                        >
                            Save as Draft
                        </button>
                        <button
                            type="submit"
                            name="published"
                            className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
                        >
                            Publish Notice
                        </button>
                    </div>
                </form>
                <SuccessModal
                    open={open}
                    onClose={() => setOpen(false)}
                    noticeTitle={titleValue}
                />
            </div>
        </div>
    );
};

export default NoticeForm;
