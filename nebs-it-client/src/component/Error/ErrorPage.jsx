import React from 'react';
import ErrorP from '../../assets/error-404.png'
import { Link } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Shared/Header';

const ErrorPage = () => {
    return (
        <div className='relative md:flex bg-white'>
            <div className=''>
                <Sidebar />
            </div>
            <div className='flex-1 bg-[#f5f6fa] md:ml-64'>
                <Header />
                <div className=''>
                    <div className='my-10'>
                        <img src={ErrorP} alt="" className='mx-auto' />
                        <div className='p-5'>
                            <p className='text-center text-lg font-medium'>404, Page Not found</p>
                            <h3 className='text-center text-xl font-bold'>My assessment Page <Link to='/notice-board' className='underline text-blue-500'>Notice Board</Link></h3>
                        </div>
                    </div>
                    {/* <NoticeManage /> */}
                </div>
            </div>
        </div>



    );
};

export default ErrorPage;