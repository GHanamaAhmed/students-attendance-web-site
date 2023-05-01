import React from 'react'
import { Sidebar } from 'flowbite-react'
import { HiChartPie, HiInbox, HiUser, HiLogout } from 'react-icons/hi'
import { Link } from 'react-router-dom'
export default function ListHeader({ className }) {
    return (
        <div className={`md:w-full w-fit ${className} bg-gray-50 h-full shadow-md z-50`}>
            <>
                <aside
                    id="separator-sidebar"
                    className="fixed top-0 bg-gray-50 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                    aria-label="Sidebar"
                >
                    <div className="h-full w-full px-3 py-4 overflow-y-auto flex flex-col justify-between bg-gray-50 dark:bg-gray-800">

                        <ul className="space-y-2 font-medium">
                            <div className='p-2'>
                                <img src="./img/logo.svg" alt="" width={130} />
                            </div>
                            <li>
                                <Link
                                to={"/dashboard"}
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                    </svg>
                                    <span className="ml-3">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/rooms"}
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Rooms</span>
                                </Link>
                            </li>

                        </ul>
                        <ul className="py-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="gem"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                                        />
                                    </svg>
                                    <span className="ml-4">Upgrade to Pro</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-3">Documentation</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </aside>

            </>

            {/* <Sidebar aria-label="Sidebar with multi-level dropdown example" className='h-full w-full p-0'>
                <Sidebar.Items className='h-full flex flex-col justify-between'>
                    <div className='flex flex-col gap'>
                        <div className='p-2'>
                            <img src="./img/logo.svg" alt="" width={130} />
                        </div>
                        <Sidebar.ItemGroup className='border-none'>
                            <Sidebar.Item
                                icon={HiChartPie}
                            >
                                <Link to='/Dashboard'>Dashboard</Link>
                            </Sidebar.Item>
                            <Sidebar.Item
                                icon={HiInbox}
                            >
                                <Link to='/Rooms'>Rooms</Link>
                            </Sidebar.Item>
                            <Sidebar.Item
                                icon={HiUser}
                            
                            >
                               <Link to='/CreateRoom'>Create Room</Link>
                            </Sidebar.Item>

                        </Sidebar.ItemGroup>
                    </div>
                    <Sidebar.ItemGroup className=''>
                        <Sidebar.Item
                            icon={HiInbox}
                        >
                          <Link to='/Settings'>Settings</Link>
                        </Sidebar.Item>
                        <Sidebar.Item
                            icon={HiLogout}
                        >
                            <Link to='/Logout'>Logout</Link>
                        </Sidebar.Item>

                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar> */}
        </div>
    )
}
