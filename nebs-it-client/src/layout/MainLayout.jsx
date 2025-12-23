import { Outlet } from 'react-router'
import Sidebar from '../component/Sidebar/Sidebar'
import NoticeManage from '../component/Dashboard/NoticeManage'
import Header from '../component/Shared/Header'


const MainLayout = () => {
    return (
        <div className='relative md:flex bg-white'>
            <div className=''>
                <Sidebar />
            </div>
            <div className='flex-1 bg-[#f5f6fa] md:ml-64'>
                <Header />
                <div className=''>
                    <Outlet />
                    {/* <NoticeManage /> */}
                </div>
            </div>
        </div>
    )
}

export default MainLayout
