import React from 'react'

export default function RoomParam() {
    return (
        <div className='flex flex-col items-center pt-4 bg-white w-11/12 mt-2 rounded-3xl'>
            <p className='text-3xl font-bold mb-5'>Create a New Room</p>
            <div className='w-full flex flex-col md:flex-row justify-around items-center gap-2'>
                <div className='relative rounded-full bg-secondary'>
                    <img src="./img/Vector.svg" className='absolute right-3 top-1/2 -translate-y-1/2' alt="" />
                    <input type="text" className='border-none focus:ring-0 bg-transparent py-3 placeholder:text-center placeholder:text-xl' placeholder='Moudile' />
                </div>
                <div className='relative rounded-full bg-secondary'>
                    <img src="./img/Vector.svg" className='absolute right-3 top-1/2 -translate-y-1/2' alt="" />
                    <input type="text" className='border-none focus:ring-0 bg-transparent py-3 placeholder:text-center placeholder:text-xl' placeholder='Specialite' />
                </div>
                <div className='relative rounded-full bg-secondary'>
                    <img src="./img/Vector.svg" className='absolute right-3 top-1/2 -translate-y-1/2' alt="" />
                    <input type="text" className='border-none focus:ring-0 bg-transparent py-3 placeholder:text-center placeholder:text-xl' placeholder='Level' />
                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-between items-center '>
                <button className='bg-orange-400 text-white  px-4 rounded-lg md:rounded-bl-3xl md:rounded-br-none md:rounded-tr-none  py-3  mt-5 w-4/5 md:w-1/2'>Create with qrcode</button>
                <button className='bg-blue-400 text-white  px-4 rounded-lg  md:rounded-br-3xl md:rounded-bl-none md:rounded-tl-none py-3 mt-5 w-4/5 md:w-1/2'>Create with code</button>
            </div>
        </div>
    )
}
