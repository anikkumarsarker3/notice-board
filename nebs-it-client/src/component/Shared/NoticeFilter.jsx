import React from 'react';

const NoticeFilter = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-3 mb-10">
            <h3 className='font-semibold'>Filter by: </h3>
            <input type="text" placeholder="Departments or individuals" className="border p-2 rounded flex-1" />
            <input type="text" placeholder="Employee Id or Name" className="border p-2 rounded flex-1" />
            <select className="border p-2 rounded">
                <option>Status</option>
            </select>
            <input type="date" className="border p-2 rounded" />
            <button className="text-blue-500">Reset Filters</button>
        </div>
    );
};

export default NoticeFilter;