import Image from 'next/image'
import React from 'react'
import { options } from './VideoStyle'

function Preview({formData}) {
    const selectVideoStyle = formData && options.find((item => item.name == formData?.ImageStyle))
  return (
    <div className='relative'>
        <Image src={selectVideoStyle?.image} alt="Preview" width={500} className='rounded-lg' height={600}/>
        <p className={`${formData?.captions?.style} absolute bottom-5 text-center w-full`}>{formData?.captions?.name}</p>
    </div> 
  )
}

export default Preview