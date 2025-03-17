"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const options = [
  {
    name: 'Realistic',
    image: '/real.jpg'
  },
  {
    name: 'Anime',
    image: '/anime.jpg'
  },
  {
    name: 'Cartoon',
    image: '/cartoon.jpg'
  },
  {
    name: 'Comic',
    image: '/comic.jpg'
  },
  {
    name: 'GTA',
    image: '/gta.jpg'
  },
  {
    name: 'roblox',
    image: '/roblox.jpg'
  },
]
function VideoStyle({onHandleForm}) {
  const [selectImage, setSelectedImage] = useState(null);
  return (
    <div className='mt-5'>
      <h2>Video Style</h2>
      <p className='text-sm text-gray-400 mb-1'>Select Video Style</p>
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2'>
        {options?.map((item, index) => {
          return ( <div key={index} onClick={() => {setSelectedImage(item.name)
            onHandleForm('ImageStyle', item.name)
          }} className={`flex gap-4 `}>
            <Image src={item.image} alt={item.name} className={`object-cover h-[70px] ${item.name==selectImage ? 'border': ''} lg:h-[90px] xl:h-[140px] p-1 hover:border border-gray-300 rounded-lg`} height={20} width={150}/>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default VideoStyle