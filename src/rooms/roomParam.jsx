import React from 'react'
import axios from 'axios'
import { data } from 'autoprefixer/lib/autoprefixer';
import { useState } from 'react';
import { useEffect } from 'react';
   
export default function RoomParam() {
    const [sp,setSp]=useState([])
     const fetchspecialist = async () => {

        await axios.get("https://simpleapi-p29y.onrender.com/specialist",  {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(res => {
            console.log(res.data)
            setSp((e)=> res.data)

        }).catch(err => {
            console.log(err);
        })
        
    }
    useEffect(()=> {
        fetchspecialist()
    },[])
    return (
        <div className='flex flex-col items-center pt-4 bg-white w-11/12 mt-2 mb-10 rounded-3xl'>
            <p className='text-3xl font-bold mb-5'>Create a New Room</p>
            <div className='w-full flex flex-col md:flex-row justify-around items-center gap-2'>
                <div className='relative rounded-full bg-secondary'>
                    <img src="./img/Vector.svg" className='absolute right-3 top-1/2 -translate-y-1/2' alt="" />
                    <input type="text" className='border-none focus:ring-0 bg-transparent py-3 placeholder:text-center placeholder:text-xl' placeholder='Moudile' />
                </div>
                <div className='relative rounded-full bg-secondary'>
                    <select name="speaciality" id="speaciality" className='border-none focus:ring-0 bg-transparent py-3 placeholder:text-center placeholder:text-xl'>
                    {sp && sp.map((e ,i)=> {
                            return (<option value={e.specialist}>{e.specialist}</option>)
                    })}
                    </select>
                </div>
                <div className='relative rounded-full bg-secondary'>
                   
                    <select name="level" id="level" className='border-none focus:ring-0 bg-transparent py-3 placeholder:text-center placeholder:text-xl'>
                        <option value="1 liesceance">1 liesceance</option>
                        <option value="2 liesceance">2 liesceance</option>
                        <option value="3 liesceance">3 liesceance</option>
                        <option value="1 master">1 master</option>
                        <option value="2 master">2 master</option>
                    </select>
                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-between items-center '>
                <button className='bg-orange-400 text-white  px-4 rounded-lg md:rounded-bl-3xl md:rounded-br-none md:rounded-tr-none  py-3  mt-5 w-4/5 md:w-1/2'>Create with qrcode</button>
                <button className='bg-blue-400 text-white  px-4 rounded-lg  md:rounded-br-3xl md:rounded-bl-none md:rounded-tl-none py-3 mt-5 w-4/5 md:w-1/2'>Create with code</button>
            </div>
   
        </div>
    )
}
