import { Button } from '@/components/ui/button'
import React from 'react'

function Hero() {
  return (
    <div className='p-10 mt-24 flex flex-col items-center justify-center md:px-20 lg:px-36 xl:px-48'>
        <h2 className='font-bold text-6xl text-center'>AI Short Video Generator</h2>
        <p className='mt-4 text-xl text-center text-gray-400'>AI generates scripts, images and voiceovers in seconds. ⚡Create, edit and publish engaging shorts with ease!</p>
        <div className='mt-7 flex gap-4'>
            <Button variant="secondary">Explore</Button>
            <Button>Get Started</Button>
        </div>
    </div>
  )
}

export default Hero