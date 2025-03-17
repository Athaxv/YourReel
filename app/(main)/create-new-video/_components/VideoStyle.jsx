import Image from 'next/image'
import React from 'react'

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
function VideoStyle() {
  return (
    <div className='mt-5'>
      <h2>Video Style</h2>
      <p className='text-sm text-gray-400 mb-1'>Select Video Style</p>
      <div>
        {options.map((item, index) => {
          <div>
            <Image src={item.image} alt={item.name} />
          </div>
        })}
      </div>
    </div>
  )
}

export default VideoStyle