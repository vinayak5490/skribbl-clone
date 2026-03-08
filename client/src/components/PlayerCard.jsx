import React from 'react'
import { useState } from 'react'
import AvatarSelector from './AvatarSelector.jsx';
import { useNavigate } from 'react-router-dom';

const PlayerCard = () => {
    const [name, setName] = useState("");

    const navigate = useNavigate();
  return (
    <div className='bg-blue-900 p-6 rounded-lg w-[380px] shadow-2xl border border-blue-700'>
        <div className='flex gap-2'>
            <input
            type='text'
            placeholder='Enter your name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className='flex-1 px-3 py-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400'
            />

            <select className='px-2 py-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400'>
                <option>English</option>
                <option value="">spanish</option>
                <option value="">German</option>
            </select>
        </div>

        <AvatarSelector/>

        <button className='bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 w-full mt-6 py-3 text-xl font-semibold rounded-lg shadow'>
            Play!
        </button>

        <button className='bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all duration-200 w-full mt-3 py-2 rounded-lg shadow'
        onClick={()=>navigate("/private-room")}>
            Create Private Room
        </button>
    </div>
  )
}

export default PlayerCard