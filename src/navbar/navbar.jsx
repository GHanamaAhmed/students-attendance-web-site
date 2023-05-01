import React from 'react'
import { Avatar, Dropdown } from 'flowbite-react'
export default function Navbar() {
    return (
        <div className='flex justify-around py-2 w-full'>
            <img src="./img/logo.svg" alt="" />
            <div className='flex gap-2'>
            <Dropdown inline={true} label={<Avatar img={""} rounded={true}/>} placement='auto'>
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
            <img src="./img/Line.svg" alt="" />
            </div>
        </div>
    )
}
