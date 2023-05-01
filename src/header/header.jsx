import React, { useState } from 'react'
import { Avatar, Dropdown } from 'flowbite-react'
import ListHeader from '../components/listHeader'
export default function Header() {
    const [showMenu,setShowMenu]=useState(false)
    const toggleMenu=()=>{
        setShowMenu(prev=>!prev)
    }
    return (
        <>
            <div className='flex justify-around py-2 md:hidden'>
                <img src="./img/logo.svg" alt="" />
                <div className='flex gap-2'>
                    <Dropdown inline={true} label={<Avatar rounded={true} />} placement='auto'>
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                bonnie@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Logout
                        </Dropdown.Item>
                    </Dropdown>
                    <img src="./img/Line.svg" alt="" onClick={toggleMenu} />
                </div>
            </div>
            <ListHeader className={`duration-300 absolute top-0 ${showMenu?"translate-x-0":"-translate-x-full"}`} />
        </>
    )
}
