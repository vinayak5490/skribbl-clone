import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col items-center mt-10'>
        <h1 className='text-7xl font-extrabold tracking-wide'>
            skribbl<span className='text-yellow-300'>.io</span>
        </h1>

        <div className='flex gap-2 mt-4'>
            <div className='w-8 h-8 bg-red-500 rounded-full'></div>
            <div className='w-8 h-8 bg-orange-500 rounded-full'></div>
            <div className='w-8 h-8 bg-yellow-500 rounded-full'></div>
            <div className='w-8 h-8 bg-green-500 rounded-full'></div>
            <div className='w-8 h-8 bg-blue-500 rounded-full'></div>
            <div className='w-8 h-8 bg-purple-500 rounded-full'></div>
        </div>
    </div>
  )
}

export default Header