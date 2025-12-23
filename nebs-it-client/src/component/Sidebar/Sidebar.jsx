import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import logo from '/Logo.png'
// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import SideNav from './SideNav'


// User Menu


const Sidebar = () => {

    const [isActive, setActive] = useState(false)
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar, only visible till md breakpoint */}
            <div className=' bg-gray-100 text-gray-800 flex justify-between md:hidden shadow-2xl'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <img src={logo} alt='logo' width='100' height='100' />
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-white w-64 space-y-6 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out shadow-sm`}
            >
                <div className='flex flex-col h-full py-9 px-6 bg-[#ffffff]'>
                    {/* Top Content */}
                    <div>
                        {/* Logo */}
                        <div className='w-full hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto'>
                            <Link to='/'>
                                <img src={logo} alt='logo' width='100' height='100' />
                            </Link>
                        </div>
                    </div>

                    {/* Middle Content */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/*  Menu Items */}
                        <SideNav />


                    </div>







                    {/* Bottom Content */}
                    {/* <div>
                        <hr /> */}

                    {/* <MenuItem
                            icon={FcSettings}
                            label='Profile'
                            address='/dashboard/profile'
                        />
                        <button
                            onClick={logOut}
                            className='flex cursor-pointer w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                        >
                            <GrLogout className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Logout</span>
                        </button> */}
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Sidebar
