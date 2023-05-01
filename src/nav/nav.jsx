import React, { memo, useRef, useState } from 'react'
import { Dropdown, Avatar } from 'flowbite-react'
import {setAcount} from "../redux/accountReducer"
import { useDispatch,useSelector } from 'react-redux'
export default memo( function Nav() {
    const [typeShearch, setTypeShearch] = useState('Module')
    const shearch=useRef()
    const dispath=useDispatch()
    const account=useSelector(state=>state.account)
    return (
        <div className='flex justify-around items-center py-2 w-full md:bg-secondary'>
            <div className='flex gap-2'>
                <div className='flex items-center justify-between py-0 bg-white rounded-lg ps-5'>
                    <Dropdown label={typeShearch} inline={true}>
                        <Dropdown.Item onClick={() => setTypeShearch("Module")}>
                            Module
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setTypeShearch("Code")}>
                            Code
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setTypeShearch("Type")}>
                            Type
                        </Dropdown.Item>
                    </Dropdown>
                    <input type="text" placeholder='shearch' ref={shearch} className='w-1/2 border-none placeholder:opacity-50 bg-transparent focus:ring-0 py-2' />
                    <button className='bg-orange-400 h-12 text-white py-2 px-4 rounded-lg'>Shearch</button>
                </div>
            </div>
            <div className='flex gap-2 hidden md:block'>
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
            </div>
        </div>
    )
}
)