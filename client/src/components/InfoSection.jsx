import React from 'react'

const InfoSection = () => {
  return (
    <div className='flex justify-center gap-8 px-10'>

        <div className='bg-blue-900 p-6 rounded-lg w-[260px] hover:scale-105 transition'>
            <h2 className='text-xl fond-bold mb-2'>About</h2>
            <p>skribbl.io is a free online multiplayer drawing and guessing game.</p>
        </div>

        <div className='bg-blue-900 p-6 rounded-lg w-[260px] hover:scale-105 transition'>
            <h2 className='text-xl font-bold mb-2'>News</h2>
            <p>Fresh paint update and redesign</p>
        </div>

        <div className='bg-blue-900 p-6 rounded-lg w-[260px] hover:scale-105 transition'>
            <h2 className='text-xl font-bold mb-2'>How to Play</h2>
            <p>Draw the word and let other players guess it.</p>
        </div>

    </div>
  )
}

export default InfoSection