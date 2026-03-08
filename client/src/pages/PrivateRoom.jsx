import React from "react";
import { useState } from "react";

const PrivateRoom = () => {
  const [players] = useState([{ name: "vinayak(You)", points: 0 }]);
  return (
    <div className="bg-blue-700 flex flex-col h-screen">
      {/* TOP BAR  */}
      <div className="bg-gray-200 h-14 flex items-center px-6 justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">skribbl.io</h1>
          <span>Round 1 of 3</span>
        </div>

        <div className="text-center font-semibold">WAITING</div>
        <div className="text-2xl">⚙️</div>
      </div>

      {/* MAIN  */}
      <div className="flex flex-1 p-4 gap-4">
        {/* PLAYERS  */}
        <div className="w-60 bg-gray-200 rounded">
          {players.map((p, i) => (
            <div key={i} className="flex justify-between p-3 border-b">
              <span>{p.name}</span>
              <span>{p.points} points</span>
            </div>
          ))}
        </div>

        {/* ROOM SETTINGS */}
        <div className="flex-1 bg-gray-700 text-white rounded p-6 flex flex-col overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <label htmlFor="">Players</label>
            <select name="" id="" className="text-black p-2 rounded">
              <option value="">8</option>
            </select>

            <label htmlFor="">Language</label>
            <select name="" id="" className="text-black p-2 rounded">
              <option value="">English</option>
            </select>

            <label htmlFor="">Drawtime</label>
            <select name="" id="" className="text-black p-2 rounded">
              <option value="">80</option>
            </select>

            <label htmlFor="">Rounds</label>
            <select name="" id="" className="text-black p-2 rounded">
              <option value="">3</option>
            </select>

            <label htmlFor="">Game Mode</label>
            <select name="" id="" className="text-black p-2 rounded">
              <option value="">Normal</option>
            </select>

            <label htmlFor="">Word Count</label>
            <select name="" id="" className="text-black p-2 rounded">
              <option value="">3</option>
            </select>

            <label htmlFor="">Hints</label>
            <select name="" id="" className="text-black p-2 rounded">
              <option value="">2</option>
            </select>
          </div>

          {/* CUSTOM WORDS */}
          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold">Custom words</h3>

              <label htmlFor="" className="flex items-center gap-2 text-sm">
                Use custom words only
                <input type="checkbox" />
              </label>
            </div>

            <textarea
              name=""
              id=""
              className="w-full h-24 p-3 text-black rounded"
              placeholder="Minimum of 10 words..."
            ></textarea>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-auto">
            <button className="flex-1 bg-green-500 py-3 rounded text-xl font-bold">
              Start!
            </button>

            <button className="w-60 bg-blue-500 py-3 rounded text-xl font-bold">
              Invite
            </button>
          </div>
        </div>

        {/* CHAT */}
        <div className="w-80 bg-gray-200 roundef flex flex-col">
          <div className="flex-1 p-3 text-sm">
            <p className="text-orange-500">vinayak is now the room owner!</p>
          </div>

          <input
            placeholder="Type your guess here..."
            className="p-2 border-t"
          />
        </div>
      </div>
    </div>
  );
};

export default PrivateRoom;
