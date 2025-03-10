import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-4 flex items-center justify-between'>
    <div className='items-center flex gap-3'>
        <Image src={'/newlogo.svg'} alt='logo' height={30} width={30}/>
        <h2 className='text-2xl font-bold'>YourReel</h2>
    </div>
    <div>
        <Button>Get started</Button>
    </div>
    </div>
  )
}

export default Header