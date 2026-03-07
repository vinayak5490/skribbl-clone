import React from 'react'
import Header from "../components/Header.jsx";
import PlayerCard from "../components/PlayerCard.jsx";
import InfoSection from "../components/InfoSection.jsx"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col items-center">
        <Header/>

        <div className='mt-10'>
            <PlayerCard/>
        </div>

        <div className='mt-16 w-full'>
            <InfoSection/>
        </div>
    </div>
  )
}

export default Home