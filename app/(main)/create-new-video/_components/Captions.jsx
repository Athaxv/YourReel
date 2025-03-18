import React, { useState } from 'react'

const options = [
    {
        name: 'Youtuber',
        style: 'text-yellow-400 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg'
    },
    {
        name: 'Supreme',
        style: 'text-white text-3xl font-bold italic drop-shadow-lg px-3 py-1 rounded-lg'
    },
    {
        name: 'Neon',
        style: 'text-green-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg'
    },
    {
        name: 'Fire',
        style: 'text-red-500 text-3xl font-extrabold uppercase px-3 py-1 rounded-lg'
    },
    {
        name: 'Glitch',
        style: 'text-pink-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)] px-3 py-1 rounded-lg'
    },
    {
        name: 'Futuristic',
        style: 'text-blue-500 text-3xl font-semibold uppercase tracking-wide drop-shadow-[4px_4px_0_rgba(0,0,0,0.2)] px-3 py-1 rounded-lg'
    },
]
function Captions({onHandleForm}) {
    const [selectCaptions, setSelectedCaptions] = useState()
  return (
    <div className='mt-5'>
        <h2>Caption Style</h2>
        <p className='text-sm text-gray-400 mb-2'>Selct your Caption Style</p>
        <div className='grid grid-cols-2 p-2 gap-2'>
            {options.map((cap, index) => (
                <div key={index} className={`border rounded-md ${selectCaptions==cap.name ? 'bg-secondary' : ''} hover:bg-secondary cursor-pointer`} onClick={() => {setSelectedCaptions(cap.name)
                onHandleForm("captions", cap)
                }}>
                    <h2 className={cap.style}>{cap.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Captions