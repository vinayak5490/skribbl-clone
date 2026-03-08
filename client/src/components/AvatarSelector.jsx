import React from 'react'
import { useState } from 'react'

const AvatarSelector = () => {
    const avatars = [
        "😀","😎","🥳","😈","🤖","👽","🐵","🐶","🐸","🐱",
    "🦊","🐼","🐯","🐨","🐰","🐧","🐤","🐙","🐢","🦄"
    ];
    const [index, setIndex] = useState(0);

    const nextAvatar = () =>{
        setIndex((prev)=>(prev+1)%avatars.length);
    };

    const prevAvatar = () =>{
        setIndex((prev) => (prev-1+avatars.length)%avatars.length);
    };

    const randomAvatar = () =>{
        const random = Math.floor(Math.random() * avatars.length);
        setIndex(random);
    };

  return (
    <div className='flex flex-col items-center mt-6'>

        <div className='flex items-center gap-6'>
            <button
            onClick={prevAvatar}
            className="bg-blue-600 hover:bg-blue-500 active:scale-90 transition p-3 rounded-lg text-xl"
            >
                ◀
            </button>

            <div className='text-6xl'>
                {avatars[index]}
            </div>

            <button
            onClick={nextAvatar}
            className='bg-blue-600 hover:bg-blue-500 active:scale-90 transition p-3 rounded-lg text-xl'
            >
                ▶
            </button>

            <button
        onClick={randomAvatar}
        className="bg-blue-600 hover:bg-blue-500 active:scale-90 transition p-3 rounded-lg text-xl"
      >
        🎲
      </button>
        </div>

    </div>
  )
}

export default AvatarSelector